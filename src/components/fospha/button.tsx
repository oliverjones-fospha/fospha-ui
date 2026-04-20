import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cta" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function FosphaButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2253FF] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"

  const variants = {
    primary:   "bg-[#2253FF] text-white hover:bg-[#1a42e0]",
    secondary: "bg-[#F3EDE9] text-[#0C1946] hover:bg-[#E6DCD6]",
    cta:       "text-white",  // gradient applied via style below
    ghost:     "bg-transparent hover:bg-white/10",
  }

  const sizes = {
    sm: "h-8  px-3 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base",
  }

  const ctaStyle = variant === "cta"
    ? { background: "linear-gradient(to right, #26ACFF, #6538FF)" }
    : {}

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      style={ctaStyle}
      {...props}
    >
      {children}
    </button>
  )
}
