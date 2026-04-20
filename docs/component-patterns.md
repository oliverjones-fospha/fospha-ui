# Fospha UI — Component Patterns

> **Version:** 3.0 | Updated April 2026  
> This document is the definitive reference for all components in `src/components/fospha/`.  
> When generating new pages or features, always use these components rather than building from scratch.  
> All components follow Fospha Design System v1.1 rules.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css                  ← All Fospha design tokens (Tailwind v4)
│   ├── layout.tsx                   ← Root layout with Bricolage Grotesque + Manrope fonts
│   ├── page.tsx                     ← Design system reference page (navigable via DSSidebar)
│   ├── dashboard/
│   │   ├── layout.tsx               ← Dashboard shell (Sidebar + scrollable content)
│   │   └── page.tsx                 ← Dashboard demo page
│   └── campaign/
│       └── page.tsx                 ← Marketing campaign page
├── components/
│   └── fospha/
│       ├── button.tsx               ← FosphaButton
│       ├── eyebrow-label.tsx        ← EyebrowLabel
│       ├── badge.tsx                ← Badge
│       ├── tabs.tsx                 ← FosphaTabs
│       ├── kpi-card.tsx             ← KPICard
│       ├── sidebar.tsx              ← Sidebar (dashboard nav)
│       ├── ds-sidebar.tsx           ← DSSidebar (design system nav with anchor links)
│       ├── nav-bar.tsx              ← NavBar (legacy — use Sidebar for dashboard)
│       ├── data-table.tsx           ← DataTable
│       ├── chart-card.tsx           ← ChartCard, FosphaLineChart, FosphaBarChart,
│       │                               FosphaDonutChart, FosphaAreaChart
│       ├── marketing.tsx            ← MarketingNav, HeroSection, StatsBar, LogoBar,
│       │                               FeaturesSection, CaseStudySection,
│       │                               PricingSection, CTABanner, MarketingFooter
│       ├── marketing-2.tsx          ← TestimonialSection, FAQSection, ComparisonTable,
│       │                               TimelineSection, VideoSection, TeamSection, AwardStrip
│       └── icons/
│           ├── logo.tsx             ← FosphaLogo, FosphaLogomark (canonical logo components)
│           ├── core.tsx             ← CoreIcon
│           ├── halo.tsx             ← HaloIcon
│           ├── glow.tsx             ← GlowIcon
│           ├── beam.tsx             ← BeamIcon
│           ├── prism.tsx            ← PrismIcon
│           ├── spark.tsx            ← SparkIcon
│           └── index.ts             ← Exports all icons + logo
└── lib/
    └── fospha-chart-theme.ts        ← Recharts colour config and shared styles
```

---

## Global Design Rules

### Colours
- ❌ No gradients on text, headings, chart fills, icons, or section backgrounds
- ❌ No data palette colours (`#00CBBD`, `#FEB453` etc.) as text colours ever
- ❌ No unapproved colours — never introduce colours outside the defined palette
- ❌ Product ramp lighter backgrounds must only appear on **white** section backgrounds — never on cream (they clash)
- ✅ Page backgrounds always `#FFFFFF`, dashboard content area `#F6F2EF`, marketing page wrapper `#F6F2EF`
- ✅ The only approved gradient is the CTA banner: `#26ACFF → #6538FF` left to right
- ✅ Stat/KPI numbers on dark backgrounds must always be `#FFFFFF` — never a data colour

### Product Colour Usage Rules

Each product has a four-shade ramp. Always apply shades by role:

| Role | Shade | Use for |
|---|---|---|
| **Lighter** | e.g. `#F4F5FB` | Card / section backgrounds |
| **Light** | e.g. `#D4DBF7` | Borders on product cards |
| **Mid** | e.g. `#6787FE` | Icons, accents, graphic elements |
| **Dark** | e.g. `#1B45E4` | Text, headings, emphasis |

**Product ramp values:**

| Product | Dark | Mid | Light | Lighter |
|---|---|---|---|---|
| Core | `#1B45E4` | `#6787FE` | `#D4DBF7` | `#F4F5FB` |
| Halo | `#008048` | `#00E582` | `#BAE8D4` | `#F0FAF5` |
| Glow | `#917308` | `#F5BF00` | `#F3DE91` | `#FEF8E7` |
| Beam | `#AD1FA1` | `#FF8AF5` | `#F7D4F4` | `#FBF4FB` |
| Prism | `#CC5C00` | `#FFAB66` | `#F6D9C1` | `#FEF4EC` |
| Spark AI | `#7347EB` | `#A280FF` | `#DED6F5` | `#F6F2FD` |

