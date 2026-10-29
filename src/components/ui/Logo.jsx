import { Link } from 'react-router-dom'

/** Full horizontal ABnexa Software lockup — the light artwork for the dark theme. */
export function Logo({ className = 'h-9 w-auto' }) {
  return (
    <img
      src="/brand/abnexa-logo-light.png"
      alt="ABnexa Software"
      width="900"
      height="258"
      className={className}
    />
  )
}

/** The AB monogram on its own. */
export function Mark({ className = 'size-10' }) {
  return (
    <img
      src="/brand/abnexa-mark-light.png"
      alt=""
      aria-hidden="true"
      width="512"
      height="512"
      className={className}
    />
  )
}

export function HomeLink({ className, children, ...rest }) {
  return (
    <Link to="/" aria-label="ABnexa Software — home" className={className} {...rest}>
      {children}
    </Link>
  )
}
