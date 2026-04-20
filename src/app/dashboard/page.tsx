"use client"

import { KPICard }       from "@/components/fospha/kpi-card"
import { EyebrowLabel }  from "@/components/fospha/eyebrow-label"
import { FosphaTabs }    from "@/components/fospha/tabs"
import { DataTable, type Column, type Row } from "@/components/fospha/data-table"
import { ChartCard, FosphaLineChart, FosphaBarChart, FosphaDonutChart, FosphaAreaChart } from "@/components/fospha/chart-card"
import * as React from "react"

// ── Colour helpers ─────────────────────────────────────────────
const POS  = { textColor: "#0C5132", bgColor: "#CDFEE1" }
const NEG  = { textColor: "#8E1F0B", bgColor: "#FDE9E7" }
const NEUT = { textColor: "#525776", bgColor: "#F6F2EF" }

// ── Chart data ─────────────────────────────────────────────────

const revenueByMonth = [
  { month: "Oct", revenue: 310000, spend: 78000  },
  { month: "Nov", revenue: 355000, spend: 84000  },
  { month: "Dec", revenue: 410000, spend: 92000  },
  { month: "Jan", revenue: 378000, spend: 88000  },
  { month: "Feb", revenue: 395000, spend: 91000  },
  { month: "Mar", revenue: 442000, spend: 99800  },
]

const forecastData = [
  { month: "Oct", actual: 310000, forecast: 300000 },
  { month: "Nov", actual: 355000, forecast: 330000 },
  { month: "Dec", actual: 410000, forecast: 370000 },
  { month: "Jan", actual: 378000, forecast: 400000 },
  { month: "Feb", actual: 395000, forecast: 420000 },
  { month: "Mar", actual: 442000, forecast: 440000 },
  { month: "Apr", actual: null,   forecast: 465000 },
  { month: "May", actual: null,   forecast: 490000 },
  { month: "Jun", actual: null,   forecast: 520000 },
]

const attributionData = [
  { name: "Paid Social",  value: 38 },
  { name: "Paid Search",  value: 26 },
  { name: "Display",      value: 16 },
  { name: "Affiliate",    value: 12 },
  { name: "Email",        value: 8  },
]

const roasByChannel = [
  { channel: "Email",       roas: 12.0 },
  { channel: "Affiliate",   roas: 7.0  },
  { channel: "Paid Social", roas: 6.8  },
  { channel: "Display",     roas: 6.0  },
  { channel: "Paid Search", roas: 5.0  },
  { channel: "YouTube",     roas: 4.0  },
]

const timelineData = [
  { week: "W1",  meta: 84000,  search: 62000, display: 38000 },
  { week: "W2",  meta: 91000,  search: 65000, display: 35000 },
  { week: "W3",  meta: 78000,  search: 70000, display: 42000 },
  { week: "W4",  meta: 95000,  search: 68000, display: 39000 },
  { week: "W5",  meta: 102000, search: 72000, display: 44000 },
  { week: "W6",  meta: 98000,  search: 75000, display: 41000 },
  { week: "W7",  meta: 110000, search: 78000, display: 46000 },
  { week: "W8",  meta: 118000, search: 80000, display: 48000 },
]

const fmtGBP  = (v: number) => `£${(v / 1000).toFixed(0)}K`
const fmtROAS = (v: number) => `${v}×`
const fmtPct  = (v: number) => `${v}%`

// ── Campaign table ─────────────────────────────────────────────

const campaignColumns: Column[] = [
  { key: "campaign", label: "Campaign",       sortable: true },
  { key: "channel",  label: "Channel",        sortable: true },
  { key: "spend",    label: "Spend",          sortable: true, align: "right" },
  { key: "revenue",  label: "Revenue",        sortable: true, align: "right" },
  { key: "roas",     label: "ROAS",           sortable: true, align: "right" },
  { key: "change",   label: "vs Last Period", sortable: true, align: "right" },
  { key: "status",   label: "Status" },
]

