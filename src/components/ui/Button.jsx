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
  primary: 'text-white gradient-brand-animated shadow-[0_12px_34px_-8px_rgba(37,99,235,0.6)]',
  gold: 'text-ink bg-gradient-to-r from-amber-300 to-gold shadow-[0_12px_34px_-8px_rgba(250,204,21,0.7)]',
  outline: 'text-ink bg-white border border-line shadow-soft',
  ghost: 'text-ink-soft',
}

const SIZES = {
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-13 px-7 text-[0.95rem] gap-2.5',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  ...props
}) {
  const Comp = as

  return (
    <Comp
      onClick={(e) => {
        spawnRipple(e)
        props.onClick?.(e)
      }}
      className={[
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold',
        'font-grotesk tracking-tight active:scale-[0.97] transition-transform duration-200',
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(' ')}
      {...props}
    >
      <span className="relative inline-flex items-center gap-2">
        {children}
        {Icon && <Icon className="size-4" />}
      </span>
    </Comp>
  )
}
