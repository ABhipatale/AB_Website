import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY } from '../../lib/data'

/** Persistent WhatsApp shortcut + a back-to-top button that appears on scroll. */
export default function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            onClick={toTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink shadow-lift"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-ring" />
        <FaWhatsapp className="relative size-7" />
      </a>
    </div>
  )
}