const campaignData: Row[] = [
  { id: 1, campaign: { type: "bold", text: "Brand Awareness Q2"  }, channel: "Paid Social",  spend: "£12,400", revenue: "£84,320",  roas: { type: "bold", text: "6.8×" }, change: { type: "sentiment", value: 12  }, status: { type: "badge", text: "Active", ...POS } },
  { id: 2, campaign: { type: "bold", text: "Retargeting — BOFU"  }, channel: "Display",      spend: "£8,200",  revenue: "£49,200",  roas: { type: "bold", text: "6.0×" }, change: { type: "sentiment", value: -3  }, status: { type: "badge", text: "Active", ...POS } },
  { id: 3, campaign: { type: "bold", text: "Prospecting UK"      }, channel: "Paid Search",  spend: "£22,100", revenue: "£110,500", roas: { type: "bold", text: "5.0×" }, change: { type: "sentiment", value: 8   }, status: { type: "badge", text: "Active", ...POS } },
  { id: 4, campaign: { type: "bold", text: "Video — Summer Sale" }, channel: "YouTube",      spend: "£6,800",  revenue: "£27,200",  roas: { type: "bold", text: "4.0×" }, change: { type: "sentiment", value: -14 }, status: { type: "badge", text: "Paused", ...{ textColor: "#917308", bgColor: "#FEF8E7" } } },
  { id: 5, campaign: { type: "bold", text: "Affiliate — Tier 1"  }, channel: "Affiliate",    spend: "£4,100",  revenue: "£28,700",  roas: { type: "bold", text: "7.0×" }, change: { type: "sentiment", value: 0   }, status: { type: "badge", text: "Active", ...POS } },
  { id: 6, campaign: { type: "bold", text: "Email Re-engagement" }, channel: "Email",        spend: "£1,200",  revenue: "£14,400",  roas: { type: "bold", text: "12×"  }, change: { type: "sentiment", value: 21  }, status: { type: "badge", text: "Active", ...POS } },
]

// ── Budget allocation table ────────────────────────────────────

const budgetColumns: Column[] = [
  { key: "channel",      label: "Channel",       sortable: true },
  { key: "currentSpend", label: "Current Spend", sortable: true, align: "right" },
  { key: "recommended",  label: "Recommended",   sortable: true, align: "right" },
  { key: "delta",        label: "Δ Spend",        sortable: true, align: "right" },
  { key: "currentIROAS", label: "Current iROAS",  sortable: true, align: "right" },
  { key: "expectedIROAS",label: "Expected iROAS", sortable: true, align: "right" },
  { key: "revenueDelta", label: "Revenue Δ",      sortable: true, align: "right" },
  { key: "action",       label: "Action" },
]

