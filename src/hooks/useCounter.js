import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number from 0 → target when the returned ref enters the viewport.
 * The counter runs once; the observer disconnects after firing.
 *
 * @param {number} target   Final value to count to
 * @param {number} duration Animation duration in ms (default 1 400)
 * @returns {{ ref, value }} Attach `ref` to any DOM node; read animated `value`
 */
export function useCounter(target, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()

        const startTime = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setValue(target)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.1 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return { ref, value }
}
