/** "01 — Services" style label that opens each section. */
export default function SectionLabel({ n, children, dark = false }) {
  return (
    <p className={`tag reveal flex items-center gap-3 ${dark ? 'text-paper/60' : 'text-gray'}`}>
      <span className="text-orange">{n}</span>
      <span className="rule" />
      {children}
    </p>
  )
}
