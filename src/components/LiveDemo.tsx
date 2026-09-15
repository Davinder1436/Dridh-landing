import { useEffect, useRef, useState } from 'react'
import { MantineProvider, Timeline } from '@mantine/core'
// Mantine's size tokens (--mantine-scale etc.) live here; variables only, no resets
import '@mantine/core/styles/default-css-variables.css'
import '@mantine/core/styles/Timeline.css'

/* checkpoints in public/demos/chatgpt.mp4, in seconds. Each line segment
   fills as the video moves from one checkpoint to the next; `dridh` keeps
   that step lit (in green) after the video has moved past it */
const STEPS = [
  { at: 0, label: 'Open ChatGPT' },
  { at: 2, label: 'Type a prompt' },
  { at: 7, label: 'It thinks and recommends your property via Dridh', dridh: true },
  { at: 12, label: 'Browse through courses' },
  { at: 15, label: 'Select the room you like' },
  { at: 20, label: 'Fill in your details' },
  { at: 27, label: 'Review the price' },
  { at: 31, label: 'Proceed to pay' },
]

/* web encode (H.264, 60fps, faststart, ~5MB) served from the Osho Himalayas
   public bucket; bump the -vN suffix when re-uploading so caches refresh */
const DEMO_VIDEO = 'https://oshohimalayas-bucket.s3.ap-south-1.amazonaws.com/dridh-landing/demos/chatgpt-v1.mp4'

const REPLAY_PAUSE_MS = 5000
const LAST = STEPS.length - 1

/** index of the step the video is currently on */
function stepAt(t: number) {
  let i = 0
  while (i < LAST && t >= STEPS[i + 1].at) i++
  return i
}

/** how far (0..1) segment i, from step i to step i+1, is filled at time t */
function segmentAt(i: number, t: number) {
  const span = STEPS[i + 1].at - STEPS[i].at
  return Math.min(1, Math.max(0, (t - STEPS[i].at) / span))
}

export default function LiveDemo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [step, setStep] = useState(0)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    let raf = 0
    let replay = 0
    let visible = false
    let waiting = false

    // read the video clock every frame so the line never drifts from the picture
    const tick = () => {
      const t = v.currentTime
      itemRefs.current.forEach((el, i) => {
        if (el && i < LAST) el.style.setProperty('--seg', String(segmentAt(i, t)))
      })
      setStep(stepAt(t))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // hold the finished state for 5s, then run video and steps again from 0
    const onEnded = () => {
      waiting = true
      replay = window.setTimeout(() => {
        waiting = false
        v.currentTime = 0
        if (visible) v.play().catch(() => {})
      }, REPLAY_PAUSE_MS)
    }
    v.addEventListener('ended', onEnded)

    // only play while the section is on screen
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !waiting) v.play().catch(() => {})
        else if (!visible) v.pause()
      },
      { threshold: 0.35 },
    )
    io.observe(v)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(replay)
      v.removeEventListener('ended', onEnded)
      io.disconnect()
    }
  }, [])

  return (
    <section id="demo" className="demo-band">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Live demo</span>
          <h2>Make ChatGPT your new channel of bookings</h2>
          <p className="demo-note">
            This demo shows the Dridh ChatGPT plugin at work. It will be released publicly on
            ChatGPT very soon.
          </p>
        </div>

        <div className="demo-layout">
          <div className="demo-phone-wrap">
            <div className="demo-phone">
              <video
                ref={videoRef}
                src={DEMO_VIDEO}
                muted
                playsInline
                preload="auto"
                aria-label="A guest asks ChatGPT for a meditation course and books a room, step by step"
              />
            </div>
          </div>

          <div className="demo-timeline-wrap">
            <MantineProvider forceColorScheme="light" withGlobalClasses={false}>
              <Timeline
                active={step}
                bulletSize={22}
                lineWidth={4}
                color="#1A3E2A"
                classNames={{
                  root: 'demo-timeline',
                  item: 'demo-tl-item',
                  itemBullet: 'demo-tl-bullet',
                  itemTitle: 'demo-tl-title',
                  itemContent: 'demo-tl-time',
                }}
              >
                {STEPS.map((s, i) => (
                  <Timeline.Item
                    key={s.at}
                    ref={(el) => {
                      itemRefs.current[i] = el
                    }}
                    className={[
                      i <= step && 'is-reached',
                      i < step && 'is-done',
                      i === step && 'is-active',
                      s.dridh && 'is-dridh',
                    ].filter(Boolean).join(' ')}
                    title={s.label}
                  />
                ))}
              </Timeline>
            </MantineProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
