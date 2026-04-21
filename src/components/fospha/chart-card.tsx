"use client"

import * as React from "react"
import {
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  PieChart, Pie, Cell,
  XAxis, YAxis,
  CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
  type BarShapeProps,
} from "recharts"

// ── Fospha data palette (Section 1.3) ─────────────────────────
// Assign in this order. Flat solid fills only — no gradients.
const DATA_COLOURS = [
  "#2253FF", // Data Blue
  "#FEB453", // Data Orange
  "#00CBBD", // Data Teal
  "#C7BEFD", // Data Light Blue
  "#FF86FC", // Data Pink
  "#707078", // Data Dark Neutral
]

// ── Shared axis / grid style ───────────────────────────────────
const AXIS_TICK  = { fontFamily: "'Manrope', sans-serif", fontSize: 11, fill: "#525776" }
const GRID_STYLE = { stroke: "#E6DCD6", strokeDasharray: "3 3" }

const TOOLTIP_STYLE: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 12,
  backgroundColor: "#FFFFFF",
  border: "1px solid #E6DCD6",
  borderRadius: 6,
  boxShadow: "0 2px 8px rgba(12,25,70,0.08)",
  color: "#0C1946",
  padding: "8px 12px",
}

const TOOLTIP_LABEL_STYLE: React.CSSProperties = {
  fontFamily: "'Bricolage Grotesque', sans-serif",
  fontSize: 12,
  fontWeight: 600,
  color: "#0C1946",
  marginBottom: 4,
}

const LEGEND_STYLE: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 12,
  color: "#474747",
}

// ── Chart card wrapper ─────────────────────────────────────────

interface ChartCardProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E6DCD6",
      borderRadius: 8,
      padding: "20px 20px 12px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
    }}>
      <p style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontSize: 16,
        fontWeight: 600,
        color: "#0C1946",
        margin: 0,
      }}>
        {title}
      </p>
      {description && (
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 12,
          color: "#525776",
          margin: "0 0 12px 0",
        }}>
          {description}
        </p>
      )}
      <div style={{ marginTop: 8 }}>
        {children}
      </div>
    </div>
  )
}

// ── Line chart ────────────────────────────────────────────────

export interface LineSeriesConfig {
  key: string
  label: string
  colour?: string
}

interface FosphaLineChartProps {
  data: Record<string, string | number>[]
  series: LineSeriesConfig[]
  xKey: string
  height?: number
  yTickFormatter?: (v: number) => string
  tooltipFormatter?: (v: number) => string
}

