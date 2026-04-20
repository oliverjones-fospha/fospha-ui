"use client"

import { Sidebar } from "@/components/fospha/sidebar"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar activePath={pathname} />
      <div style={{ flex: 1, overflowY: "auto", background: "#F6F2EF" }}>
        {children}
      </div>
    </div>
  )
}
