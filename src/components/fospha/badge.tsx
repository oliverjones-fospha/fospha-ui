import * as React from "react"

export type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "core"
  | "halo"
  | "glow"
  | "beam"
  | "prism"
  | "spark"

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: "sm" | "md"
  dot?: boolean
  icon?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const VARIANT_STYLES: Record<BadgeVariant, { color: string; background: string; shadow?: string; border?: string; borderRadius?: number }> = {
  default:  { color: "#0C1946", background: "#E3EEFF" },
  primary:  { color: "#FFFFFF", background: "#2253FF" },
  success:  { color: "#0C5132", background: "#CDFEE1" },
  warning:  { color: "#917308", background: "#FEF8E7" },
  danger:   { color: "#8E1F0B", background: "#FDE9E7" },
  neutral:  { color: "#525776", background: "#F6F2EF" },
  // Product badges — white bg, light-shade border, mid-shade-at-40% glow, rounded corners
  core:  { color: "#0C1946", background: "#FFFFFF", shadow: "0 0 20px rgba(103,135,254,0.4)",  border: "#D4DBF7", borderRadius: 10 },
  halo:  { color: "#0C1946", background: "#FFFFFF", shadow: "0 0 20px rgba(0,229,130,0.4)",    border: "#BAE8D4", borderRadius: 10 },
  glow:  { color: "#0C1946", background: "#FFFFFF", shadow: "0 0 20px rgba(245,191,0,0.4)",    border: "#F3DE91", borderRadius: 10 },
  beam:  { color: "#0C1946", background: "#FFFFFF", shadow: "0 0 20px rgba(255,138,245,0.4)",  border: "#F7D4F4", borderRadius: 10 },
  prism: { color: "#0C1946", background: "#FFFFFF", shadow: "0 0 20px rgba(255,171,102,0.4)",  border: "#F6D9C1", borderRadius: 10 },
  spark: { color: "#0C1946", background: "#FFFFFF", shadow: "0 0 20px rgba(162,128,255,0.4)",  border: "#DED6F5", borderRadius: 10 },
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  icon,
  className = "",
  style,
}: BadgeProps) {
  const { color, background, shadow, border, borderRadius: variantRadius } = VARIANT_STYLES[variant]

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: size === "sm" ? "1px 6px" : "2px 10px",
        borderRadius: variantRadius ?? 4,
        fontFamily: "'Manrope', sans-serif",
        fontSize: size === "sm" ? 11 : 12,
        fontWeight: 600,
        color,
        background,
        boxShadow: shadow,
        border: border ? `1px solid ${border}` : undefined,
        whiteSpace: "nowrap",
        lineHeight: 1.6,
        ...style,
      }}
    >
      {icon && <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{icon}</span>}
      {dot && (
        <span style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }} />
      )}
      {children}
    </span>
  )
}
