"use client"

import { FosphaButton }  from "@/components/fospha/button"
import { KPICard }       from "@/components/fospha/kpi-card"
import { EyebrowLabel }  from "@/components/fospha/eyebrow-label"
import { DataTable, type Column, type Row } from "@/components/fospha/data-table"
import { ChartCard, FosphaLineChart, FosphaBarChart, FosphaDonutChart, FosphaAreaChart } from "@/components/fospha/chart-card"
import { FosphaTabs } from "@/components/fospha/tabs"
import { Badge }      from "@/components/fospha/badge"
import { DSSidebar }  from "@/components/fospha/ds-sidebar"
import { CoreIcon, HaloIcon, GlowIcon, BeamIcon, PrismIcon, SparkIcon, FosphaLogo, FosphaLogomark } from "@/components/fospha/icons"
import { HeroSection, CTABanner } from "@/components/fospha/marketing"
import { TestimonialSection, FAQSection, ComparisonTable, TimelineSection, VideoSection, TeamSection, AwardStrip } from "@/components/fospha/marketing-2"

// ── Sample data ────────────────────────────────────────────────

const revenueByMonth = [
  { month: "Oct", revenue: 310000, spend: 78000 },
  { month: "Nov", revenue: 355000, spend: 84000 },
  { month: "Dec", revenue: 410000, spend: 92000 },
  { month: "Jan", revenue: 378000, spend: 88000 },
  { month: "Feb", revenue: 395000, spend: 91000 },
  { month: "Mar", revenue: 442000, spend: 99800 },
]

const roasByChannel = [
  { channel: "Email",       roas: 12.0 },
  { channel: "Affiliate",   roas: 7.0  },
  { channel: "Paid Social", roas: 6.8  },
  { channel: "Display",     roas: 6.0  },
  { channel: "Paid Search", roas: 5.0  },
]

const tableColumns: Column[] = [
  { key: "campaign", label: "Campaign",       sortable: true },
  { key: "channel",  label: "Channel",        sortable: true },
  { key: "spend",    label: "Spend",          sortable: true, align: "right" },
  { key: "roas",     label: "ROAS",           sortable: true, align: "right" },
  { key: "change",   label: "vs Last Period", sortable: true, align: "right" },
  { key: "status",   label: "Status" },
]

const statusColours: Record<string, { textColor: string; bgColor: string }> = {
  Active: { textColor: "#0C5132", bgColor: "#CDFEE1" },
  Paused: { textColor: "#917308", bgColor: "#FEF8E7" },
  Ended:  { textColor: "#525776", bgColor: "#F6F2EF" },
}

const tableData: Row[] = [
  { id: 1, campaign: { type: "bold", text: "Brand Awareness Q2" }, channel: "Paid Social", spend: "£12,400", roas: { type: "bold", text: "6.8×" }, change: { type: "sentiment", value: 12  }, status: { type: "badge", text: "Active", ...statusColours.Active } },
  { id: 2, campaign: { type: "bold", text: "Retargeting — BOFU"  }, channel: "Display",     spend: "£8,200",  roas: { type: "bold", text: "6.0×" }, change: { type: "sentiment", value: -3  }, status: { type: "badge", text: "Active", ...statusColours.Active } },
  { id: 3, campaign: { type: "bold", text: "Video — Summer Sale" }, channel: "YouTube",     spend: "£6,800",  roas: { type: "bold", text: "4.0×" }, change: { type: "sentiment", value: -14 }, status: { type: "badge", text: "Paused", ...statusColours.Paused } },
  { id: 4, campaign: { type: "bold", text: "Email Re-engagement" }, channel: "Email",       spend: "£1,200",  roas: { type: "bold", text: "12×"  }, change: { type: "sentiment", value: 21  }, status: { type: "badge", text: "Active", ...statusColours.Active } },
]

const spendByChannel = [
  { name: "Paid Social", value: 38 },
  { name: "Paid Search", value: 26 },
  { name: "Display",     value: 16 },
  { name: "Affiliate",   value: 12 },
  { name: "Email",       value: 8  },
]

