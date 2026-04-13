import { useEffect, useRef, useState } from 'react'
import { TYPEWRITER_WORDS, RESUME_TEXT } from '../../utils/constants'
import SectionHeader from '../common/SectionHeader'
import './hero.css'



function downloadResume() {
  const link = document.createElement("a");
  link.href = "/RESUME.pdf";   // public folder se
  link.download = "Saarthak_Pandey_Resume.pdf";
  link.click();
}

export default function Hero() {
  const [typed, setTyped] = useState('')
  const tw = useRef({ ri: 0, ci: 0, del: false })

  useEffect(() => {
    let timer

    function tick() {
      const { ri, ci, del } = tw.current
      const word = TYPEWRITER_WORDS[ri]

      if (!del) {
        const next = ci + 1
        setTyped(word.slice(0, next))
        tw.current.ci = next
        if (next >= word.length) {
          tw.current.del = true
          timer = setTimeout(tick, 2200)
        } else {
          timer = setTimeout(tick, 88)
        }
      } else {
        const next = ci - 1
        setTyped(word.slice(0, next))
        tw.current.ci = next
        if (next <= 0) {
          tw.current.del = false
          tw.current.ri  = (ri + 1) % TYPEWRITER_WORDS.length
          timer = setTimeout(tick, 400)
        } else {
          timer = setTimeout(tick, 48)
        }
      }
    }

    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__grid hero-grid-inner">
        {/* ── Left: text content ── */}
        <div className="hero__content hero-text-center">
          <div className="hero-badge">
            <span className="hdot" />
            Available for Opportunities
          </div>

          <h1 className="hero-title font-syne hero__headline">
            Hey, I'm
            <span className="name-grad">Saarthak<br />Pandey</span>
          </h1>

          <p className="hero-role hero__role">
            <span className="font-mono">{typed}</span>
            <span className="cur" />
          </p>

          <p className="hero-sum hero__summary hero-sum-center">
            Full Stack Developer skilled in building scalable web applications
            using React, Node.js, and databases. Experienced in frontend,
            backend, and real-time systems.
          </p>

          <div className="hero-acts hero__actions hero-acts-center">
            <a href="#projects" className="btn btn--primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              View Projects
            </a>
            <button onClick={downloadResume} className="btn btn--ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </button>
          </div>
        </div>

        {/* ── Right: avatar visual ── */}
        <div className="hero__visual hero-vis-an">
          <div className="hero__avatar av-wrap-sm">
            <div className="av-ring-out" />
            <div className="av-ring-mid" />
            <div className="hero__avatar-glow" />
            <div className="hero__avatar-bg" />
            <div className="av-init font-syne">SP</div>

            {/* Floating tech badges */}
            <div className="tf" style={{ top: '8%',   left: '-66px',  animationDelay: '0s'    }}>⚛ React</div>
            <div className="tf" style={{ top: '24%',  right: '-72px', animationDelay: '-1.8s' }}>🟢 Node.js</div>
            <div className="tf" style={{ bottom: '24%',left: '-74px', animationDelay: '-3.2s' }}>🍃 MongoDB</div>
            <div className="tf" style={{ bottom: '8%', right: '-60px',animationDelay: '-1s'   }}>🐍 Python</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-arr" />
      </div>
    </section>
  )
}