**Critical product colour rule:** Product ramp lighter/light backgrounds must never appear on cream section backgrounds — use white sections only.

### Typography
- ❌ Never apply gradient fills to any text
- ❌ Never centre-align body or paragraph text
- ✅ Headings always Bricolage Grotesque, body always Manrope, pull quotes PT Serif italic
- ✅ Eyebrow labels always use `EyebrowLabel` component — never a pill or badge shape
- ✅ Eyebrow labels use Muted Blue `#525776` — not Fospha Blue

### Navigation
- ❌ No dark/glass/blur/frosted nav styles
- ✅ Marketing nav: white `#FFFFFF` background, `1px #E6DCD6` bottom border, subtle box shadow, contents constrained to `maxWidth: 1100`
- ✅ Dashboard: use `Sidebar` component — never the legacy `NavBar`
- ✅ Design system page: use `DSSidebar` with anchor link navigation
- ✅ Logo on light backgrounds: colour variant (`FosphaLogo variant="colour"`)
- ✅ Logo on dark backgrounds: white variant (`FosphaLogo variant="white"`)
- ✅ Never place the logo inside a pill, badge, circle, or any containing shape
- ✅ Always use `FosphaLogo` or `FosphaLogomark` components — never inline SVG

### Buttons
- ✅ All buttons must have `cursor-pointer`
- ✅ Ghost hover uses `rgba(255,255,255,0.10)` — never solid white (text becomes invisible on dark)
- ✅ On dark cards (e.g. highlighted pricing tier), use `primary` variant not `cta`
- ✅ Primary hover state: `#1a42e0` (lighter blue, not dark blue — dark blue is invisible on dark cards)

### Icons
- ✅ Always use the `color` prop on product icon components — never hardcode fill/stroke colours
- ✅ Product icon `color` prop should always receive the **mid** shade of the corresponding product ramp
- ✅ Icon `strokeWidth` should be `2.5` for display at 40px+, `2` for smaller sizes
- ✅ All clipPath IDs in icon SVGs must be unique (e.g. `beam-clip`, `glow-clip`) to avoid conflicts when multiple icons render on the same page

---

## Logo Components

**File:** `src/components/fospha/icons/logo.tsx`  
**Import:** `import { FosphaLogo, FosphaLogomark } from "@/components/fospha/icons"`

Always use these components — never copy-paste raw SVG paths inline.

### FosphaLogo

Full wordmark logo. Use wherever space allows.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"colour" \| "white" \| "dark"` | `"colour"` | Which logo variant to render |
| `height` | `number` | `20` | Height in px — width scales automatically |
| `className` | `string` | — | Optional CSS class |

| Variant | When to use |
|---|---|
| `colour` | Default. Light/white backgrounds. Blue mark + dark wordmark. |
| `white` | Dark or coloured backgrounds (sidebar, hero, dark sections, footer). |
| `dark` | Light backgrounds where colour is unavailable (e.g. single-colour print). |

```tsx
// Marketing nav (light background)
<FosphaLogo height={20} variant="colour" />

// Sidebar / hero (dark background)
<FosphaLogo height={18} variant="white" />

