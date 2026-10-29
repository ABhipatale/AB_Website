import { Link } from 'react-router-dom'

/** Full horizontal ABnexa Software lockup. `light` for dark backgrounds. */
export function Logo({ light = false, className = 'h-9 w-auto' }) {
  return (
    <img
      src={light ? '/brand/abnexa-logo-light.png' : '/brand/abnexa-logo.png'}
      alt="ABnexa Software"
      width="900"
      height="258"
      className={className}
    />
  )
}

/** The AB monogram on its own. */
export function Mark({ light = false, className = 'size-10' }) {
  return (
    <img
      src={light ? '/brand/abnexa-mark-light.png' : '/brand/abnexa-mark.png'}
      alt=""
      aria-hidden="true"
      width="512"
      height="512"
      className={className}
    />
  )
}

export function HomeLink({ className, children }) {
  return (
    <Link to="/" aria-label="ABnexa Software — home" className={className}>
      {children}
    </Link>
  )
}
