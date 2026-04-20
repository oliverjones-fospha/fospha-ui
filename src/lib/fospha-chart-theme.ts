/**
 * FOSPHA CHART THEME — Recharts configuration
 * ─────────────────────────────────────────────
 * Based on Fospha Design System v1.1 (Mar 2026), Section 1.3
 *
 * Usage rules (from design system):
 * - Use data colours EXCLUSIVELY for charts and graphs
 * - Assign colours in the order defined below — do not skip or reorder
 * - All fills must be FLAT and SOLID — no gradients on any chart element
 * - Data colours must NEVER be used as text colours in any context
 * - For positive/negative states, use sentimentColours + a directional indicator
 *
 * Import this file into any Recharts component and spread the
 * relevant config onto the chart or series element.
 */

// ── 1. Data palette — assign in this order for all series ──────────────────

export const FOSPHA_DATA_COLOURS = [
  "#2253FF",   // Data Blue        — primary series
  "#C7BEFD",   // Data Light Blue  — second series
  "#FEB453",   // Data Orange      — third series
  "#00CBBD",   // Data Teal        — fourth series
  "#FF86FC",   // Data Pink        — fifth series
  "#707078",   // Data Dark Neutral
  "#8C9196",   // Data Mid Neutral
  "#EEEEEF",   // Data Light Neutral
  "#F6F6F7",   // Data Lighter Neutral
] as const

export type FosphaDataColour = typeof FOSPHA_DATA_COLOURS[number]

/** Get a data colour by zero-based series index. Wraps if > 4 named colours. */
export function getDataColour(index: number): string {
  return FOSPHA_DATA_COLOURS[index % FOSPHA_DATA_COLOURS.length]
}

// ── 2. Recharts shared axis / grid style ───────────────────────────────────

export const FOSPHA_AXIS_STYLE = {
  tick: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 11,
    fill: "#525776",   // Fospha Muted Blue — axis labels
  },
  axisLine: {
    stroke: "#E6DCD6",   // Dark Cream
    strokeWidth: 1,
  },
  tickLine: false,       // suppress tick marks — cleaner Fospha aesthetic
} as const

export const FOSPHA_CARTESIAN_GRID = {
  stroke: "#E6DCD6",     // Dark Cream grid lines
  strokeDasharray: "3 3",
  vertical: false,       // horizontal rules only — less visual noise
} as const

// ── 3. Recharts tooltip style ──────────────────────────────────────────────

export const FOSPHA_TOOLTIP_STYLE: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 12,
  backgroundColor: "#FFFFFF",
  border: "1px solid #E6DCD6",
  borderRadius: 6,
  boxShadow: "0 2px 8px rgba(12, 25, 70, 0.08)",
  color: "#0C1946",
  padding: "8px 12px",
}

export const FOSPHA_TOOLTIP_LABEL_STYLE: React.CSSProperties = {
  fontFamily: "'Bricolage Grotesque', sans-serif",
  fontSize: 12,
  fontWeight: 600,
  color: "#0C1946",
  marginBottom: 4,
}

// ── 4. Recharts legend style ────────────────────────────────────────────────

export const FOSPHA_LEGEND_STYLE: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 12,
  color: "#525776",
}

// ── 5. Sentiment colours (charts only) ─────────────────────────────────────
// Pair with a directional indicator (arrow / +/- prefix) for accessibility

export const FOSPHA_SENTIMENT = {
  positive: {
    text:       "#0C5132",
    icon:       "#318760",
    background: "#CDFEE1",
    fill:       "#318760",   // use icon shade for chart fills
  },
  negative: {
    text:       "#8E1F0B",
    icon:       "#EA4C2F",
    background: "#FDE9E7",
    fill:       "#EA4C2F",
  },
} as const

// ── 6. Product colour ramps (use only for product-specific charts) ──────────

export const FOSPHA_PRODUCT_COLOURS = {
  core:  { dark: "#1B45E4", mid: "#6787FE", light: "#D4DBF7", lighter: "#F4F5FB" },
  halo:  { dark: "#008048", mid: "#00E582", light: "#BAE8D4", lighter: "#F0FAF5" },
  glow:  { dark: "#917308", mid: "#F5BF00", light: "#F3DE91", lighter: "#FEF8E7" },
  beam:  { dark: "#AD1FA1", mid: "#FF8AF5", light: "#F7D4F4", lighter: "#FBF4FB" },
  prism: { dark: "#CC5C00", mid: "#FFAB66", light: "#F6D9C1", lighter: "#FEF4EC" },
} as const

export type FosphaProduct = keyof typeof FOSPHA_PRODUCT_COLOURS

// ── 7. Pre-built Recharts prop spreads ─────────────────────────────────────
// Spread these directly onto Recharts components for consistent styling.
//
// Example usage:
//
//   import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
//   import { RECHARTS_DEFAULTS, FOSPHA_DATA_COLOURS } from "@/lib/fospha-chart-theme"
//
//   <LineChart data={data} {...RECHARTS_DEFAULTS.chart}>
//     <CartesianGrid {...RECHARTS_DEFAULTS.grid} />
//     <XAxis dataKey="name" {...RECHARTS_DEFAULTS.xAxis} />
//     <YAxis {...RECHARTS_DEFAULTS.yAxis} />
//     <Tooltip {...RECHARTS_DEFAULTS.tooltip} />
//     <Line dataKey="value" stroke={FOSPHA_DATA_COLOURS[0]} {...RECHARTS_DEFAULTS.line} />
//   </LineChart>

export const RECHARTS_DEFAULTS = {
  chart: {
    margin: { top: 8, right: 16, bottom: 8, left: 0 },
  },
  grid: {
    ...FOSPHA_CARTESIAN_GRID,
  },
  xAxis: {
    tick: FOSPHA_AXIS_STYLE.tick,
    axisLine: FOSPHA_AXIS_STYLE.axisLine,
    tickLine: FOSPHA_AXIS_STYLE.tickLine,
    dy: 8,
  },
  yAxis: {
    tick: FOSPHA_AXIS_STYLE.tick,
    axisLine: false,             // no y-axis line — cleaner
    tickLine: false,
    dx: -4,
  },
  tooltip: {
    contentStyle: FOSPHA_TOOLTIP_STYLE,
    labelStyle: FOSPHA_TOOLTIP_LABEL_STYLE,
    cursor: { stroke: "#E6DCD6", strokeWidth: 1 },
  },
  legend: {
    wrapperStyle: FOSPHA_LEGEND_STYLE,
    iconType: "circle" as const,
    iconSize: 8,
  },
  // Line chart — solid stroke, no gradient
  line: {
    strokeWidth: 2,
    dot: false,
    activeDot: { r: 4, strokeWidth: 0 },
  },
  // Bar chart — flat solid fill, no gradient, no radius
  bar: {
    radius: [2, 2, 0, 0] as [number, number, number, number],
    maxBarSize: 48,
  },
  // Area chart — low-opacity flat fill
  area: {
    strokeWidth: 2,
    fillOpacity: 0.08,   // subtle fill — avoids gradient effect
    dot: false,
  },
} as const

