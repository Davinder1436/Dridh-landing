import { useEffect, useRef } from 'react'

/* web encode (1080p, 60fps, faststart, ~5MB) on the Osho Himalayas public
   bucket; bump the -vN suffix when re-uploading so caches refresh */
const SYSTEMS_VIDEO = 'https://oshohimalayas-bucket.s3.ap-south-1.amazonaws.com/dridh-landing/demos/dridh-pms-v1.mp4'

export default function AiSystems() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const glowRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    let raf = 0
    let last = 0

    /* ambient light: sample the frame into a tiny canvas that CSS blows up
       and blurs, so the picture bleeds its own colours into the band behind
       it instead of ending on a hard edge */
    const paint = (now: number) => {
      raf = requestAnimationFrame(paint)
      if (now - last < 120 || v.paused || v.readyState < 2) return
      last = now
      const c = glowRef.current
      const ctx = c?.getContext('2d')
      if (c && ctx) ctx.drawImage(v, 0, 0, c.width, c.height)
    }
    raf = requestAnimationFrame(paint)

    // only play while the section is on screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.35 },
    )
    io.observe(v)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  return (
    <section id="ai-systems" className="demo-band">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">AI in systems</span>
          <h2>AI accelerated management</h2>
          <p className="lede">One sentence to your PMS. It plans the work, you approve, it’s done.</p>
        </div>

        <div className="demo-stage">
          <canvas className="demo-glow" ref={glowRef} width="64" height="36" aria-hidden="true" />
          <div className="demo-frame demo-frame-video">
            <video
              ref={videoRef}
              src={SYSTEMS_VIDEO}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Dridh PMS in use: the agent is asked for a change in plain words, and carries it out after approval"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
