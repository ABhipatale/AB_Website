import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { CITIES, SERVED_AREAS } from '../../lib/cities'

/** Local-SEO block: links to every city landing page + full service area. */
export default function Areas() {
  const others = SERVED_AREAS.filter((a) => !CITIES.some((c) => c.name === a))

  return (
    <section id="areas" className="py-20 sm:py-24">
      <div className="wrap">
        <p className="tag reveal flex items-center gap-3 text-muted">
          <span className="rule" /> Based in Karad · working across Maharashtra
        </p>
        <h2 className="reveal mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Website developer near you
        </h2>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CITIES.map((c) => (
            <li key={c.slug} className="reveal">
              <Link
                to={`/${c.path}`}
                className="group flex items-center justify-between gloss rounded-2xl border border-line bg-panel px-5 py-4 transition-colors hover:border-orange"
              >
                <span>
                  <span className="tag block text-muted group-hover:text-orange">Website developer in</span>
                  <span className="mt-1 block font-display text-lg font-semibold">{c.name}</span>
                </span>
                <ArrowUpRight className="size-4 text-orange" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="reveal mt-8 max-w-4xl text-sm leading-relaxed text-muted">
          Also serving {others.join(', ')}.
        </p>
      </div>
    </section>
  )
}
