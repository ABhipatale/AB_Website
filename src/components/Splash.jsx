import { useEffect, useState } from 'react'

const LAYERS = ['mark-black', 'mark-orange', 'wordmark', 'lines', 'software']
const TOTAL_MS = 2700

/**
 * Opening brand reveal. The animation is pure CSS (see `.splash` in
 * index.css) so it starts before JavaScript loads; this component only
 * removes it afterwards and lets visitors skip it. The inline script in
 * index.html decides whether it shows (once per session, never with
 * reduced motion) by adding `no-splash` to <html>.
 *
 * The logo is the original lockup split into exact pixel layers on one
 * shared canvas, so the assembled result is the untouched logo.
 */
export default function Splash() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const finish = () => {
      root.classList.remove('splash-on')
      setDone(true)
    }
    if (root.classList.contains('no-splash')) return finish()

    // the CSS timeline starts at page load, not at hydration
    const timer = setTimeout(finish, Math.max(0, TOTAL_MS - performance.now()))
    const onKey = (e) => e.key === 'Escape' && finish()
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  if (done) return null

  return (
    <div
      className="splash"
      aria-hidden="true"
      onClick={() => {
        document.documentElement.classList.remove('splash-on')
        setDone(true)
      }}
    >
      <div className="splash-panel">
        <div className="splash-stage">
          <span className="splash-glow" />
          <span className="splash-line" />
          {LAYERS.map((n) => (
            <img
              key={n}
              src={`/brand/splash-${n}.webp`}
              alt=""
              width="900"
              height="258"
              decoding="sync"
              className={`splash-layer sl-${n}`}
            />
          ))}
          <span className="splash-sheen" />
        </div>
      </div>
      <span className="splash-edge" />
    </div>
  )
}
