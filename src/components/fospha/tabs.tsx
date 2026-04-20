"use client"

import * as React from "react"

interface Tab {
  key: string
  label: string
  count?: number
}

interface FosphaTabsProps {
  tabs: Tab[]
  activeKey?: string
  onChange?: (key: string) => void
  variant?: "underline" | "pill"
}

export function FosphaTabs({
  tabs,
  activeKey,
  onChange,
  variant = "underline",
}: FosphaTabsProps) {
  const [active, setActive] = React.useState(activeKey ?? tabs[0]?.key)

  function handleClick(key: string) {
    setActive(key)
    onChange?.(key)
  }

  if (variant === "pill") {
    return (
      <div style={{
        display: "inline-flex",
        gap: 4,
        background: "#F6F2EF",
        borderRadius: 8,
        padding: 4,
      }}>
        {tabs.map((tab) => {
          const isActive = active === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => handleClick(tab.key)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#0C1946" : "#525776",
                background: isActive ? "#FFFFFF" : "transparent",
                boxShadow: isActive ? "0 1px 3px rgba(12,25,70,0.08)" : "none",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: isActive ? "#2253FF" : "#AFAFAF",
                  background: isActive ? "#E3EEFF" : "#EEEEEF",
                  borderRadius: 99,
                  padding: "1px 7px",
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    )
  }

  // Underline variant (default)
  return (
    <div style={{
      display: "flex",
      borderBottom: "1px solid #E6DCD6",
      gap: 0,
    }}>
      {tabs.map((tab) => {
        const isActive = active === tab.key
        return (
          <button
            key={tab.key}
            onClick={() => handleClick(tab.key)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 16px",
              border: "none",
              borderBottom: isActive ? "2px solid #2253FF" : "2px solid transparent",
              marginBottom: -1,
              cursor: "pointer",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "#2253FF" : "#525776",
              background: "transparent",
              transition: "all 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: isActive ? "#2253FF" : "#AFAFAF",
                background: isActive ? "#E3EEFF" : "#F6F2EF",
                borderRadius: 99,
                padding: "1px 7px",
              }}>
                {tab.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
