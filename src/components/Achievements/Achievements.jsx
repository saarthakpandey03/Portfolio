import { useCounter } from '../../hooks/useCounter'
import SectionHeader from '../common/SectionHeader'
import { ACHIEVEMENTS } from '../../utils/constants'
import './achievements.css'

function AchievementCard({ icon, target, suffix, label, ag, delay }) {
  const { ref, value } = useCounter(target)

  return (
    <div
      className={`gc ach-c achievements__card rv ${delay}`}
      style={{ '--ag': ag }}
    >
      <div className="achievements__icon">{icon}</div>
      <span ref={ref} className="ach-val achievements__value">
        {value >= target ? target + suffix : value}
      </span>
      <p className="achievements__label">{label}</p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section-pad">
      <div className="wrap">
        <SectionHeader
          num="04"
          label="Milestones"
          title="Achievements"
          sub="Numbers that reflect the grind and consistency."
        />

        <div className="achievements__grid ach-grid-inner">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard
              key={item.label}
              {...item}
              delay={`d${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
