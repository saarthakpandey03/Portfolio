import { useEffect, useRef, useState } from 'react'

/**
 * Animated skill proficiency bar.
 * Starts animating when it enters the viewport (triggered by parent).
 */
export default function SkillBar({ name, pct, bg, animate }) {
  const [width,      setWidth]      = useState(0)
  const [displayPct, setDisplayPct] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!animate || hasRun.current) return
    hasRun.current = true

    const DUR = 1400
    const t0  = performance.now()

    setWidth(pct)

    const tick = (now) => {
      const progress = Math.min((now - t0) / DUR, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setDisplayPct(Math.floor(eased * pct))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplayPct(pct)
    }

    requestAnimationFrame(tick)
  }, [animate, pct])

  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span
          className="skill-bar__pct font-mono"
          style={{ color: displayPct >= pct ? 'var(--a)' : 'var(--txt2)' }}
        >
          {displayPct}%
        </span>
      </div>
      <div className="skill-bar__track">
        <div
          className="sb-fill skill-bar__fill"
          style={{ background: bg, width: `${width}%` }}
        />
      </div>
    </div>
  )
}
