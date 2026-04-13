import { useState, useEffect } from 'react'
import { useThemeToggle } from '../../hooks/useThemeToggle'
import { NAV_LINKS } from '../../utils/constants'
import './navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useThemeToggle()
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        {/* Logo */}
        <div
          className="navbar__logo font-syne grad-text"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
        >
          SP
        </div>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-link font-mono navbar__link"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="navbar__controls">
          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle__knob" />
            <span className="theme-toggle__moon">🌙</span>
            <span className="theme-toggle__sun">☀️</span>
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-menu__link"
              onClick={closeMenu}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
