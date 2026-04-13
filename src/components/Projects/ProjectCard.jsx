/**
 * ProjectCard — renders one full-width project with an info panel
 * and a terminal-style code mockup panel side by side.
 */
export default function ProjectCard({ project, delay = 'd1' }) {
const {
  cat, num, numBg, title, desc,
  pills, feats, btnBg,
  vg1, vg2, chip1, chip2, termTitle,
  reversed, codeJSX,
  github, live   // ✅ ADD THIS
} = project

  const infoOrder    = reversed ? 2 : 1
  const terminalOrder = reversed ? 1 : 2

  return (
    <article
      className={`proj-card gc rv ${delay}`}
      style={{ '--vg1': vg1, '--vg2': vg2 }}
    >
      {/* ── Info panel ── */}
      <div className="proj-card__info" style={{ order: infoOrder }}>
        <span className="proj-card__cat font-mono">{cat}</span>

        <div
          className="proj-card__num font-syne"
          style={{ background: numBg }}
        >
          {num}
        </div>

        <h3 className="proj-card__title font-syne">{title}</h3>
        <p  className="proj-card__desc">{desc}</p>

        {/* Tech pills */}
        <div className="proj-card__pills">
          {pills.map(([name, cls]) => (
            <span key={name} className={`pp ${cls}`}>{name}</span>
          ))}
        </div>

        {/* Feature list */}
        <ul className="proj-card__feats">
          {feats.map((f) => (
            <li key={f} className="proj-card__feat">{f}</li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="proj-card__actions">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="proj-btn proj-btn--primary"
            style={{ background: btnBg }}
          >
            <GitHubIcon /> GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="proj-btn proj-btn--ghost"
            >
              ↗ Live Demo
            </a>
            )}
        </div>
      </div>

      {/* ── Terminal panel ── */}
      <div className="pf-vis proj-card__terminal" style={{ order: terminalOrder }}>
        <div className="proj-card__term-bar">
          <span className="proj-card__dot proj-card__dot--red"   />
          <span className="proj-card__dot proj-card__dot--yellow"/>
          <span className="proj-card__dot proj-card__dot--green" />
          <span className="proj-card__term-title font-mono">{termTitle}</span>
        </div>

        <div className="term-body">{codeJSX}</div>

        <div className="pchip" style={{ bottom: 18, left: 14, animationDelay: '0s' }}>
          {chip1}
        </div>
        <div className="pchip" style={{ top: 52, right: 12, animationDelay: '-2s' }}>
          {chip2}
        </div>
      </div>
    </article>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}
