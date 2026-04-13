import { useTheme } from '../context/ThemeContext'

/**
 * Thin wrapper around ThemeContext for components that only
 * need theme state — keeps imports short and readable.
 */
export function useThemeToggle() {
  return useTheme()
}