const budgetData: Row[] = [
  { id: 1, channel: { type: "bold", text: "Meta Prospecting"      }, currentSpend: "£42K", recommended: "£31K", delta: { type: "sentiment", value: -11 }, currentIROAS: "2.1×", expectedIROAS: { type: "bold", text: "2.04×" }, revenueDelta: { type: "badge", text: "−£22K", ...NEG  }, action: { type: "badge", text: "↓ Reduce",    ...NEG  } },
  { id: 2, channel: { type: "bold", text: "Meta Retargeting"      }, currentSpend: "£18K", recommended: "£26K", delta: { type: "sentiment", value: 8   }, currentIROAS: "3.8×", expectedIROAS: { type: "bold", text: "4.01×" }, revenueDelta: { type: "badge", text: "+£32K", ...POS  }, action: { type: "badge", text: "↑ Increase",  ...POS  } },
  { id: 3, channel: { type: "bold", text: "Google Brand Search"   }, currentSpend: "£12K", recommended: "£12K", delta: { type: "sentiment", value: 0   }, currentIROAS: "5.2×", expectedIROAS: { type: "bold", text: "5.2×"  }, revenueDelta: { type: "badge", text: "—",     ...NEUT }, action: { type: "badge", text: "No change",   ...NEUT } },
  { id: 4, channel: { type: "bold", text: "Google Non-Brand"      }, currentSpend: "£24K", recommended: "£22K", delta: { type: "sentiment", value: -3  }, currentIROAS: "2.8×", expectedIROAS: { type: "bold", text: "2.77×" }, revenueDelta: { type: "badge", text: "−£7K",  ...NEG  }, action: { type: "badge", text: "↓ Reduce",    ...NEG  } },
  { id: 5, channel: { type: "bold", text: "PMax"                  }, currentSpend: "£28K", recommended: "£20K", delta: { type: "sentiment", value: -8  }, currentIROAS: "2.3×", expectedIROAS: { type: "bold", text: "2.23×" }, revenueDelta: { type: "badge", text: "−£18K", ...NEG  }, action: { type: "badge", text: "↓ Reduce",    ...NEG  } },
  { id: 6, channel: { type: "bold", text: "TikTok Prospecting"    }, currentSpend: "£8K",  recommended: "£15K", delta: { type: "sentiment", value: 7   }, currentIROAS: "1.9×", expectedIROAS: { type: "bold", text: "2.22×" }, revenueDelta: { type: "badge", text: "+£14K", ...POS  }, action: { type: "badge", text: "↑ Increase",  ...POS  } },
  { id: 7, channel: { type: "bold", text: "YouTube"               }, currentSpend: "£10K", recommended: "£17K", delta: { type: "sentiment", value: 7   }, currentIROAS: "1.6×", expectedIROAS: { type: "bold", text: "1.9×"  }, revenueDelta: { type: "badge", text: "+£13K", ...POS  }, action: { type: "badge", text: "↑ Increase",  ...POS  } },
  { id: "total", isTotal: true, channel: { type: "bold", text: "TOTAL" }, currentSpend: "£142K", recommended: "£142K", delta: { type: "sentiment", value: 0 }, currentIROAS: "2.7×", expectedIROAS: { type: "bold", text: "3.0×" }, revenueDelta: { type: "badge", text: "+£5K", ...POS }, action: "" },
]

// ── Channel health scorecard ───────────────────────────────────

const channelHealth = [
  { channel: "Paid Social",  score: 87, trend: 4,   roas: "6.8×", coverage: "96%",  status: "Healthy"  },
  { channel: "Paid Search",  score: 74, trend: -2,  roas: "5.0×", coverage: "99%",  status: "Healthy"  },
  { channel: "Display",      score: 61, trend: -8,  roas: "6.0×", coverage: "82%",  status: "Review"   },
  { channel: "Affiliate",    score: 79, trend: 1,   roas: "7.0×", coverage: "91%",  status: "Healthy"  },
  { channel: "Email",        score: 93, trend: 6,   roas: "12×",  coverage: "100%", status: "Healthy"  },
  { channel: "YouTube",      score: 52, trend: -12, roas: "4.0×", coverage: "74%",  status: "At Risk"  },
]

const healthColumns: Column[] = [
  { key: "channel",  label: "Channel",  sortable: true },
  { key: "score",    label: "Score",    sortable: true, align: "right" },
  { key: "trend",    label: "Trend",    sortable: true, align: "right" },
  { key: "roas",     label: "ROAS",     sortable: true, align: "right" },
  { key: "coverage", label: "Coverage", sortable: true, align: "right" },
  { key: "status",   label: "Status" },
]

const healthData: Row[] = channelHealth.map((r, i) => ({
  id: i,
  channel:  { type: "bold", text: r.channel },
  score:    r.score,
  trend:    { type: "sentiment", value: r.trend },
  roas:     r.roas,
  coverage: r.coverage,
  status: {
    type: "badge",
    text: r.status,
    ...(r.status === "Healthy"  ? POS  :
        r.status === "At Risk"  ? NEG  : NEUT),
  },
}))

// ── Incrementality results ────────────────────────────────────

const incrColumns: Column[] = [
  { key: "channel",    label: "Channel",     sortable: true },
  { key: "testPeriod", label: "Test Period",  sortable: true },
  { key: "lift",       label: "Incremental Lift", sortable: true, align: "right" },
  { key: "confidence", label: "Confidence",  sortable: true, align: "right" },
  { key: "iROAS",      label: "iROAS",       sortable: true, align: "right" },
  { key: "verdict",    label: "Verdict" },
]

