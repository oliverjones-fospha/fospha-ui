"use client"

import * as React from "react"
import { FosphaLogo } from "@/components/fospha/icons"
import { CoreIcon, HaloIcon, GlowIcon, BeamIcon, PrismIcon, SparkIcon } from "@/components/fospha/icons"
import { Cookie, Layers, TrendingDown } from "lucide-react"

// ── Helpers ───────────────────────────────────────────────────

function hexGlow(hex: string, alpha = 0.4, size = 20): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `0 0 ${size}px rgba(${r}, ${g}, ${b}, ${alpha})`
}

// ── Secondary colour palette ──────────────────────────────────
// Rule: light surfaces → dark blue text; dark surfaces → white text.

const SEC = {
  grey:       { bg: "#474747", text: "#FFFFFF", muted: "rgba(255,255,255,0.6)" },
  cream:      { bg: "#F3EDE9", text: "#0C1946", muted: "#525776" },
  lightCream: { bg: "#F6F2EF", text: "#0C1946", muted: "#525776" },
  darkCream:  { bg: "#E6DCD6", text: "#0C1946", muted: "#525776" },
  mutedBlue:  { bg: "#525776", text: "#FFFFFF", muted: "rgba(255,255,255,0.6)" },
  lightBlue:  { bg: "#E3EEFF", text: "#0C1946", muted: "#525776" },
  yellow:     { bg: "#FFF3DA", text: "#0C1946", muted: "#525776" },
  peach:      { bg: "#F9DCC4", text: "#0C1946", muted: "#525776" },
} as const

// ── Slide shell ───────────────────────────────────────────────

const GRADIENT_BG = "radial-gradient(ellipse 85% 65% at 50% 50%, #FFFFFF 0%, #F6F2EF 30%, #F3EDE9 65%, #E6DCD6 100%)"

function Slide({ children, dark = false, gradient = false, className = "" }: {
  children: React.ReactNode
  dark?: boolean
  gradient?: boolean
  className?: string
}) {
  const bg = gradient ? GRADIENT_BG : dark ? "#0C1946" : "#FFFFFF"
  return (
    <section style={{
      width: "100%",
      aspectRatio: "16/9",
      background: bg,
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

// ── Image placeholder (cover grid) ────────────────────────────

function ImagePlaceholder({ label, src, style }: { label: string; src?: string; style?: React.CSSProperties }) {
  if (src) {
    return (
      <div style={{
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #E6DCD6",
        ...style,
      }}>
        <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    )
  }

  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E6DCD6",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "16px 12px",
      ...style,
    }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7BEFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: 9, fontWeight: 700, letterSpacing: "1.2px",
        textTransform: "uppercase", color: "#0C1946", margin: 0, textAlign: "center",
      }}>{label}</p>
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: 9, color: "#525776", margin: 0, textAlign: "center", lineHeight: 1.4,
      }}>Replace with customer<br/>photography</p>
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
    <Slide gradient>
      <SlideHeader slideNum="01" />

      {/* Two-column body */}
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        padding: "24px 56px 56px",
        minHeight: 0,
      }}>

        {/* Left — headline + byline */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 40 }}>
          <Eyebrow>The Measurement OS for online retail</Eyebrow>

          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(30px, 3.8vw, 54px)",
            fontWeight: 400,
            color: "#0C1946",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: "20px 0 0",
          }}>
            Most measurement tells you{" "}
            <strong style={{ fontWeight: 700 }}>what happened.</strong>
            <br />
            Fospha changes{" "}
            <strong style={{ fontWeight: 700 }}>what happens next.</strong>
          </h1>

        </div>

        {/* Right — diagonal 4-image grid: small TL, large BL, large TR, small BR */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: 10,
          minHeight: 0,
        }}>
          <ImagePlaceholder label="Gymshark"     src="https://cdn.prod.website-files.com/68385b31d7418dca829caf03/690e08a98f2db7a4d0c83f16_asset-gymshark.avif"                        style={{ gridColumn: 1, gridRow: 1 }} />
          <ImagePlaceholder label="Gymshark"     src="https://cdn.prod.website-files.com/68385b31d7418dca829caf03/69723aec551cb6f361ac94ff_asset-customer-gymshark.jpg"             style={{ gridColumn: 1, gridRow: "2 / 4" }} />
          <ImagePlaceholder label="Hero"         src="https://cdn.prod.website-files.com/68385b31d7418dca829caf03/68625b18b65835d91d989269_hero.avif"                                  style={{ gridColumn: 2, gridRow: "1 / 3" }} />
          <ImagePlaceholder label="Dyson"        src="https://cdn.prod.website-files.com/68385b31d7418dca829caf03/68cd265cd59db68189821dc1_dyson.avif"                        style={{ gridColumn: 2, gridRow: 3 }} />
        </div>
      </div>

      {/* Footer */}
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
        color: "#525776",
      }}>
        <span>Confidential</span>
        <span>fospha.com</span>
      </div>
    </Slide>
  )
}

