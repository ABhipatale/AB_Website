/**
 * Small abstract interface drawings used beside services. Pure SVG in the
 * brand palette — no screenshots, so nothing pretends to be client work.
 */
const O = '#FF7100'
const K = '#F5F5F5' // strong strokes — light on the dark theme
const L = '#333333' // quiet lines and placeholders
const S = '#0A0A0A' // screen surfaces
const D = '#262626' // solid device parts

const art = {
  web: (
    <>
      <rect x="20" y="30" width="280" height="180" rx="10" fill={S} stroke={L} />
      <rect x="20" y="30" width="280" height="22" rx="10" fill={L} />
      <circle cx="34" cy="41" r="3" fill={O} />
      <rect x="40" y="72" width="120" height="14" rx="3" fill={K} />
      <rect x="40" y="94" width="90" height="14" rx="3" fill={K} />
      <rect x="40" y="118" width="140" height="6" rx="3" fill={L} />
      <rect x="40" y="130" width="110" height="6" rx="3" fill={L} />
      <rect x="40" y="150" width="64" height="20" rx="10" fill={O} />
      <circle cx="240" cy="120" r="36" fill="none" stroke={O} strokeWidth="10" />
      <circle cx="222" cy="104" r="28" fill="none" stroke={K} strokeWidth="10" />
    </>
  ),
  seo: (
    <>
      <rect x="20" y="30" width="280" height="180" rx="10" fill={S} stroke={L} />
      {/* search bar */}
      <rect x="40" y="48" width="200" height="24" rx="12" fill={S} stroke={L} strokeWidth="2" />
      <circle cx="56" cy="60" r="5" fill="none" stroke={K} strokeWidth="2" />
      <rect x="70" y="57" width="80" height="6" rx="3" fill={L} />
      {/* results — first one highlighted */}
      <rect x="40" y="88" width="10" height="10" rx="2" fill={O} />
      <rect x="58" y="88" width="110" height="10" rx="3" fill={K} />
      <rect x="58" y="104" width="150" height="5" rx="2.5" fill={L} />
      {[126, 156].map((y) => (
        <g key={y}>
          <rect x="40" y={y} width="10" height="10" rx="2" fill={L} />
          <rect x="58" y={y} width="90" height="8" rx="3" fill={L} />
          <rect x="58" y={y + 14} width="130" height="5" rx="2.5" fill={L} />
        </g>
      ))}
      {/* rising graph */}
      <path d="M220 180 L245 160 L262 168 L285 120" fill="none" stroke={O} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M272 118 h14 v14" fill="none" stroke={O} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  shop: (
    <>
      <rect x="20" y="30" width="280" height="180" rx="10" fill={S} stroke={L} />
      {[40, 130, 220].map((x, i) => (
        <g key={x}>
          <rect x={x} y="50" width="70" height="70" rx="6" fill={i === 1 ? O : L} />
          <rect x={x} y="130" width="50" height="6" rx="3" fill={K} />
          <rect x={x} y="142" width="30" height="6" rx="3" fill={L} />
        </g>
      ))}
      <rect x="40" y="170" width="250" height="24" rx="12" fill={D} />
      <rect x="230" y="176" width="50" height="12" rx="6" fill={O} />
    </>
  ),
  app: (
    <>
      <rect x="20" y="30" width="280" height="180" rx="10" fill={S} stroke={L} />
      <rect x="20" y="30" width="60" height="180" rx="10" fill={D} />
      {[54, 74, 94, 114].map((y, i) => (
        <rect key={y} x="32" y={y} width="36" height="6" rx="3" fill={i === 0 ? O : '#555'} />
      ))}
      <rect x="96" y="50" width="88" height="44" rx="6" fill={L} />
      <rect x="194" y="50" width="88" height="44" rx="6" fill={O} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={104 + i * 30} y={190 - (20 + ((i * 37) % 70))} width="16" height={20 + ((i * 37) % 70)} rx="3" fill={i === 4 ? O : K} />
      ))}
    </>
  ),
  mobile: (
    <>
      <rect x="70" y="20" width="96" height="200" rx="16" fill={D} />
      <rect x="78" y="32" width="80" height="176" rx="10" fill={S} />
      <rect x="88" y="46" width="60" height="40" rx="6" fill={O} />
      <rect x="88" y="96" width="60" height="6" rx="3" fill={K} />
      <rect x="88" y="108" width="40" height="6" rx="3" fill={L} />
      <rect x="88" y="126" width="28" height="28" rx="6" fill={L} />
      <rect x="120" y="126" width="28" height="28" rx="6" fill={L} />
      <rect x="180" y="50" width="96" height="170" rx="16" fill={S} stroke={L} />
      <rect x="194" y="70" width="68" height="8" rx="4" fill={K} />
      <rect x="194" y="86" width="50" height="6" rx="3" fill={L} />
      <circle cx="228" cy="150" r="26" fill="none" stroke={O} strokeWidth="8" />
    </>
  ),
  auto: (
    <>
      {[
        [40, 60],
        [40, 150],
        [230, 105],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="56" height="40" rx="8" fill={i === 2 ? O : S} stroke={i === 2 ? O : L} />
      ))}
      <path d="M96 80 C150 80 170 125 230 125 M96 170 C150 170 170 125 230 125" fill="none" stroke={K} strokeWidth="2" strokeDasharray="5 5" />
      <circle cx="160" cy="125" r="18" fill={D} />
      <path d="M154 125 l5 5 l9 -10" fill="none" stroke={O} strokeWidth="3" />
    </>
  ),
  cloud: (
    <>
      <path d="M90 150 a40 40 0 0 1 10 -78 a55 55 0 0 1 104 12 a34 34 0 0 1 16 66 z" fill={S} stroke={L} strokeWidth="2" />
      <rect x="120" y="170" width="80" height="14" rx="4" fill={D} />
      <rect x="120" y="190" width="80" height="14" rx="4" fill={D} />
      <circle cx="132" cy="177" r="3" fill={O} />
      <circle cx="132" cy="197" r="3" fill={O} />
      <path d="M160 140 v-40 m-14 14 l14 -14 l14 14" fill="none" stroke={O} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
}

export default function Preview({ variant, className = '' }) {
  return (
    <svg viewBox="0 0 320 240" aria-hidden="true" className={className}>
      {art[variant]}
    </svg>
  )
}