// Footer on dark
<FosphaLogo height={16} variant="white" />
```

### FosphaLogomark

Bracket mark only. Use when the full logo is too wide (e.g. collapsed sidebar, favicon).

| Prop | Type | Default |
|---|---|---|
| `size` | `number` | `32` |
| `variant` | `"colour" \| "white" \| "dark"` | `"colour"` |

```tsx
// Collapsed sidebar
<FosphaLogomark size={24} variant="white" />
```

---

## Product Icons

**Files:** `src/components/fospha/icons/{core,halo,glow,beam,prism,spark}.tsx`  
**Import:** `import { CoreIcon, HaloIcon, GlowIcon, BeamIcon, PrismIcon, SparkIcon } from "@/components/fospha/icons"`

All product icons accept the same props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `32` | Width and height in px |
| `color` | `string` | `"#0C1946"` | Stroke/fill colour — always pass the **mid** shade |
| `className` | `string` | — | Optional CSS class |

**Always use mid shade for icon colour:**

```tsx
<CoreIcon  size={40} color="#6787FE" />  // Core mid
<HaloIcon  size={40} color="#00E582" />  // Halo mid
<GlowIcon  size={40} color="#F5BF00" />  // Glow mid
<BeamIcon  size={40} color="#FF8AF5" />  // Beam mid
<PrismIcon size={40} color="#FFAB66" />  // Prism mid
<SparkIcon size={40} color="#A280FF" />  // Spark mid
```

**Product icon card pattern** (lighter bg, light border, mid icon, dark text):

```tsx
const PRODUCT_RAMP = {
  Core:     { bg: '#F4F5FB', border: '#D4DBF7', iconColor: '#6787FE', textColor: '#1B45E4' },
  Halo:     { bg: '#F0FAF5', border: '#BAE8D4', iconColor: '#00E582', textColor: '#008048' },
  Glow:     { bg: '#FEF8E7', border: '#F3DE91', iconColor: '#F5BF00', textColor: '#917308' },
  Beam:     { bg: '#FBF4FB', border: '#F7D4F4', iconColor: '#FF8AF5', textColor: '#AD1FA1' },
  Prism:    { bg: '#FEF4EC', border: '#F6D9C1', iconColor: '#FFAB66', textColor: '#CC5C00' },
  SparkAI:  { bg: '#F6F2FD', border: '#DED6F5', iconColor: '#A280FF', textColor: '#7347EB' },
}
```

---

## Design System Navigation

**File:** `src/components/fospha/ds-sidebar.tsx`  
**Import:** `import { DSSidebar } from "@/components/fospha/ds-sidebar"`

Used only on `src/app/page.tsx` (the design system reference page). Has anchor-based smooth scroll navigation — not page routing. External links (Dashboard, Campaign, Docs) all open in a new tab.

**DS Sections (with anchor IDs):**

| Section | Anchor ID |
|---|---|
| Logo | `#logo` |
| Colours | `#colours` |
| Typography | `#typography` |
| Buttons | `#buttons` |
| KPI Cards | `#kpi-cards` |
| Tabs | `#tabs` |
| Badges | `#badges` |
| Icons | `#icons` |
| Charts | `#charts` |
| Data Table | `#data-table` |
| Dark BG | `#dark-bg` |
| Marketing | `#marketing` |

Every `<Section>` on the design system page must have a matching `id` prop and `scrollMarginTop: 32`.

---

## Dashboard Layout

All dashboard pages live under `src/app/dashboard/` and get the sidebar automatically via `layout.tsx`.

```tsx
"use client"

export default function MyDashboardPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <main style={{ padding: "32px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <EyebrowLabel>Section Name</EyebrowLabel>
          <h1 style={{ marginTop: 8, marginBottom: 4 }}>Page Title</h1>
          <p style={{ color: "#525776", fontSize: 14 }}>Subtitle or date range</p>
        </div>
        {/* KPI row, Charts row, Data table */}
      </main>
    </div>
  )
}
```

---

## Components

---

### EyebrowLabel

**File:** `src/components/fospha/eyebrow-label.tsx`  
**Import:** `import { EyebrowLabel } from "@/components/fospha/eyebrow-label"`

Plain uppercase Manrope text. No line prefix, no pill, no badge. Uses Muted Blue `#525776` by default.

```tsx
<EyebrowLabel>Performance Overview</EyebrowLabel>
<EyebrowLabel style={{ justifyContent: "center" }}>Centred</EyebrowLabel>
<EyebrowLabel style={{ color: "#E3EEFF" }}>On dark background</EyebrowLabel>
```

---

### FosphaButton

**File:** `src/components/fospha/button.tsx`

| Variant | Background | Hover | Notes |
|---|---|---|---|
| `primary` | `#2253FF` | `#1a42e0` | Works on light and dark. Never hover to dark blue on dark backgrounds. |
| `secondary` | `#F3EDE9` | `#E6DCD6` | Light backgrounds only |
| `cta` | `#26ACFF → #6538FF` | — | Hero/banner only. Never use on dark cards. |
| `ghost` | Transparent | `rgba(255,255,255,0.10)` | Works on light and dark. Hover never goes solid. |

```tsx
<FosphaButton variant="primary">Save</FosphaButton>
<FosphaButton variant="cta" size="lg">Get Started</FosphaButton>
<FosphaButton variant="ghost" style={{ color: "#E3EEFF" }}>Learn more</FosphaButton>
```

---

### Badge

**File:** `src/components/fospha/badge.tsx`

