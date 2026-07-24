import { motion } from 'framer-motion'
import { stagger, fadeUp, viewport } from '../../lib/motion'

/**
 * Consistent eyebrow + title + subtitle block used to open each section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={[
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
        className,
      ].join(' ')}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={[
            'inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-gradient-to-r from-brand-soft via-sky-50 to-blue-50 px-4 py-1.5',
            'text-xs font-bold uppercase tracking-[0.16em] shadow-soft',
            isCenter ? 'mx-auto' : '',
          ].join(' ')}
        >
          <span className="size-1.5 animate-pulse rounded-full bg-gradient-to-r from-sky-500 to-brand" />
          <span className="bg-gradient-to-r from-brand via-blue-600 to-sky-600 bg-clip-text text-transparent">
            {eyebrow}
          </span>
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl md:text-[2.75rem]"
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={[
            'mt-4 text-base leading-relaxed text-muted sm:text-lg',
            isCenter ? 'mx-auto' : '',
          ].join(' ')}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
