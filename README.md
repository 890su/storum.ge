# Storum.ge landing MVP

Static three-language landing page for validating pallet-storage demand in Batumi.

## Local development

Use an active Node.js LTS release.

```bash
pnpm install
pnpm dev
```

Production check:

```bash
pnpm build
pnpm preview
```

### Landing routes

The warehouse cross-section is the main design at `/` (Georgian), `/en/` and `/ru/`.
The original design remains at `/design-1/`, `/en/design-1/` and `/ru/design-1/`.

Cross-section comparison routes:

- Georgian: `/design-4/`
- English: `/en/design-4/`
- Russian: `/ru/design-4/`

Design-numbered routes are excluded from indexing. The estimate on the main design is calculated in the browser; the Pages Function recalculates it from the submitted parameters. Astro's local preview does not run Pages Functions.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Pages Function route: `/api/lead`

Configure encrypted secrets in Cloudflare:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TURNSTILE_SECRET`

Configure `PUBLIC_TURNSTILE_SITE_KEY` as a build variable. The form can be visually tested without it, but production traffic should use Turnstile.

## Before advertising

1. Rotate and remove the plaintext password currently stored in `domain.md`.
2. Have a native Georgian editor review `src/content/site.ts` and, if using design 4, `src/content/ticket.ts`.
3. Confirm VAT, minimum invoice, accepted cargo, maximum pallet weight, access hours and liability terms.
4. Add the real warehouse address and contact channels.
5. Send a real production lead and verify Telegram delivery.