const incrData: Row[] = [
  { id: 1, channel: { type: "bold", text: "Meta Prospecting"   }, testPeriod: "Jan–Feb 2026", lift: { type: "sentiment", value: 18  }, confidence: "94%", iROAS: { type: "bold", text: "2.1×"  }, verdict: { type: "badge", text: "Incremental",     ...POS  } },
  { id: 2, channel: { type: "bold", text: "Google Non-Brand"   }, testPeriod: "Feb 2026",     lift: { type: "sentiment", value: 12  }, confidence: "88%", iROAS: { type: "bold", text: "2.8×"  }, verdict: { type: "badge", text: "Incremental",     ...POS  } },
  { id: 3, channel: { type: "bold", text: "YouTube"            }, testPeriod: "Dec–Jan 2026", lift: { type: "sentiment", value: -4  }, confidence: "71%", iROAS: { type: "bold", text: "1.6×"  }, verdict: { type: "badge", text: "Low confidence",  ...NEUT } },
  { id: 4, channel: { type: "bold", text: "Display Retargeting"}, testPeriod: "Mar 2026",     lift: { type: "sentiment", value: 6   }, confidence: "91%", iROAS: { type: "bold", text: "3.2×"  }, verdict: { type: "badge", text: "Incremental",     ...POS  } },
  { id: 5, channel: { type: "bold", text: "PMax"               }, testPeriod: "Feb–Mar 2026", lift: { type: "sentiment", value: -8  }, confidence: "85%", iROAS: { type: "bold", text: "2.3×"  }, verdict: { type: "badge", text: "Non-incremental", ...NEG  } },
]

// ── Page ───────────────────────────────────────────────────────

