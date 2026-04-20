import * as React from "react"

interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function PrismIcon({ size = 32, color = "#0C1946", className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4.5 29.5L17.5 11.5L30.5 29.5"       stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.5 29.4961L17.5 21"                stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.5 29.4922L15 24.5"                stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 29.5L12.5 28"                   stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.91797 10.5078H9.91797"             stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M5.91406 6.5L5.91406 14.5"            stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M24.918 7.50781H32.918"               stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M28.9141 3.5L28.9141 11.5"            stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
