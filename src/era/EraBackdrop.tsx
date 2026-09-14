import { useId } from 'react'

/**
 * A quiet background illustration, rendered as a plain image.
 *
 * Pass `animated` for the bottom-left reveal sweep plus the ambient drift.
 * Only the hero yoga artwork uses it; every other instance stays static.
 *
 * It is asset-agnostic. Any SVG dropped into public/era/… works with
 * no per-asset configuration:
 *
 *   <EraBackdrop src="era/medieval/palace.svg" />
 */

export default function EraBackdrop({
  src,
  className = '',
  opacity = 0.07,
  aspect = '3 / 2',
  animated = false,
}: {
  src: string
  className?: string
  opacity?: number
  /** CSS aspect-ratio of the asset; only affects letterboxing, not the image */
  aspect?: string
  /** bottom-left reveal + ambient drift; hero yoga artwork only */
  animated?: boolean
}) {
  const uid = useId().replace(/:/g, '')

  if (!animated) {
    return (
      <div className={`era-backdrop ${className}`} aria-hidden="true" style={{ aspectRatio: aspect }}>
        <img src={`${import.meta.env.BASE_URL}${src}`} alt="" style={{ opacity }} />
      </div>
    )
  }

  const maskId = `era-m-${uid}`
  const blurId = `era-b-${uid}`

  return (
    <div className={`era-backdrop ${className} animated`} aria-hidden="true" style={{ aspectRatio: aspect }}>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet" style={{ opacity }}>
        <defs>
          <filter id={blurId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={10} />
          </filter>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            {/* sweeps sideways and grows upward from the bottom-left corner;
                the animation itself lives in CSS so reduced-motion users
                get the fully revealed static image */}
            <g className="era-reveal">
              <rect x="-20" y="-20" width="1240" height="840" fill="#fff" filter={`url(#${blurId})`} />
            </g>
          </mask>
        </defs>
        <image
          href={`${import.meta.env.BASE_URL}${src}`}
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  )
}
