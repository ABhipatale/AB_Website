import { useRef } from 'react'
import useMagnetic from '../../hooks/useMagnetic'

// Ripple on click — appends a short-lived span the CSS animates.
function spawnRipple(e) {
  const btn = e.currentTarget
  const circle = document.createElement('span')
  const d = Math.max(btn.clientWidth, btn.clientHeight)
  const rect = btn.getBoundingClientRect()
  circle.className = 'ripple-ink'
  circle.style.width = circle.style.height = `${d}px`
  circle.style.left = `${e.clientX - rect.left - d / 2}px`
  circle.style.top = `${e.clientY - rect.top - d / 2}px`
  btn.appendChild(circle)
  setTimeout(() => circle.remove(), 700)
}

const VARIANTS = {
  primary: 'text-white gradient-brand-animated shadow-[0_12px_34px_-10px_rgba(6,182,212,0.55)]',
  gold: 'text-ink bg-gradient-to-r from-amber-300 to-gold shadow-[0_12px_34px_-10px_rgba(245,158,11,0.6)]',
  outline: 'text-ink bg-white/80 backdrop-blur border border-line shadow-soft hover:border-brand/40 hover:text-brand',
  ghost: 'text-ink-soft hover:text-brand hover:bg-brand-soft',
}

const SIZES = {
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-13 px-7 text-[0.95rem] gap-2.5',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  size = 'md',
  magnetic = true,
  className = '',
  children,
  icon: Icon,
  ...props
}) {
  const magRef = useMagnetic({ strength: 0.28, radius: 60 })
  const fallback = useRef(null)
  const ref = magnetic ? magRef : fallback
  const Comp = as

  return (
    <Comp
      ref={ref}
      onClick={(e) => {
        spawnRipple(e)
        props.onClick?.(e)
      }}
      className={[
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold',
        'font-grotesk tracking-tight transition-[background,color,border,box-shadow,transform] duration-300',
        'will-change-transform active:scale-[0.97]',
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(' ')}
      {...props}
    >
      {/* sheen sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100">
        <span className="block h-full w-1/3 skew-x-12 bg-white/25 blur-md" />
      </span>
      <span className="relative inline-flex items-center gap-2">
        {children}
        {Icon && (
          <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </span>
    </Comp>
  )
}
