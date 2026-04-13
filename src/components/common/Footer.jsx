import './footer.css'

const FOOTER_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/saarthakpandey03',               external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/saarthak-pandey-a24118330', external: true },
  { label: 'LeetCode', href: 'https://leetcode.com/saarthakpandey03',              external: true },
  { label: 'Email',    href: 'mailto:saarthak3206@gmail.com',                       external: false },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <p className="footer__copy">
            © 2026{' '}
            <span className="footer__brand font-syne grad-text">
              Saarthak Pandey
            </span>
            {' '}· Built with 💙
          </p>

          <nav className="footer__links" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="footer__link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
