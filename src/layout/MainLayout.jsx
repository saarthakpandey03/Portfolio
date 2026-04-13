import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Particles, Blobs }   from '../components/common/Background'
import Navbar                  from '../components/Navbar/Navbar'
import Hero                    from '../components/Hero/Hero'
import About                   from '../components/About/About'
import Skills                  from '../components/Skills/Skills'
import Projects                from '../components/Projects/Projects'
import Achievements             from '../components/Achievements/Achievements'
import Connect                  from '../components/Connect/Connect'
import Footer                   from '../components/common/Footer'

/**
 * MainLayout
 * Owns the full page order, the shared background layers,
 * and the single scroll-reveal observer instance.
 */
export default function MainLayout() {
  // Attach the global IntersectionObserver for .rv elements
  useScrollAnimation()

  return (
    <>
      {/* ── Persistent background layers ── */}
      <Blobs />
      <Particles />

      {/* ── Fixed navigation ── */}
      <Navbar />

      {/* ── Page sections ── */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Separator />
        <About />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Achievements />
        <Separator />
        <Connect />
      </main>

      <Footer />
    </>
  )
}

function Separator() {
  return <div className="sep" aria-hidden="true" />
}
