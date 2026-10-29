import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

// Markers sitting on the orbit (r = 196 around the 400×400 centre).
const MARKERS = [
  { x: 350.1, y: 74, r: 4, c: 'orange', t: '0.32s' },
  { x: 39.4, y: 312.4, r: 4, c: 'ink', t: '0.4s' },
  { x: 384.2, y: 267, r: 2.5, c: 'ink', t: '0.48s' },
  { x: 133, y: 15.8, r: 2.5, c: 'orange', t: '0.54s' },
]

// The original monogram split into its four exact pixel shapes (shared
// 512×512 canvas), so they can move separately and still form the logo.
const SHAPES = ['light-ring', 'orange-ring', 'orange-bar', 'light-bar']

/**
 * Hero brand signature: orbit and guides draw in, the monogram assembles
 * from its real pieces, a single light sweep passes, then only the orbit
 * marker keeps moving. Timings live in index.css (`.hm-*`).
 */
function HeroMark() {
  // Once seen, later visits in this session show the finished state.
  useEffect(() => {
    try {
      sessionStorage.setItem('abx-hero', '1')
    } catch {
      /* storage unavailable — the intro simply plays again next time */
    }
    return () => document.documentElement.classList.add('hero-seen')
  }, [])

  return (
    <div className="hm relative mx-auto aspect-square w-full max-w-[30rem]" aria-hidden="true">
      {/* guides: a solid circle draws, then hands over to the dotted orbit */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full text-line">
        <circle className="hm-draw" cx="200" cy="200" r="196" fill="none" stroke="currentColor" pathLength="1" />
        <line className="hm-guide hm-guide-x" x1="0" y1="200" x2="400" y2="200" stroke="currentColor" />
        <line className="hm-guide hm-guide-y" x1="200" y1="0" x2="200" y2="400" stroke="currentColor" />
        {MARKERS.map((m) => (
          <circle
            key={m.x}
            className={`hm-marker ${m.c === 'orange' ? 'fill-orange' : 'fill-fg'}`}
            cx={m.x}
            cy={m.y}
            r={m.r}
            style={{ '--t': m.t, transformOrigin: `${m.x}px ${m.y}px` }}
          />
        ))}
      </svg>

      <div className="hm-ring absolute inset-0">
        <svg viewBox="0 0 400 400" className="size-full text-line">
          <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeDasharray="2 6" />
        </svg>
      </div>

      <div className="hm-travel absolute inset-0">
        <span className="absolute left-1/2 top-[1%] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange shadow-[0_0_0_4px_rgb(255_113_0/0.15)]" />
      </div>

      <div className="hm-glow-wrap absolute inset-[18%]">
        <span className="hm-glow block size-full rounded-full" />
      </div>

      <div className="hm-mark absolute inset-[14%]">
        {SHAPES.map((n, i) => (
          <img
            key={n}
            src={`/brand/mark-${n}.webp`}
            alt=""
            width="512"
            height="512"
            fetchPriority={i < 2 ? 'high' : undefined}
            className={`hm-shape hm-${n} absolute inset-0 size-full`}
          />
        ))}
        <span className="hm-sheen absolute inset-0" />
      </div>

      {/* annotations */}
      <span className="tag absolute left-0 top-[8%] flex items-center gap-2 text-muted">
        <span className="size-1.5 rounded-full bg-orange" /> Idea
      </span>
      <span className="tag absolute right-0 top-[40%] flex items-center gap-2 text-muted">
        Design <span className="size-1.5 rounded-full bg-fg" />
      </span>
      <span className="tag absolute bottom-[6%] left-[12%] flex items-center gap-2 text-muted">
        <span className="size-1.5 rounded-full bg-orange" /> Digital reality
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          {/* the H1 carries the keywords; the slogan below keeps the visual lead */}
          <h1 className="tag reveal flex flex-wrap items-center gap-3 text-muted">
            <span className="rule" />
            Website &amp; software development company in Pune, Mumbai, Kolhapur, Satara, Sangli &amp; Karad
          </h1>

          <p className="reveal lines mt-7 font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.4rem]">
            <span className="ln">
              <span style={{ '--d': '60ms' }}>Good ideas</span>
            </span>{' '}
            <span className="ln">
              <span style={{ '--d': '170ms' }}>
                deserve <span className="text-gloss">better</span>
              </span>
            </span>{' '}
            <span className="ln">
              <span style={{ '--d': '280ms' }}>technology.</span>
            </span>
          </p>

          <p
            className="reveal mt-8 max-w-lg text-lg leading-relaxed text-muted sm:text-xl"
            style={{ '--d': '420ms' }}
          >
            We design and build digital products, websites and software that help businesses move forward.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ '--d': '540ms' }}>
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Build Something <ArrowRight className="arrow size-4" />
            </a>
            <a href="#work" className="link font-semibold">
              Explore Our Work
            </a>
          </div>
        </div>

        <HeroMark />
      </div>

      <div className="wrap mt-16 hidden sm:block">
        <div className="tag flex items-center justify-between border-t border-line pt-5 text-muted">
          <span>ABnexa — Ideas into digital reality</span>
          <span>Websites · SEO · 24/7 Support</span>
          <a href="#about" className="hover:text-orange">Scroll ↓</a>
        </div>
      </div>
    </section>
  )
}
