'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import QRCode from 'qrcode'
import logoImage from '@/assets/logo.png'
import heroBackgroundImage from '@/assets/hero_background.png'

type TabType = 'overview' | 'schedule' | 'pricing' | 'protocols'

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [activeNav, setActiveNav] = useState('about')
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  useEffect(() => {
    // Generate QR code for registration
    const generateQR = async () => {
      try {
        // Use the current origin with basePath for QR code
        const registrationUrl = `${window.location.origin}/agenticinternetworkshop.org/register`
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
      if (hero) {
        // Apply the background image and parallax effect
        hero.style.backgroundImage = `
          radial-gradient(1200px 500px at 50% -20%, color-mix(in oklab, var(--accent-200) 55%, transparent), transparent 70%),
          url(${heroBackgroundImage.src})
        `
        // Create a more subtle parallax effect
        const speed = 0.5
        hero.style.transform = `translateY(${scrolled * speed}px)`
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
    
    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
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
            <Image src={logoImage} alt="Agentic Internet Workshop Logo" width={48} height={48} />
            Agentic Internet Workshop
          </div>
          <div className="nav-links">
            <a 
              onClick={() => handleNavClick('about')} 
              className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              onClick={() => handleNavClick('register')} 
              className={`nav-link ${activeNav === 'register' ? 'active' : ''}`}
            >
              Register
            </a>
            <a 
              onClick={() => handleNavClick('sponsors')} 
              className={`nav-link ${activeNav === 'sponsors' ? 'active' : ''}`}
            >
              Sponsors
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="kicker">
              <span>🚀</span>
              IIW-Inspired™ Event • October 24, 2025
            </div>
            
            <h1>Agentic Internet Workshop</h1>
            <p className="lede">Building on 20+ years of Internet Identity Workshop legacy, we're advancing the next generation of protocols for how agents connect, collaborate, and preserve human judgment in an agentic world.</p>
            
            <div className="hero-highlights">
              <div className="highlight-item">
                <strong>Legacy:</strong> From OpenID Connect & OAuth to agentic protocols
              </div>
              <div className="highlight-item">
                <strong>Mission:</strong> Define standards for agent-to-agent communication
              </div>
              <div className="highlight-item">
                <strong>Vision:</strong> Protect human integrity, judgment & creativity
              </div>
            </div>
            
            <div className="meta-row">
              <div className="meta">
                <div className="label">Date</div>
                <div className="value">October 24, 2025</div>
              </div>
              <div className="meta">
                <div className="label">Venue</div>
                <div className="value">Computer History Museum</div>
              </div>
              <div className="meta">
                <div className="label">Capacity</div>
                <div className="value">200 People Max</div>
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
              <a href="#" className="btn btn-primary">Register Now</a>
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
                <p className="description">Pricing is based on organization type and includes all sessions, meals, and documentation</p>
              </div>
              
              <div className="pricing">
                <div className="card price-card">
                  <h3>Independents / Startups</h3>
                  <div className="price">$150</div>
                  <p className="note">Perfect for individual researchers and small teams</p>
                </div>
                
                <div className="card price-card">
                  <h3>Regular / Corporate</h3>
                  <div className="price">$300</div>
                  <p className="note">For established companies and organizations</p>
                </div>
                
                <div className="card price-card">
                  <h3>Without Submission</h3>
                  <div className="price">$1200</div>
                  <p className="note">If you don&apos;t have current work to submit</p>
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
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="section center" id="sponsors">
          <div className="container">
            <div className="section-header">
              <h2>Sponsors</h2>
              <p className="description">Interested in sponsoring this important gathering of protocol innovators?</p>
            </div>
            
            <a href="#" className="btn btn-ghost">Contact Us About Sponsorship</a>
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
