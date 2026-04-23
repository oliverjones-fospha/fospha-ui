import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import { FosphaLogo } from "@/components/fospha/icons"

export default function DocsPage() {
  const filePath = path.join(process.cwd(), "docs", "component-patterns.md")
  const content = fs.readFileSync(filePath, "utf8")

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#FFFFFF", borderBottom: "1px solid #E6DCD6",
        boxShadow: "0 1px 8px rgba(12,25,70,0.06)",
        padding: "0 40px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <FosphaLogo height={20} variant="colour" />
        <div style={{ display: "flex", gap: 24 }}>
          <a href="/"          style={{ fontFamily: "'Manrope',sans-serif", fontSize: 13, color: "#525776", textDecoration: "none" }}>Design System</a>
          <a href="/dashboard" style={{ fontFamily: "'Manrope',sans-serif", fontSize: 13, color: "#525776", textDecoration: "none" }}>Dashboard</a>
          <a href="/campaign"  style={{ fontFamily: "'Manrope',sans-serif", fontSize: 13, color: "#525776", textDecoration: "none" }}>Campaign</a>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px 96px" }}>
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 14,
          lineHeight: 1.8,
          color: "#474747",
        }}>
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 40, fontWeight: 400, color: "#0C1946", margin: "0 0 8px" }}>{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 24, fontWeight: 400, color: "#0C1946", margin: "48px 0 16px", paddingTop: 48, borderTop: "1px solid #E6DCD6" }}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 18, fontWeight: 400, color: "#0C1946", margin: "32px 0 12px" }}>{children}</h3>
              ),
              p: ({ children }) => (
                <p style={{ margin: "0 0 16px", lineHeight: 1.8 }}>{children}</p>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-")
                return isBlock ? (
                  <pre style={{ background: "#F6F2EF", border: "1px solid #E6DCD6", borderRadius: 8, padding: "16px 20px", overflowX: "auto", margin: "16px 0" }}>
                    <code style={{ fontFamily: "monospace", fontSize: 13, color: "#0C1946" }}>{children}</code>
                  </pre>
                ) : (
                  <code style={{ fontFamily: "monospace", fontSize: 13, background: "#F6F2EF", padding: "2px 6px", borderRadius: 4, color: "#2253FF" }}>{children}</code>
                )
              },
              table: ({ children }) => (
                <div style={{ overflowX: "auto", margin: "16px 0" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: 700, color: "#525776", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", background: "#F6F2EF", borderBottom: "1px solid #E6DCD6" }}>{children}</th>
              ),
              td: ({ children }) => (
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #E6DCD6", verticalAlign: "top" }}>{children}</td>
              ),
              blockquote: ({ children }) => (
                <blockquote style={{ borderLeft: "3px solid #2253FF", paddingLeft: 16, margin: "16px 0", color: "#525776", fontStyle: "italic" }}>{children}</blockquote>
              ),
              li: ({ children }) => (
                <li style={{ marginBottom: 6 }}>{children}</li>
              ),
              a: ({ children, href }) => (
                <a href={href} style={{ color: "#2253FF", textDecoration: "none" }}>{children}</a>
              ),
              hr: () => (
                <hr style={{ border: "none", borderTop: "1px solid #E6DCD6", margin: "32px 0" }} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
