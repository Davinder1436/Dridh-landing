/**
 * A quiet background illustration, rendered as a plain, static image.
 *
 * It is asset-agnostic. Any SVG dropped into public/era/… works with
 * no per-asset configuration:
 *
 *   <EraBackdrop src="era/fold1/palace.svg" />
 */

export default function EraBackdrop({
  src,
  className = '',
  opacity = 0.07,
  aspect = '3 / 2',
}: {
  src: string
  className?: string
  opacity?: number
  /** CSS aspect-ratio of the asset; only affects letterboxing, not the image */
  aspect?: string
}) {
  return (
    <div className={`era-backdrop ${className}`} aria-hidden="true" style={{ aspectRatio: aspect }}>
      <img src={`${import.meta.env.BASE_URL}${src}`} alt="" style={{ opacity }} />
    </div>
  )
}
