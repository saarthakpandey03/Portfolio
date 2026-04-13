import { useEffect, useRef, useState } from 'react'
import SectionHeader from '../common/SectionHeader'
import SkillBar from './SkillBar'
import {
  SKILL_CATEGORIES,
  SKILL_BARS,
  FOCUS_AREAS,
  LEARNING_BADGES,
} from '../../utils/constants'
import './skills.css'

/* ── Individual badge ────────────────────────────────────────── */
function Badge({ name, lv, c, g, s, dot }) {
  return (
    <span
      className="skb"
      style={{ '--sk-c': c, '--sk-g': g, '--sk-s': s }}
    >
      <span
        className="sk-dot"
        style={dot ? { background: dot, boxShadow: `0 0 5px ${dot}` } : {}}
      />
      {name}
      {lv && <span className="sk-lv">{lv}</span>}
    </span>
  )
}

export default function Skills() {
  const barsRef  = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="skills section-pad">
      <div className="wrap">
        <SectionHeader
          num="02"
          label="Tech Arsenal"
          title="Technical Skills"
          sub="A battle-tested stack for building modern, high-performance web systems."
        />

        {/* ── Category badge rows ── */}
        <div className="skills__categories rv d1">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.label} className="gc skills__row">
              <div className="skills__row-label">
                <span className="skills__row-icon">{cat.icon}</span>
                <span className="skills__row-name font-mono">{cat.label}</span>
              </div>
              <div className="skills__badges">
                {cat.badges.map((b) => (
                  <Badge key={b.name} {...b} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bars + Focus split ── */}
        <div className="skills__split sk-split-inner rv d2">
          {/* Proficiency bars */}
          <div ref={barsRef} className="gc skills__bars-card">
            <h3 className="skills__bars-title font-syne">Core Proficiencies</h3>
            {SKILL_BARS.map((bar) => (
              <SkillBar key={bar.name} {...bar} animate={animate} />
            ))}
          </div>

          {/* Focus + learning */}
          <div className="skills__right">
            <div className="gc skills__focus-card">
              <div className="skills__focus-label font-mono">Focus Areas</div>
              <div className="skills__focus-list">
                {FOCUS_AREAS.map((f) => (
                  <div key={f.title} className="focus-item">
                    <span className="skills__focus-icon">{f.icon}</span>
                    <div>
                      <div className="skills__focus-title">{f.title}</div>
                      <div className="skills__focus-sub">{f.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gc skills__learn-card">
              <div className="skills__learn-title font-syne">Currently Learning 🔥</div>
              <div className="skills__learn-badges">
                {LEARNING_BADGES.map((b) => (
                  <Badge key={b.name} {...b} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
