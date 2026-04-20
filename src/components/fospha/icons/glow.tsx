import * as React from "react"

interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function GlowIcon({ size = 32, color = "#0C1946", className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#glow-clip)">
        <circle cx="4.5" cy="4.5" r="3.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 23.8281 15.5742)" stroke={color} strokeWidth="2"/>
        <circle cx="27.875" cy="25.7917" r="3.5" transform="rotate(45 27.875 25.7917)" stroke={color} strokeWidth="2"/>
        <path d="M20.3711 18.2051L24.757 22.591"   stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="7.09307" cy="25.8262" r="3.5" transform="rotate(135 7.09307 25.8262)" stroke={color} strokeWidth="2"/>
        <path d="M14.6797 18.3203L10.2938 22.7062"  stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M14.418 5.36328L15.2467 8.11624"   stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M19.4062 8.11719L20.235 5.36423"   stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M23.3242 10.5117L25.6688 8.95994"  stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M9.5 8.90234L11.4418 10.5689"      stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </g>
      <defs>
        <clipPath id="glow-clip">
          <rect width="35" height="35" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
