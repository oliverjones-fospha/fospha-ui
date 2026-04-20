"use client"

import * as React from "react"
import { FosphaLogo } from "@/components/fospha/icons"
import { CoreIcon, HaloIcon, GlowIcon, BeamIcon, PrismIcon, SparkIcon } from "@/components/fospha/icons"

// ── Slide shell ───────────────────────────────────────────────

function Slide({ children, dark = false, className = "" }: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <section style={{
      width: "100%",
      aspectRatio: "16/9",
      background: dark ? "#0C1946" : "#FFFFFF",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      borderRadius: 8,
      boxShadow: "0 4px 24px rgba(12,25,70,0.12)",
    }} className={className}>
      {children}
    </section>
  )
}

// ── Slide header ──────────────────────────────────────────────

function SlideHeader({ dark = false, section = "", slideNum = "" }: {
  dark?: boolean
  section?: string
  slideNum?: string
}) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "28px 56px 0",
      flexShrink: 0,
    }}>
      <FosphaLogo height={16} variant={dark ? "white" : "colour"} />
      <div style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        fontFamily: "'Manrope', sans-serif",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: dark ? "rgba(255,255,255,0.4)" : "#525776",
      }}>
        {section && <span>{section}</span>}
        {section && slideNum && <span style={{ width: 1, height: 10, background: dark ? "rgba(255,255,255,0.2)" : "#E6DCD6" }} />}
        {slideNum && <span style={{ color: dark ? "#FFFFFF" : "#0C1946", fontVariantNumeric: "tabular-nums" }}>{slideNum}</span>}
      </div>
    </div>
  )
}

// ── Slide footer ──────────────────────────────────────────────

function SlideFooter({ dark = false, label = "Confidential" }: { dark?: boolean; label?: string }) {
  return (
    <div style={{
      position: "absolute",
      bottom: 20,
      left: 56,
      right: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Manrope', sans-serif",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: dark ? "rgba(255,255,255,0.25)" : "#AFAFAF",
    }}>
      <span>{label}</span>
      <span>fospha.com</span>
    </div>
  )
}

// ── Eyebrow ───────────────────────────────────────────────────

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: dark ? "rgba(255,255,255,0.5)" : "#525776",
      margin: 0,
    }}>
      {children}
    </p>
  )
}

// ── Product chip ──────────────────────────────────────────────

const PRODUCT_CONFIG = {
  core:  { label: "Core",     Icon: CoreIcon,  bg: "#F4F5FB", border: "#D4DBF7", color: "#1B45E4", mid: "#6787FE", darkBg: "rgba(27,69,228,0.18)",  darkBorder: "rgba(212,219,247,0.25)", darkColor: "#BFCBFB" },
  halo:  { label: "Halo",     Icon: HaloIcon,  bg: "#F0FAF5", border: "#BAE8D4", color: "#008048", mid: "#00E582", darkBg: "rgba(0,128,72,0.18)",    darkBorder: "rgba(186,232,212,0.25)", darkColor: "#8FE2BD" },
  glow:  { label: "Glow",     Icon: GlowIcon,  bg: "#FEF8E7", border: "#F3DE91", color: "#917308", mid: "#F5BF00", darkBg: "rgba(245,191,0,0.14)",   darkBorder: "rgba(243,222,145,0.25)", darkColor: "#F3DE91" },
  beam:  { label: "Beam",     Icon: BeamIcon,  bg: "#FBF4FB", border: "#F7D4F4", color: "#AD1FA1", mid: "#FF8AF5", darkBg: "rgba(173,31,161,0.18)",  darkBorder: "rgba(247,212,244,0.25)", darkColor: "#F7BFEF" },
  prism: { label: "Prism",    Icon: PrismIcon, bg: "#FEF4EC", border: "#F6D9C1", color: "#CC5C00", mid: "#FFAB66", darkBg: "rgba(204,92,0,0.18)",    darkBorder: "rgba(246,217,193,0.25)", darkColor: "#FFC79B" },
  spark: { label: "Spark AI", Icon: SparkIcon, bg: "#F6F2FD", border: "#DED6F5", color: "#7347EB", mid: "#A280FF", darkBg: "rgba(115,71,235,0.18)",  darkBorder: "rgba(222,214,245,0.25)", darkColor: "#C8BDF7" },
}

