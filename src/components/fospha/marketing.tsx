"use client"

import * as React from "react"
import { FosphaButton } from "@/components/fospha/button"
import { FosphaLogo } from "@/components/fospha/icons"
import { EyebrowLabel } from "@/components/fospha/eyebrow-label"
import { Badge, type BadgeVariant } from "@/components/fospha/badge"
import { CoreIcon, HaloIcon, GlowIcon, BeamIcon, PrismIcon, SparkIcon } from "@/components/fospha/icons"

// ============================================================
// FOSPHA MARKETING COMPONENTS
// All sections follow fospha.com visual style:
// - Dark hero (#0C1946)
// - Cream section backgrounds (#F3EDE9 / #F6F2EF)
// - Bricolage Grotesque headings
// - Approved CTA gradient for banners only
// ============================================================

// ── 1. Marketing Nav ─────────────────────────────────────────

interface MarketingNavProps {
  links?: { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
}

export function MarketingNav({
  links = [
    { label: "Product",    href: "#" },
    { label: "Solutions",  href: "#" },
    { label: "Customers",  href: "#" },
    { label: "Pricing",    href: "#" },
    { label: "Resources",  href: "#" },
  ],
  ctaLabel = "Get a demo",
  ctaHref  = "#",
}: MarketingNavProps) {
  return (
    <nav className="fos-nav" style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "#FFFFFF",
      borderBottom: "1px solid #E6DCD6",
      boxShadow: "0 1px 8px rgba(12,25,70,0.06)",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 40px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      {/* Logo */}
      <FosphaLogo height={20} variant="colour" />

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {links.map((link) => (
          <a key={link.label} href={link.href} style={{
            padding: "6px 12px",
            fontFamily: "'Manrope', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "#474747",
            textDecoration: "none",
            borderRadius: 6,
          }}>
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <FosphaButton variant="primary" size="sm">{ctaLabel}</FosphaButton>
      </div>
    </nav>
  )
}

// ── 2. Hero Section ───────────────────────────────────────────

interface HeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  badge?: string
}

export function HeroSection({
  eyebrow = "Marketing Attribution",
  headline = "Know exactly what's driving your revenue",
  subheadline = "Fospha gives you accurate, always-on measurement across every paid channel — so you can spend with confidence and grow faster.",
  primaryCta  = { label: "Get a demo", href: "#" },
  secondaryCta = { label: "See how it works", href: "#" },
  badge,
}: HeroProps) {
  return (
    <section style={{
      background: "#0C1946",
      padding: "96px 40px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {badge && (
          <div style={{ marginBottom: 20 }}>
            <Badge variant="default" style={{ background: "rgba(227,238,255,0.15)", color: "#E3EEFF" }}>
              {badge}
            </Badge>
          </div>
        )}

        {/* Eyebrow */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <EyebrowLabel style={{ color: "#E3EEFF" }}>{eyebrow}</EyebrowLabel>
        </div>

        {/* Headline — solid white, never gradient */}
        <h1 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(40px, 5vw, 64px)",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.1,
          margin: "0 0 24px 0",
          letterSpacing: "-0.02em",
        }}>
          {headline}
        </h1>

        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 18,
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.7,
          margin: "0 0 40px 0",
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          {subheadline}
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <FosphaButton variant="cta" size="lg">
            {primaryCta.label}
          </FosphaButton>
          <FosphaButton
            variant="ghost"
            size="lg"
            style={{ color: "#E3EEFF", borderColor: "rgba(227,238,255,0.3)", border: "1px solid rgba(227,238,255,0.3)" }}
          >
            {secondaryCta.label}
          </FosphaButton>
        </div>
      </div>
    </section>
  )
}

// ── 3. Stats Bar ──────────────────────────────────────────────

interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats: Stat[]
  background?: "dark" | "cream"
}

export function StatsBar({
  stats = [
    { value: "£2.4B+",  label: "Ad spend measured" },
    { value: "98%",     label: "Signal coverage" },
    { value: "3.2×",    label: "Average ROAS uplift" },
    { value: "200+",    label: "Brands trust Fospha" },
  ],
  background = "dark",
}: StatsBarProps) {
  const isDark = background === "dark"
  return (
    <section style={{
      background: "#0C1946",
      position: "relative",
      padding: "48px 40px",
      borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E6DCD6",
      borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E6DCD6",
    }}>
      {isDark && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.10)",
          pointerEvents: "none",
        }} />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          gap: 32,
          textAlign: "center",
        }}>
          {stats.map((stat, i) => (
            <div key={`stat-${i}`}>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 48,
                fontWeight: 700,
                color: isDark ? "#FFFFFF" : "#0C1946",
                margin: "0 0 8px 0",
                lineHeight: 1,
              }}>
                {stat.value}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 14,
                color: isDark ? "rgba(255,255,255,0.6)" : "#525776",
                margin: 0,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 4. Social Proof / Logo Bar ────────────────────────────────

interface LogoBarProps {
  eyebrow?: string
  logos?: { name: string; width?: number }[]
  background?: "white" | "cream"
}

export function LogoBar({
  eyebrow = "Trusted by the world's fastest-growing commerce brands",
  logos = [
    { name: "ASOS" },
    { name: "Gymshark" },
    { name: "MADE.COM" },
    { name: "Charlotte Tilbury" },
    { name: "Huel" },
    { name: "Represent" },
  ],
  background = "white",
}: LogoBarProps) {
  return (
    <section style={{
      background: background === "cream" ? "#F3EDE9" : "#FFFFFF",
      padding: "56px 40px",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: 13,
        fontWeight: 500,
        color: "#AFAFAF",
        letterSpacing: "0.04em",
        margin: "0 0 40px 0",
        textTransform: "uppercase",
      }}>
        {eyebrow}
      </p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
        flexWrap: "wrap",
        maxWidth: 1000,
        margin: "0 auto",
      }}>
        {logos.map((logo, i) => (
          <div key={`logo-${i}`} style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#AFAFAF",
            letterSpacing: "-0.02em",
            userSelect: "none",
          }}>
            {logo.name}
          </div>
        ))}
      </div>
    </section>
  )
}

