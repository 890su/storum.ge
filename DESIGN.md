---
name: "Storum — Warehouse Cross-Section (Design 4)"
description: "Design tokens for the optional warehouse cross-section only."
colors:
  paper: "#f5f3eb"
  field: "#fdfbf4"
  ink: "#24271f"
  secondary-ink: "#54574d"
  drafting-rule: "#aaa89b"
  control-rule: "#817d70"
  ochre: "#d8a848"
  ochre-hover: "#e6b95b"
  ochre-display: "#956618"
  ochre-focus: "#865c16"
  graphite: "#292b25"
typography:
  headline:
    fontFamily: "Roboto Condensed Variable"
    fontSize: "clamp(2.05rem, 4.25vw, 4.25rem)"
    fontWeight: 450
    lineHeight: 1.02
    letterSpacing: "0.055em"
  headline-georgian:
    fontFamily: "Noto Sans Georgian Variable"
    fontSize: "clamp(1.55rem, 3.25vw, 3.25rem)"
    fontWeight: 670
    lineHeight: 1.13
  quote-total:
    fontFamily: "Roboto Condensed Variable"
    fontSize: "clamp(2.1rem, 4vw, 4rem)"
    fontWeight: 595
    lineHeight: 0.95
spacing:
  gutter: "clamp(0.75rem, 2.5vw, 2.5rem)"
  touch-target: "44px"
components:
  quote-button:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    height: "50px"
  quantity-stepper:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    height: "{spacing.touch-target}"
  estimate-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
---

# Design System: Storum — Warehouse Cross-Section

## Overview

**Creative North Star: "The Warehouse in Section"**

Drawing stock, graphite structure and one ochre pallet make the unit of storage visible. Applies only to the three `design-4` routes. The image is an illustration, not a facility plan.

## Colors

Warm paper carries the page, graphite the structure, and ochre the highlight and primary action. Field outlines are darker than the decorative drafting rules.

## Typography

Use slanted Roboto Condensed for EN/RU display and tabular pricing. Use upright Noto Sans Georgian for Georgian headings.

## Layout

A narrow offer column sits beside the right-edge cutaway. The four-part estimator overlaps the illustration at wide widths. On mobile, stack the copy and artwork, keep both steppers in view, and give the estimate and CTA their own rows.

## Shapes

Use square corners, fine ruled divisions, and measurement lines attached to the drawing.

## Components

The ochre quote action has a trailing arrow. The estimator has labeled inputs, 44px step controls, a live total and expandable extras.

## Do's and Don'ts

- Do preserve the visible estimate-to-quote handoff and the three 320px layouts.
- Do show the verified rates and the illustration disclaimer.
- Don't apply these tokens to other designs.