function ProductChip({ product, dark = false }: { product: keyof typeof PRODUCT_CONFIG; dark?: boolean }) {
  const cfg = PRODUCT_CONFIG[product]
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      borderRadius: 999,
      background: dark ? cfg.darkBg : cfg.bg,
      border: `1px solid ${dark ? cfg.darkBorder : cfg.border}`,
      fontFamily: "'Manrope', sans-serif",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: dark ? cfg.darkColor : cfg.color,
    }}>
      <cfg.Icon size={14} color={dark ? cfg.darkColor : cfg.mid} />
      {cfg.label}
    </div>
  )
}

// ── Stat block ────────────────────────────────────────────────

function StatBlock({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <div>
      <p style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontSize: 56,
        fontWeight: 700,
        color: dark ? "#FFFFFF" : "#0C1946",
        margin: "0 0 6px",
        lineHeight: 1,
        letterSpacing: "-0.03em",
      }}>
        {value}
      </p>
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: 13,
        color: dark ? "rgba(255,255,255,0.55)" : "#525776",
        margin: 0,
        lineHeight: 1.4,
        maxWidth: 160,
      }}>
        {label}
      </p>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// SLIDES
// ═══════════════════════════════════════════════════════════════

// ── Slide 1 — Cover ───────────────────────────────────────────

function CoverSlide() {
  return (
    <Slide dark>
      {/* Decorative bracket watermark */}
      <div style={{
        position: "absolute",
        right: -80,
        top: -40,
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 700,
        fontSize: 600,
        lineHeight: 1,
        color: "rgba(34,83,255,0.06)",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        [
      </div>

      <SlideHeader dark slideNum="01" />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 56px 56px" }}>
        <Eyebrow dark>Partner Intelligence Report · 2026</Eyebrow>

        <h1 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(40px, 5vw, 72px)",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          margin: "20px 0 24px",
          maxWidth: 680,
        }}>
          Know exactly what's driving your revenue
        </h1>

        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 16,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7,
          margin: "0 0 40px",
          maxWidth: 480,
        }}>
          Fospha gives marketers accurate, always-on attribution across every paid channel.
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 36 }}>
          <StatBlock value="£2.4B+" label="Ad spend measured annually" dark />
          <StatBlock value="3.2×"   label="Average ROAS uplift" dark />
          <StatBlock value="200+"   label="Commerce brands" dark />
          <StatBlock value="98%"    label="Signal coverage" dark />
        </div>
      </div>

      <SlideFooter dark />
    </Slide>
  )
}

// ── Slide 2 — Problem ─────────────────────────────────────────

