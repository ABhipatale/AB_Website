/** "01 — Services" style label that opens each section. */
export default function SectionLabel({ n, children }) {
  return (
    <p className="tag reveal flex items-center gap-3 text-muted">
      {n && <span className="text-orange">{n}</span>}
      <span className="rule" />
      {children}
    </p>
  )
}