// ── Slide 2 — Problem ─────────────────────────────────────────

function ProblemSlide() {
  const problems = [
    { Icon: Cookie,      colour: SEC.lightBlue, title: "Cookie deprecation", body: "Third-party cookies are gone. Last-click models are blind to 60–70% of the customer journey." },
    { Icon: Layers,      colour: SEC.yellow,    title: "Siloed channel data", body: "Every platform reports its own numbers. No single view of what's actually driving revenue." },
    { Icon: TrendingDown, colour: SEC.peach,    title: "Misallocated budget", body: "Without accurate attribution, brands over-invest in easily measurable channels and starve upper funnel." },
  ]

  return (
    <Slide>
      <SlideHeader section="The Problem" slideNum="02" />

      <div style={{ flex: 1, padding: "32px 56px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Eyebrow>Why attribution is broken</Eyebrow>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 400,
          color: "#0C1946",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "16px 0 36px",
          maxWidth: 600,
        }}>
          Marketers are <strong style={{ fontWeight: 700 }}>flying blind</strong> in a cookie-less world
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {problems.map((p) => (
            <div key={p.title} style={{
              background: p.colour.bg,
              borderRadius: 10,
              padding: 28,
            }}>
              <div style={{ marginBottom: 16 }}>
                <p.Icon size={24} color={p.colour.text} strokeWidth={1.5} />
              </div>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: p.colour.text,
                margin: "0 0 10px",
              }}>
                {p.title}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                color: p.colour.muted,
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
          fontWeight: 400,
          color: "#0C1946",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "14px 0 28px",
        }}>
          Six products. <strong style={{ fontWeight: 700 }}>One measurement platform.</strong>
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
                {/* White badge with product-light border */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#FFFFFF",
                  border: `1px solid ${cfg.border}`,
                  borderRadius: 10,
                  padding: "8px 14px",
                  marginBottom: 16,
                  boxShadow: hexGlow(cfg.mid),
                }}>
                  <cfg.Icon size={18} color={cfg.mid} />
                  <span style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0C1946",
                    letterSpacing: "0.01em",
                  }}>
                    {cfg.label}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 13,
                  color: "#0C1946",
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
    <Slide>
      <SlideHeader section="Results" slideNum="04" />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 56px 56px" }}>
        <Eyebrow>What our customers see</Eyebrow>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 400,
          color: "#0C1946",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "16px 0 40px",
          maxWidth: 560,
        }}>
          <strong style={{ fontWeight: 700 }}>Real results</strong> from brands like yours
        </h2>

        {/* 2×2 stat grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { value: "+63%", label: "Avg. TikTok spend increase after adopting Fospha", colour: SEC.peach     },
            { value: "4.1×", label: "Median measured ROAS on TikTok via Fospha",        colour: SEC.lightBlue },
            { value: "91%",  label: "Customers who retained or grew budgets at renewal", colour: SEC.yellow    },
            { value: "+38%", label: "Revenue attributed to channels vs last-click",      colour: SEC.cream     },
          ].map((s) => (
            <div key={s.value} style={{
              background: s.colour.bg,
              borderRadius: 10,
              padding: "24px 28px",
            }}>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 48,
                fontWeight: 700,
                color: s.colour.text,
                margin: "0 0 8px",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 12,
                color: s.colour.muted,
                margin: 0,
                lineHeight: 1.5,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
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
    <Slide>
      {/* CTA gradient accent bar */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, height: 4,
        background: "linear-gradient(to right, #26ACFF, #6538FF)",
      }} />

      <SlideHeader slideNum="06" />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 56px 56px" }}>
        <Eyebrow>Get started</Eyebrow>

        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(32px, 4vw, 60px)",
          fontWeight: 400,
          color: "#0C1946",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          margin: "20px 0 20px",
          maxWidth: 640,
        }}>
          Ready to see the <strong style={{ fontWeight: 700 }}>full picture?</strong>
        </h2>

        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 16,
          color: "#525776",
          lineHeight: 1.7,
          margin: "0 0 40px",
          maxWidth: 440,
        }}>
          Join 200+ brands using Fospha to measure what matters and grow faster.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={{
            padding: "12px 28px",
            background: "linear-gradient(to right, #26ACFF, #6538FF)",
            color: "#FFFFFF",
            fontFamily: "'Manrope', sans-serif",
            fontSize: 14, fontWeight: 600,
            border: "none", borderRadius: 6, cursor: "pointer",
          }}>
            Request a demo
          </button>
          <button style={{
            padding: "12px 28px",
            background: "transparent",
            color: "#525776",
            fontFamily: "'Manrope', sans-serif",
            fontSize: 14, fontWeight: 600,
            border: "1px solid #E6DCD6",
            borderRadius: 6, cursor: "pointer",
          }}>
            View case studies
          </button>
        </div>

        <div style={{ marginTop: 52, display: "flex", gap: 40, alignItems: "center" }}>
          {["ASOS", "Gymshark", "Charlotte Tilbury", "Huel", "Represent"].map((brand) => (
            <span key={brand} style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 14, fontWeight: 700,
              color: "#D0CBCA",
              letterSpacing: "-0.01em",
            }}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      <SlideFooter label="fospha.com" />
    </Slide>
  )
}

