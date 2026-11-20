---
name: "Storum — Ticket (Design 4)"
description: "The optional receiving-ticket visual variant only; not the production Storum design system."
colors:
  primary: "#ff6c36"
  signal-hover: "#ff8a5d"
  dock: "#10273a"
  ink: "#102d46"
  muted-ink: "#465f71"
  paper: "#f7f3e8"
  input-paper: "#fffdf6"
  rule: "#8d9eaa"
  input-stroke: "#718696"
  focus: "#205bb3"
  dock-copy: "#d8e5ef"
typography:
  display:
    fontFamily: '"Roboto Condensed Variable", "Noto Sans Variable", sans-serif'
    fontWeight: 850
    lineHeight: 0.97
    letterSpacing: "-0.025em"
  display-ka:
    fontFamily: '"Noto Sans Georgian Variable", "Noto Sans Variable", sans-serif'
    fontWeight: 850
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Noto Sans Variable", sans-serif'
    fontSize: "1rem"
    lineHeight: 1.55
  body-ka:
    fontFamily: '"Noto Sans Georgian Variable", "Noto Sans Variable", sans-serif'
    fontSize: "1rem"
    lineHeight: 1.55
  language-label:
    fontFamily: 'Consolas, "Liberation Mono", monospace'
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  sheet: "3px"
  slot: "2px"
spacing:
  content-max: "1280px"
  touch-target: "44px"
components:
  quote-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "0.6rem 0.9rem"
    height: "52px"
  quote-button-hover:
    backgroundColor: "{colors.signal-hover}"
  quantity-input:
    backgroundColor: "{colors.input-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    height: "46px"
  language-link:
    typography: "{typography.language-label}"
    textColor: "{colors.ink}"
    height: "{spacing.touch-target}"
  receiving-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
  highlighted-pallet-place:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.slot}"
---

# Design System: Storum — Ticket (Design 4)

## Overview

**Creative North Star: "Warehouse Receiving Ticket"**

This document applies only to the optional, non-indexable Ticket variant at `/design-4/`, `/en/design-4/`, and `/ru/design-4/`. It does not describe or replace the design for the production routes or other variants. Implementation: `@src/components/ConceptTicket.astro` and `@src/styles/ticket.css`.

An ivory receiving sheet sits on a dock-navy background. Printed rules connect the unit rate, shipment inputs and estimate. The slot drawing explains one pallet-place as a billing unit; it is not an inventory or facility view.

**Key Characteristics:**

- Ruled ivory paper over a dark dock.
- Tabular prices and quantities.
- One highlighted pallet-place and a clear quote action.

## Colors

Safety orange marks the example pallet-place and primary quote actions. Blue-black ink carries text and figures on ivory paper; muted ink supports secondary copy. A separate, darker stroke makes input boundaries distinct from decorative rules. Dock navy frames the sheet and returns for process and footer; pale dock copy preserves contrast on those bands.

## Typography

The shared display and body stacks carry through to Ticket. English and Russian use Roboto Condensed for display (Noto Sans fallback) and Noto Sans for body. Georgian uses Noto Sans Georgian for both, with a slightly smaller and more open hero setting. Language codes and process numbers are monospaced; prices, totals and quantities use tabular numerals.

## Layout

The centered frame has a 1280px maximum and fluid side gutters (`clamp(0.75rem, 3vw, 2.25rem)`). On narrow screens, the estimate and action precede the decorative diagram visually. From 34rem, the breakdown and total can share a row. From 49rem, the calculator groups diagram, volume and handling into three columns above the result row, and the header switches from a disclosure to inline navigation. Preserve the 320px layout and visible keyboard focus.

## Elevation & Depth

The receiving sheet has a single broad shadow against the dock. A smaller shadow separates the mobile navigation disclosure. The lead form is flat; tonal bands and rules divide the remaining sections without piling up floating cards.

## Shapes

The sheet, primary action and quantity fields have near-square 3px corners. Pallet places use 2px corners. Dashed rules suggest tear lines; desktop perforations are CSS dots behind the paper margin, and the angled stamp is decorative.

## Components

- **Quote action:** Orange with ink text, a 52px minimum height and a trailing arrow. Hover lightens the orange without motion.
- **Quantity field:** Persistent label above a pale, 46px-minimum input. The 1px control stroke is darker than section rules. Focus is a 3px ring with 3px offset, blue on light surfaces and orange in dock areas.
- **Language switch:** Uppercase monospace codes on 44px targets, with an underline identifying the active locale. Section navigation becomes a native disclosure on narrow screens.
- **Receiving sheet and pallet places:** Dashed separators organize the form; one cell highlights the unit rate in an illustrative six-column grid. The grid is not interactive.

## Do's and Don'ts

- Do preserve the visible estimate-to-quote handoff and the separate, subordinate private-customer path.
- Do keep the approved Storum logos and shared type stacks.
- Don't turn the pallet diagram into a claim about inventory, capacity or the facility.
- Don't apply these tokens to production routes or other variants by default.
