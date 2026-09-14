import { useEffect, useId, useRef, useState } from 'react'

/**
 * A quiet background illustration that reveals itself from the bottom-left.
 *
 * One mask, scaled uniformly from the bottom-left corner, so width and height
 * advance together at the same pace and the revealed corner travels straight
 * along the diagonal to the top right.
 *
 * The reveal and the ambient drift both wait for the section to scroll into
 * view (via IntersectionObserver); nothing animates for off-screen sections.
 *
 * It is asset-agnostic. Because the mask is anchored in view-box units, any SVG
 * dropped into public/era/… works with no per-asset configuration:
 *
 *   <EraBackdrop src="era/medieval/palace.svg" />
 */

export const REVEAL = {
  /** total length of the reveal, seconds */
  seconds: 5,
  /** how much is already showing at the start */
  seed: 0.06,
  /** softness of the advancing edge, in view-box units */
  feather: 10,
  /** near-steady, so the sweep reads as one continuous travel */
  ease: 'cubic-bezier(.35,.15,.6,.9)',
} as const

export default function EraBackdrop({
  src,
  className = '',
  opacity = 0.07,
  aspect = '3 / 2',
}: {
  src: string
  className?: string
  opacity?: number
  /** CSS aspect-ratio of the asset; only affects letterboxing, not the reveal */
  aspect?: string
}) {
  const uid = useId().replace(/:/g, '')
  const hostRef = useRef<HTMLDivElement>(null)
  const [play, setPlay] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced || play) return
    const el = hostRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlay(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced, play])

  const maskId = `era-m-${uid}`
  const blurId = `era-b-${uid}`
  const started = play && !reduced
  const grow: React.CSSProperties | undefined = reduced
    ? undefined
    : {
        transformBox: 'view-box',
        transformOrigin: '0% 100%', // bottom-left of the viewBox, whatever its size
        animationName: started ? 'era-grow' : undefined,
        animationDuration: `${REVEAL.seconds}s`,
        animationTimingFunction: REVEAL.ease,
        animationFillMode: 'both',
        transform: started ? undefined : `scale(${REVEAL.seed})`,
      }

  return (
    <div ref={hostRef} className={`era-backdrop ${className}${started ? ' revealed' : ''}`} aria-hidden="true" style={{ aspectRatio: aspect }}>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet" style={{ opacity }}>
        <defs>
          <filter id={blurId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={REVEAL.feather} />
          </filter>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            {/* outer group sweeps sideways, inner group grows upward */}
            <g style={grow}>
              {/* only a small overshoot, so scale maps closely to how far the edge has travelled */}
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
