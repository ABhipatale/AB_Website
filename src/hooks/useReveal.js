import { useEffect } from 'react'

/**
 * Adds `.is-in` to every `.reveal` element once it scrolls into view.
 * Content is only hidden while the `js` class is on <html>, so the
 * pre-rendered HTML stays fully readable without JavaScript.
 */
export default function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}