export function FosphaLineChart({
  data,
  series,
  xKey,
  height = 260,
  yTickFormatter = (v) => String(v),
  tooltipFormatter = (v) => String(v),
}: FosphaLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 4, right: 16, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} {...GRID_STYLE} />
        <XAxis
          dataKey={xKey}
          tick={AXIS_TICK}
          axisLine={{ stroke: "#E6DCD6" }}
          tickLine={false}
          dy={8}
        />
        <YAxis
          tick={AXIS_TICK}
          axisLine={false}
          tickLine={false}
          dx={-4}
          tickFormatter={yTickFormatter}
          width={48}
        />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          labelStyle={TOOLTIP_LABEL_STYLE}
          cursor={{ stroke: "#E6DCD6", strokeWidth: 1 }}
          formatter={(v) => tooltipFormatter(v as number)}
        />
        <Legend
          wrapperStyle={LEGEND_STYLE}
          iconType="circle"
          iconSize={8}
          formatter={(value) => (
            <span style={{ color: '#474747', fontFamily: "'Manrope', sans-serif", fontSize: 12 }}>
              {value}
            </span>
          )}
        />
        {series.map((s, i) => (
          <Line
            key={s.key}
            type="monotone"
            dataKey={s.key}
            name={s.label}
            stroke={s.colour ?? DATA_COLOURS[i % DATA_COLOURS.length]}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

// ── Donut / Pie chart ─────────────────────────────────────────

export interface DonutSegment {
  name: string
  value: number
  colour?: string
}

interface FosphaDonutChartProps {
  data: DonutSegment[]
  height?: number
  innerRadius?: number
  outerRadius?: number
  valueFormatter?: (v: number) => string
  showLegend?: boolean
}

export function FosphaDonutChart({
  data,
  height = 280,
  innerRadius = 55,
  outerRadius = 85,
  valueFormatter = (v) => String(v),
  showLegend = true,
}: FosphaDonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
          nameKey="name"
          paddingAngle={2}
          stroke="none"
        >
          {data.map((entry, i) => (
            <Cell
              key={`donut-${entry.name}-${i}`}
              fill={entry.colour ?? DATA_COLOURS[i % DATA_COLOURS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          labelStyle={TOOLTIP_LABEL_STYLE}
          formatter={(v) => {
            const n = v as number
            return [`${valueFormatter(n)} (${((n / total) * 100).toFixed(1)}%)`, ""] as [string, string]
          }}
        />
        {showLegend && (
          <Legend
            wrapperStyle={LEGEND_STYLE}
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "#474747" }}>
                {value}
              </span>
            )}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  )
}

// ── Area chart ────────────────────────────────────────────────

export interface AreaSeriesConfig {
  key: string
  label: string
  colour?: string
}

interface FosphaAreaChartProps {
  data: Record<string, string | number>[]
  series: AreaSeriesConfig[]
  xKey: string
  height?: number
  yTickFormatter?: (v: number) => string
  tooltipFormatter?: (v: number) => string
  stacked?: boolean
}

export function FosphaAreaChart({
  data,
  series,
  xKey,
  height = 260,
  yTickFormatter = (v) => String(v),
  tooltipFormatter = (v) => String(v),
  stacked = false,
}: FosphaAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 4, right: 16, bottom: 0, left: 0 }}>
        <defs>
          {series.map((s, i) => {
            const colour = s.colour ?? DATA_COLOURS[i % DATA_COLOURS.length]
            return (
              <linearGradient key={s.key} id={`area-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={colour} stopOpacity={0.12} />
                <stop offset="95%" stopColor={colour} stopOpacity={0.01} />
              </linearGradient>
            )
          })}
        </defs>
        <CartesianGrid vertical={false} {...GRID_STYLE} />
        <XAxis
          dataKey={xKey}
          tick={AXIS_TICK}
          axisLine={{ stroke: "#E6DCD6" }}
          tickLine={false}
          dy={8}
        />
        <YAxis
          tick={AXIS_TICK}
          axisLine={false}
          tickLine={false}
          dx={-4}
          tickFormatter={yTickFormatter}
          width={48}
        />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          labelStyle={TOOLTIP_LABEL_STYLE}
          cursor={{ stroke: "#E6DCD6", strokeWidth: 1 }}
          formatter={(v) => tooltipFormatter(v as number)}
        />
        <Legend
          wrapperStyle={LEGEND_STYLE}
          iconType="circle"
          iconSize={8}
          formatter={(value) => (
            <span style={{ color: '#474747', fontFamily: "'Manrope', sans-serif", fontSize: 12 }}>
              {value}
            </span>
          )}
        />
        {series.map((s, i) => {
          const colour = s.colour ?? DATA_COLOURS[i % DATA_COLOURS.length]
          return (
            <Area
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={colour}
              strokeWidth={2}
              fill={`url(#area-${s.key})`}
              stackId={stacked ? "stack" : undefined}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          )
        })}
      </AreaChart>
    </ResponsiveContainer>
  )
}

// ── Bar chart ─────────────────────────────────────────────────

export interface BarSeriesConfig {
  key: string
  label: string
  colour?: string
}

interface FosphaBarChartProps {
  data: Record<string, string | number>[]
  series: BarSeriesConfig[]
  xKey: string
  height?: number
  layout?: "vertical" | "horizontal"
  yTickFormatter?: (v: number) => string
  tooltipFormatter?: (v: number) => string
}

export function FosphaBarChart({
  data,
  series,
  xKey,
  height = 260,
  layout = "horizontal",
  yTickFormatter = (v) => String(v),
  tooltipFormatter = (v) => String(v),
}: FosphaBarChartProps) {
  const isVertical = layout === "vertical"

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout={layout}
        margin={{ top: 4, right: 16, bottom: 0, left: 0 }}
      >
        <CartesianGrid
          vertical={!isVertical}
          horizontal={isVertical}
          {...GRID_STYLE}
        />
        {isVertical ? (
          <>
            <XAxis type="number" tick={AXIS_TICK} axisLine={false} tickLine={false} tickFormatter={yTickFormatter} />
            <YAxis type="category" dataKey={xKey} tick={AXIS_TICK} axisLine={false} tickLine={false} width={100} />
          </>
        ) : (
          <>
            <XAxis dataKey={xKey} tick={AXIS_TICK} axisLine={{ stroke: "#E6DCD6" }} tickLine={false} dy={8} />
            <YAxis tick={AXIS_TICK} axisLine={false} tickLine={false} dx={-4} tickFormatter={yTickFormatter} width={48} />
          </>
        )}
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          labelStyle={TOOLTIP_LABEL_STYLE}
          cursor={{ fill: "#F6F2EF" }}
          formatter={(v) => tooltipFormatter(v as number)}
        />
        {series.length > 1 && (
          <Legend
          wrapperStyle={LEGEND_STYLE}
          iconType="circle"
          iconSize={8}
          formatter={(value) => (
            <span style={{ color: '#474747', fontFamily: "'Manrope', sans-serif", fontSize: 12 }}>
              {value}
            </span>
          )}
        />
        )}
        {series.map((s, i) => (
          <Bar
            key={s.key}
            dataKey={s.key}
            name={s.label}
            fill={s.colour ?? DATA_COLOURS[i % DATA_COLOURS.length]}
            radius={[2, 2, 0, 0]}
            maxBarSize={48}
            shape={series.length === 1
              ? (props: BarShapeProps) => {
                  const { x, y, width, height, index } = props
                  const fill = DATA_COLOURS[(index ?? 0) % DATA_COLOURS.length]
                  return <rect x={x} y={y} width={width} height={height} fill={fill} rx={2} />
                }
              : undefined
            }
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