const cumulativeRevenue = [
  { month: "Oct", revenue: 310000, target: 300000 },
  { month: "Nov", revenue: 355000, target: 330000 },
  { month: "Dec", revenue: 410000, target: 370000 },
  { month: "Jan", revenue: 378000, target: 400000 },
  { month: "Feb", revenue: 395000, target: 420000 },
  { month: "Mar", revenue: 442000, target: 440000 },
]

const fmtGBP  = (v: number) => `£${(v / 1000).toFixed(0)}K`
const fmtROAS = (v: number) => `${v}×`
const fmtPct  = (v: number) => `${v}%`

// ── Section wrapper with anchor id ────────────────────────────

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 56 }}>
      <div style={{
        borderBottom: "1px solid #E6DCD6",
        paddingBottom: 12,
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        <EyebrowLabel>{title}</EyebrowLabel>
      </div>
      {children}
    </section>
  )
}

// ── Swatch ─────────────────────────────────────────────────────

function Swatch({ hex, name }: { hex: string; name: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{
        width: 64,
        height: 64,
        borderRadius: 8,
        background: hex,
        border: "1px solid #E6DCD6",
      }} />
      <p style={{ fontSize: 11, color: "#525776", margin: 0, fontFamily: "'Manrope',sans-serif" }}>{name}</p>
      <p style={{ fontSize: 10, color: "#AFAFAF", margin: 0, fontFamily: "'Manrope',sans-serif" }}>{hex}</p>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────

export default function DesignSystemPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <DSSidebar />

      {/* Main content */}
      <main style={{
        flex: 1,
        background: "#FFFFFF",
        padding: "48px 48px 80px 48px",
        overflowY: "auto",
      }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <EyebrowLabel>Fospha UI</EyebrowLabel>
          <h1 style={{ marginTop: 12, marginBottom: 8 }}>Fospha Design System</h1>
          <p style={{ color: "#525776", fontSize: 16, maxWidth: 640 }}>
            The single source of truth for Fospha's brand, components, and product patterns.
            Use this reference when briefing designers, building campaigns, or generating
            assets with AI — everything here is approved, on-brand, and ready to use.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            <a href="/campaign" target="_blank" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#2253FF", textDecoration: "none" }}>
              View campaign page →
            </a>
            <span style={{ color: "#E6DCD6" }}>|</span>
            <a href="/dashboard" target="_blank" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#2253FF", textDecoration: "none" }}>
              View dashboard →
            </a>
            <span style={{ color: "#E6DCD6" }}>|</span>
            <a href="/docs" target="_blank" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#2253FF", textDecoration: "none" }}>
              Component docs →
            </a>
            <span style={{ color: "#E6DCD6" }}>|</span>
            <a href="/deck" target="_blank" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#2253FF", textDecoration: "none" }}>
              Slide deck →
            </a>
          </div>
        </div>

        {/* ── Logo ── */}
        <Section id="logo" title="Logo">
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Full logo variants */}
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 16 }}>Full Logo</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  { label: "Colour — on white",  bg: "#FFFFFF",  border: "#E6DCD6", variant: "colour" as const },
                  { label: "White — on dark",    bg: "#0C1946",  border: "#0C1946", variant: "white"  as const },
                  { label: "Dark — on cream",    bg: "#F3EDE9",  border: "#E6DCD6", variant: "dark"   as const },
                ].map(({ label, bg, border, variant }) => (
                  <div key={variant} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{
                      padding: "24px 32px",
                      borderRadius: 8,
                      background: bg,
                      border: `1px solid ${border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 220,
                    }}>
                      <FosphaLogo height={20} variant={variant} />
                    </div>
                    <p style={{ fontSize: 11, color: "#525776", fontFamily: "'Manrope',sans-serif", margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Logomark variants */}
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 16 }}>Logomark</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  { label: "Colour — on white", bg: "#FFFFFF", border: "#E6DCD6", variant: "colour" as const },
                  { label: "White — on dark",   bg: "#0C1946", border: "#0C1946", variant: "white"  as const },
                  { label: "Dark — on cream",   bg: "#F3EDE9", border: "#E6DCD6", variant: "dark"   as const },
                ].map(({ label, bg, border, variant }) => (
                  <div key={variant} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{
                      width: 96,
                      height: 96,
                      borderRadius: 8,
                      background: bg,
                      border: `1px solid ${border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <FosphaLogomark size={40} variant={variant} />
                    </div>
                    <p style={{ fontSize: 11, color: "#525776", fontFamily: "'Manrope',sans-serif", margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Section>

        {/* ── Colours — two-column layout ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

          {/* Left: standard colour sections */}
          <div>
            <Section id="colours" title="Colour — Primary">
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Swatch hex="#2253FF" name="Fospha Blue" />
                <Swatch hex="#0C1946" name="Dark Blue" />
                <Swatch hex="#FFFFFF" name="White" />
              </div>
            </Section>

            <Section title="Colour — Secondary">
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Swatch hex="#474747" name="Grey" />
                <Swatch hex="#F3EDE9" name="Cream" />
                <Swatch hex="#F6F2EF" name="Light Cream" />
                <Swatch hex="#E6DCD6" name="Dark Cream" />
                <Swatch hex="#525776" name="Muted Blue" />
                <Swatch hex="#E3EEFF" name="Light Blue" />
                <Swatch hex="#FFF3DA" name="Yellow" />
                <Swatch hex="#F9DCC4" name="Peach" />
              </div>
            </Section>

            <Section title="Colour — Data Palette">
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Swatch hex="#2253FF" name="Data Blue" />
                <Swatch hex="#C7BEFD" name="Data Light Blue" />
                <Swatch hex="#FEB453" name="Data Orange" />
                <Swatch hex="#00CBBD" name="Data Teal" />
                <Swatch hex="#FF86FC" name="Data Pink" />
                <Swatch hex="#707078" name="Neutral Dark" />
                <Swatch hex="#8C9196" name="Neutral Mid" />
              </div>
            </Section>

            <Section title="Colour — Sentiment">
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Swatch hex="#CDFEE1" name="Positive bg" />
                <Swatch hex="#318760" name="Positive icon" />
                <Swatch hex="#0C5132" name="Positive text" />
                <Swatch hex="#FDE9E7" name="Negative bg" />
                <Swatch hex="#EA4C2F" name="Negative icon" />
                <Swatch hex="#8E1F0B" name="Negative text" />
              </div>
            </Section>
          </div>

          {/* Right: product specific colours (sticky) */}
          <div style={{ position: "sticky", top: 32 }}>
            <Section title="Product Specific Colours">
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                {/* Core */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 8 }}>Core</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Swatch hex="#0C1946" name="Dark" />
                    <Swatch hex="#1B45E4" name="Mid" />
                    <Swatch hex="#C7D5FC" name="Light" />
                    <Swatch hex="#EEF2FF" name="Lighter" />
                  </div>
                </div>

                {/* Halo */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 8 }}>Halo</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Swatch hex="#003D24" name="Dark" />
                    <Swatch hex="#008048" name="Mid" />
                    <Swatch hex="#ABECC6" name="Light" />
                    <Swatch hex="#EDFBF3" name="Lighter" />
                  </div>
                </div>

                {/* Glow */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 8 }}>Glow</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Swatch hex="#4A3900" name="Dark" />
                    <Swatch hex="#917308" name="Mid" />
                    <Swatch hex="#F5D87A" name="Light" />
                    <Swatch hex="#FFFBEA" name="Lighter" />
                  </div>
                </div>

                {/* Beam */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 8 }}>Beam</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Swatch hex="#5A0F53" name="Dark" />
                    <Swatch hex="#AD1FA1" name="Mid" />
                    <Swatch hex="#F0ABEC" name="Light" />
                    <Swatch hex="#FDF0FC" name="Lighter" />
                  </div>
                </div>

                {/* Prism */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 8 }}>Prism</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Swatch hex="#5C2500" name="Dark" />
                    <Swatch hex="#CC5C00" name="Mid" />
                    <Swatch hex="#FBCFA0" name="Light" />
                    <Swatch hex="#FFF5EC" name="Lighter" />
                  </div>
                </div>

                {/* Spark AI */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 8 }}>Spark AI</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Swatch hex="#7347EB" name="Dark" />
                    <Swatch hex="#A280FF" name="Mid" />
                    <Swatch hex="#DED6F5" name="Light" />
                    <Swatch hex="#F6F2FD" name="Lighter" />
                  </div>
                </div>

              </div>
            </Section>
          </div>

        </div>

        {/* ── Typography ── */}
        <Section id="typography" title="Typography">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>Display / Hero — Bricolage Grotesque Regular 54px (bold emphasis via &lt;strong&gt;)</p>
              <h1 style={{ fontSize: 54, margin: 0, lineHeight: 1 }}>The quick <strong style={{ fontWeight: 700 }}>brown fox</strong></h1>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>H1 — Bricolage Grotesque Regular 40px</p>
              <h1 style={{ margin: 0 }}>Campaign Dashboard</h1>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>H2 — Bricolage Grotesque Regular 28px</p>
              <h2 style={{ margin: 0 }}>Section Heading</h2>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>H3 — Bricolage Grotesque Regular 24px</p>
              <h3 style={{ margin: 0 }}>Card Title</h3>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>Body Large — Manrope Regular 16px</p>
              <p style={{ fontSize: 16, color: "#474747", margin: 0 }}>Lead paragraph text for introductory copy and key messaging.</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>Body — Manrope Regular 14px</p>
              <p style={{ fontSize: 14, color: "#474747", margin: 0 }}>Standard body text used across all content areas in the product.</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>Eyebrow Label — Manrope Bold 11px uppercase</p>
              <EyebrowLabel>Section Label</EyebrowLabel>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 4 }}>Stat Callout — Bricolage Grotesque Bold 54px</p>
              <p className="fos-stat-number" style={{ margin: 0 }}>£4.2M</p>
              <p className="fos-stat-label">Total attributed revenue</p>
            </div>
          </div>
        </Section>

        {/* ── Buttons ── */}
        <Section id="buttons" title="Buttons">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <FosphaButton variant="primary">Primary</FosphaButton>
              <FosphaButton variant="secondary">Secondary</FosphaButton>
              <FosphaButton variant="ghost">Ghost</FosphaButton>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <FosphaButton variant="primary" size="sm">Small</FosphaButton>
              <FosphaButton variant="primary" size="md">Medium</FosphaButton>
              <FosphaButton variant="primary" size="lg">Large</FosphaButton>
            </div>
          </div>
        </Section>

        {/* ── KPI Cards ── */}
        <Section id="kpi-cards" title="KPI Cards">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
          }}>
            <KPICard label="Total Revenue"    value="£4.2M"  change="+12.4%" changeDirection="up"      description="vs last period" />
            <KPICard label="Total Spend"      value="£99.8K" change="+4.1%"  changeDirection="down"    description="vs last period" />
            <KPICard label="Blended ROAS"     value="4.4×"   change="+7.8%"  changeDirection="up"      description="vs last period" />
            <KPICard label="Active Campaigns" value="5"      description="of 7 total" />
          </div>
        </Section>

        {/* ── Tabs ── */}
        <Section id="tabs" title="Tabs">
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 12 }}>Underline variant (default)</p>
              <FosphaTabs
                tabs={[
                  { key: "overview",   label: "Overview",   count: 0  },
                  { key: "campaigns",  label: "Campaigns",  count: 7  },
                  { key: "analytics",  label: "Analytics"            },
                  { key: "channels",   label: "Channels",   count: 4  },
                ]}
              />
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 12 }}>Pill variant</p>
              <FosphaTabs
                variant="pill"
                tabs={[
                  { key: "7d",  label: "7 days"  },
                  { key: "30d", label: "30 days" },
                  { key: "90d", label: "90 days" },
                  { key: "ytd", label: "YTD"     },
                ]}
              />
            </div>
          </div>
        </Section>

        {/* ── Badges ── */}
        <Section id="badges" title="Badge / Tag">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 12 }}>Status variants</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Paused</Badge>
                <Badge variant="danger">Error</Badge>
                <Badge variant="neutral">Ended</Badge>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 12 }}>With dot indicator</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <Badge variant="success" dot>Live</Badge>
                <Badge variant="warning" dot>Pending</Badge>
                <Badge variant="danger"  dot>Failed</Badge>
                <Badge variant="neutral" dot>Archived</Badge>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 12 }}>Product ramps</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <Badge variant="core">Core</Badge>
                <Badge variant="halo">Halo</Badge>
                <Badge variant="glow">Glow</Badge>
                <Badge variant="beam">Beam</Badge>
                <Badge variant="prism">Prism</Badge>
                <Badge variant="spark">Spark AI</Badge>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 12 }}>Small size</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <Badge variant="success" size="sm">Active</Badge>
                <Badge variant="warning" size="sm">Paused</Badge>
                <Badge variant="neutral" size="sm">Ended</Badge>
              </div>
            </div>
          </div>
        </Section>

        {/* ── New charts ── */}
        <Section title="Charts — Donut &amp; Area">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <ChartCard title="Spend by Channel" description="Current period · % of total">
              <FosphaDonutChart
                data={spendByChannel}
                valueFormatter={fmtPct}
              />
            </ChartCard>
            <ChartCard title="Revenue vs Target" description="Last 6 months · cumulative">
              <FosphaAreaChart
                data={cumulativeRevenue}
                xKey="month"
                series={[
                  { key: "revenue", label: "Revenue" },
                  { key: "target",  label: "Target", colour: "#C7BEFD" },
                ]}
                yTickFormatter={fmtGBP}
                tooltipFormatter={fmtGBP}
              />
            </ChartCard>
          </div>
        </Section>

        {/* ── Existing charts ── */}
        <Section id="charts" title="Charts">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <ChartCard title="Revenue vs Spend" description="Last 6 months">
              <FosphaLineChart
                data={revenueByMonth}
                xKey="month"
                series={[
                  { key: "revenue", label: "Revenue" },
                  { key: "spend",   label: "Spend", colour: "#FEB453" },
                ]}
                yTickFormatter={fmtGBP}
                tooltipFormatter={fmtGBP}
              />
            </ChartCard>
            <ChartCard title="ROAS by Channel" description="Current period">
              <FosphaBarChart
                data={roasByChannel}
                xKey="channel"
                series={[{ key: "roas", label: "ROAS" }]}
                layout="vertical"
                yTickFormatter={fmtROAS}
                tooltipFormatter={fmtROAS}
                height={260}
              />
            </ChartCard>
          </div>
        </Section>

        {/* ── Data Table ── */}
        <Section id="data-table" title="Data Table">
          <DataTable
            columns={tableColumns}
            data={tableData}
            caption="Campaign Performance"
            defaultSortKey="roas"
            defaultSortDir="desc"
          />
        </Section>

        {/* ── Iconography ── */}
        <Section id="icons" title="Iconography">
          {(() => {
            const PRODUCT_ICONS = [
              { name: "Core",     description: "Daily, ad-level measurement",            Icon: CoreIcon,  iconColor: "#1B45E4", bg: "#F4F5FB", border: "#D4DBF7", textColor: "#1B45E4" },
              { name: "Halo",     description: "DTC, Amazon, and TikTok Shop",           Icon: HaloIcon,  iconColor: "#008048", bg: "#F0FAF5", border: "#BAE8D4", textColor: "#008048" },
              { name: "Glow",     description: "Prove that brand drives revenue",        Icon: GlowIcon,  iconColor: "#917308", bg: "#FEF8E7", border: "#F3DE91", textColor: "#917308" },
              { name: "Beam",     description: "Forecast incremental returns",           Icon: BeamIcon,  iconColor: "#AD1FA1", bg: "#FBF4FB", border: "#F7D4F4", textColor: "#AD1FA1" },
              { name: "Prism",    description: "Turn measurement into automated action", Icon: PrismIcon, iconColor: "#CC5C00", bg: "#FEF4EC", border: "#F6D9C1", textColor: "#CC5C00" },
              { name: "Spark AI", description: "Intelligence that sharpens insight",     Icon: SparkIcon, iconColor: "#7347EB", bg: "#F6F2FD", border: "#DED6F5", textColor: "#7347EB" },
            ]
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

                {/* Product Icons */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 16 }}>Product Icons</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 160px)", gap: 12 }}>
                    {PRODUCT_ICONS.map(({ name, description, Icon, iconColor, bg, border }) => (
                      <div key={name} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12 }}>
                        <Icon size={40} color={iconColor} />
                        <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, fontWeight: 700, color: "#0C1946", margin: 0 }}>{name}</p>
                        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "#525776", margin: 0, lineHeight: 1.5 }}>{description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icon Sizes */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 16 }}>Icon Sizes</p>
                  <div style={{ display: "flex", gap: 32, alignItems: "flex-end" }}>
                    {[16, 20, 24, 32, 40].map((size) => (
                      <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                        <CoreIcon size={size} color="#0C1946" />
                        <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: 11, color: "#AFAFAF", margin: 0 }}>{size}px</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icon Colours */}
                <div>
                  <p style={{ fontSize: 11, color: "#AFAFAF", fontFamily: "'Manrope',sans-serif", marginBottom: 16 }}>Icon Colours</p>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    {[
                      { color: "#0C1946", label: "Dark Blue",    bg: "#F6F2EF" },
                      { color: "#2253FF", label: "Fospha Blue",  bg: "#F6F2EF" },
                      { color: "#525776", label: "Muted Blue",   bg: "#F6F2EF" },
                      { color: "#FFFFFF", label: "White",        bg: "#0C1946" },
                    ].map(({ color, label, bg }) => (
                      <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                        <div style={{
                          width: 72,
                          height: 72,
                          borderRadius: 8,
                          background: bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: bg === "#F6F2EF" ? "1px solid #E6DCD6" : "none",
                        }}>
                          <CoreIcon size={32} color={color} />
                        </div>
                        <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: 11, color: "#525776", margin: 0 }}>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )
          })()}
        </Section>

        {/* ── Dark section ── */}
        <Section id="dark-bg" title="Dark Background">
          <div style={{ background: "#0C1946", borderRadius: 12, padding: 40 }}>
            <EyebrowLabel style={{ color: "#E3EEFF" }}>Dark background</EyebrowLabel>
            <h2 style={{ color: "#FFFFFF", margin: "12px 0 8px 0" }}>
              Headings are white on dark backgrounds
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 24, fontSize: 14 }}>
              Body copy uses rgba(255,255,255,0.85) minimum. Links use Fospha Light Blue.
              Large stat numbers must always be white — never a data colour.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginBottom: 32 }}>
              <FosphaButton variant="primary">Primary Button</FosphaButton>
              <FosphaButton variant="ghost" style={{ color: "#E3EEFF" }}>Ghost on Dark</FosphaButton>
            </div>
            {/* Stat callouts on dark */}
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { value: "£4.2M", label: "Total Revenue" },
                { value: "6.8×",  label: "Avg ROAS" },
                { value: "24",    label: "Active Campaigns" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 40, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>{value}</p>
                  <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "6px 0 0 0" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Marketing sections ── */}
        <Section id="marketing" title="Marketing — Hero Section">
          <HeroSection
            eyebrow="The Measurement OS for online retail"
            headline={<>Measurement that <strong style={{ fontWeight: 700 }}>changes what happens next.</strong></>}
            subheadline="Understand what's really driving your revenue — across every channel, campaign, and customer journey."
            primaryCta={{ label: "Request a demo", href: "#" }}
          />
        </Section>

        <Section title="Marketing — Timeline">
          <TimelineSection
            eyebrow="How it works"
            headline={<>From data to <strong style={{ fontWeight: 700 }}>decisions</strong> in minutes</>}
            steps={[
              { number: "01", title: "Connect your channels", description: "Integrate all your marketing platforms in one click." },
              { number: "02", title: "Unified data model", description: "Fospha normalises and deduplicates your data automatically." },
              { number: "03", title: "Attribution insights", description: "See which touchpoints are actually driving conversions." },
              { number: "04", title: "Optimise & grow", description: "Reallocate budget with confidence based on real attribution." },
            ]}
          />
        </Section>

        <Section title="Marketing — Testimonials">
          <TestimonialSection
            eyebrow="Customer stories"
            headline={<>Trusted by <strong style={{ fontWeight: 700 }}>leading growth teams</strong></>}
            testimonials={[
              { quote: "Fospha completely changed how we allocate budget. We found 30% more revenue hiding in channels we'd been under-investing in.", name: "Sarah Chen", title: "VP Marketing", company: "Bloom & Wild" },
              { quote: "The attribution accuracy is unlike anything we've tried before. It's become the single source of truth for our performance team.", name: "James Okafor", title: "Head of Performance", company: "ASOS" },
              { quote: "Setup took less than a day and we had actionable insights within the first week. Incredible time to value.", name: "Priya Mehta", title: "Growth Lead", company: "Monzo" },
            ]}
          />
        </Section>

        <Section title="Marketing — Award Strip">
          <AwardStrip
            background="white"
            awards={[
              { title: "G2 Leader", body: "Winter 2024" },
              { title: "Best ROI", body: "MarTech Breakthrough" },
              { title: "Top Rated", body: "Capterra 2024" },
              { title: "#1 Attribution", body: "G2 Category Leader" },
            ]}
          />
        </Section>

        <Section title="Marketing — Comparison Table">
          <ComparisonTable
            eyebrow="Why Fospha"
            headline={<>See how we <strong style={{ fontWeight: 700 }}>compare</strong></>}
            tierNames={["Fospha", "Competitor A", "Competitor B"]}
            rows={[
              { feature: "Cross-channel attribution", tiers: [true,  false, false] },
              { feature: "Incrementality testing",    tiers: [true,  true,  false] },
              { feature: "Real-time reporting",       tiers: [true,  false, true]  },
              { feature: "First-party data ready",    tiers: [true,  false, false] },
              { feature: "No-code integrations",      tiers: [true,  true,  false] },
            ]}
          />
        </Section>

        <Section title="Marketing — Video">
          <VideoSection
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            background="dark"
            eyebrow="See it in action"
            headline={<>Watch Fospha <strong style={{ fontWeight: 700 }}>in 2 minutes</strong></>}
          />
        </Section>

        <Section title="Marketing — Team Grid">
          <TeamSection
            background="white"
            eyebrow="Our team"
            headline={<>The people <strong style={{ fontWeight: 700 }}>behind Fospha</strong></>}
            members={[
              { name: "Sam Carter",      title: "CEO" },
              { name: "Dom Devlin",      title: "CPO" },
              { name: "Tom Sheepshanks", title: "CRO" },
              { name: "Keith Robinson",  title: "CTO" },
            ]}
          />
        </Section>

        <Section title="Marketing — FAQ">
          <FAQSection
            columns={1}
            eyebrow="FAQ"
            headline={<>Common <strong style={{ fontWeight: 700 }}>questions</strong></>}
            items={[
              { question: "How long does onboarding take?",         answer: "Most customers are fully onboarded within 2 business days. Our team handles all the heavy lifting." },
              { question: "Does Fospha work without cookies?",      answer: "Yes. Fospha is built for a cookieless world, using first-party data and probabilistic modelling." },
              { question: "What channels does Fospha support?",     answer: "We support all major paid channels including Meta, Google, TikTok, Pinterest, Snapchat, and more." },
            ]}
          />
        </Section>

        <Section title="Marketing — CTA Banner">
          <CTABanner
            headline={<>Ready to find your <strong style={{ fontWeight: 700 }}>hidden revenue?</strong></>}
            subheadline="Join hundreds of growth teams using Fospha to make smarter budget decisions."
            primaryCta={{ label: "Book a demo", href: "#" }}
            secondaryCta={{ label: "Talk to sales", href: "#" }}
          />
        </Section>

      </main>
    </div>
  )
}
