"use client"

import * as React from "react"
import {
  Palette,
  Type,
  Square,
  BarChart2,
  Layout,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  LayoutDashboard,
  Image as ImageIcon,
  Presentation,
} from "lucide-react"
import { FosphaLogo, FosphaLogomark } from "@/components/fospha/icons"

// ── Design system sections ────────────────────────────────────

const DS_SECTIONS = [
  { id: "logo",       label: "Logo",       icon: <ImageIcon size={16} />    },
  { id: "colours",    label: "Colours",    icon: <Palette size={16} />      },
  { id: "typography", label: "Typography", icon: <Type size={16} />          },
  { id: "buttons",    label: "Buttons",    icon: <Square size={16} />        },
  { id: "kpi-cards",  label: "KPI Cards",  icon: <LayoutDashboard size={16} /> },
  { id: "tabs",       label: "Tabs",       icon: <Layout size={16} />        },
  { id: "badges",     label: "Badges",     icon: <Square size={16} />        },
  { id: "charts",     label: "Charts",     icon: <BarChart2 size={16} />     },
  { id: "data-table", label: "Data Table", icon: <Layout size={16} />        },
  { id: "dark-bg",    label: "Dark BG",    icon: <Square size={16} />        },
  { id: "marketing",  label: "Marketing",  icon: <Megaphone size={16} />     },
]

const EXTERNAL_LINKS = [
  { label: "Demo Dashboard", href: "/dashboard", icon: <LayoutDashboard size={16} />, target: "_blank" },
  { label: "Campaign Page",  href: "/campaign",  icon: <Megaphone size={16} />,       target: "_blank" },
  { label: "Slide Deck",     href: "/deck",      icon: <Presentation size={16} />,    target: "_blank" },
  { label: "Component Docs", href: "/docs",      icon: <FileText size={16} />,        target: "_blank" },
]

interface DSSidebarProps {
  activeSection?: string
}

export function DSSidebar({ activeSection }: DSSidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false)
  const w = collapsed ? 64 : 240

  function handleAnchorClick(id: string) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <aside style={{
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
      flexShrink: 0,
    }}>

      {/* ── Logo + collapse ── */}
      <div style={{
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "space-between",
        padding: collapsed ? "0" : "0 12px 0 16px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        flexShrink: 0,
      }}>
        {collapsed ? (
          <FosphaLogomark size={24} variant="white" />
        ) : (
          <>
            <FosphaLogo height={18} variant="white" />
            <button
              onClick={() => setCollapsed(true)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 28, height: 28, borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent", color: "rgba(255,255,255,0.6)",
                cursor: "pointer", flexShrink: 0,
              }}
            >
              <ChevronLeft size={14} />
            </button>
          </>
        )}
      </div>

      {/* ── Expand button (collapsed) ── */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 28, height: 28, borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "transparent", color: "rgba(255,255,255,0.6)",
            cursor: "pointer", margin: "10px auto 0 auto",
          }}
        >
          <ChevronRight size={14} />
        </button>
      )}

      {/* ── Section label ── */}
      {!collapsed && (
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "rgba(255,255,255,0.3)",
          padding: "16px 16px 6px",
          margin: 0,
        }}>
          Components
        </p>
      )}

      {/* ── Main nav — anchor links ── */}
      <nav style={{ flex: 1, padding: "4px 8px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" }}>
        {DS_SECTIONS.map((section) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => handleAnchorClick(section.id)}
              title={collapsed ? section.label : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: collapsed ? "9px 0" : "9px 12px",
                justifyContent: collapsed ? "center" : "flex-start",
                borderRadius: 6,
                border: "none",
                background: isActive ? "rgba(34,83,255,0.25)" : "transparent",
                color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "100%",
                textAlign: "left",
              }}
              onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)" }}
              onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "transparent" }}
            >
              <span style={{ flexShrink: 0 }}>{section.icon}</span>
              {!collapsed && <span>{section.label}</span>}
            </button>
          )
        })}
      </nav>

      {/* ── External links ── */}
      <div style={{
        padding: "8px 8px 12px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}>
        {!collapsed && (
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "rgba(255,255,255,0.3)",
            padding: "8px 12px 4px",
            margin: 0,
          }}>
            Links
          </p>
        )}
        {EXTERNAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.target}
            rel="noopener noreferrer"
            title={collapsed ? link.label : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: collapsed ? "9px 0" : "9px 12px",
              justifyContent: collapsed ? "center" : "flex-start",
              borderRadius: 6,
              textDecoration: "none",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              whiteSpace: "nowrap",
              overflow: "hidden",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"}
          >
            <span style={{ flexShrink: 0 }}>{link.icon}</span>
            {!collapsed && (
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {link.label}
                <ExternalLink size={11} style={{ opacity: 0.4 }} />
              </span>
            )}
          </a>
        ))}
      </div>
    </aside>
  )
}