function ProblemSlide() {
  const problems = [
    { icon: "🍪", title: "Cookie deprecation", body: "Third-party cookies are gone. Last-click models are blind to 60–70% of the customer journey." },
    { icon: "📊", title: "Siloed channel data", body: "Every platform reports its own numbers. No single view of what's actually driving revenue." },
    { icon: "💸", title: "Misallocated budget", body: "Without accurate attribution, brands over-invest in easily measurable channels and starve upper funnel." },
  ]

  return (
    <Slide>
      <SlideHeader section="The Problem" slideNum="02" />

      <div style={{ flex: 1, padding: "32px 56px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Eyebrow>Why attribution is broken</Eyebrow>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 700,
          color: "#0C1946",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "16px 0 36px",
          maxWidth: 600,
        }}>
          Marketers are flying blind in a cookie-less world
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {problems.map((p) => (
            <div key={p.title} style={{
              background: "#F6F2EF",
              border: "1px solid #E6DCD6",
              borderRadius: 10,
              padding: 28,
            }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#0C1946",
                margin: "0 0 10px",
              }}>
                {p.title}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                color: "#525776",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </Slide>
  )
}

// ── Slide 3 — Product suite ───────────────────────────────────

function ProductSlide() {
  const products: { key: keyof typeof PRODUCT_CONFIG; description: string }[] = [
    { key: "core",  description: "Daily, ad-level measurement across every paid channel" },
    { key: "halo",  description: "Quantify cross-channel halo effects on revenue" },
    { key: "glow",  description: "Prove that brand investment drives performance" },
    { key: "beam",  description: "Forecast incremental returns by channel and tactic" },
    { key: "prism", description: "Turn measurement into automated budget actions" },
    { key: "spark", description: "AI-powered recommendations that save time" },
  ]

  return (
    <Slide>
      <SlideHeader section="Our Platform" slideNum="03" />

      <div style={{ flex: 1, padding: "24px 56px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Eyebrow>The Fospha product suite</Eyebrow>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(24px, 3vw, 40px)",
          fontWeight: 700,
          color: "#0C1946",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "14px 0 28px",
        }}>
          Six products. One measurement platform.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {products.map(({ key, description }) => {
            const cfg = PRODUCT_CONFIG[key]
            return (
              <div key={key} style={{
                background: cfg.bg,
                border: `1px solid ${cfg.border}`,
                borderRadius: 10,
                padding: "20px 22px",
              }}>
                <div style={{ marginBottom: 12 }}>
                  <ProductChip product={key} />
                </div>
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 13,
                  color: "#474747",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <SlideFooter />
    </Slide>
  )
}

// ── Slide 4 — Stats / social proof ────────────────────────────

function StatsSlide() {
  return (
    <Slide dark>
      <SlideHeader dark section="Results" slideNum="04" />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 56px 56px" }}>
        <Eyebrow dark>What our customers see</Eyebrow>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "16px 0 40px",
          maxWidth: 560,
        }}>
          Real results from brands like yours
        </h2>

        {/* 2×2 stat grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 700 }}>
          {[
            { value: "+63%",  label: "Avg. TikTok spend increase after adopting Fospha", accent: "#2253FF" },
            { value: "4.1×",  label: "Median measured ROAS on TikTok via Fospha",        accent: "#00CBBD" },
            { value: "91%",   label: "Customers who retained or grew budgets at renewal", accent: "#FEB453" },
            { value: "+38%",  label: "Revenue attributed to channels vs last-click",      accent: "#C7BEFD" },
          ].map((s) => (
            <div key={s.value} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "24px 28px",
              borderLeft: `3px solid ${s.accent}`,
            }}>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 48,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 8px",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
                margin: 0,
                lineHeight: 1.5,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter dark />
    </Slide>
  )
}

// ── Slide 5 — Customer quote ───────────────────────────────────

function QuoteSlide() {
  return (
    <Slide>
      <SlideHeader section="Customer Story" slideNum="05" />

      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 56px 56px" }}>
        <div style={{ maxWidth: 760 }}>
          {/* PT Serif pull quote */}
          <p style={{
            fontFamily: "'PT Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 2.5vw, 32px)",
            lineHeight: 1.5,
            color: "#0C1946",
            margin: "0 0 32px",
            letterSpacing: "-0.005em",
          }}>
            "Fospha gave us visibility we simply didn't have before. We could finally see which channels were genuinely driving revenue — and it completely changed how we allocate our budget."
          </p>

          {/* Attribution */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#2253FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#FFFFFF",
              flexShrink: 0,
            }}>
              SM
            </div>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, fontWeight: 700, color: "#0C1946", margin: 0 }}>
                Sarah Mitchell
              </p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#525776", margin: 0 }}>
                VP Marketing · Gymshark
              </p>
            </div>
            <div style={{ width: 1, height: 32, background: "#E6DCD6", margin: "0 8px" }} />
            <div style={{
              background: "#CDFEE1",
              border: "1px solid #BAE8D4",
              borderRadius: 6,
              padding: "4px 12px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: "#0C5132",
            }}>
              +3.8× ROAS
            </div>
          </div>
        </div>

        {/* Right: stat callout */}
        <div style={{
          marginLeft: "auto",
          flexShrink: 0,
          background: "#F3EDE9",
          border: "1px solid #E6DCD6",
          borderRadius: 12,
          padding: "32px 36px",
          textAlign: "center",
          minWidth: 200,
        }}>
          <p style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: 64,
            fontWeight: 700,
            color: "#0C1946",
            margin: "0 0 8px",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}>
            £1.2M
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 12,
            color: "#525776",
            margin: 0,
            lineHeight: 1.5,
          }}>
            Additional revenue<br />identified in 90 days
          </p>
        </div>
      </div>

      <SlideFooter />
    </Slide>
  )
}

