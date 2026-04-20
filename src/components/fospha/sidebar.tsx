"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Megaphone,
  BarChart2,
  Radio,
  GitBranch,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { FosphaLogo, FosphaLogomark } from "@/components/fospha/icons"

// ── Types ──────────────────────────────────────────────────────

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

interface SidebarProps {
  activePath?: string
  userName?: string
  userInitials?: string
  userRole?: string
}

// ── Nav items ──────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Overview",    href: "#", icon: <LayoutDashboard size={18} /> },
  { label: "Campaigns",   href: "#", icon: <Megaphone        size={18} /> },
  { label: "Analytics",   href: "#", icon: <BarChart2        size={18} /> },
  { label: "Channels",    href: "#", icon: <Radio            size={18} /> },
  { label: "Attribution", href: "#", icon: <GitBranch        size={18} /> },
]

const BOTTOM_ITEMS: NavItem[] = [
  { label: "Help & Support", href: "#", icon: <HelpCircle size={18} /> },
]

// ── Sidebar ────────────────────────────────────────────────────

export function Sidebar({
  activePath = "/dashboard",
  userName = "Oliver Jones",
  userInitials = "OJ",
  userRole = "Admin",
}: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false)
  const w = collapsed ? 64 : 240

  return (
    <aside
      style={{
        width: w,
        minWidth: w,
        height: "100vh",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
        background: "#0C1946",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        transition: "width 0.2s ease, min-width 0.2s ease",
        overflow: "hidden",
        zIndex: 40,
      }}
    >
      {/* ── Logo + collapse toggle ── */}
      <div
        style={{
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          padding: collapsed ? "0" : "0 12px 0 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0,
        }}
      >
        {collapsed ? (
          <FosphaLogomark size={24} variant="white" />
        ) : (
          <>
            <FosphaLogo height={18} variant="white" />

            {/* Collapse toggle */}
            <button
              onClick={() => setCollapsed(true)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ChevronLeft size={14} />
            </button>
          </>
        )}
      </div>

      {/* ── Expand button (collapsed state) ── */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
            margin: "10px auto 0 auto",
          }}
        >
          <ChevronRight size={14} />
        </button>
      )}

      {/* ── Main nav ── */}
      <nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
        {NAV_ITEMS.map((item) => {
          const active = activePath === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: collapsed ? "9px 0" : "9px 12px",
                justifyContent: collapsed ? "center" : "flex-start",
                borderRadius: 6,
                textDecoration: "none",
                background: active ? "rgba(34,83,255,0.25)" : "transparent",
                color: active ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                transition: "background 0.15s, color 0.15s",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                if (!active) (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)"
              }}
              onMouseLeave={e => {
                if (!active) (e.currentTarget as HTMLAnchorElement).style.background = "transparent"
              }}
            >
              <span style={{ flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </a>
          )
        })}
      </nav>

      {/* ── Bottom section — help + user ── */}
      <div style={{ padding: "8px 8px 12px 8px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: 2 }}>
        {BOTTOM_ITEMS.map((item) => {
          const active = activePath === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: collapsed ? "9px 0" : "9px 12px",
                justifyContent: collapsed ? "center" : "flex-start",
                borderRadius: 6,
                textDecoration: "none",
                background: active ? "rgba(34,83,255,0.25)" : "transparent",
                color: active ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                transition: "background 0.15s, color 0.15s",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <span style={{ flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </a>
          )
        })}

        {/* User profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: collapsed ? "8px 0" : "8px 12px",
            justifyContent: collapsed ? "center" : "flex-start",
            marginTop: 4,
            borderRadius: 6,
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#2253FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            {userInitials}
          </div>
          {!collapsed && (
            <div style={{ overflow: "hidden" }}>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#FFFFFF",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                {userName}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 11,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
              }}>
                {userRole}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
