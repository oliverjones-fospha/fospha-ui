"use client"

import * as React from "react"
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react"

export interface Column {
  key: string
  label: string
  width?: string
  align?: "left" | "right" | "center"
  sortable?: boolean
}

export interface Row {
  id?: string | number
  isTotal?: boolean
  [key: string]: CellValue | boolean | undefined
}

export type CellValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { type: "badge"; text: string; textColor: string; bgColor: string }
  | { type: "sentiment"; value: number }
  | { type: "bold"; text: string }

function renderCell(val: CellValue): React.ReactNode {
  if (val == null) return "—"

  if (typeof val === "object") {
    if (val.type === "badge") {
      return (
        <span style={{
          padding: "2px 10px",
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: "'Manrope', sans-serif",
          color: val.textColor,
          background: val.bgColor,
        }}>
          {val.text}
        </span>
      )
    }

    if (val.type === "sentiment") {
      const pos = val.value > 0
      const neu = val.value === 0
      return (
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 3,
          padding: "2px 8px",
          borderRadius: 4,
          fontFamily: "'Manrope', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color:      neu ? "#525776" : pos ? "#0C5132" : "#8E1F0B",
          background: neu ? "#F6F2EF" : pos ? "#CDFEE1" : "#FDE9E7",
        }}>
          {pos ? "↑" : neu ? "–" : "↓"} {Math.abs(val.value)}%
        </span>
      )
    }

    if (val.type === "bold") {
      return (
        <span style={{ fontWeight: 600, color: "#0C1946" }}>{val.text}</span>
      )
    }
  }

  return String(val)
}

interface DataTableProps {
  columns: Column[]
  data: Row[]
  caption?: string
  defaultSortKey?: string
  defaultSortDir?: "asc" | "desc"
}

export function DataTable({
  columns,
  data,
  caption,
  defaultSortKey,
  defaultSortDir = "desc",
}: DataTableProps) {
  const [sortKey,    setSortKey]    = React.useState<string | null>(defaultSortKey ?? null)
  const [sortDir,    setSortDir]    = React.useState<"asc" | "desc">(defaultSortDir)
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null)

  const sorted = React.useMemo(() => {
    if (!sortKey) return data
    return [...data].sort((a, b) => {
      let av = a[sortKey], bv = b[sortKey]
      // unwrap typed cells for sorting
      if (av && typeof av === "object" && "value" in av) av = (av as {value: number}).value
      if (bv && typeof bv === "object" && "value" in bv) bv = (bv as {value: number}).value
      if (av == null) return 1
      if (bv == null) return -1
      const cmp = av < bv ? -1 : av > bv ? 1 : 0
      return sortDir === "asc" ? cmp : -cmp
    })
  }, [data, sortKey, sortDir])

  function handleSort(key: string) {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc")
    else { setSortKey(key); setSortDir("desc") }
  }

  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E6DCD6",
      borderRadius: 8,
      overflow: "hidden",
    }}>
      {caption && (
        <div style={{
          padding: "16px 20px",
          borderBottom: "1px solid #E6DCD6",
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: 16,
          fontWeight: 600,
          color: "#0C1946",
        }}>
          {caption}
        </div>
      )}

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#FFFFFF" }}>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  style={{
                    padding: "10px 16px",
                    textAlign: col.align ?? "left",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#525776",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                    cursor: col.sortable ? "pointer" : "default",
                    userSelect: "none",
                    width: col.width,
                    borderBottom: "1px solid #E6DCD6",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    {col.label}
                    {col.sortable && (
                      sortKey === col.key
                        ? sortDir === "asc"
                          ? <ChevronUp size={12} color="#2253FF" />
                          : <ChevronDown size={12} color="#2253FF" />
                        : <ChevronsUpDown size={12} color="#AFAFAF" />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr
                key={row.id ?? i}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  background: row.isTotal
                    ? "#FFFFFF"
                    : hoveredRow === i
                    ? "#F3EDE9"
                    : i % 2 === 0 ? "#FFFFFF" : "#FAFAF9",
                  borderTop: row.isTotal ? "1px solid #E6DCD6" : undefined,
                  borderBottom: i < sorted.length - 1 ? "1px solid #E6DCD6" : "none",
                  transition: "background 0.1s",
                }}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    style={{
                      padding: "12px 16px",
                      textAlign: col.align ?? "left",
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 13,
                      color: row.isTotal ? "#0C1946" : "#474747",
                      fontWeight: row.isTotal ? 700 : undefined,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {renderCell(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}