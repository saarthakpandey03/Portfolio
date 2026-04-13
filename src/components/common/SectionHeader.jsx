import './sectionHeader.css'

/**
 * SectionHeader — reused at the top of every section.
 * @param {string}  num     e.g. "01"
 * @param {string}  label   e.g. "Who Am I"
 * @param {string}  title   Rendered as HTML (supports <br>)
 * @param {string}  sub     Optional subtitle text
 * @param {boolean} center  Center-align (Connect section)
 */
export default function SectionHeader({ num, label, title, sub, center = false }) {
  return (
    <div className={`section-header rv ${center ? 'section-header--center' : ''}`}>
      <div className="section-header__label font-mono">
        {!center && <span className="section-header__line" />}
        {num} — {label}
      </div>
      <h2
        className="section-header__title font-syne"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p
          className="section-header__sub"
          dangerouslySetInnerHTML={{ __html: sub }}
        />
      )}
    </div>
  )
}
