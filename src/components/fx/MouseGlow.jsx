import { useEffect, useRef } from 'react'

/**
 * A soft brand-tinted radial glow that trails the cursor across the whole
 * page — adds depth without a dark theme. Fixed, blurred, non-interactive.
 */
export default function MouseGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    let raf
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const cur = { ...target }

    const move = (e) => {
      target.x = e.clientX
      target.y = e.clientY
    }
    const loop = () => {
      cur.x += (target.x - cur.x) * 0.08
      cur.y += (target.y - cur.y) * 0.08
      if (el) el.style.transform = `translate3d(${cur.x - 300}px, ${cur.y - 300}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[600px] rounded-full opacity-70 blur-[120px] md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(56,189,248,0.16), rgba(37,99,235,0.10) 40%, transparent 70%)',
      }}
    />
  )
}
