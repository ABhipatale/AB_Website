import useCountUp from '../../hooks/useCountUp'

/** Animated number that counts up on scroll into view. */
export default function Counter({ value, suffix = '', className = '' }) {
  const [display, ref] = useCountUp(value)
  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
