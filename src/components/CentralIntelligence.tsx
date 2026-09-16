import EraBackdrop from '../era/EraBackdrop'

/**
 * Circular flow: everything a property produces feeds one secure core that
 * holds the data in-house, and the core drives management and every guest
 * channel. Geometry is computed here so the SVG stays declarative.
 */

const CX = 470
const CY = 360
const CORE_R = 96

const D2R = Math.PI / 180
const at = (angle: number, r: number) => ({
  x: CX + r * Math.cos(angle * D2R),
  y: CY + r * Math.sin(angle * D2R),
})

/** point on the circle of radius r around (cx,cy), moved `inset` towards it */
const edge = (from: { x: number; y: number }, to: { x: number; y: number }, inset: number) => {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const len = Math.hypot(dx, dy) || 1
  return { x: from.x + (dx / len) * inset, y: from.y + (dy / len) * inset }
}

/** gently curved link between two points */
const link = (a: { x: number; y: number }, b: { x: number; y: number }, bend = 0.1) => {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const cx = mx - (b.y - a.y) * bend
  const cy = my + (b.x - a.x) * bend
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
}

const IN_R = 322
const OUT_R = 300
const NODE_R = 36
const OUT_NODE_R = 48

/** everything the property already produces */
const INPUTS = [
  { label: 'Your PMS', angle: 118 },
  { label: 'Booking engine', angle: 147 },
  { label: 'OTA channels', angle: 176 },
  { label: 'Guest profiles', angle: 205 },
  { label: 'Payments', angle: 234 },
  { label: 'Front desk & housekeeping', angle: 263 },
]

/** what the core drives. `below` puts the label under the node so the
    channel stack beside it stays clear */
const OUTPUTS = [
  { label: 'Management', sub: 'reports, approvals, day close', angle: 318, below: false },
  { label: 'Guest communication', sub: 'one conversation, every channel', angle: 56, below: true },
]

/** channels hanging off guest communication, stacked down the right edge */
const CHIP_X = 876
const CHANNELS = [
  { label: 'WhatsApp', y: 404 },
  { label: 'Calls', y: 486 },
  { label: 'Email', y: 568 },
  { label: 'OTAs', y: 650 },
]

