import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../lib/motion'

/**
 * Drop-in scroll reveal. Wrap anything; it fades/slides up once in view.
 * Pass `variants` to override, or `delay` for a simple stagger offset.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  as = 'div',
  className = '',
  amount,
  ...props
}) {
  const M = motion[as] || motion.div
  return (
    <M
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={amount ? { ...viewport, amount } : viewport}
      transition={delay ? { delay } : undefined}
      className={className}
      {...props}
    >
      {children}
    </M>
  )
}
