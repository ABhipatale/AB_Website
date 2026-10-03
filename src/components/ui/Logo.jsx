import { useState } from 'react'
import { COMPANY } from '../../lib/data'

/**
 * Company logo. Renders the temporary /assets/Ab.png and falls back to an
 * inline "AB" monogram if the image is ever missing, so layout never breaks.
 */
export default function Logo({ withWordmark = true, light = false, className = '', imgClass = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <span className={['inline-flex items-center gap-2.5', className].join(' ')}>
      {failed ? (
        <span
          className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-sky text-sm font-extrabold text-white shadow-[0_6px_16px_-4px_rgba(37,99,235,0.6)]"
          aria-hidden="true"
        >
          AB
        </span>
      ) : (
        <img
          src={COMPANY.logo}
          alt={`${COMPANY.name} logo`}
          width="36"
          height="36"
          onError={() => setFailed(true)}
          className={['size-9 rounded-xl object-contain', imgClass].join(' ')}
        />
      )}

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className={[
            'font-display text-[0.95rem] font-extrabold tracking-tight',
            light ? 'text-white' : 'text-ink',
          ].join(' ')}>
            AB Tech
          </span>
          <span className={[
            'text-[0.62rem] font-semibold uppercase tracking-[0.26em]',
            light ? 'text-cyan-300' : 'text-accent',
          ].join(' ')}>
            Services
          </span>
        </span>
      )}
    </span>
  )
}
