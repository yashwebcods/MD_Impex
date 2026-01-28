import '../App.css'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import HomeBanner from '../components/home/HomeBanner'
import AboutMdImpexSection from '../components/home/AboutMdImpexSection'
import HomeContact from '../components/home/HomeContact'
import HomeFooter from '../components/home/HomeFooter'
import HomeImpact from '../components/home/HomeImpact'
import HomeJourney from '../components/home/HomeJourney'
import HomeServices from '../components/home/HomeServices'
import HomeTestimonials from '../components/home/HomeTestimonials'
import HomeTrustedBy from '../components/home/HomeTrustedBy'
import HomeWhyImpex from '../components/home/HomeWhyImpex'
import ServicesOfferings from '../components/home/ServicesOfferings'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
  const showAllSections = true
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!scrollTo) return

    let attempts = 0
    const maxAttempts = 12

    const tryScroll = () => {
      const el = document.getElementById(scrollTo)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top, behavior: 'smooth' })
        navigate('/', { replace: true, state: {} })
        return
      }

      attempts += 1
      if (attempts <= maxAttempts) {
        window.setTimeout(tryScroll, 50)
      } else {
        navigate('/', { replace: true, state: {} })
      }
    }

    tryScroll()
  }, [location.state, navigate])

  return (
    <div className='min-h-screen pt-[76px]'  style={{ backgroundColor: 'rgb(20,41,65)' } }>
      <div>
        <Header />
      </div>
      <main>
        <HomeBanner />

        {showAllSections ? (
          <>
          <ScrollReveal variant="zoomIn" durationMs={850} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
            <AboutMdImpexSection />
          </ScrollReveal>
            {/* Trusted By Section */}
            <ScrollReveal variant="fadeRight" delayMs={50} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeTrustedBy />
            </ScrollReveal>

            <ScrollReveal variant="tiltUp" delayMs={100} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeImpact />
            </ScrollReveal>

            {/* Journey Section */}
            <ScrollReveal variant="fadeLeft" delayMs={150} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeJourney />
            </ScrollReveal>

            <ScrollReveal variant="blurUp" delayMs={200} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeServices />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delayMs={250} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <ServicesOfferings />
            </ScrollReveal>
            
            <ScrollReveal variant="fadeRight" delayMs={300} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeWhyImpex />
            </ScrollReveal>
            {/* Testimonial Section */}
            <ScrollReveal variant="fadeLeft" delayMs={350} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeTestimonials />
            </ScrollReveal>

            <ScrollReveal variant="zoomIn" delayMs={400} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeContact />
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delayMs={450} resetDelayMs={120} enterThreshold={0.18} exitThreshold={0.02}>
              <HomeFooter />
            </ScrollReveal>
          </>
        ) : null}
      </main>
    </div>
  )
}

export default Home

