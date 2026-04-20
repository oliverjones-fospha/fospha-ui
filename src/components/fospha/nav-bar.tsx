"use client"

import * as React from "react"
import { LayoutDashboard, BarChart2, Settings, Bell, ChevronDown } from "lucide-react"
import { FosphaLogo } from "@/components/fospha/icons"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  active?: boolean
}

interface NavBarProps {
  items?: NavItem[]
  userName?: string
  userInitials?: string
}

const defaultItems: NavItem[] = [
  { label: "Dashboard",  href: "#", icon: <LayoutDashboard size={16} />, active: true },
  { label: "Analytics",  href: "#", icon: <BarChart2 size={16} /> },
  { label: "Settings",   href: "#", icon: <Settings size={16} /> },
]

export function NavBar({
  items = defaultItems,
  userName = "Oliver Jones",
  userInitials = "OJ",
}: NavBarProps) {
  return (
    <nav
      className="fos-nav"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
        paddingLeft: 24,
        paddingRight: 24,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left — Logo + nav items */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>

        {/* Logo */}
        <FosphaLogo height={20} variant="colour" />

        {/* Nav items */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 13,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: item.active ? 600 : 400,
                color: item.active ? "#2253FF" : "#474747",
                background: item.active ? "#E3EEFF" : "transparent",
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right — notifications + user */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>

        {/* Notification bell */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 6,
            border: "none",
            background: "transparent",
            color: "#474747",
            cursor: "pointer",
          }}
        >
          <Bell size={16} />
        </button>

        {/* User avatar + name */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 8px 4px 4px",
            borderRadius: 6,
            border: "1px solid #E6DCD6",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#2253FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            {userInitials}
          </div>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#0C1946",
            }}
          >
            {userName}
          </span>
          <ChevronDown size={14} color="#525776" />
        </button>
      </div>
    </nav>
  )
}
