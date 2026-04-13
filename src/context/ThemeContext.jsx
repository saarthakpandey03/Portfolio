import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

/**
 * Reads saved theme from localStorage, falls back to system preference,
 * then to 'dark'. Applies data-theme directly to <html> so every CSS
 * variable in the document responds instantly — no flicker, no partial updates.
 */
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('sp-theme')
    if (saved === 'dark' || saved === 'light') return saved
  } catch (_) {}

  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }
  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // Sync to <html data-theme="…"> and localStorage on every change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('sp-theme', theme) } catch (_) {}
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
