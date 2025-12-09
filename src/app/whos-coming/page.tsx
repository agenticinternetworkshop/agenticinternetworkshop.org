'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/assets/logo_transparent.png'

export default function WhosComingPage() {
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
              href="https://www.eventbrite.com/e/agentic-internet-workshop-tickets-1657366079559" 
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
              <p className="description">Organizations and companies that will be represented at the Agentic Internet Workshop</p>
            </div>

            <div className="whos-coming-content">
              <div className="callout">
                <strong>🌐 Diverse Representation</strong><br />
                The workshop brings together a diverse group of organizations working on agentic AI protocols, identity infrastructure, and related technologies. This mix of established companies, startups, and research organizations creates a rich environment for collaboration and knowledge sharing.
              </div>

              <div className="companies-list">
                <h3>Participating Organizations</h3>
                <div className="company-items">
                  <div className="company-item">Google</div>
                  <div className="company-item">Okta</div>
                  <div className="company-item">Consumer Reports</div>
                  <div className="company-item">Adobe</div>
                  <div className="company-item">Indeed</div>
                  <div className="company-item">Amazon Web Services</div>
                  <div className="company-item">JLINC</div>
                  <div className="company-item">121&0n2</div>
                  <div className="company-item">Adiuco</div>
                  <div className="company-item">Advatar Systems AB</div>
                  <div className="company-item">Agent Overlay</div>
                  <div className="company-item">Agentry, Inc.</div>
                  <div className="company-item">Arcade.dev</div>
                  <div className="company-item">AVRWell</div>
                  <div className="company-item">Ayra</div>
                  <div className="company-item">Beyond Identity</div>
                  <div className="company-item">BOTLabs GmbH</div>
                  <div className="company-item">CIVICS.com Consulting Services</div>
                  <div className="company-item">Companion Intelligence</div>
                  <div className="company-item">Data Transfer Initiative</div>
                  <div className="company-item">DataPal</div>
                  <div className="company-item">Digital Trust Venture Partners</div>
                  <div className="company-item">Dock Labs</div>
                  <div className="company-item">First Person Project</div>
                  <div className="company-item">Future Forge Innovation</div>
                  <div className="company-item">Galaniprojects GmbH</div>
                  <div className="company-item">Glide Identity</div>
                  <div className="company-item">Gluu</div>
                  <div className="company-item">Hellō</div>
                  <div className="company-item">IDv4</div>
                  <div className="company-item">Identity Praxis, Inc.</div>
                  <div className="company-item">LoginID</div>
                  <div className="company-item">Microsoft</div>
                  <div className="company-item">RichCanvas LLC</div>
                  <div className="company-item">Self</div>
                  <div className="company-item">Solibre</div>
                  <div className="company-item">Spherical Cow Consulting</div>
                  <div className="company-item">Swisscom</div>
                  <div className="company-item">Tauxbe Data</div>
                  <div className="company-item">Verana Foundation</div>
                  <div className="company-item">WSO2</div>
                  <div className="company-item">XMLUI.org</div>
                </div>
              </div>

              <div className="callout">
                <strong>💡 Want to Join?</strong><br />
                If your organization is working on agentic AI protocols, identity infrastructure, or related technologies, we'd love to have you join us. <a href="https://www.eventbrite.com/e/agentic-internet-workshop-tickets-1657366079559" target="_blank" rel="noopener noreferrer">Register now</a> to be part of this collaborative workshop.
              </div>
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
