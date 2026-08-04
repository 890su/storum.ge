# Storum implementation rules

- The default Georgian page is `/`; English is `/en/`; Russian is `/ru/`.
- Do not change prices without checking `Тарифы (1).docx` and `src/lib/pricing.ts`.
- Do not add unverified warehouse claims, customer logos, reviews, addresses or response-time promises.
- Keep the site statically generated. Do not add React or another client framework for static sections.
- Never commit `.env`, `.dev.vars`, Telegram tokens, Cloudflare secrets or registrar credentials.
- Keep all three locales complete when changing user-facing copy.
- Treat the Georgian copy as requiring native-speaker review before paid traffic.
- Run `npm run build` after code or content changes.
- Preserve mobile layouts down to 320 px and visible keyboard focus.
- Record every third-party image or font in `ASSET_LICENSES.md`.