export default function DashboardPage() {
  const [dateRange, setDateRange] = React.useState("30d")
  const [activeTab, setActiveTab] = React.useState("overview")

  return (
    <div style={{ minHeight: "100vh" }}>
      <main style={{ padding: "32px", maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Page header ── */}
        <div style={{ marginBottom: 24, display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <EyebrowLabel>Performance Overview</EyebrowLabel>
            <h1 style={{ marginTop: 8, marginBottom: 4 }}>Campaign Dashboard</h1>
            <p style={{ color: "#525776", fontSize: 14 }}>All channels · Last 30 days</p>
          </div>
          <FosphaTabs
            variant="pill"
            activeKey={dateRange}
            onChange={setDateRange}
            tabs={[
              { key: "7d",  label: "7 days"  },
              { key: "30d", label: "30 days" },
              { key: "90d", label: "90 days" },
              { key: "ytd", label: "YTD"     },
            ]}
          />
        </div>

        {/* ── Page tabs ── */}
        <div style={{ marginBottom: 32 }}>
          <FosphaTabs
            activeKey={activeTab}
            onChange={setActiveTab}
            tabs={[
              { key: "overview",       label: "Overview"            },
              { key: "attribution",    label: "Attribution"         },
              { key: "budget",         label: "Budget Allocation"   },
              { key: "incrementality", label: "Incrementality"      },
            ]}
          />
        </div>

        {/* ── KPI row ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
          <KPICard label="Total Revenue"    value="£442K"  change="+12.4%" changeDirection="up"   description="vs last period" />
          <KPICard label="Total Spend"      value="£99.8K" change="+4.1%"  changeDirection="down" description="vs last period" />
          <KPICard label="Blended ROAS"     value="4.4×"   change="+7.8%"  changeDirection="up"   description="vs last period" />
          <KPICard label="Active Campaigns" value="5"      description="of 7 total" />
          <KPICard label="CAC"              value="£38"    change="-8.2%"  changeDirection="up"   description="vs last period" />
        </div>

        {/* ── Revenue vs Spend + Attribution donut ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          <ChartCard title="Revenue vs Spend" description="Last 6 months">
            <FosphaLineChart
              data={revenueByMonth} xKey="month"
              series={[
                { key: "revenue", label: "Revenue" },
                { key: "spend",   label: "Spend", colour: "#FEB453" },
              ]}
              yTickFormatter={fmtGBP}
              tooltipFormatter={fmtGBP}
            />
          </ChartCard>
          <ChartCard title="Attribution by Channel" description="Current period · % of revenue">
            <FosphaDonutChart
              data={attributionData}
              valueFormatter={fmtPct}
            />
          </ChartCard>
        </div>

        {/* ── Forecast vs Actual + Campaign timeline ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          <ChartCard title="Forecast vs Actual Revenue" description="Oct 2025 – Jun 2026">
            <FosphaAreaChart
              data={forecastData.filter(d => d.actual !== null)} xKey="month"
              series={[
                { key: "actual",   label: "Actual"   },
                { key: "forecast", label: "Forecast", colour: "#C7BEFD" },
              ]}
              yTickFormatter={fmtGBP}
              tooltipFormatter={fmtGBP}
            />
          </ChartCard>
          <ChartCard title="Campaign Performance Timeline" description="Revenue by channel · last 8 weeks">
            <FosphaLineChart
              data={timelineData} xKey="week"
              series={[
                { key: "meta",    label: "Meta"   },
                { key: "search",  label: "Search",  colour: "#FEB453" },
                { key: "display", label: "Display", colour: "#00CBBD" },
              ]}
              yTickFormatter={fmtGBP}
              tooltipFormatter={fmtGBP}
            />
          </ChartCard>
        </div>

        {/* ── ROAS by channel bar ── */}
        <div style={{ marginBottom: 32 }}>
          <ChartCard title="ROAS by Channel" description="Current period · sorted by performance">
            <FosphaBarChart
              data={roasByChannel} xKey="channel"
              series={[{ key: "roas", label: "ROAS" }]}
              layout="vertical"
              height={280}
              yTickFormatter={fmtROAS}
              tooltipFormatter={fmtROAS}
            />
          </ChartCard>
        </div>

        {/* ── Budget allocation table ── */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ marginBottom: 16 }}>
            <EyebrowLabel>Recommended Reallocation</EyebrowLabel>
            <h2 style={{ marginTop: 8, marginBottom: 4 }}>Next Week's Recommended Budget Allocation</h2>
            <p style={{ color: "#525776", fontSize: 14 }}>Based on Fospha's incremental measurement. Total budget unchanged at £142K. Max shift capped at 15%.</p>
          </div>
          <DataTable
            columns={budgetColumns}
            data={budgetData}
            defaultSortKey="channel"
            defaultSortDir="asc"
          />
        </div>

        {/* ── Channel health scorecard ── */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ marginBottom: 16 }}>
            <EyebrowLabel>Channel Health</EyebrowLabel>
            <h2 style={{ marginTop: 8, marginBottom: 4 }}>Channel Health Scorecard</h2>
            <p style={{ color: "#525776", fontSize: 14 }}>Signal quality, coverage and incremental performance by channel.</p>
          </div>
          <DataTable
            columns={healthColumns}
            data={healthData}
            defaultSortKey="score"
            defaultSortDir="desc"
          />
        </div>

        {/* ── Incrementality results ── */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ marginBottom: 16 }}>
            <EyebrowLabel>Incrementality</EyebrowLabel>
            <h2 style={{ marginTop: 8, marginBottom: 4 }}>Incrementality Test Results</h2>
            <p style={{ color: "#525776", fontSize: 14 }}>Controlled experiments measuring true incremental lift by channel.</p>
          </div>
          <DataTable
            columns={incrColumns}
            data={incrData}
            defaultSortKey="confidence"
            defaultSortDir="desc"
          />
        </div>

        {/* ── Campaign performance table ── */}
        <DataTable
          columns={campaignColumns}
          data={campaignData}
          caption="Campaign Performance"
          defaultSortKey="roas"
          defaultSortDir="desc"
        />

      </main>
    </div>
  )
}