| Variant | Text | Background | Use for |
|---|---|---|---|
| `default` | `#0C1946` | `#E3EEFF` | General tags |
| `primary` | `#FFFFFF` | `#2253FF` | Featured/highlighted |
| `success` | `#0C5132` | `#CDFEE1` | Active, live |
| `warning` | `#917308` | `#FEF8E7` | Paused, pending |
| `danger` | `#8E1F0B` | `#FDE9E7` | Error, failed |
| `neutral` | `#525776` | `#F6F2EF` | Ended, archived |
| `core` | `#1B45E4` | `#D4DBF7` | Core product |
| `halo` | `#008048` | `#BAE8D4` | Halo product |
| `glow` | `#917308` | `#F3DE91` | Glow product |
| `beam` | `#AD1FA1` | `#F7D4F4` | Beam product |
| `prism` | `#CC5C00` | `#F6D9C1` | Prism product |
| `spark` | `#7347EB` | `#DED6F5` | Spark AI product |

```tsx
<Badge variant="success" dot>Active</Badge>
<Badge variant="core">Core</Badge>
<Badge variant="warning" size="sm">Paused</Badge>
```

---

### FosphaTabs

**File:** `src/components/fospha/tabs.tsx`

```tsx
// Underline — page-level navigation
<FosphaTabs
  tabs={[
    { key: "overview",  label: "Overview",  count: 0 },
    { key: "campaigns", label: "Campaigns", count: 7 },
  ]}
  onChange={(key) => setTab(key)}
/>

// Pill — date range / filter toggles
<FosphaTabs variant="pill" tabs={[
  { key: "7d",  label: "7 days"  },
  { key: "30d", label: "30 days" },
  { key: "ytd", label: "YTD"     },
]} />
```

---

### KPICard

**File:** `src/components/fospha/kpi-card.tsx`

`changeDirection` is **semantic** — `"up"` = good (green), `"down"` = bad (red). A spend increase is `changeDirection="down"`.

```tsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
  <KPICard label="Total Revenue" value="£442K" change="+12.4%" changeDirection="up"   description="vs last period" />
  <KPICard label="Total Spend"   value="£99.8K" change="+4.1%" changeDirection="down" description="vs last period" />
  <KPICard label="Active"        value="5"      description="of 7 total" />
</div>
```

---

### Sidebar

**File:** `src/components/fospha/sidebar.tsx`

Dark `#0C1946` collapsible sidebar for dashboard pages. Used in `dashboard/layout.tsx` — never add directly to pages.

- Expanded: `<FosphaLogo height={18} variant="white" />`
- Collapsed: `<FosphaLogomark size={24} variant="white" />`

---

### DataTable

**File:** `src/components/fospha/data-table.tsx`

Cell value types:
```ts
| string | number
| { type: "bold";      text: string }
| { type: "sentiment"; value: number }   // +ve = green, -ve = red
| { type: "badge";     text: string; textColor: string; bgColor: string }
```

Standard status colours:
```ts
const STATUS = {
  Active: { textColor: "#0C5132", bgColor: "#CDFEE1" },
  Paused: { textColor: "#917308", bgColor: "#FEF8E7" },
  Ended:  { textColor: "#525776", bgColor: "#F6F2EF" },
}
```

---

### Chart Components

**File:** `src/components/fospha/chart-card.tsx`

Always wrap in `ChartCard`. Flat solid fills only — no gradients.

Data colour order: `#2253FF` → `#C7BEFD` → `#FEB453` → `#00CBBD` → `#FF86FC`

```tsx
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
  <ChartCard title="Revenue vs Spend" description="Last 6 months">
    <FosphaLineChart
      data={data} xKey="month"
      series={[{ key: "revenue", label: "Revenue" }, { key: "spend", label: "Spend", colour: "#FEB453" }]}
      yTickFormatter={(v) => `£${(v/1000).toFixed(0)}K`}
    />
  </ChartCard>
  <ChartCard title="ROAS by Channel" description="Current period">
    <FosphaBarChart
      data={data} xKey="channel"
      series={[{ key: "roas", label: "ROAS" }]}
      layout="vertical"
      yTickFormatter={(v) => `${v}×`}
    />
  </ChartCard>
</div>
```

---

## Marketing Components

---

### MarketingNav

White `#FFFFFF` background, `1px #E6DCD6` border, box shadow. Inner content constrained to `maxWidth: 1100`. Uses `<FosphaLogo height={20} variant="colour" />`.

---

### HeroSection

Dark navy `#0C1946`. Headline solid white — never gradient. Eyebrow `#E3EEFF`.

