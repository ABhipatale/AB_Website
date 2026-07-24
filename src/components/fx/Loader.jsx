import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY } from '../../lib/data'

/**
 * Premium loading screen. Fills a progress bar, then curtains away upward.
 * Calls onDone when finished so the app can start its entrance animations.
 */
export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const total = 1500
    const tick = (now) => {
      const p = Math.min(100, ((now - start) / total) * 100)
      // ease-out for a natural fill
      setProgress(Math.round(100 * (1 - Math.pow(1 - p / 100, 3))))
      if (p < 100) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          setGone(true)
          setTimeout(() => onDone?.(), 750)
        }, 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,#000,transparent_70%)]" />

          <div className="relative flex flex-col items-center">
            {/* Logo with pulsing rings */}
            <div className="relative mb-8 grid place-items-center">
              <span className="absolute size-24 rounded-3xl bg-brand/20 animate-pulse-ring" />
              <span className="absolute size-24 rounded-3xl bg-sky/20 animate-pulse-ring [animation-delay:0.8s]" />
              <motion.img
                src={COMPANY.logo}
                alt={COMPANY.name}
                width="72"
                height="72"
                initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative size-18 rounded-2xl object-contain shadow-lift"
                style={{ width: 72, height: 72 }}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-display text-lg font-extrabold tracking-tight text-ink"
            >
              AB Technology Solution
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand"
            >
              {COMPANY.tagline}
            </motion.p>

            {/* Progress */}
            <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand via-sky to-brand transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 font-poppins text-xs font-semibold tabular-nums text-muted">
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
