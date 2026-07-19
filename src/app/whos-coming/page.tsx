'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/assets/logo_transparent.png'
import { getCurrentEvent } from '@/lib/eventData'
import { WhosComingEmptyState } from '@/components/WhosComingEmptyState'
import { AttendeeMarkdownLine } from '@/components/AttendeeMarkdownLine'

export default function WhosComingPage() {
  const event = getCurrentEvent()
  const [activeNav, setActiveNav] = useState('whos-coming')

  return (
    <>
      <header className="site-header">
        <nav className="navbar container">
          <div className="brand">
            <Link href="/">
              <Image src={logoImage} alt="Agentic Internet Workshop Logo" width={48} height={48} />
              Agentic Internet Workshop
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/" className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}>
              About
            </Link>
            <Link href="/details" className={`nav-link ${activeNav === 'details' ? 'active' : ''}`}>
              Details
            </Link>
            <Link href="/topics" className={`nav-link ${activeNav === 'topics' ? 'active' : ''}`}>
              Topics
            </Link>
            <Link href="/whos-coming" className={`nav-link ${activeNav === 'whos-coming' ? 'active' : ''}`}>
              Who's Coming
            </Link>
            <Link href="/#register" className={`nav-link ${activeNav === 'register' ? 'active' : ''}`}>
              Register
            </Link>
            <Link href="/#sponsors" className={`nav-link ${activeNav === 'sponsors' ? 'active' : ''}`}>
              Sponsors
            </Link>
          </div>
          <div className="header-cta">
            <a
              href={event.details.registrationUrl || '#'}
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
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h1>Who&apos;s Coming — AIW #{event.eventNumber}</h1>
              <p className="description">
                Organizations and companies registered for AIW #{event.eventNumber} ({event.date}).
              </p>
            </div>

            <div className="whos-coming-content">
              <h2>AIW Conveners</h2>
              <div className="grid-2" style={{marginBottom: 'var(--space-8)'}}>
                <div className="card" style={{display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start'}}>
                  <img src="/conveners/kaliya.png" alt="Kaliya Young" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                  <div>
                    <h3>Kaliya Young</h3>
                    <p>Kaliya Young is a 20+ year veteran of the digital identity space and co-founder of the Internet Identity Workshop (IIW), which has convened twice yearly since 2005. She is an expert on decentralized identity, self-sovereign identity, and the protocols that connect people, organizations, and machines. She brings deep expertise in bridging technical protocol work with governance and human-centered design.</p>
                  </div>
                </div>
                <div className="card" style={{display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start'}}>
                  <img src="/conveners/andor.jpg" alt="Andor Kesselman" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                  <div>
                    <h3>Andor Kesselman</h3>
                    <p>Andor Kesselman is Co-Founder and CTO of HiJenny.ai (HF0 W26) and previous founder of Agent Overlay. A founding engineer at Pathr and an open source leader in Trusted Agents Working Groups, he co-chairs the Technical Steering Committee at the Decentralized Identity Foundation (DIF) and has been researching multi-agent systems since 2018. He is co-founder of the Agentic Internet Workshop.</p>
                  </div>
                </div>
                <div className="card" style={{display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start'}}>
                  <img src="/conveners/ken.jpg" alt="Ken Adler" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                  <div>
                    <h3>Ken Adler</h3>
                    <p>Ken Adler is a Technical Fellow at Indeed, where he focuses on the evolution of Indeed&apos;s identity systems toward agentic architectures. He writes extensively on Agentic IAM at AgenticIAM.ai, exploring agentic resource discovery, identity, and access management.</p>
                  </div>
                </div>
                <div className="card" style={{display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start'}}>
                  <img src="/conveners/mike.jpg" alt="Mike Prince" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                  <div>
                    <h3>Mike Prince</h3>
                    <p>Mike Prince is the creator of universalauth.org, a DID based open framework for user, business, and government-scoped agents to authenticate and communicate without the need for authentication servers. A serial entrepreneur, his most recent company Matchwise.AI uses DIDs to provide the fabric for the Agentic Web and seamlessly support A2A and MCP. Matchwise also produces ThirdPlaces.AI, a demonstration of Agentic Deeper Context to find synergies for business and social networking.</p>
                  </div>
                </div>
              </div>

              <h2>Attendees</h2>
              {event.attendees.length === 0 ? (
                <WhosComingEmptyState />
              ) : (
                <>
                  <div className="companies-list">
                    <h3>Participating Organizations</h3>
                    <div className="company-items">
                      {Array.from(new Set(event.attendees
                        .filter((attendee) => attendee.affiliation)
                        .map((attendee) => attendee.affiliation)))
                        .sort()
                        .map((company) => (
                          <div key={company} className="company-item">
                            {company}
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="callout">
                    <strong>💡 Want to Join?</strong>
                    <br />
                    If you are working on agentic AI protocols, identity infrastructure, or related technologies,
                    we&apos;d love to have you join us. Register now to be part of this collaborative workshop.
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 Agentic Internet Workshop. Hosted by IIW Foundation.</p>
        </div>
      </footer>
    </>
  )
}