```tsx
<HeroSection
  eyebrow="Marketing Attribution"
  headline="Know exactly what's driving your revenue"
  subheadline="..."
  primaryCta={{ label: "Get a demo", href: "#" }}
  secondaryCta={{ label: "See how it works", href: "#" }}
  badge="Now with AI-powered forecasting"
/>
```

---

### FeaturesSection

**Product colour rules:**
- `background="white"`: product ramp cards — lighter bg, light border, mid icon colour (via Badge), dark title text
- `background="cream"`: white cards with `#E6DCD6` border — **never** use product ramp backgrounds on cream
- Eyebrow uses `Badge` component with product variant (e.g. `variant="core"`)
- Card title uses product dark shade
- 6th card (no product eyebrow) uses Yellow `#FFF3DA` background

```tsx
<FeaturesSection
  background="white"
  columns={3}
  features={[
    { eyebrow: "Core",  title: "Always-on attribution",  description: "..." },
    { eyebrow: "Halo",  title: "Cross-channel halo",     description: "..." },
    { eyebrow: "Glow",  title: "Creative intelligence",  description: "..." },
    { eyebrow: "Beam",  title: "Incrementality testing", description: "..." },
    { eyebrow: "Prism", title: "Unified reporting",      description: "..." },
    {                   title: "Built for speed",         description: "..." },
  ]}
/>
```

---

### PricingSection

- Non-highlighted: white card, `secondary` button
- Highlighted (`highlighted: true`): `#0C1946` dark card, `primary` button — never `cta` (gradient clashes with dark background)

---

### CTABanner

Approved CTA gradient background. Primary button uses white/secondary style.

---

### TestimonialSection

Uses PT Serif italic for pull quotes — the one approved editorial use of PT Serif.

---

### TeamSection

Always use `background="white"` — never cream. Cream cards on a cream background have no contrast.

```tsx
<TeamSection
  background="white"
  members={[
    { name: "Sam Carter",      title: "CEO", bio: "..." },
    { name: "Dom Devlin",      title: "CPO", bio: "..." },
    { name: "Tom Sheepshanks", title: "CRO", bio: "..." },
    { name: "Keith Robinson",  title: "CTO", bio: "..." },
  ]}
/>
```

---

### VideoSection

Click-to-play with branded placeholder. Appends `?autoplay=1` to URL on click.

```tsx
<VideoSection
  background="dark"
  videoUrl="https://www.youtube.com/embed/VIDEO_ID"
/>
```

---

## CSS Variables

```css
/* Primary */
--fos-blue:               #2253FF;
--fos-dark-blue:          #0C1946;

/* Secondary */
--fos-grey:               #474747;   /* Body text */
--fos-muted-blue:         #525776;   /* Secondary text, eyebrow labels */
--fos-cream:              #F3EDE9;   /* Section backgrounds */
--fos-cream-light:        #F6F2EF;   /* Page/dashboard background */
--fos-cream-dark:         #E6DCD6;   /* Borders, dividers */
--fos-light-blue:         #E3EEFF;   /* Links on dark */

/* Sentiment */
--fos-positive-text:      #0C5132;
--fos-positive-bg:        #CDFEE1;
--fos-negative-text:      #8E1F0B;
--fos-negative-bg:        #FDE9E7;

/* CTA gradient */
--fos-cta-gradient-start: #26ACFF;
--fos-cta-gradient-end:   #6538FF;

/* Spark AI ramp */
--fos-spark-dark:         #7347EB;
--fos-spark-mid:          #A280FF;
--fos-spark-light:        #DED6F5;
--fos-spark-lighter:      #F6F2FD;
```

## CSS Utility Classes

| Class | Description |
|---|---|
| `.fos-eyebrow` | Uppercase Manrope, Muted Blue, no line prefix |
| `.fos-nav` | White nav, Dark Cream border |
| `.fos-cta-gradient` | Approved CTA gradient only |
| `.fos-stat-number` | 54px Bricolage Grotesque Bold |
| `.fos-stat-label` | 13px Manrope muted |
| `.fos-positive` | Green sentiment |
| `.fos-negative` | Red sentiment |
| `.fos-block-1` | `#E3EEFF` Light Blue block |
| `.fos-block-2` | `#FFF3DA` Yellow block |
| `.fos-block-3` | `#F9DCC4` Peach block |
| `.fos-block-4` | `#F3EDE9` Cream block |