export default function CentralIntelligence() {
  const core = { x: CX, y: CY }
  const guestNode = at(OUTPUTS[1].angle, OUT_R)

  return (
    <section id="intelligence" className="section-rule">
      <EraBackdrop src="era/fold3/beach-fold3.svg" className="era-int-beach" aspect="528.99 / 446.04" />
      <EraBackdrop src="era/fold3/butler-fold3.svg" className="era-int-butler" aspect="406.04 / 412.35" />
      <EraBackdrop src="era/fold3/burj-fold3.svg" className="era-int-burj" aspect="287.49 / 405.18" />
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Centralized intelligence</span>
          <h2>One brain for the whole property</h2>
          <p className="lede">
            Everything your property produces feeds a single secure system. Your data stays with
            you, and every channel answers from the same truth.
          </p>
        </div>

        <figure className="ci-figure">
          <svg
            className="ci-svg"
            viewBox="0 0 1000 760"
            role="img"
            aria-label="Diagram: your PMS, booking engine, OTA channels, guest profiles, payments and front desk feed one AI layer, which drives management and guest communication across WhatsApp, calls, email and OTAs"
          >
            <defs>
              <radialGradient id="ci-glow" cx="50%" cy="50%" r="50%">
                <stop offset="55%" stopColor="#1A3E2A" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#1A3E2A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* halo + slowly turning ring around the core */}
            <circle className="ci-halo" cx={CX} cy={CY} r={CORE_R + 96} fill="url(#ci-glow)" />
            <circle className="ci-ring" cx={CX} cy={CY} r={CORE_R + 44} />

            {/* inputs → core */}
            {INPUTS.map((n, i) => {
              const p = at(n.angle, IN_R)
              const a = edge(p, core, NODE_R + 4)
              const b = edge(core, p, CORE_R + 6)
              const d = link(a, b)
              const left = Math.cos(n.angle * D2R) < 0
              return (
                <g key={n.label}>
                  <path className="ci-line" d={d} />
                  <circle
                    className="ci-dot"
                    r="5.5"
                    style={{ offsetPath: `path('${d}')`, ['--delay' as string]: `${i * 0.42}s`, ['--dur' as string]: '2.9s' }}
                  />
                  <circle className="ci-node" cx={p.x} cy={p.y} r={NODE_R} />
                  <circle className="ci-node-pip" cx={p.x} cy={p.y} r="7" style={{ ['--delay' as string]: `${i * 0.42}s` }} />
                  <text
                    className="ci-node-label"
                    x={left ? p.x - NODE_R - 16 : p.x + NODE_R + 16}
                    y={p.y + 6}
                    textAnchor={left ? 'end' : 'start'}
                  >
                    {n.label}
                  </text>
                </g>
              )
            })}

            {/* core */}
            <circle className="ci-core" cx={CX} cy={CY} r={CORE_R} />
            <g className="ci-core-mark" transform={`translate(${CX} ${CY - 46})`}>
              <path d="M0 -13 L13 -7 V3 C13 12 7 18 0 21 C-7 18 -13 12 -13 3 V-7 Z" />
              <path className="ci-core-keyhole" d="M0 -3 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M0 0 v6" />
            </g>
            <text className="ci-core-title" x={CX} y={CY + 10} textAnchor="middle">AI layer</text>
            <text className="ci-core-sub" x={CX} y={CY + 38} textAnchor="middle">state of the art</text>

            {/* core → outputs */}
            {OUTPUTS.map((n, i) => {
              const p = at(n.angle, OUT_R)
              const a = edge(core, p, CORE_R + 6)
              const b = edge(p, core, OUT_NODE_R + 4)
              const d = link(a, b)
              return (
                <g key={n.label}>
                  <path className="ci-line ci-line-out" d={d} />
                  <circle
                    className="ci-dot ci-dot-out"
                    r="6"
                    style={{ offsetPath: `path('${d}')`, ['--delay' as string]: `${0.9 + i * 0.6}s`, ['--dur' as string]: '2.4s' }}
                  />
                  <circle className="ci-node ci-node-out" cx={p.x} cy={p.y} r={OUT_NODE_R} />
                  <text
                    className="ci-out-label"
                    x={n.below ? p.x : p.x + OUT_NODE_R + 18}
                    y={n.below ? p.y + OUT_NODE_R + 36 : p.y - 2}
                    textAnchor={n.below ? 'middle' : 'start'}
                  >
                    {n.label}
                  </text>
                  <text
                    className="ci-out-sub"
                    x={n.below ? p.x : p.x + OUT_NODE_R + 18}
                    y={n.below ? p.y + OUT_NODE_R + 60 : p.y + 22}
                    textAnchor={n.below ? 'middle' : 'start'}
                  >
                    {n.sub}
                  </text>
                </g>
              )
            })}

            {/* guest communication → channels */}
            {CHANNELS.map((c, i) => {
              const p = { x: CHIP_X, y: c.y }
              const w = c.label.length * 9.4 + 34
              const a = edge(guestNode, { x: p.x - w / 2, y: p.y }, OUT_NODE_R + 4)
              const b = { x: p.x - w / 2 - 6, y: p.y }
              const d = link(a, b, 0.05)
              return (
                <g key={c.label}>
                  <path className="ci-line ci-line-chip" d={d} />
                  <circle
                    className="ci-dot ci-dot-chip"
                    r="4.5"
                    style={{ offsetPath: `path('${d}')`, ['--delay' as string]: `${1.5 + i * 0.35}s`, ['--dur' as string]: '2.1s' }}
                  />
                  <rect className="ci-chip" x={p.x - w / 2} y={p.y - 19} width={w} height="38" rx="19" />
                  <text className="ci-chip-label" x={p.x} y={p.y + 6} textAnchor="middle">{c.label}</text>
                </g>
              )
            })}
          </svg>
          <figcaption className="ci-caption">
            Built entirely in-house on your own machines, or on the world&apos;s most secure cloud.
            Either way the data and the intelligence stay yours — encrypted, audited, and never
            shared.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
