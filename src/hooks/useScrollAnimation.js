import { useEffect } from 'react'

/**
 * Attaches a single shared IntersectionObserver to every `.rv` element
 * in the document. When an element enters the viewport it receives the
 * `.in` class, triggering the CSS reveal transition defined in globals.css.
 *
 * Call once at the top of the component tree (MainLayout or App).
 */
export function useScrollAnimation() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.08 }
    )

    // Observe all current + future .rv nodes
    const observe = () => document.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    observe()

    // Re-run after a tick so elements rendered after this hook mounts are caught
    const t = setTimeout(observe, 100)

    return () => {
      obs.disconnect()
      clearTimeout(t)
    }
  }, [])
}
