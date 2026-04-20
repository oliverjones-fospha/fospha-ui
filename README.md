# Fospha Design System

The single source of truth for Fospha's brand, components, and product patterns.

## Live URLs
- Design system: https://fospha-ui.vercel.app/
- Component docs: https://fospha-ui.vercel.app/docs
- Dashboard example: https://fospha-ui.vercel.app/dashboard
- Campaign page: https://fospha-ui.vercel.app/campaign

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix, New York style)
- Recharts

## Structure
src/
├── app/globals.css          ← All design tokens (web)
├── components/fospha/       ← All Fospha components
├── styles/
│   ├── tokens-additions.css ← On-dark ramp, spacing, type scale, slide metrics
│   ├── components.css       ← Surface-agnostic components (card, pchip, badge...)
│   └── slides.css           ← Deck/presentation primitives
└── docs/
    └── component-patterns.md ← Component reference

## CSS import order (for deck/presentation contexts)
@import "globals.css";               /* web tokens */
@import "styles/tokens-additions.css";
@import "styles/components.css";
@import "styles/slides.css";         /* deck-only — omit for web */

## Development
npm run dev    → localhost:3000
npm run build  → production build
vercel --prod  → deploy (or push to main via GitHub)
