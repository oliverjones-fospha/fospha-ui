import * as React from "react"

interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function HaloIcon({ size = 32, color = "#0C1946", className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7.5 31.5V21.5H3.5V31.5H7.5Z"   stroke={color} strokeWidth="2"/>
      <path d="M15.5 31.5V18.5H11.5V31.5H15.5Z" stroke={color} strokeWidth="2"/>
      <path d="M23.5 31.5V25.5H19.5V31.5H23.5Z" stroke={color} strokeWidth="2"/>
      <path d="M31.5 31.5V22.5H27.5V31.5H31.5Z" stroke={color} strokeWidth="2"/>
      <path d="M13.5 10.5C14.7306 10.5 15.7968 10.8015 16.5215 11.2363C17.2658 11.683 17.5 12.1609 17.5 12.5C17.5 12.8391 17.2658 13.317 16.5215 13.7637C15.7968 14.1985 14.7306 14.5 13.5 14.5C12.2694 14.5 11.2032 14.1985 10.4785 13.7637C9.73423 13.317 9.5 12.8391 9.5 12.5C9.5 12.1609 9.73423 11.683 10.4785 11.2363C11.2032 10.8015 12.2694 10.5 13.5 10.5Z" stroke={color} strokeWidth="2"/>
      <path d="M13.5273 3.5L13.5273 6.375"   stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20.1211 4.86523L18.2914 7"   stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M7.47266 4.86523L8.88352 7"   stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