// ── 5. Features Section ───────────────────────────────────────

interface Feature {
  eyebrow?: string
  title: string
  description: string
  icon?: React.ReactNode
}

interface FeaturesSectionProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  features: Feature[]
  columns?: 2 | 3
  background?: "white" | "cream"
}

export function FeaturesSection({
  eyebrow = "Why Fospha",
  headline = "The attribution platform built for modern commerce",
  subheadline,
  features,
  columns = 3,
  background = "white",
}: FeaturesSectionProps) {
  const PRODUCT_ICONS_MAP: Record<string, React.ReactNode> = {
    core:  <CoreIcon  size={18} color="#0C1946" />,
    halo:  <HaloIcon  size={18} color="#0C1946" />,
    glow:  <GlowIcon  size={18} color="#0C1946" />,
    beam:  <BeamIcon  size={18} color="#0C1946" />,
    prism: <PrismIcon size={18} color="#0C1946" />,
    spark: <SparkIcon size={18} color="#0C1946" />,
  }

  // DESIGN RULE: Product ramp backgrounds (lighter shades) must only be used
  // on WHITE section backgrounds. On cream backgrounds, use white cards with
  // a Dark Cream border instead. See Fospha Design System v1.1, Section 1.5.
  const PRODUCT_RAMPS: Record<string, { bg: string; color: string; border: string }> = {
    Core:  { bg: "#F4F5FB", color: "#1B45E4", border: "#D4DBF7" },
    Halo:  { bg: "#F0FAF5", color: "#008048", border: "#BAE8D4" },
    Glow:  { bg: "#FEF8E7", color: "#917308", border: "#F3DE91" },
    Beam:  { bg: "#FBF4FB", color: "#AD1FA1", border: "#F7D4F4" },
    Prism: { bg: "#FEF4EC", color: "#CC5C00", border: "#F6D9C1" },
    Spark: { bg: "#F6F2FD", color: "#7347EB", border: "#DED6F5" },
  }

  const getCardStyle = (i: number, eyebrow?: string): React.CSSProperties => {
    if (eyebrow && PRODUCT_RAMPS[eyebrow]) {
      return {
        background: PRODUCT_RAMPS[eyebrow].bg,
        border: `1px solid ${PRODUCT_RAMPS[eyebrow].border}`,
      }
    }
    if (background === "cream") {
      return { background: "#FFFFFF", border: "1px solid #E6DCD6" }
    }
    const blockBgs = ["#E3EEFF", "#FFF3DA", "#F9DCC4", "#F3EDE9"]
    return { background: blockBgs[i % blockBgs.length], border: "none" }
  }

  return (
    <section style={{
      background: background === "cream" ? "#F3EDE9" : "#FFFFFF",
      padding: "96px 40px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <EyebrowLabel style={{ justifyContent: "center" }}>{eyebrow}</EyebrowLabel>
          <h2 style={{ marginTop: 16, marginBottom: subheadline ? 16 : 0, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            {headline}
          </h2>
          {subheadline && (
            <p style={{ fontSize: 16, color: "#525776", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
              {subheadline}
            </p>
          )}
        </div>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 24,
        }}>
          {features.map((feature, i) => (
            <div key={`feature-${i}`} style={{
              ...getCardStyle(i, feature.eyebrow),
              borderRadius: 12,
              padding: 32,
            }}>
              {feature.icon && (
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgba(34,83,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: "#2253FF",
                }}>
                  {feature.icon}
                </div>
              )}
              {feature.eyebrow && (
                <div style={{ marginBottom: 16 }}>
                  <Badge
                    variant={feature.eyebrow.toLowerCase() as BadgeVariant}
                    icon={PRODUCT_ICONS_MAP[feature.eyebrow.toLowerCase()]}
                    style={{ fontSize: 14, padding: "6px 12px", fontWeight: 600 }}
                  >
                    {feature.eyebrow}
                  </Badge>
                </div>
              )}
              <h3 style={{
                margin: "0 0 12px 0",
                fontSize: 20,
                color: (() => {
                  const key = Object.keys(PRODUCT_RAMPS).find(
                    k => k.toLowerCase() === (feature.eyebrow ?? '').toLowerCase()
                  )
                  return key ? PRODUCT_RAMPS[key].color : '#0C1946'
                })(),
              }}>
                {feature.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#525776", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 6. Case Study Cards ───────────────────────────────────────

interface CaseStudy {
  brand: string
  category: string
  result: string
  resultLabel: string
  quote?: string
  background?: string
}

interface CaseStudySectionProps {
  eyebrow?: string
  headline?: string
  cases: CaseStudy[]
}

export function CaseStudySection({
  eyebrow = "Customer Stories",
  headline = "See what Fospha does for brands like yours",
  cases,
}: CaseStudySectionProps) {
  return (
    <section style={{
      background: "#FFFFFF",
      padding: "96px 40px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <EyebrowLabel>{eyebrow}</EyebrowLabel>
          <h2 style={{ marginTop: 16 }}>{headline}</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {cases.map((c, i) => (
            <div key={`case-${i}`} style={{
              background: c.background ?? "#F3EDE9",
              borderRadius: 12,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}>
              {/* Brand + category */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0C1946",
                  margin: 0,
                }}>
                  {c.brand}
                </p>
                <Badge
                  variant="neutral"
                  style={{
                    background: '#FFFFFF',
                    color: '#525776',
                    border: '1px solid #E6DCD6',
                  }}
                >
                  {c.category}
                </Badge>
              </div>

              {/* Result */}
              <div>
                <p style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#0C1946",
                  margin: "0 0 4px 0",
                  lineHeight: 1,
                }}>
                  {c.result}
                </p>
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 13,
                  color: "#525776",
                  margin: 0,
                }}>
                  {c.resultLabel}
                </p>
              </div>

              {/* Quote */}
              {c.quote && (
                <p style={{
                  fontFamily: "'PT Serif', serif",
                  fontStyle: "italic",
                  fontSize: 15,
                  color: "#474747",
                  lineHeight: 1.7,
                  margin: 0,
                  borderTop: "1px solid rgba(12,25,70,0.1)",
                  paddingTop: 20,
                }}>
                  "{c.quote}"
                </p>
              )}

              <a href="#" style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#2253FF",
                textDecoration: "none",
                marginTop: "auto",
              }}>
                Read case study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 7. Pricing Section ────────────────────────────────────────

interface PricingTier {
  name: string
  price?: string
  period?: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

interface PricingSectionProps {
  eyebrow?: string
  headline?: string
  tiers: PricingTier[]
}

export function PricingSection({
  eyebrow = "Pricing",
  headline = "Simple, transparent pricing",
  tiers,
}: PricingSectionProps) {
  return (
    <section style={{
      background: "#F3EDE9",
      padding: "96px 40px",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <EyebrowLabel style={{ justifyContent: "center" }}>{eyebrow}</EyebrowLabel>
          <h2 style={{ marginTop: 16 }}>{headline}</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${tiers.length}, 1fr)`,
          gap: 24,
          alignItems: "start",
        }}>
          {tiers.map((tier, i) => (
            <div key={`tier-${i}`} style={{
              background: tier.highlighted ? "#0C1946" : "#FFFFFF",
              borderRadius: 12,
              padding: 36,
              border: tier.highlighted ? "none" : "1px solid #E6DCD6",
              position: "relative",
            }}>
              {tier.highlighted && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)" }}>
                  <Badge variant="primary">Most Popular</Badge>
                </div>
              )}

              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: tier.highlighted ? "rgba(255,255,255,0.6)" : "#525776",
                margin: "0 0 16px 0",
              }}>
                {tier.name}
              </p>

              {tier.price ? (
                <div style={{ marginBottom: 8 }}>
                  <span style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 48,
                    fontWeight: 700,
                    color: tier.highlighted ? "#FFFFFF" : "#0C1946",
                    lineHeight: 1,
                  }}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 14,
                      color: tier.highlighted ? "rgba(255,255,255,0.5)" : "#AFAFAF",
                      marginLeft: 6,
                    }}>
                      {tier.period}
                    </span>
                  )}
                </div>
              ) : (
                <p style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: tier.highlighted ? "#FFFFFF" : "#0C1946",
                  margin: "0 0 8px 0",
                }}>
                  Custom
                </p>
              )}

              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 14,
                color: tier.highlighted ? "rgba(255,255,255,0.65)" : "#525776",
                margin: "0 0 28px 0",
                lineHeight: 1.6,
              }}>
                {tier.description}
              </p>

              <FosphaButton
                variant={tier.highlighted ? "primary" : "secondary"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {tier.cta}
              </FosphaButton>

              <ul style={{
                margin: "28px 0 0 0",
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}>
                {tier.features.map((f, fi) => (
                  <li key={`feat-${fi}`} style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 14,
                    color: tier.highlighted ? "rgba(255,255,255,0.8)" : "#474747",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}>
                    <span style={{ color: tier.highlighted ? "#00CBBD" : "#318760", flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 8. CTA Banner ─────────────────────────────────────────────

interface CTABannerProps {
  headline: string
  subheadline?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTABanner({
  headline = "Ready to see the full picture?",
  subheadline = "Join 200+ brands using Fospha to measure what matters and grow faster.",
  primaryCta  = { label: "Get a demo", href: "#" },
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="fos-cta-gradient" style={{ padding: "96px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          color: "#FFFFFF",
          fontSize: "clamp(32px, 4vw, 48px)",
          margin: "0 0 20px 0",
        }}>
          {headline}
        </h2>
        {subheadline && (
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.85)",
            margin: "0 0 40px 0",
            lineHeight: 1.7,
          }}>
            {subheadline}
          </p>
        )}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <FosphaButton
            variant="secondary"
            size="lg"
            style={{ background: "#FFFFFF", color: "#0C1946" }}
          >
            {primaryCta.label}
          </FosphaButton>
          {secondaryCta && (
            <FosphaButton
              variant="ghost"
              size="lg"
              style={{ color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              {secondaryCta.label}
            </FosphaButton>
          )}
        </div>
      </div>
    </section>
  )
}

// ── 9. Footer ─────────────────────────────────────────────────

export function MarketingFooter() {
  return (
    <footer style={{
      background: "#0C1946",
      padding: "64px 40px 40px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 64,
        }}>
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <FosphaLogo height={16} variant="white" />
            </div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 280 }}>
              The marketing attribution platform for modern commerce brands.
            </p>
          </div>

          {/* Link cols */}
          {[
            { heading: "Product",  links: ["Core", "Halo", "Glow", "Beam", "Prism"] },
            { heading: "Company",  links: ["About", "Careers", "Blog", "Press"] },
            { heading: "Resources",links: ["Docs", "Case Studies", "Webinars", "API"] },
          ].map((col) => (
            <div key={col.heading}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.4)", margin: "0 0 16px 0" }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © {new Date().getFullYear()} Fospha. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
