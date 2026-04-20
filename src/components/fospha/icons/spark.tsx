import * as React from "react"

interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function SparkIcon({ size = 32, color = "#0C1946", className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3.5 28.5078H9.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.49609 25.5L6.49609 31.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M25.5 6.50781H31.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M28.4961 3.5L28.4961 9.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M7.5 17.5L14.4497 14.5503L17.3995 7.60051L20.3492 14.5503L27.299 17.5L20.3492 20.4497L17.3995 27.3995L14.4497 20.4497L7.5 17.5Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
}
