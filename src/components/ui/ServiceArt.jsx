/**
 * Service card illustration banner. Renders an original, on-brand PNG
 * illustration (public/assets/services/<art>.png) generated for each service.
 */
export default function ServiceArt({ art = 'web', title = '', className = '' }) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 ${className}`}>
      <img
        src={`/assets/services/${art}.png`}
        alt={title ? `${title} — AB Tech Services` : 'AB Tech Services service'}
        width="600"
        height="380"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      />
    </div>
  )
}
