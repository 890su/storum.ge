# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are importers, distributors, online retailers, HoReCa suppliers, and local brands that need flexible storage for small, seasonal, growing, or recurring palletized shipments in Batumi and Adjara. A secondary audience is private customers with suitably packed palletized items.

## Product Purpose

Storum is a three-language landing site for validating demand for pallet storage and warehouse handling in Batumi. Success is a qualified request containing enough shipment information to confirm availability and provide an exact quote.

The current primary conversion is inferred from the implemented funnel as “request an exact quote.” A warehouse visit and direct messenger contact are secondary paths until the owner confirms otherwise.

## Positioning

Customers pay for occupied pallet spaces by the day and add only the warehouse operations they need, instead of committing to a full warehouse lease.

## Operating Context

Prospects evaluate the service using cargo type, pallet count, pallet dimensions and height, storage period, expected arrival date, and required receiving, dispatch, sorting, wrapping, consolidation, or box-picking operations. The decision is practical and risk-sensitive: visitors need clear pricing, cargo-fit rules, a simple process, and credible evidence about the facility.

## Capabilities and Constraints

- Georgian is the default locale at `/`; English is `/en/`; Russian is `/ru/`.
- The site is statically generated with Astro and deployed to Cloudflare Pages.
- The calculator provides an indicative total; final pricing is confirmed after cargo details are checked.
- Lead forms send structured requests through the Cloudflare Function at `/api/lead` to Telegram.
- Prices must remain consistent with `src/lib/pricing.ts` and the source tariff document.
- The site must remain usable down to 320 px and retain visible keyboard focus.
- Do not add unverified warehouse claims, addresses, availability, response times, accepted cargo terms, customer logos, reviews, or guarantees.

## Brand Commitments

- Brand name: Storum.
- Approved logo assets are stored in `public/assets/`.
- Communication is direct, concrete, and commercially transparent rather than aspirational or corporate.
- The landing must prioritize legal entities while keeping a clearly secondary path for private customers.

## Evidence on Hand

- Confirmed price constants: `src/lib/pricing.ts`.
- Implemented multilingual product copy: `src/content/site.ts`.
- Working calculator and structured lead form: `src/components/PalletCalculator.astro` and `src/components/LeadForm.astro`.
- No verified warehouse photography, customer logos, testimonials, exact address, or operational response-time promise is currently available; future design work must not fabricate them.
- Georgian copy requires native-speaker review before paid traffic.

## Product Principles

1. Make the unit economics understandable before asking for contact details.
2. Reduce the perceived commitment from “rent a warehouse” to “reserve the pallet spaces and operations you need.”
3. Qualify B2B leads with the fewest fields needed for an exact quote.
4. Use operational clarity and real evidence as the primary trust mechanism.
5. Keep private-customer messaging visible but subordinate to the business offer.

## Accessibility & Inclusion

All primary actions, forms, navigation, and language switching must work by keyboard, remain legible on small mobile screens, and preserve adequate text and control contrast.
