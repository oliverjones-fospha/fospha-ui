import * as React from "react"

interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function BeamIcon({ size = 32, color = "#0C1946", className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#beam-clip)">
        <path d="M33.4979 5.49954L28.4115 6.13529C22.1761 6.91466 17.4968 12.2152 17.4968 18.4992C17.4968 24.783 12.8177 30.0835 6.58239 30.863L1.49826 31.4987" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="7"  r="1.5" fill={color}/>
        <circle cx="4"  cy="17" r="1.5" fill={color}/>
        <circle cx="26" cy="25" r="1.5" fill={color}/>
        <circle cx="20" cy="29" r="1.5" fill={color}/>
        <circle cx="8"  cy="9"  r="1.5" fill={color}/>
        <circle cx="12" cy="15" r="1.5" fill={color}/>
        <circle cx="23" cy="18" r="1.5" fill={color}/>
        <circle cx="9"  cy="23" r="1.5" fill={color}/>
        <path d="M33.5 5.5L29 3"  stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M33.5 5.5L30 9"  stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </g>
      <defs>
        <clipPath id="beam-clip">
          <rect width="35" height="35" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
