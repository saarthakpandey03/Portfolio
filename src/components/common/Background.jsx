import { useEffect, useRef } from 'react'
import './background.css'

/* ── Particle canvas ─────────────────────────────────────────── */
export function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    const cx = cv.getContext('2d')
    let W, H, raf

    const pts = Array.from({ length: 65 }, () => ({
      x:  Math.random() * 2000,
      y:  Math.random() * 1200,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r:  Math.random() * 1.3 + 0.3,
      c:  Math.random() > 0.5 ? '#4f9eff' : '#a855f7',
      o:  Math.random() * 0.4 + 0.07,
    }))

    function resize() {
      W = cv.width  = window.innerWidth
      H = cv.height = window.innerHeight
    }

    function draw() {
      cv.width = W   // clears canvas efficiently
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        cx.beginPath()
        cx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        cx.fillStyle = p.c
        cx.globalAlpha = p.o
        cx.fill()
      })

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            cx.beginPath()
            cx.moveTo(pts[i].x, pts[i].y)
            cx.lineTo(pts[j].x, pts[j].y)
            cx.strokeStyle  = '#4f9eff'
            cx.globalAlpha  = (1 - d / 100) * 0.055
            cx.lineWidth    = 0.5
            cx.stroke()
          }
        }
      }

      cx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" />
}

/* ── Ambient blob glows ──────────────────────────────────────── */
export function Blobs() {
  return (
    <div className="blobs" aria-hidden="true">
      <div className="blob blob--blue"   />
      <div className="blob blob--purple" />
      <div className="blob blob--pink"   />
    </div>
  )
}
