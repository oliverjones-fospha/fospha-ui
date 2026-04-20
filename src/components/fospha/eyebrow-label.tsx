import * as React from "react"

interface EyebrowLabelProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function EyebrowLabel({ children, className = "", style }: EyebrowLabelProps) {
  return (
    <div className={`fos-eyebrow ${className}`} style={style}>
      {children}
    </div>
  )
}