// ── Slide 6 — CTA ─────────────────────────────────────────────

function CTASlide() {
  return (
    <Slide dark>
      {/* CTA gradient accent bar */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: "linear-gradient(to right, #26ACFF, #6538FF)",
      }} />

      <SlideHeader dark slideNum="06" />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 56px 56px" }}>
        <Eyebrow dark>Get started</Eyebrow>

        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(32px, 4vw, 60px)",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          margin: "20px 0 20px",
          maxWidth: 640,
        }}>
          Ready to see the full picture?
        </h2>

        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 16,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7,
          margin: "0 0 40px",
          maxWidth: 440,
        }}>
          Join 200+ brands using Fospha to measure what matters and grow faster.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={{
            padding: "12px 28px",
            background: "linear-gradient(to right, #26ACFF, #6538FF)",
            color: "#FFFFFF",
            fontFamily: "'Manrope', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}>
            Request a demo
          </button>
          <button style={{
            padding: "12px 28px",
            background: "transparent",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "'Manrope', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 6,
            cursor: "pointer",
          }}>
            View case studies
          </button>
        </div>

        {/* Logo row */}
        <div style={{ marginTop: 52, display: "flex", gap: 40, alignItems: "center" }}>
          {["ASOS", "Gymshark", "Charlotte Tilbury", "Huel", "Represent"].map((brand) => (
            <span key={brand} style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "-0.01em",
            }}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      <SlideFooter dark label="fospha.com" />
    </Slide>
  )
}

// ═══════════════════════════════════════════════════════════════
// DECK PAGE
// ═══════════════════════════════════════════════════════════════

export default function DeckPage() {
  const [current, setCurrent] = React.useState(0)

  const slides = [
    { label: "Cover",          component: <CoverSlide />   },
    { label: "Problem",        component: <ProblemSlide /> },
    { label: "Product Suite",  component: <ProductSlide /> },
    { label: "Results",        component: <StatsSlide />   },
    { label: "Customer Story", component: <QuoteSlide />   },
    { label: "CTA",            component: <CTASlide />     },
  ]

  return (
    <div style={{ background: "#0C1946", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Deck nav */}
      <div style={{
        background: "rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexShrink: 0,
      }}>
        <FosphaLogo height={14} variant="white" />
        <div style={{ display: "flex", gap: 6 }}>
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                padding: "5px 12px",
                borderRadius: 4,
                border: "none",
                background: i === current ? "#2253FF" : "rgba(255,255,255,0.08)",
                color: i === current ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                fontFamily: "'Manrope', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {i + 1}. {s.label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            style={{
              padding: "5px 14px",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 12,
              cursor: current === 0 ? "default" : "pointer",
              opacity: current === 0 ? 0.3 : 1,
            }}
          >
            ← Prev
          </button>
          <button
            onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
            disabled={current === slides.length - 1}
            style={{
              padding: "5px 14px",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 12,
              cursor: current === slides.length - 1 ? "default" : "pointer",
              opacity: current === slides.length - 1 ? 0.3 : 1,
            }}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Slide viewer */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
        <div style={{ width: "100%", maxWidth: 1100 }}>
          {slides[current].component}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div style={{
        background: "rgba(0,0,0,0.3)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 32px",
        display: "flex",
        gap: 12,
        overflowX: "auto",
        flexShrink: 0,
      }}>
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              flexShrink: 0,
              width: 140,
              padding: 0,
              border: `2px solid ${i === current ? "#2253FF" : "rgba(255,255,255,0.1)"}`,
              borderRadius: 6,
              overflow: "hidden",
              cursor: "pointer",
              background: "none",
            }}
          >
            <div style={{ transform: "scale(0.145)", transformOrigin: "top left", width: 965, height: 543, pointerEvents: "none" }}>
              {s.component}
            </div>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 10,
              color: i === current ? "#FFFFFF" : "rgba(255,255,255,0.4)",
              margin: 0,
              padding: "4px 8px",
              textAlign: "center",
              background: i === current ? "rgba(34,83,255,0.3)" : "transparent",
            }}>
              {i + 1}. {s.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
