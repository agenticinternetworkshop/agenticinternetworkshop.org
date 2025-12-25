'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/assets/logo_transparent.png'
import { getCurrentEvent } from '@/lib/eventData'
import { WhosComingEmptyState } from '@/components/WhosComingEmptyState'

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
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h1>Who's Coming</h1>
              <p className="description">Participating Organizations at the 1st workshop. As people register for the 2nd workshop we will add them.</p>
            </div>

            <div className="whos-coming-content">
              {event.attendees.length === 0 ? (
                <WhosComingEmptyState />
              ) : (
                <>
                  <div className="callout">
                    <strong>🌐 Diverse Representation</strong><br />
                    The workshop brings together a diverse group of organizations working on agentic AI protocols, identity infrastructure, and related technologies. This mix of established companies, startups, and research organizations creates a rich environment for collaboration and knowledge sharing.
                  </div>

                  <div className="companies-list">
                    <h3>Participating Organizations</h3>
                    <div className="company-items">
                      {event.attendees.map((attendee) => (
                        <div key={attendee.id} className="company-item">
                          {attendee.affiliation || attendee.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="callout">
                    <strong>💡 Want to Join?</strong><br />
                    If your organization is working on agentic AI protocols, identity infrastructure, or related technologies, we'd love to have you join us. Register now to be part of this collaborative workshop.
                  </div>
                </>
              )}
            </div>
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
