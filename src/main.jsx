import { StrictMode } from 'react'
import { createRoot }  from 'react-dom/client'
import './globals.css'
import './index.css'
import App from './App.jsx'

// Anti-flicker: apply stored/system theme before first paint
;(function applyStoredTheme() {
  try {
    const saved  = localStorage.getItem('sp-theme')
    const system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', saved || system)
  } catch (_) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