// ── Block colour slide (split half-and-half template) ─────────

type BlockVariant = "dark" | "blue" | "slate" | "cream"

const BLOCK_CONFIG: Record<BlockVariant, {
  panelBg: string
  panelText: string
  panelMuted: string
  placeholderBorder: string
  logoVariant: "colour" | "white"
  label: string
}> = {
  dark:  { panelBg: "#0C1946", panelText: "#FFFFFF",   panelMuted: "rgba(255,255,255,0.45)", placeholderBorder: "rgba(255,255,255,0.25)", logoVariant: "white",  label: "Dark Navy"    },
  blue:  { panelBg: "#2253FF", panelText: "#FFFFFF",   panelMuted: "rgba(255,255,255,0.55)", placeholderBorder: "rgba(255,255,255,0.35)", logoVariant: "white",  label: "Fospha Blue"  },
  slate: { panelBg: "#525776", panelText: "#FFFFFF",   panelMuted: "rgba(255,255,255,0.55)", placeholderBorder: "rgba(255,255,255,0.3)",  logoVariant: "white",  label: "Muted Blue"   },
  cream: { panelBg: "#F3EDE9", panelText: "#0C1946",   panelMuted: "#525776",                placeholderBorder: "#E6DCD6",                logoVariant: "colour", label: "Cream"        },
}

