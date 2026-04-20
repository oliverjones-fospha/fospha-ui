"use client"

import * as React from "react"
import { EyebrowLabel } from "@/components/fospha/eyebrow-label"
import { Badge } from "@/components/fospha/badge"
import { FosphaButton } from "@/components/fospha/button"

// ============================================================
// FOSPHA MARKETING COMPONENTS — Part 2
// Testimonials, FAQ, Comparison Table, Timeline,
// Video Embed, Team Grid, Award Strip
// ============================================================

// ── 1. Testimonial / Quote Block ──────────────────────────────

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  avatar?: string
}

interface TestimonialSectionProps {
  eyebrow?: string
  headline?: string
  testimonials: Testimonial[]
  background?: "white" | "cream" | "dark"
}

export function TestimonialSection({
  eyebrow = "What our customers say",
  headline,
  testimonials,
  background = "cream",
}: TestimonialSectionProps) {
  const [active, setActive] = React.useState(0)
  const isDark = background === "dark"
  const bgColour = { white: "#FFFFFF", cream: "#F3EDE9", dark: "#0C1946" }[background]

  return (
    <section style={{ background: bgColour, padding: "96px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <EyebrowLabel style={{ justifyContent: "center", color: isDark ? "#E3EEFF" : undefined }}>
            {eyebrow}
          </EyebrowLabel>
          {headline && (
            <h2 style={{ marginTop: 16, color: isDark ? "#FFFFFF" : "#0C1946" }}>{headline}</h2>
          )}
        </div>

        {/* Featured quote */}
        <div style={{
          background: isDark ? "rgba(255,255,255,0.06)" : "#FFFFFF",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "#E6DCD6"}`,
          borderRadius: 16,
          padding: "48px 56px",
          maxWidth: 800,
          margin: "0 auto 40px",
          textAlign: "center",
        }}>
          {/* PT Serif italic for pull quotes — approved accent use */}
          <p style={{
            fontFamily: "'PT Serif', serif",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1.7,
            color: isDark ? "rgba(255,255,255,0.9)" : "#0C1946",
            margin: "0 0 32px 0",
          }}>
            "{testimonials[active].quote}"
          </p>

          {/* Attribution */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            {testimonials[active].avatar ? (
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }}
              />
            ) : (
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
                {testimonials[active].name.split(" ").map(n => n[0]).join("")}
              </div>
            )}
            <div style={{ textAlign: "left" }}>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: isDark ? "#FFFFFF" : "#0C1946",
                margin: 0,
              }}>
                {testimonials[active].name}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                color: isDark ? "rgba(255,255,255,0.55)" : "#525776",
                margin: 0,
              }}>
                {testimonials[active].title}, {testimonials[active].company}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        {testimonials.length > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  background: i === active ? "#2253FF" : (isDark ? "rgba(255,255,255,0.2)" : "#E6DCD6"),
                  cursor: "pointer",
                  transition: "width 0.2s, background 0.2s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// ── 2. FAQ Accordion ──────────────────────────────────────────

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  eyebrow?: string
  headline?: string
  items: FAQItem[]
  background?: "white" | "cream"
  columns?: 1 | 2
}

export function FAQSection({
  eyebrow = "FAQ",
  headline = "Frequently asked questions",
  items,
  background = "white",
  columns = 1,
}: FAQSectionProps) {
  const [open, setOpen] = React.useState<number | null>(null)

  return (
    <section style={{
      background: background === "cream" ? "#F3EDE9" : "#FFFFFF",
      padding: "96px 40px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <EyebrowLabel style={{ justifyContent: "center" }}>{eyebrow}</EyebrowLabel>
          <h2 style={{ marginTop: 16 }}>{headline}</h2>
        </div>

        <div style={{
          maxWidth: columns === 1 ? 720 : "100%",
          margin: "0 auto",
          display: columns === 2 ? "grid" : "block",
          gridTemplateColumns: columns === 2 ? "1fr 1fr" : undefined,
          gap: columns === 2 ? "0 48px" : undefined,
        }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid #E6DCD6" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#0C1946",
                  lineHeight: 1.5,
                }}>
                  {item.question}
                </span>
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 20,
                  color: "#2253FF",
                  flexShrink: 0,
                  transform: open === i ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s",
                  lineHeight: 1,
                }}>
                  +
                </span>
              </button>
              {open === i && (
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14,
                  color: "#525776",
                  lineHeight: 1.8,
                  margin: "0 0 20px 0",
                  paddingRight: 40,
                }}>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 3. Feature Comparison Table ───────────────────────────────

interface ComparisonRow {
  feature: string
  category?: string
  tiers: (boolean | string)[]
}

interface ComparisonTableProps {
  eyebrow?: string
  headline?: string
  tierNames: string[]
  highlightedTier?: number
  rows: ComparisonRow[]
}

export function ComparisonTable({
  eyebrow = "Compare plans",
  headline = "Everything you need to grow",
  tierNames,
  highlightedTier = 1,
  rows,
}: ComparisonTableProps) {
  return (
    <section style={{ background: "#FFFFFF", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <EyebrowLabel style={{ justifyContent: "center" }}>{eyebrow}</EyebrowLabel>
          <h2 style={{ marginTop: 16 }}>{headline}</h2>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            {/* Header row */}
            <thead>
              <tr>
                <th style={{ width: "40%", padding: "12px 16px", textAlign: "left" }} />
                {tierNames.map((tier, i) => (
                  <th key={i} style={{
                    padding: "12px 16px",
                    textAlign: "center",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: i === highlightedTier ? "#2253FF" : "#0C1946",
                    background: i === highlightedTier ? "#E3EEFF" : "#F6F2EF",
                    borderRadius: "8px 8px 0 0",
                  }}>
                    {tier}
                    {i === highlightedTier && (
                      <div style={{ marginTop: 4 }}>
                        <Badge variant="primary" size="sm">Popular</Badge>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, ri) => (
                <React.Fragment key={ri}>
                  {/* Category divider */}
                  {row.category && (
                    <tr>
                      <td colSpan={tierNames.length + 1} style={{
                        padding: "20px 16px 8px",
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#AFAFAF",
                        borderBottom: "1px solid #E6DCD6",
                      }}>
                        {row.category}
                      </td>
                    </tr>
                  )}
                  <tr style={{ borderBottom: "1px solid #E6DCD6" }}>
                    <td style={{
                      padding: "14px 16px",
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 14,
                      color: "#474747",
                    }}>
                      {row.feature}
                    </td>
                    {row.tiers.map((val, ti) => (
                      <td key={ti} style={{
                        padding: "14px 16px",
                        textAlign: "center",
                        background: ti === highlightedTier ? "rgba(34,83,255,0.03)" : "transparent",
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: 14,
                        color: "#474747",
                      }}>
                        {typeof val === "boolean" ? (
                          val
                            ? <span style={{ color: "#318760", fontSize: 16 }}>✓</span>
                            : <span style={{ color: "#E6DCD6", fontSize: 16 }}>—</span>
                        ) : val}
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ── 4. Timeline / How It Works ────────────────────────────────

interface TimelineStep {
  number?: string
  title: string
  description: string
}

interface TimelineSectionProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  steps: TimelineStep[]
  background?: "white" | "cream" | "dark"
}

export function TimelineSection({
  eyebrow = "How it works",
  headline = "Up and running in days, not months",
  subheadline,
  steps,
  background = "white",
}: TimelineSectionProps) {
  const isDark = background === "dark"
  const bgColour = { white: "#FFFFFF", cream: "#F3EDE9", dark: "#0C1946" }[background]

  return (
    <section style={{ background: bgColour, padding: "96px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <EyebrowLabel style={{ justifyContent: "center", color: isDark ? "#E3EEFF" : undefined }}>
            {eyebrow}
          </EyebrowLabel>
          <h2 style={{ marginTop: 16, color: isDark ? "#FFFFFF" : "#0C1946" }}>{headline}</h2>
          {subheadline && (
            <p style={{ fontSize: 16, color: isDark ? "rgba(255,255,255,0.7)" : "#525776", marginTop: 12, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
              {subheadline}
            </p>
          )}
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: 0,
          position: "relative",
        }}>
          {/* Connector line */}
          <div style={{
            position: "absolute",
            top: 20,
            left: `calc(100% / ${steps.length} / 2)`,
            right: `calc(100% / ${steps.length} / 2)`,
            height: 1,
            background: isDark ? "rgba(255,255,255,0.12)" : "#E6DCD6",
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <div key={i} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 24px",
              position: "relative",
              zIndex: 1,
            }}>
              {/* Step number */}
              <div style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#2253FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: 24,
                flexShrink: 0,
              }}>
                {step.number ?? String(i + 1)}
              </div>

              <h3 style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: isDark ? "#FFFFFF" : "#0C1946",
                margin: "0 0 12px 0",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 14,
                color: isDark ? "rgba(255,255,255,0.65)" : "#525776",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 5. Video Embed Block ──────────────────────────────────────

interface VideoSectionProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  videoUrl: string        // YouTube or Vimeo embed URL
  posterUrl?: string      // Optional thumbnail
  background?: "white" | "cream" | "dark"
}

export function VideoSection({
  eyebrow = "See it in action",
  headline = "Watch how Fospha works",
  subheadline,
  videoUrl,
  background = "dark",
}: VideoSectionProps) {
  const [playing, setPlaying] = React.useState(false)
  const isDark = background === "dark"
  const bgColour = { white: "#FFFFFF", cream: "#F3EDE9", dark: "#0C1946" }[background]

  return (
    <section style={{ background: bgColour, padding: "96px 40px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <EyebrowLabel style={{ justifyContent: "center", color: isDark ? "#E3EEFF" : undefined }}>
            {eyebrow}
          </EyebrowLabel>
          <h2 style={{ marginTop: 16, color: isDark ? "#FFFFFF" : "#0C1946" }}>{headline}</h2>
          {subheadline && (
            <p style={{ fontSize: 16, color: isDark ? "rgba(255,255,255,0.7)" : "#525776", marginTop: 12 }}>
              {subheadline}
            </p>
          )}
        </div>

        {/* Video container */}
        <div style={{
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          background: "#000",
          aspectRatio: "16/9",
          boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
        }}>
          {playing ? (
            <iframe
              src={`${videoUrl}?autoplay=1`}
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div
              onClick={() => setPlaying(true)}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background: "linear-gradient(135deg, #0C1946 0%, #1a2d6b 100%)",
              }}
            >
              {/* Play button */}
              <div style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#2253FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(34,83,255,0.4)",
                transition: "transform 0.15s",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ── 6. Team / People Grid ─────────────────────────────────────

interface TeamMember {
  name: string
  title: string
  bio?: string
  avatar?: string
  linkedin?: string
}

interface TeamSectionProps {
  eyebrow?: string
  headline?: string
  members: TeamMember[]
  background?: "white" | "cream"
}

export function TeamSection({
  eyebrow = "The team",
  headline = "Built by people who've been in your shoes",
  members,
  background = "white",
}: TeamSectionProps) {
  return (
    <section style={{
      background: background === "cream" ? "#F3EDE9" : "#FFFFFF",
      padding: "96px 40px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <EyebrowLabel>{eyebrow}</EyebrowLabel>
          <h2 style={{ marginTop: 16 }}>{headline}</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 32,
        }}>
          {members.map((member, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Avatar */}
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.name}
                  style={{ width: "100%", aspectRatio: "1/1", borderRadius: 12, objectFit: "cover", background: "#F6F2EF" }}
                />
              ) : (
                <div style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: 12,
                  background: ["#E3EEFF", "#FFF3DA", "#F9DCC4", "#F3EDE9"][i % 4],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#0C1946",
                }}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              )}

              {/* Info */}
              <div>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 16, fontWeight: 600, color: "#0C1946", margin: "0 0 2px 0" }}>
                  {member.name}
                </p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#2253FF", margin: "0 0 8px 0", fontWeight: 500 }}>
                  {member.title}
                </p>
                {member.bio && (
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#525776", margin: 0, lineHeight: 1.6 }}>
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 7. Award / Badge Strip ────────────────────────────────────

interface Award {
  title: string
  body: string
  year?: string
  category?: string
}

interface AwardStripProps {
  eyebrow?: string
  awards: Award[]
  background?: "white" | "cream" | "dark"
}

export function AwardStrip({
  eyebrow = "Recognition",
  awards,
  background = "cream",
}: AwardStripProps) {
  const isDark = background === "dark"
  const bgColour = { white: "#FFFFFF", cream: "#F3EDE9", dark: "#0C1946" }[background]

  return (
    <section style={{ background: bgColour, padding: "64px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <EyebrowLabel style={{ color: isDark ? "#E3EEFF" : undefined }}>{eyebrow}</EyebrowLabel>
        </div>

        <div style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 0,
          flexWrap: "wrap",
        }}>
          {awards.map((award, i) => (
            <div key={i} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "24px 40px",
              borderLeft: i > 0 ? `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "#E6DCD6"}` : "none",
              gap: 8,
            }}>
              {/* Gold star icon */}
              <div style={{ fontSize: 28, lineHeight: 1 }}>⭐</div>

              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                color: isDark ? "#FFFFFF" : "#0C1946",
                margin: 0,
                lineHeight: 1.3,
              }}>
                {award.title}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 12,
                color: isDark ? "rgba(255,255,255,0.55)" : "#525776",
                margin: 0,
              }}>
                {award.body}
              </p>
              {(award.year || award.category) && (
                <Badge variant={isDark ? "default" : "neutral"} size="sm" style={isDark ? { background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" } : {}}>
                  {[award.category, award.year].filter(Boolean).join(" · ")}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
