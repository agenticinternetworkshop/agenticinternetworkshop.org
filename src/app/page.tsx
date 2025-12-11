'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import QRCode from 'qrcode'
import logoImage from '@/assets/logo_transparent.png'
import heroBackgroundImage from '@/assets/hero_background.png'
import SponsorCard from '@/components/SponsorCard'
import { EventCard } from '@/components/EventCard'
import { getCurrentEvent, getArchivedEvents } from '@/lib/eventData'

type TabType = 'overview' | 'schedule' | 'pricing' | 'protocols' | 'reading' | 'sponsors' | 'become-sponsor'

export default function Home() {
  const event = getCurrentEvent()
  const archivedEvents = getArchivedEvents()
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [activeNav, setActiveNav] = useState('about')
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  useEffect(() => {
    // Generate QR code for registration
    const generateQR = async () => {
      try {
        // Use Eventbrite registration URL from event data
        const registrationUrl = event.details.registrationUrl || 'https://www.eventbrite.com/e/agentic-internet-workshop-2-tickets-1976356257769?aff=oddtdtcreator'
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
  }, [event.details.registrationUrl])

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
      <header className="site-header">
        <nav className="navbar container">
          <div className="brand">
            <Link href="/">
              <Image src={logoImage} alt="Agentic Internet Workshop Logo" width={48} height={48} />
              <span className="brand-text">Agentic Internet Workshop #2</span>
            </Link>
          </div>
          <div className="nav-links">
            <a
              onClick={() => handleNavClick('about')}
              className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              About
            </a>
            <Link href="/details" className="nav-link">
              Details
            </Link>
            <Link href="/topics" className="nav-link">
              Topics
            </Link>
            <Link href="/whos-coming" className="nav-link">
              Who's Coming
            </Link>
            <a
              onClick={() => handleNavClick('register')}
              className={`nav-link ${activeNav === 'register' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Register
            </a>
            <a
              onClick={() => handleNavClick('sponsors')}
              className={`nav-link ${activeNav === 'sponsors' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Sponsors
            </a>
          </div>
          <div className="header-cta">
            <a 
              href="https://www.eventbrite.com/e/agentic-internet-workshop-2-tickets-1976356257769?aff=oddtdtcreator"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Tickets
            </a>
          </div>
        </nav>
      </header>

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
            
            <h1>Agentic Internet Workshop #2</h1>
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
              <a href="https://www.eventbrite.com/e/agentic-internet-workshop-2-tickets-1976356257769?aff=oddtdtcreator" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Register Now</a>
              <p className="small">Pricing starts at $150 for independents/startups</p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="tabs-container" id="about">
          <div className="tab-nav">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`} 
              onClick={() => setActiveTab('schedule')}
            >
              Schedule
            </button>
            <button 
              className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`} 
              onClick={() => setActiveTab('pricing')}
            >
              Pricing
            </button>
            <button 
              className={`tab-button ${activeTab === 'protocols' ? 'active' : ''}`} 
              onClick={() => setActiveTab('protocols')}
            >
              Protocols
            </button>
            <button 
              className={`tab-button ${activeTab === 'reading' ? 'active' : ''}`} 
              onClick={() => setActiveTab('reading')}
            >
              Suggested Reading
            </button>
            <button 
              className={`tab-button ${activeTab === 'become-sponsor' ? 'active' : ''}`} 
              onClick={() => setActiveTab('become-sponsor')}
            >
              Become a Sponsor
            </button>
          </div>

          <div className="container">
            {/* Overview Tab */}
            <div className={`tab-content ${activeTab === 'overview' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Building on 20+ Years of Protocol Innovation</h2>
                <p className="description">The Agentic Internet Workshop builds on the legacy of the Internet Identity Workshop, which helped shape foundational protocols such as OpenID Connect, OAuth, and Decentralized Identifiers.</p>
              </div>
              
              <div className="grid-2">
                <div className="card">
                  <h3>What You&apos;ll Gain</h3>
                  <ul className="value-list">
                    <li>Learn who else is working on protocols and what they&apos;re building</li>
                    <li>Share your work and get feedback from protocol innovators</li>
                    <li>Gain in-depth understanding of key AgenticAI use-cases</li>
                    <li>Discover alignment opportunities for future collaboration</li>
                    <li>Explore how to protect humanity, human integrity, and creativity</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h3>Event Format</h3>
                  <p>The event uses <strong>Open Space Technology</strong> - an unconference format where participants co-create the agenda in the opening circle. Anyone can propose a topic for discussion.</p>
                  
                  <div className="callout">
                    <strong>📝 Collaborative Documentation</strong><br />
                    Notes from all sessions will be collected and made publicly available to advance the field.
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Tab */}
            <div className={`tab-content ${activeTab === 'schedule' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Workshop Schedule</h2>
                <p className="description">A full day of collaborative sessions using Open Space Technology</p>
              </div>
              
              <table className="schedule">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>8:00 AM</strong></td>
                    <td>Doors open - Breakfast and coffee</td>
                  </tr>
                  <tr>
                    <td><strong>9:00 AM - 10:00 AM</strong></td>
                    <td>Agenda Creation in Opening Circle</td>
                  </tr>
                  <tr>
                    <td><strong>10:00 AM - 11:00 AM</strong></td>
                    <td>Session 1</td>
                  </tr>
                  <tr>
                    <td><strong>11:00 AM - 12:00 PM</strong></td>
                    <td>Session 2</td>
                  </tr>
                  <tr>
                    <td><strong>12:00 PM - 1:00 PM</strong></td>
                    <td>Lunch</td>
                  </tr>
                  <tr>
                    <td><strong>1:00 PM - 2:00 PM</strong></td>
                    <td>Session 3</td>
                  </tr>
                  <tr>
                    <td><strong>2:00 PM - 3:00 PM</strong></td>
                    <td>Session 4</td>
                  </tr>
                  <tr>
                    <td><strong>3:00 PM - 4:00 PM</strong></td>
                    <td>Session Summaries in Closing Circle</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout">
                <strong>🌐 Open Space Technology</strong><br />
                The agenda will be co-created by participants in the opening circle. Anyone can propose a topic for discussion, ensuring the content is driven by the community&apos;s interests and needs.
              </div>
            </div>

            {/* Pricing Tab */}
            <div className={`tab-content ${activeTab === 'pricing' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Registration Pricing</h2>
                <p className="description">This event is for those implementing and creating protocols for AgenticAI. Pricing is based on organization type and includes all sessions, meals, and documentation</p>
              </div>
              
              <div className="pricing">
                <div className="card price-card">
                  <h3>Independent / Startups</h3>
                  <div className="price">$150</div>
                  <p className="note">For those who can provide reference to your work in the AgentAI field</p>
                </div>

                <div className="card price-card">
                  <h3>Corporate / Regular</h3>
                  <div className="price">$300</div>
                  <p className="note">For those who can provide reference to your work in the AgentAI field</p>
                </div>
              </div>
              
              <div className="callout">
                <strong>📋 Admission Requirements</strong><br />
                Registration requires a pointer to a document about your current work in the AI Agent and Protocol space. This ensures all participants can meaningfully contribute to discussions.
              </div>
            </div>

            {/* Protocols Tab */}
            <div className={`tab-content ${activeTab === 'protocols' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>AI & AI Agent Protocols in Development</h2>
                <p className="description">Active work across multiple standards bodies and organizations</p>
              </div>
              
              <div className="grid-2">
                <div className="card">
                  <h3>Standards Bodies</h3>
                  <div className="stack">
                    <p><strong>IETF:</strong> AI Preferences (AIPREF), Web Bot Authentication</p>
                    <p><strong>W3C:</strong> AI Agent Protocol Community Group, AI KR</p>
                    <p><strong>OpenID Foundation:</strong> AI Identity Management CG</p>
                    <p><strong>Trust over IP:</strong> AI and Trust WG</p>
                    <p><strong>Decentralized Identity Foundation:</strong> Trusted AI Agents</p>
                  </div>
                </div>
                
                <div className="card">
                  <h3>Key Protocols</h3>
                  <div className="protocol-list">
                    <span className="badge accent">A2A</span>
                    <span className="badge accent">MCP</span>
                    <span className="badge accent">NLWeb</span>
                    <span className="badge accent">NANDA</span>
                    <span className="badge">Agentic Profiles</span>
                    <span className="badge">Trust Spanning Protocol</span>
                    <span className="badge">GNAP</span>
                    <span className="badge">OAuth</span>
                    <span className="badge">DIDs</span>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3>Collaborating Organizations</h3>
                <p>We&apos;re actively working with these organizations to encourage participation:</p>
                <div className="protocol-list">
                  <span className="badge">Project NANDA</span>
                  <span className="badge">AI Alliance</span>
                  <span className="badge">Decentralized AI Agent Alliance</span>
                  <span className="badge">First Person Project / H2H</span>
                </div>
              </div>
            </div>

            {/* Suggested Reading Tab */}
            <div className={`tab-content ${activeTab === 'reading' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Suggested Reading</h2>
                <p className="description">When people registered we asked folks for suggested reading for attendees before the event. Here is the list.</p>
              </div>
              
              <div className="reading-grid">
                <div className="card">
                  <h3>Foundational</h3>
                  <ul className="reading-list">
                    <li><a href="https://arxiv.org/pdf/2504.16736" target="_blank" rel="noopener noreferrer">A Survey of AI Agent Protocols</a></li>
                    <li><a href="https://projectvrm.org/2025/08/28/on-being-agentic/" target="_blank" rel="noopener noreferrer">On Being Agentic</a></li>
                    <li><a href="https://arxiv.org/abs/2506.12003" target="_blank" rel="noopener noreferrer">Upgrade or Switch: Do We Need a Next-Gen Trusted Architecture for the Internet of AI Agents?</a></li>
                  </ul>
                </div>
                
                <div className="card">
                  <h3>Identity & Trust Infrastructure</h3>
                  <ul className="reading-list">
                    <li><a href="https://sphericalcowconsulting.com/2025/08/26/bot-incentives/" target="_blank" rel="noopener noreferrer">Bot or Not? Why Incentives Matter More Than Identity</a></li>
                    <li><a href="https://sphericalcowconsulting.com/2025/09/02/roads-robots-and-responsibility/" target="_blank" rel="noopener noreferrer">Roads, Robots, and Responsibility: Why Agentic AI Needs Identity Infrastructure</a></li>
                    <li><a href="https://sphericalcowconsulting.com/2025/09/09/ai-permissions-vs-human-permissions/" target="_blank" rel="noopener noreferrer">AI Permissions vs. Human Permissions: What Really Changes?</a></li>
                    <li><a href="https://datatracker.ietf.org/doc/draft-oauth-ai-agents-on-behalf-of-user/" target="_blank" rel="noopener noreferrer">Draft OAuth AI Agents on Behalf of User</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="card reading-full-width">
                <h3>Further Reading</h3>
                <ul className="reading-list">
                  <li><a href="https://code.sgo.to/2014/09/05/ws-rest-2014-keynote.html" target="_blank" rel="noopener noreferrer">WS-REST 2014 Keynote</a> - <em>Historical perspective on HTTP, APIs and identity</em></li>
                  <li><a href="http://collab101.org/" target="_blank" rel="noopener noreferrer">Collab101.org</a> - <em>Personal vlog and insights</em></li>
                  <li><a href="https://firstperson.network/" target="_blank" rel="noopener noreferrer">The First Person Project White Paper</a></li>
                  <li><a href="https://gluufederation.medium.com/" target="_blank" rel="noopener noreferrer">Gluu Federation Articles</a></li>
                  <li><a href="https://github.com/dickhardt/email-verification-protocol" target="_blank" rel="noopener noreferrer">Email Verifications Protocol</a></li>
                </ul>
              </div>
              
              <div className="callout">
                <strong>📚 Additional Resources</strong><br />
                These readings provide essential context for understanding the current state of agentic AI protocols and the challenges we'll be addressing at the workshop.
              </div>
            </div>

            {/* Sponsors Tab */}
            <div className={`tab-content ${activeTab === 'sponsors' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Sponsorship Opportunities</h2>
                <p className="description">Support this important gathering of protocol innovators and gain visibility in the agentic AI community</p>
              </div>

              {/* Sponsor Text */}
              <div className="sponsors-text">
                <p className="description">Sponsors keep conference fees low, by supporting the virtual platform, unConference set-up, providing meals and more, making AIW available to all who want to attend, participate and contribute.</p>
                <p className="description"><strong>Support the collaborative work that gets accomplished at every AIW!</strong></p>
              </div>
              
              <div className="sponsorship-table-wrapper">
                <table className="sponsorship-table">
                  <thead>
                    <tr>
                      <th>Sponsorship</th>
                      <th>Available</th>
                      <th>Cost</th>
                      <th>Passes</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr className="sold">
                      <td>Breakfast</td>
                      <td>1</td>
                      <td>SOLD</td>
                      <td>1</td>
                    </tr>   
                    <tr>
                      <td>Lunch</td>
                      <td>1</td>
                      <td>$3,750</td>
                      <td>2</td>
                    </tr>
                    <tr className="sold">
                      <td>Snack Table</td>
                      <td>1</td>
                      <td>SOLD</td>
                      <td>1</td>
                    </tr>
                    <tr className="sold">
                      <td>Barista</td>
                      <td>1</td>
                      <td>SOLD</td>
                      <td>1</td>
                    </tr>
                    <tr className="sold">
                      <td>Wifi</td>
                      <td>1</td>
                      <td>SOLD</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Open Gifting</td>
                      <td>1</td>
                      <td>$600</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Documentation Center</td>
                      <td>1</td>
                      <td>$1,000</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Qiqochat Workshop Hub</td>
                      <td>1</td>
                      <td>$1,000</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="callout">
                <strong>📧 Contact Us</strong><br />
                Interested in sponsoring? Contact us at <a href="mailto:phil@windley.org">phil@windley.org</a> to discuss sponsorship opportunities.
              </div>
            </div>

            {/* Become a Sponsor Tab */}
            <div className={`tab-content ${activeTab === 'become-sponsor' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Become a Sponsor</h2>
                <p className="description">Support this important gathering of protocol innovators and gain visibility in the agentic AI community</p>
              </div>

              {/* Sponsor Text */}
              <div className="sponsors-text">
                <p className="description">Sponsors keep conference fees low, by supporting the virtual platform, unConference set-up, providing meals and more, making AIW available to all who want to attend, participate and contribute.</p>
                <p className="description"><strong>Support the collaborative work that gets accomplished at every AIW!</strong></p>
              </div>
              
              <div className="sponsorship-table-wrapper">
                <table className="sponsorship-table">
                  <thead>
                    <tr>
                      <th>Sponsorship</th>
                      <th>Available</th>
                      <th>Cost</th>
                      <th>Passes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="sold">
                      <td>Breakfast</td>
                      <td>1</td>
                      <td>SOLD</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Lunch</td>
                      <td>1</td>
                      <td>$3,750</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Snack Table</td>
                      <td>1</td>
                      <td>$1,500</td>
                      <td>1</td>
                    </tr>
                    <tr className="sold">
                      <td>Barista</td>
                      <td>1</td>
                      <td>SOLD</td>
                      <td>1</td>
                    </tr>
                    <tr className="sold">
                      <td>Wifi</td>
                      <td>1</td>
                      <td>SOLD</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Open Gifting</td>
                      <td>1</td>
                      <td>$600</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Documentation Center</td>
                      <td>1</td>
                      <td>$1,000</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Qiqochat Workshop Hub</td>
                      <td>1</td>
                      <td>$1,000</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="callout">
                <strong>📧 Contact Us</strong><br />
                Interested in sponsoring? Contact us at <a href="mailto:phil@windley.org">phil@windley.org</a> to discuss sponsorship opportunities.
              </div>
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

        {/* Previous Events Section */}
        {archivedEvents.length > 0 && (
          <section className="section center" id="previous-events">
            <div className="container">
              <div className="section-header">
                <h2>Previous Events</h2>
                <p className="description">Explore our past workshops and their archived content</p>
              </div>

              <div className="event-cards">
                {archivedEvents.map((archivedEvent) => (
                  <EventCard key={archivedEvent.eventId} event={archivedEvent} />
                ))}
              </div>
            </div>
          </section>
        )}
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
