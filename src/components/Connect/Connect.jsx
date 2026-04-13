import SectionHeader from '../common/SectionHeader'
import { SOCIAL_LINKS } from '../../utils/constants'
import './connect.css'

function SocialCard({ href, label, handle, c, g, s, iconPath }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="soc-card connect__soc-card"
      style={{ '--sc-c': c, '--sc-g': g, '--sc-s': s }}
    >
      <div className="soc-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d={iconPath} />
        </svg>
      </div>
      <span className="soc-lbl">{label}</span>
      <span className="soc-hnd">{handle}</span>
    </a>
  )
}

export default function Connect() {
  return (
    <section id="connect" className="connect section-pad">
      <div className="wrap">
        <div className="connect__inner">
          <SectionHeader
            num="05"
            label="Get In Touch"
            title="Let's Connect"
            center
          />

          <div className="gc connect__card rv d1">
            <div className="conn-glow" />

            <span className="conn-emoji connect__emoji">🤝</span>

            <p className="connect__sub">
              I'm open to opportunities, collaborations, and tech discussions.
              Let's build something amazing together.
            </p>

            {/* Social cards */}
            <div className="connect__soc-row soc-row-inner">
              {SOCIAL_LINKS.map((link) => (
                <SocialCard key={link.id} {...link} />
              ))}
            </div>

            {/* Email CTA */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saarthak3206@gmail.com&su=Let's%20Connect&body=Hi%20Saarthak,"
                target="_blank"
                className="email-cta connect__email-cta"
              >
                <MailIcon />
                Say Hello — saarthak3206@gmail.com
                <span className="arr">
                  <ArrowIcon />
                </span>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