function BlockColorSlide({
  variant,
  slideNum,
  section,
  title,
  titleEmphasis,
  body,
}: {
  variant: BlockVariant
  slideNum: string
  section?: string
  title: string
  titleEmphasis?: string
  body: string
}) {
  const cfg = BLOCK_CONFIG[variant]

  return (
    <Slide>
      {/* Full-bleed absolute split so the colour panel runs edge-to-edge */}
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr" }}>

        {/* Left — white panel with header / content / footer */}
        <div style={{ display: "flex", flexDirection: "column", padding: "28px 48px 24px 56px" }}>

          {/* Header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexShrink: 0, marginBottom: 0,
          }}>
            <FosphaLogo height={16} variant="colour" />
            <div style={{
              display: "flex", gap: 16, alignItems: "center",
              fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "1.5px", textTransform: "uppercase", color: "#525776",
            }}>
              {section && <span>{section}</span>}
              {section && slideNum && <span style={{ width: 1, height: 10, background: "#E6DCD6" }} />}
              {slideNum && <span style={{ color: "#0C1946", fontVariantNumeric: "tabular-nums" }}>{slideNum}</span>}
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(24px, 3vw, 42px)",
              fontWeight: 400,
              color: "#0C1946",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: "0 0 20px",
            }}>
              {title}{titleEmphasis && <> <strong style={{ fontWeight: 700 }}>{titleEmphasis}</strong></>}
            </h2>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 14, color: "#525776", lineHeight: 1.7,
              margin: 0, maxWidth: 360,
            }}>
              {body}
            </p>
          </div>

          {/* Footer */}
          <div style={{
            flexShrink: 0,
            display: "flex", justifyContent: "space-between",
            fontFamily: "'Manrope', sans-serif", fontSize: 10, fontWeight: 500,
            letterSpacing: "1px", textTransform: "uppercase", color: "#AFAFAF",
          }}>
            <span>Confidential</span>
            <span>fospha.com</span>
          </div>
        </div>

        {/* Right — full-height solid colour panel */}
        <div style={{
          background: cfg.panelBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", padding: 40,
        }}>
          {/* Image placeholder */}
          <div style={{
            width: "80%", aspectRatio: "4/3",
            border: `1.5px dashed ${cfg.placeholderBorder}`,
            borderRadius: 8,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 10,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={cfg.panelMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
              <circle cx="12" cy="13" r="3"/>
            </svg>
            <p style={{
              fontFamily: "'Manrope', sans-serif", fontSize: 11,
              color: cfg.panelMuted, margin: 0, letterSpacing: "0.5px",
            }}>
              Insert Picture (Fill)
            </p>
          </div>

          {/* Variant label */}
          <div style={{
            position: "absolute", bottom: 24, left: 24,
            fontFamily: "'Manrope', sans-serif", fontSize: 9, fontWeight: 700,
            letterSpacing: "1.5px", textTransform: "uppercase", color: cfg.panelMuted,
          }}>
            {cfg.label}
          </div>
        </div>
      </div>
    </Slide>
  )
}

// ── Case study slide ──────────────────────────────────────────

interface CaseStat {
  value: string
  label: string
  colour: typeof SEC[keyof typeof SEC]
}

function CaseStudySlide({
  slideNum,
  brand,
  body,
  stats,
  cardPosition = "bottom-left",
  bgSrc,
}: {
  slideNum: string
  brand: string
  body: string
  stats: CaseStat[]
  cardPosition?: "bottom-left" | "top-right" | "bottom-right"
  bgSrc?: string
}) {
  const cardStyle: React.CSSProperties =
    cardPosition === "bottom-left"  ? { bottom: 40, left: 40,  top: "auto",   right: "auto" } :
    cardPosition === "bottom-right" ? { bottom: 40, right: 40, top: "auto",   left: "auto"  } :
                                      { top: 40,    right: 40, bottom: "auto", left: "auto"  }

  return (
    <Slide>
      {/* Full-bleed background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {bgSrc ? (
          <img src={bgSrc} alt={brand} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: "linear-gradient(135deg, #8A939E 0%, #6B7280 50%, #9CA3AF 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, opacity: 0.35 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                <circle cx="12" cy="13" r="3"/>
              </svg>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "#FFFFFF", margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>
                Replace with customer photography
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Minimal top-left header */}
      <div style={{
        position: "absolute", top: 20, left: 28,
        display: "flex", gap: 10, alignItems: "center",
        fontFamily: "'Manrope', sans-serif", fontSize: 10, fontWeight: 700,
        letterSpacing: "1.5px", textTransform: "uppercase",
        color: "rgba(255,255,255,0.5)",
      }}>
        <FosphaLogo height={13} variant="white" />
      </div>

      {/* Slide number top-right */}
      <div style={{
        position: "absolute", top: 22, right: 28,
        fontFamily: "'Manrope', sans-serif", fontSize: 10, fontWeight: 700,
        letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)",
      }}>
        {slideNum}
      </div>

      {/* Case study card */}
      <div style={{
        position: "absolute",
        ...cardStyle,
        background: "rgba(12, 25, 70, 0.88)",
        backdropFilter: "blur(8px)",
        borderRadius: 16,
        padding: "32px 36px",
        maxWidth: "58%",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 24,
        alignItems: "start",
      }}>
        {/* Left: brand + body */}
        <div>
          <p style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(28px, 2.8vw, 44px)",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 16px",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}>
            {brand}
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            margin: 0,
          }}>
            {body}
          </p>
        </div>

        {/* Right: stat cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 160 }}>
          {stats.map((s) => (
            <div key={s.value} style={{
              background: s.colour.bg,
              borderRadius: 10,
              padding: "16px 20px",
            }}>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 40,
                fontWeight: 700,
                color: s.colour.text,
                margin: "0 0 4px",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 12,
                color: s.colour.muted,
                margin: 0,
                lineHeight: 1.4,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer page number */}
      <div style={{
        position: "absolute", bottom: 16, left: 28,
        fontFamily: "'Manrope', sans-serif", fontSize: 10, fontWeight: 500,
        letterSpacing: "1px", color: "rgba(255,255,255,0.35)",
      }}>
        {slideNum}
      </div>
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
    {
      label: "Block — Dark",
      component: <BlockColorSlide variant="dark" slideNum="07" section="Chapter 01"
        title="The measurement gap" titleEmphasis="is costing you."
        body="Most attribution models miss 60–70% of the customer journey. Fospha closes that gap with always-on, channel-level measurement built for modern commerce." />
    },
    {
      label: "Block — Blue",
      component: <BlockColorSlide variant="blue" slideNum="08" section="Solution"
        title="One platform." titleEmphasis="Complete visibility."
        body="Fospha unifies signal from every paid channel — search, social, affiliates, and more — into a single, decision-ready view of what's driving revenue." />
    },
    {
      label: "Block — Slate",
      component: <BlockColorSlide variant="slate" slideNum="09" section="How it works"
        title="Measurement that works" titleEmphasis="day one."
        body="No complex integrations. No waiting. Fospha connects to your existing ad accounts and starts returning accurate attribution data within 48 hours." />
    },
    {
      label: "Block — Cream",
      component: <BlockColorSlide variant="cream" slideNum="10" section="Outcomes"
        title="Grow faster with" titleEmphasis="confidence."
        body="Brands using Fospha see an average 3.2× ROAS uplift within 90 days — because every budget decision is backed by data you can trust." />
    },
    {
      label: "Case Study — Gymshark",
      component: <CaseStudySlide
        slideNum="11"
        brand="Gymshark"
        body="Fospha feeds Smartly. Budgets reallocate across Meta, TikTok, Snapchat and Pinterest in real time — no manual intervention."
        cardPosition="bottom-left"
        bgSrc="https://uk.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3JMCbRk2lmWe8JzvocrEd3%2Fb5361cb48a545b862e7ac3391adaee41%2F5x4_App_Coming_Soon_-_26126042.jpeg&w=3840&q=85"
        stats={[
          { value: "+13%", label: "cross-channel ROAS",  colour: SEC.lightBlue },
          { value: "+98%", label: "TikTok US revenue",   colour: SEC.peach     },
        ]}
      />
    },
    {
      label: "Case Study — Huel",
      component: <CaseStudySlide
        slideNum="12"
        brand="Huel®"
        body="Beam's saturation modelling identified a channel approaching diminishing returns. Reduced UK spend by 20% with no impact on revenue. Huel have used Fospha across $30M to $300M in growth — measurement at the heart of every budget decision."
        cardPosition="bottom-right"
        bgSrc="https://cdn.prod.website-files.com/68385b31d7418dca829caf13/6839cd41388a9b09c696230f_Frame%201000003746-2.png"
        stats={[
          { value: "20%", label: "spend reduction — zero revenue impact", colour: SEC.lightBlue },
        ]}
      />
    },
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
        justifyContent: "center",
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
            {/* Fixed-height clip so scale() doesn't push the layout */}
            <div style={{ width: 140, height: 79, overflow: "hidden", position: "relative", flexShrink: 0 }}>
              <div style={{ transform: "scale(0.145)", transformOrigin: "top left", width: 965, height: 543, pointerEvents: "none", position: "absolute", top: 0, left: 0 }}>
                {s.component}
              </div>
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
