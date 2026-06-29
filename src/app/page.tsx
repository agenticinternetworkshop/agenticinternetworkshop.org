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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tab = params.get('tab') as TabType
    const validTabs: TabType[] = ['overview', 'schedule', 'pricing', 'protocols', 'reading', 'sponsors', 'become-sponsor']
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab)
    }
  }, [])

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    const url = new URL(window.location.href)
    url.searchParams.set('tab', tab)
    window.history.pushState(null, '', url.toString())
  }
  const [activeNav, setActiveNav] = useState('about')
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  useEffect(() => {
    // Generate QR code for registration
    const generateQR = async () => {
      try {
        // Use Eventbrite registration URL from event data
        const registrationUrl = event.details.registrationUrl || ''
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
              <span className="brand-text">Agentic Internet Workshop #{event.eventNumber}</span>
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
            {event.details.registrationUrl && (
              <a
                href={event.details.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Tickets
              </a>
            )}
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
            
            <h1>Agentic Internet Workshop #{event.eventNumber}</h1>
            <p className="lede">{event.date}</p>
            <p className="lede">The Agentic Internet Workshop (AIW) continues the legacy of the Internet Identity Workshop (IIW), which helped shape foundational protocols like OpenID Connect, OAuth, and Decentralized Identifiers. AIW is a neutral space where the people building the identity, trust, and authorization layers for the agentic internet come together to do the hard work of alignment.</p>
          </div>
        </section>

        {/* Registration Section */}
        <section className="registration-section center" id="register">
          <div className="container">
            <h2>Register for the Workshop</h2>
            <p className="mw-tight">Join protocol innovators, researchers, and builders working on the future of agentic systems.</p>

            {event.details.registrationUrl ? (
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
                <a href={event.details.registrationUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Register Now</a>
                <p className="small">Early Bird pricing starts at $125 for independents/startups (until Sept 15)</p>
              </div>
            ) : (
              <p className="mw-tight"><em>Registration opens soon. Check back for details.</em></p>
            )}
          </div>
        </section>

        {/* Tabs Section */}
        <section className="tabs-container" id="about">
          <div className="tab-nav">
            <button
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleTabChange('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`}
              onClick={() => handleTabChange('schedule')}
            >
              Schedule
            </button>
            <button
              className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => handleTabChange('pricing')}
            >
              Pricing
            </button>
            <button
              className={`tab-button ${activeTab === 'protocols' ? 'active' : ''}`}
              onClick={() => handleTabChange('protocols')}
            >
              Protocols
            </button>
            <button
              className={`tab-button ${activeTab === 'reading' ? 'active' : ''}`}
              onClick={() => handleTabChange('reading')}
            >
              Suggested Reading
            </button>
            <button
              className={`tab-button ${activeTab === 'become-sponsor' ? 'active' : ''}`}
              onClick={() => handleTabChange('become-sponsor')}
            >
              Become a Sponsor
            </button>
          </div>

          <div className="container">
            {/* Overview Tab */}
            <div className={`tab-content ${activeTab === 'overview' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>What you will gain</h2>
                <p className="description">Connect with the engineers, architects, and researchers shaping agentic protocols across IETF, W3C, AAIF, OpenID Foundation, Decentralized Identity Foundation and others</p>
              </div>

              <div className="grid-2">
                <div className="card">
                  <h3>What You&apos;ll Gain</h3>
                  <ul className="value-list">
                    <li>Share your work and get direct feedback from protocol builders</li>
                    <li>Deepen your understanding of real-world agentic AI use cases — authorization, delegation, trust, and non-human identity</li>
                    <li>Find alignment opportunities across overlapping standards efforts</li>
                    <li>Explore how to preserve human agency, integrity, and creativity in an agentic world</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Event Format</h3>
                  <p>The event uses <strong>Open Space Technology</strong> - an unconference format where participants co-create the agenda in the opening circle. Anyone can propose a topic for discussion.</p>

                  <div className="callout">
                    <strong>📝 Collaborative Documentation</strong><br />
                    Notes from all sessions will be collected and made publicly available to advance the field.
                  </div>

                  <p style={{marginTop: 'var(--space-4)'}}>You can see the <a href="/bop/1.pdf" target="_blank" rel="noopener noreferrer">Book of Proceedings of AIW #1 Here</a>. Visit the <a href="/events/1">legacy AIW #1 site</a> for more information.</p>
                </div>
              </div>
            </div>

            {/* Schedule Tab */}
            <div className={`tab-content ${activeTab === 'schedule' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Workshop Schedule</h2>
                <p className="description">We will host an Interop Day on November 5th in parallel with Day three of IIW at the same location beginning at 10:30 AM.<br /><br />November 6th will be a full day of collaborative sessions using Open Space Technology</p>
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
                <p className="description">This event is for those implementing and creating protocols for agentic AI. Pricing is based on organization type and includes all sessions, meals, and documentation</p>
              </div>

              <div className="pricing">
                <div className="card price-card">
                  <h3>Independent / Startups</h3>
                  <div className="price">
                    <div>Early Bird (until Sept 15): $125</div>
                    <div>Regular: $150</div>
                  </div>
                  <p className="note">For those who can provide reference to your work in the agentic AI field</p>
                </div>

                <div className="card price-card">
                  <h3>Corporate / Regular</h3>
                  <div className="price">
                    <div>Early Bird (until Sept 15): $270</div>
                    <div>Regular: $300</div>
                  </div>
                  <p className="note">For those who can provide reference to your work in the agentic AI field</p>
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
                <h2>Where Agentic AI Protocols Are Being Developed</h2>
                <p className="description">Active work across multiple standards bodies and organizations</p>
              </div>

              <div className="card">
                <h3>IETF</h3>
                <ul className="reading-list">
                  <li><a href="https://datatracker.ietf.org/meeting/125/materials/minutes-125-catalist-202603180100-00" target="_blank" rel="noopener noreferrer">CATALIST BOF</a> — Coordinating Agent To Agent List of Efforts; formal WG chartering expected at IETF #126 (July 2026)</li>
                  <li><a href="https://datatracker.ietf.org/doc/draft-ni-wimse-ai-agent-identity/" target="_blank" rel="noopener noreferrer">WIMSE WG</a> — workload identity applicability for AI agents</li>
                  <li><a href="https://datatracker.ietf.org/doc/draft-klrc-aiagent-auth/" target="_blank" rel="noopener noreferrer">AI Agent Authentication & Authorization</a> (draft-klrc-aiagent-auth)</li>
                  <li><a href="https://datatracker.ietf.org/wg/aipref/about/" target="_blank" rel="noopener noreferrer">AI Preferences (AIPREF)</a></li>
                </ul>
              </div>

              <div className="card">
                <h3>W3C</h3>
                <ul className="reading-list">
                  <li><a href="https://www.w3.org/groups/cg/agentprotocol/" target="_blank" rel="noopener noreferrer">AI Agent Protocol Community Group</a></li>
                  <li><a href="https://www.w3.org/community/agent-identity/" target="_blank" rel="noopener noreferrer">Agent Identity Registry Protocol Community Group</a> (new, April 2026)</li>
                  <li><a href="https://www.w3.org/community/ai-agent-memory-interop/" target="_blank" rel="noopener noreferrer">AI Agent Memory Interoperability Community Group</a> (new, May 2026)</li>
                  <li><a href="https://www.w3.org/community/aikr/" target="_blank" rel="noopener noreferrer">AI KR Community Group</a></li>
                </ul>
              </div>

              <div className="card">
                <h3>OpenID Foundation</h3>
                <ul className="reading-list">
                  <li><a href="https://openid.net/cg/artificial-intelligence-identity-management-community-group/" target="_blank" rel="noopener noreferrer">AI Identity Management (AIIM) Community Group</a></li>
                </ul>
              </div>

              <div className="card">
                <h3>FIDO Alliance</h3>
                <ul className="reading-list">
                  <li><a href="https://fidoalliance.org/fido-alliance-to-develop-standards-for-trusted-ai-agent-interactions/" target="_blank" rel="noopener noreferrer">Agentic Authentication Technical Working Group</a> — secure delegation of actions to AI agents with phishing-resistant authentication</li>
                  <li>Payments Technical Working Group — agent-initiated commerce standards (<a href="https://ap2-protocol.org/" target="_blank" rel="noopener noreferrer">Google AP2</a>, <a href="https://fidoalliance.org/fido-alliance-to-develop-standards-for-trusted-ai-agent-interactions/" target="_blank" rel="noopener noreferrer">Mastercard Verifiable Intent</a>)</li>
                </ul>
              </div>

              <div className="grid-2">
                <div className="card">
                  <h3>Decentralized Identity Foundation (DIF)</h3>
                  <ul className="reading-list">
                    <li><a href="https://hackmd.io/I2BRY1EOSH-BzZ8a2SQvHw" target="_blank" rel="noopener noreferrer">Trusted AI Agents Working Group</a></li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Trust Over IP Foundation</h3>
                  <ul className="reading-list">
                    <li><a href="https://trustoverip.org/" target="_blank" rel="noopener noreferrer">AI and Trust Working Group</a></li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <h3>Linux Foundation</h3>
                <ul className="reading-list">
                  <li><a href="https://aaif.io/" target="_blank" rel="noopener noreferrer">Agentic AI Foundation (AAIF)</a> — stewards MCP, Goose, AGENTS.md</li>
                  <li><a href="https://www.lfdecentralizedtrust.org/" target="_blank" rel="noopener noreferrer">LF Decentralized Trust</a></li>
                </ul>
              </div>

              <div className="card">
                <h3>Cloud Security Alliance (CSA)</h3>
                <ul className="reading-list">
                  <li><a href="https://cloudsecurityalliance.org/press-releases/2026/03/23/csa-securing-the-agentic-control-plane" target="_blank" rel="noopener noreferrer">CSAI Foundation</a> — securing the agentic control plane</li>
                  <li>AARM (Autonomous Action Runtime Management) specification</li>
                  <li>Agentic Trust Framework (ATF)</li>
                </ul>
              </div>

              <div className="card">
                <h3>Coalition for Secure AI (CoSAI) — OASIS</h3>
                <ul className="reading-list">
                  <li><a href="https://www.coalitionforsecureai.org/wp-content/uploads/2026/04/agentic-identity-and-access-control.pdf" target="_blank" rel="noopener noreferrer">Agentic Identity and Access Management</a></li>
                  <li><a href="https://www.coalitionforsecureai.org/announcing-the-cosai-principles-for-secure-by-design-agentic-systems/" target="_blank" rel="noopener noreferrer">Principles for Secure-by-Design Agentic Systems</a></li>
                </ul>
              </div>

              <div className="grid-2">
                <div className="card">
                  <h3>IEEE</h3>
                  <ul className="reading-list">
                    <li><a href="https://standards.ieee.org/ieee/3394/11377/" target="_blank" rel="noopener noreferrer">P3394</a> — Standard for Large Language Model Agent Interface</li>
                    <li><a href="https://standards.ieee.org/ieee/3428/11489/" target="_blank" rel="noopener noreferrer">P3428</a> — Standard for LLM Agents in AI-Enabled Education</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>NIST</h3>
                  <ul className="reading-list">
                    <li><a href="https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure" target="_blank" rel="noopener noreferrer">AI Agent Standards Initiative (CAISI)</a> — three pillars: industry standards, open-source protocols, fundamental research</li>
                  </ul>
                </div>
              </div>

              <div className="grid-2">
                <div className="card">
                  <h3>ITU-T</h3>
                  <ul className="reading-list">
                    <li><a href="https://www.itu.int/en/ITU-T/studygroups/2025-2028/17/Pages/default.aspx" target="_blank" rel="noopener noreferrer">Study Group 17</a> — agentic AI security, digital identity for agentic AI</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Other</h3>
                  <ul className="reading-list">
                    <li><a href="https://projectnanda.org/" target="_blank" rel="noopener noreferrer">MIT Project NANDA</a></li>
                    <li><a href="https://jtc1info.org/technology/subcommittees/ai/" target="_blank" rel="noopener noreferrer">ISO/IEC JTC 1 SC 42</a> — AI agent interoperability and governance</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <h3>Key Protocols</h3>
                <div className="protocol-list">
                  <span className="badge accent"><a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>A2A</a></span>
                  <span className="badge accent"><a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>MCP</a></span>
                  <span className="badge accent"><a href="https://github.com/microsoft/NLWeb" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>NLWeb</a></span>
                  <span className="badge"><a href="https://datatracker.ietf.org/doc/html/rfc9635" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>GNAP</a></span>
                  <span className="badge"><a href="https://oauth.net/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>OAuth</a></span>
                  <span className="badge"><a href="https://trustoverip.github.io/tswg-tsp-specification/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Trust Spanning Protocol</a></span>
                  <span className="badge"><a href="https://www.w3.org/TR/did-core/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>DIDs</a></span>
                  <span className="badge"><a href="https://github.com/agentic-profile/agentic-profile-a2a" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Agentic Profiles</a></span>
                  <span className="badge"><a href="https://kyapay.org/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>KYAPay Protocol</a></span>
                  <span className="badge"><a href="https://www.aauth.dev/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>AAuth</a></span>
                  <span className="badge"><a href="https://datatracker.ietf.org/doc/draft-eckert-catalist-acip-framework/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>ACIP</a></span>
                  <span className="badge"><a href="https://ap2-protocol.org/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>AP2</a></span>
                </div>
              </div>
            </div>

            {/* Suggested Reading Tab */}
            <div className={`tab-content ${activeTab === 'reading' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Suggested Reading</h2>
                <p className="description">Essential reading for understanding the current state of agentic AI protocols and identity infrastructure</p>
              </div>

              <div className="card">
                <h3>Identity & Protocols for Agentic AI</h3>
                <ul className="reading-list">
                  <li><a href="https://arxiv.org/abs/2604.23280" target="_blank" rel="noopener noreferrer">AI Identity: Standards, Gaps, and Research Directions for AI Agents</a> — comprehensive survey of where identity standards stand for agentic AI (April 2026)</li>
                  <li><a href="https://arxiv.org/abs/2504.16736" target="_blank" rel="noopener noreferrer">A Survey of AI Agent Protocols</a> — systematic classification of existing agent protocols</li>
                  <li><a href="https://arxiv.org/abs/2603.24775" target="_blank" rel="noopener noreferrer">AIP: Agent Identity Protocol for Verifiable Delegation Across MCP and A2A</a> — bridging identity across the two dominant agent protocols</li>
                  <li><a href="https://arxiv.org/abs/2506.12003" target="_blank" rel="noopener noreferrer">Upgrade or Switch: Do We Need a Next-Gen Trusted Architecture for the Internet of AI Agents?</a> — analysis of whether existing DNS/PKI infrastructure can scale to autonomous agents</li>
                  <li><a href="https://openid.net/oidf-responds-to-nist-on-ai-agent-security/" target="_blank" rel="noopener noreferrer">OIDF Response to NIST on AI Agent Security</a> — OpenID Foundation&apos;s recommendations on securing agent systems</li>
                  <li><a href="https://datatracker.ietf.org/doc/draft-oauth-ai-agents-on-behalf-of-user/" target="_blank" rel="noopener noreferrer">Draft: OAuth AI Agents on Behalf of User</a> — IETF draft on OAuth delegation for agents</li>
                </ul>
              </div>

              <div className="card">
                <h3>Agency, Identity Infrastructure & Perspectives</h3>
                <ul className="reading-list">
                  <li><a href="https://projectvrm.org/2025/08/28/on-being-agentic/" target="_blank" rel="noopener noreferrer">On Being Agentic</a> — Doc Searls&apos; framework for agency</li>
                  <li><a href="https://doc.searls.com/2026/05/10/personal-agentry/" target="_blank" rel="noopener noreferrer">Personal Agentry</a> — Doc Searls on why agency must be individual, not just corporate</li>
                  <li><a href="https://doc.searls.com/2026/04/02/toward-a-human-future-for-ai/" target="_blank" rel="noopener noreferrer">Toward a Human Future for AI</a> — Doc Searls on preserving human agency in the agentic era</li>
                  <li><a href="https://sphericalcowconsulting.com/2025/09/02/roads-robots-and-responsibility/" target="_blank" rel="noopener noreferrer">Roads, Robots, and Responsibility: Why Agentic AI Needs Identity Infrastructure</a> — the case for identity systems in AI</li>
                  <li><a href="https://sphericalcowconsulting.com/2025/09/09/ai-permissions-vs-human-permissions/" target="_blank" rel="noopener noreferrer">AI Permissions vs. Human Permissions: What Really Changes?</a> — comparing permission models across contexts</li>
                </ul>
              </div>

              <div className="card">
                <h3>Projects & Specifications</h3>
                <ul className="reading-list">
                  <li><a href="https://firstperson.network/" target="_blank" rel="noopener noreferrer">The First Person Project</a> — personal identity systems</li>
                  <li><a href="https://github.com/dickhardt/email-verification-protocol" target="_blank" rel="noopener noreferrer">Email Verification Protocol</a> — Dick Hardt&apos;s protocol specification</li>
                  <li><a href="https://gluufederation.medium.com/" target="_blank" rel="noopener noreferrer">Gluu Federation Articles</a> — federation-related articles</li>
                </ul>
              </div>

              <div className="callout">
                <strong>📚 Additional Resources</strong><br />
                Please share additional reading you recommend
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
                <p className="description">Sponsors keep conference fees low by supporting the virtual platform, unconference setup, providing meals and more, making AIW available to all who want to attend, participate and contribute.</p>
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
                    <tr className="done">
                      <td>Breakfast</td>
                      <td>Done</td>
                      <td>$1,750</td>
                      <td>1</td>
                    </tr>
                    <tr className="done">
                      <td>Lunch</td>
                      <td>Done</td>
                      <td>$3,750</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Snack Table</td>
                      <td>1</td>
                      <td>$1,500</td>
                      <td>1</td>
                    </tr>
                    <tr className="done">
                      <td>Barista</td>
                      <td>Done</td>
                      <td>$2,000</td>
                      <td>1</td>
                    </tr>
                    <tr className="done">
                      <td>Wifi</td>
                      <td>Done</td>
                      <td>$1,500</td>
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
                Interested in sponsoring? Contact us at <a href="mailto:phil@windley.org">phil@windley.org</a> and <a href="mailto:kaliya@identitywoman.net">kaliya@identitywoman.net</a> to discuss sponsorship opportunities.
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
                <p className="description">Sponsors keep conference fees low by supporting the virtual platform, unconference setup, providing meals and more, making AIW available to all who want to attend, participate and contribute.</p>
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
                    <tr className="done">
                      <td>Breakfast</td>
                      <td>Done</td>
                      <td>$1,750</td>
                      <td>1</td>
                    </tr>
                    <tr className="done">
                      <td>Lunch</td>
                      <td>Done</td>
                      <td>$3,750</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Snack Table</td>
                      <td>1</td>
                      <td>$1,500</td>
                      <td>1</td>
                    </tr>
                    <tr className="done">
                      <td>Barista</td>
                      <td>Done</td>
                      <td>$2,000</td>
                      <td>1</td>
                    </tr>
                    <tr className="done">
                      <td>Wifi</td>
                      <td>Done</td>
                      <td>$1,500</td>
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
                Interested in sponsoring? Contact us at <a href="mailto:phil@windley.org">phil@windley.org</a> and <a href="mailto:kaliya@identitywoman.net">kaliya@identitywoman.net</a> to discuss sponsorship opportunities.
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
              <p className="description">Sponsors keep conference fees low by supporting the virtual platform, unconference setup, providing meals and more, making AIW available to all who want to attend, participate and contribute.</p>
              <p className="description"><strong>Support the collaborative work that gets accomplished at every AIW!</strong></p>
            </div>

            <a href="mailto:phil@windley.org" className="btn btn-ghost">Contact Us About Sponsorship</a>
            <p style={{marginTop: 'var(--space-4)', textAlign: 'center'}}>Or reach out to <a href="mailto:kaliya@identitywoman.net">kaliya@identitywoman.net</a></p>
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
          <p>&copy; 2026 Agentic Internet Workshop. Hosted by IIW Foundation.</p>
          <p><strong>Event Conveners:</strong> Andor Kesselman, Rohit Khare, Sarah Cecchetti, Mike Prince, Ken Adler, Kaliya Young, & Claudrey Hepburn <em>(an AI agent studying AI agents)</em></p>
          <p><strong>AIW Co-Founders:</strong> Andor Kesselman, Kaliya Young, Phil Windley, and Doc Searls</p>
        </div>
      </footer>
    </>
  )
}
