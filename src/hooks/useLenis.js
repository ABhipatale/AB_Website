import { useEffect } from 'react'
import Lenis from 'lenis'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Global smooth scrolling via Lenis, wired to rAF.
 * Also intercepts in-page anchor clicks so nav jumps glide instead of snap.
 */
export default function useLenis() {
  useEffect(() => {
    if (prefersReduced()) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -76, duration: 1.25 })
      history.replaceState(null, '', id)
    }
    document.addEventListener('click', onClick)

    // Expose for programmatic scrolls (e.g. "back to top")
    window.__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onClick)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])
}
