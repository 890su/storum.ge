interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  TURNSTILE_SECRET?: string;
}

type FunctionContext = {
  request: Request;
  env: Env;
};

type LeadPayload = {
  name?: unknown;
  company?: unknown;
  contact?: unknown;
  product?: unknown;
  pallets?: unknown;
  comment?: unknown;
  locale?: unknown;
  estimate?: unknown;
  source?: unknown;
  page?: unknown;
  consent?: unknown;
  website?: unknown;
  "cf-turnstile-response"?: unknown;
};

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const clean = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, max) : "";

const escapeHtml = (value: string): string =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

async function verifyTurnstile(secret: string, token: string): Promise<boolean> {
  if (!token) return false;
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean; action?: string };
  return result.success === true && (!result.action || result.action === "lead");
}

export async function onRequestPost(context: FunctionContext): Promise<Response> {
  const { request, env } = context;
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (!contentType.includes("application/json")) return json({ ok: false }, 415);
  if (contentLength > 16_384) return json({ ok: false }, 413);

  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return json({ ok: false }, 400);
  }

  if (clean(payload.website, 80)) return json({ ok: true });

  const name = clean(payload.name, 80);
  const company = clean(payload.company, 120);
  const contact = clean(payload.contact, 120);
  const product = clean(payload.product, 160);
  const comment = clean(payload.comment, 1000);
  const locale = clean(payload.locale, 5).toUpperCase() || "KA";
  const estimate = clean(payload.estimate, 30);
  const source = clean(payload.source, 400);
  const page = clean(payload.page, 500);
  const pallets = Math.floor(Number(payload.pallets));
  const consent = payload.consent === "on" || payload.consent === true;

  if (!name || !contact || !product || !Number.isFinite(pallets) || pallets < 1 || pallets > 999 || !consent) {
    return json({ ok: false }, 400);
  }

  if (env.TURNSTILE_SECRET) {
    const token = clean(payload["cf-turnstile-response"], 4096);
    try {
      if (!(await verifyTurnstile(env.TURNSTILE_SECRET, token))) return json({ ok: false }, 403);
    } catch {
      return json({ ok: false }, 403);
    }
  }

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ ok: false, error: "service_not_configured" }, 503);
  }

  const requestId = crypto.randomUUID().slice(0, 8).toUpperCase();
  const lines = [
    `<b>New Storum lead [${escapeHtml(locale)}]</b>`,
    `ID: <code>${requestId}</code>`,
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    company ? `<b>Company:</b> ${escapeHtml(company)}` : "",
    `<b>Contact:</b> ${escapeHtml(contact)}`,
    `<b>Cargo:</b> ${escapeHtml(product)}`,
    `<b>Pallets:</b> ${pallets}`,
    estimate ? `<b>Estimate:</b> ${escapeHtml(estimate)} GEL` : "",
    comment ? `<b>Details:</b> ${escapeHtml(comment)}` : "",
    "",
    source ? `<b>Source:</b> ${escapeHtml(source)}` : "",
    page ? `<b>Page:</b> ${escapeHtml(page)}` : "",
    `<b>Time:</b> ${new Date().toISOString()}`,
  ].filter(Boolean);

  try {
    const telegram = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!telegram.ok) return json({ ok: false }, 502);
  } catch {
    return json({ ok: false }, 502);
  }

  return json({ ok: true, requestId });
}

export function onRequest(): Response {
  return json({ ok: false }, 405);
}
