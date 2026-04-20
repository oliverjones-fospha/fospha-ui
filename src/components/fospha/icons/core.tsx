import * as React from "react"

interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function CoreIcon({ size = 32, color = "#0C1946", className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M8.5 25.5V4.5H4.5V25.5H8.5Z"   stroke={color} strokeWidth="2"/>
      <path d="M16.5 25.5V10.5H12.5V25.5H16.5Z" stroke={color} strokeWidth="2"/>
      <path d="M24.5 25.5V8.5H20.5V25.5H24.5Z"  stroke={color} strokeWidth="2"/>
      <path d="M32.5 25.5V15.5H28.5V25.5H32.5Z" stroke={color} strokeWidth="2"/>
      <path d="M3.5 30.5H32.5"  stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M30.5 31.5V29.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M22.5 31.5V29.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M14.5 31.5V29.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 31.5V29.5"  stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
