import * as React from "react"

export interface KPICardProps {
  label: string
  value: string
  change?: string
  changeDirection?: "up" | "down" | "neutral"
  description?: string
  className?: string
}

export function KPICard({
  label,
  value,
  change,
  changeDirection = "neutral",
  description,
  className = "",
}: KPICardProps) {
  const sentimentColour = {
    up:      { text: "#0C5132", bg: "#CDFEE1" },
    down:    { text: "#8E1F0B", bg: "#FDE9E7" },
    neutral: { text: "#525776", bg: "#F6F2EF" },
  }[changeDirection]

  const arrow = { up: "↑", down: "↓", neutral: "" }[changeDirection]

  return (
    <div
      className={`bg-white rounded-lg border border-[#E6DCD6] p-6 flex flex-col gap-3 ${className}`}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: "#525776",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          margin: 0,
        }}
      >
        {label}
      </p>

      {/* Value */}
      <p
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: 40,
          fontWeight: 700,
          color: "#0C1946",
          lineHeight: 1,
          margin: 0,
        }}
      >
        {value}
      </p>

      {/* Change badge + description row */}
      <div className="flex items-center gap-2 flex-wrap">
        {change && (
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: sentimentColour.text,
              background: sentimentColour.bg,
              borderRadius: 4,
              padding: "2px 8px",
            }}
          >
            {arrow} {change}
          </span>
        )}
        {description && (
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 12,
              color: "#525776",
            }}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  )
}
