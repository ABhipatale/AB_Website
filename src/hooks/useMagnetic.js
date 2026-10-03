import { useEffect, useRef } from 'react'

/**
 * Magnetic pull toward the cursor. Attach the returned ref to an element;
 * it eases toward the pointer within `radius` and springs back on leave.
 * Disabled for coarse pointers and reduced-motion users.
 */
export default function useMagnetic({ strength = 0.3, radius = 70 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    let raf = 0
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      const max = Math.max(r.width, r.height) / 2 + radius
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform =
          dist < max ? `translate(${dx * strength}px, ${dy * strength}px)` : 'translate(0,0)'
      })
    }
    const reset = () => {
      cancelAnimationFrame(raf)
      el.style.transform = 'translate(0,0)'
    }

    window.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', reset)
      cancelAnimationFrame(raf)
    }
  }, [strength, radius])

  return ref
}
