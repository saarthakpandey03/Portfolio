import { ThemeProvider } from './context/ThemeContext'
import MainLayout        from './layout/MainLayout'

/**
 * App — root component.
 *
 * Responsibilities:
 *   1. Wrap the entire tree in <ThemeProvider> so every component
 *      can read/toggle the theme via useThemeToggle().
 *   2. Mount <MainLayout> which owns page structure.
 *
 * Nothing else belongs here — keep it clean.
 */
export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}
