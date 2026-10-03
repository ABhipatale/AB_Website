import { useEffect, useRef } from 'react'

/**
 * Writes the pointer position (relative to the element) into CSS custom
 * properties --mx / --my so a `.spotlight` radial highlight can follow it.
 */
export default function useMouseGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [])
  return ref
}
