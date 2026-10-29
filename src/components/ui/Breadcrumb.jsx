import { Link } from 'react-router-dom'

/** Visible breadcrumb trail. `items` are [label, href]; the last is the current page. */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="tag reveal">
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        {items.map(([label, href], i) => {
          const last = i === items.length - 1
          return (
            <li key={label} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-fg">
                  {label}
                </span>
              ) : href.startsWith('/#') ? (
                <a href={href} className="transition-colors hover:text-orange">
                  {label}
                </a>
              ) : (
                <Link to={href} className="transition-colors hover:text-orange">
                  {label}
                </Link>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
