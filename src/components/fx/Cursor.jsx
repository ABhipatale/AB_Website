import { useEffect, useRef, useState } from 'react'

/**
 * Custom two-part cursor: a small dot that tracks 1:1 and a larger ring
 * that lags with easing and grows over interactive elements.
 * Disabled on touch / coarse pointers and when reduced motion is preferred.
 */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }
    let raf

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
      }
      const t = e.target.closest('a, button, [data-cursor], input, textarea, select, label')
      ring.current?.classList.toggle('is-active', !!t)
    }

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16
      ringPos.y += (pos.y - ringPos.y) * 0.16
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const down = () => ring.current?.classList.add('is-down')
    const up = () => ring.current?.classList.remove('is-down')
    const leave = () => document.documentElement.classList.add('cursor-hidden')
    const enter = () => document.documentElement.classList.remove('cursor-hidden')

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <style>{`
        .cursor-hidden .ab-cursor { opacity: 0 !important; }
        .ab-ring { transition: width .25s ease, height .25s ease, background .25s ease, border-color .25s ease; }
        .ab-ring.is-active { width: 52px; height: 52px; background: rgba(37,99,235,0.08); border-color: rgba(37,99,235,0.6); }
        .ab-ring.is-down { width: 30px; height: 30px; }
      `}</style>
      <div
        ref={dot}
        className="ab-cursor pointer-events-none fixed left-0 top-0 z-[9999] size-1.5 rounded-full bg-brand"
        style={{ mixBlendMode: 'normal' }}
      />
      <div
        ref={ring}
        className="ab-cursor ab-ring pointer-events-none fixed left-0 top-0 z-[9998] size-9 rounded-full border-2 border-brand/40"
      />
    </>
  )
}
