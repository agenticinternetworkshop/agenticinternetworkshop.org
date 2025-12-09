'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import QRCode from 'qrcode'
import logoImage from '@/assets/logo_transparent.png'
import heroBackgroundImage from '@/assets/hero_background.png'
import SponsorCard from '@/components/SponsorCard'
import { EventLink } from '@/components/EventLink'
import { SiteHeader } from '@/components/SiteHeader'
import { Event } from '@/lib/types'

type TabType = 'overview' | 'schedule' | 'pricing' | 'protocols' | 'reading' | 'sponsors' | 'become-sponsor'

interface ArchivedEventPageClientProps {
  event: Event
}

export function ArchivedEventPageClient({ event }: ArchivedEventPageClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [activeNav, setActiveNav] = useState('about')
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  useEffect(() => {
    // Generate QR code for registration
    const generateQR = async () => {
      try {
        // Use Eventbrite registration URL
        const registrationUrl = 'https://www.eventbrite.com/e/agentic-internet-workshop-tickets-1657366079559'
        const qrDataUrl = await QRCode.toDataURL(registrationUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#4f46e5', // accent-600
            light: '#ffffff'
          }
        })
        setQrCodeUrl(qrDataUrl)
      } catch (error) {
        console.error('Error generating QR code:', error)
      }
    }
    generateQR()
  }, [])

  useEffect(() => {
    // Enhanced parallax effect with smooth animation
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const hero = document.querySelector('.hero') as HTMLElement

      // Only apply parallax on desktop (viewport width > 960px)
      if (hero && window.innerWidth > 960) {
        // Apply the background image and parallax effect
        hero.style.backgroundImage = `
          radial-gradient(1200px 500px at 50% -20%, color-mix(in oklab, var(--accent-200) 55%, transparent), transparent 70%),
          url(${heroBackgroundImage.src})
        `
        // Create a more subtle parallax effect
        const speed = 0.5
        hero.style.transform = `translateY(${scrolled * speed}px)`
      } else if (hero) {
        // On mobile, just set the background without parallax
        hero.style.backgroundImage = `
          radial-gradient(1200px 500px at 50% -20%, color-mix(in oklab, var(--accent-200) 55%, transparent), transparent 70%),
          url(${heroBackgroundImage.src})
        `
        hero.style.transform = 'none'
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial call to set background
    handleScroll()

    // Handle resize to toggle parallax on/off
    const handleResize = () => {
      handleScroll()
    }

    window.addEventListener('scroll', throttledScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = (section: string) => {
    setActiveNav(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SiteHeader event={event} activeNav={activeNav} onNavClick={handleNavClick} />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-logo">
              <Image src={logoImage} alt="Agentic Internet Workshop Logo" width={288} />
            </div>
            <div className="kicker">
              <span>🚀</span>
              IIW-Inspired™ Event • {event.date}
            </div>

            <h1>Agentic Internet Workshop #{event.eventNumber}</h1>
            <p className="lede">Building on 20+ years of Internet Identity Workshop legacy, we're advancing the next generation of protocols for how agents connect, collaborate, and preserve human judgment in an agentic world.</p>

            <div className="hero-highlights">
              <div className="highlight-item">
                <strong>Legacy:</strong> From OpenID Connect & OAuth to agentic protocols
              </div>
              <div className="highlight-item">
                <strong>Mission:</strong> Provide neutral space for protocol definition & collaboration
              </div>
              <div className="highlight-item">
                <strong>Vision:</strong> Protect human integrity, judgment & creativity
              </div>
            </div>

            <div className="meta-row">
              <div className="meta">
                <div className="label">Date</div>
                <div className="value">{event.date}</div>
              </div>
              <div className="meta">
                <div className="label">Venue</div>
                <div className="value">{event.location.name}</div>
              </div>
              <div className="meta">
                <div className="label">Capacity</div>
                <div className="value">{event.details.capacity ? `${event.details.capacity} People Max` : 'TBD'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="registration-section center" id="register">
          <div className="container">
            <h2>Register for the Workshop</h2>
            <p className="mw-tight">Join protocol innovators, researchers, and builders working on the future of agentic systems. Registration requires submission of your current work in the AI Agent/Protocol space.</p>

            <div className="qr-section">
              {qrCodeUrl ? (
                <Image
                  src={qrCodeUrl}
                  alt="Registration QR Code"
                  width={200}
                  height={200}
                  style={{ borderRadius: 'var(--radius-md)' }}
                />
              ) : (
                <div className="qr-placeholder">
                  <div>
                    <div>📱 QR Code</div>
                    <div>Loading...</div>
                  </div>
                </div>
              )}
              <a href="https://www.eventbrite.com/e/agentic-internet-workshop-tickets-1657366079559" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Register Now</a>
              <p className="small">Pricing starts at $150 for independents/startups</p>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="section center" id="sponsors">
          <div className="container">
            <div className="section-header">
              <h2>Our Sponsors</h2>
              <p className="description">Thank you to our sponsors who make this workshop possible</p>
            </div>

            {/* Sponsor Cards */}
            <div className="sponsor-cards">
              {event.sponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  logo={sponsor.logoUrl}
                  alt={sponsor.name}
                  title={sponsor.description || `${sponsor.tier} Sponsor`}
                  isSold={sponsor.isSold}
                  isAvailable={sponsor.isAvailable}
                />
              ))}
            </div>

            <div className="sponsors-text">
              <p className="description">Sponsors keep conference fees low, by supporting the virtual platform, unConference set-up, providing meals and more, making AIW available to all who want to attend, participate and contribute.</p>
              <p className="description"><strong>Support the collaborative work that gets accomplished at every AIW!</strong></p>
            </div>

            <a href="mailto:phil@windley.org" className="btn btn-ghost">Contact Us About Sponsorship</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2025 Agentic Internet Workshop. Hosted by IIW Foundation.</p>
          <p><strong>Event Hosts:</strong> Andor Kesselman & Kaliya Young</p>
          <p><strong>IIW Co-Founders:</strong> Phil Windley, Doc Searls</p>
        </div>
      </footer>
    </>
  )
}
