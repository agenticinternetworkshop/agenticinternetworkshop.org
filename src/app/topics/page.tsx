'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/assets/logo_transparent.png'
import { getCurrentEvent } from '@/lib/eventData'
import { TopicSourceNotice } from '@/components/TopicSourceNotice'
import { getTopicBullets } from '@/lib/topicBullets'

export default function TopicsPage() {
  const event = getCurrentEvent()
  const [activeNav, setActiveNav] = useState('topics')

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
              <h1>Potential Topics — AIW #{event.eventNumber}</h1>
              <p className="description">
                The agenda will be co-created the day of the event by attendees using Open Space Technology. These are
                ideas folks have submitted as they register, shared to give perspective on what participants are
                thinking about discussing.
              </p>
            </div>

            <div className="topics-content">
              <TopicSourceNotice event={event} />

              <div className="callout">
                <strong>🌐 Open Space Technology</strong>
                <br />
                We use Open Space Technology to co-create the agenda live the morning of the event. Below is the list of
                what attendees shared with us as they registered about topics they hope to learn about, want to present
                about and topics to discuss with others at the event. It is important to note this list is not used to
                &quot;create the agenda&quot; that is done by everyone gathered in person {event.date} beginning at
                9am.
              </div>

              <div className="topics-grid">
                {event.topics.map((topic) => (
                  <div key={topic.id} className="card">
                    <h3>{topic.title}</h3>
                    <ul className="topic-list">
                      {getTopicBullets(topic).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="callout">
                <strong>📋 Proposed Topics</strong>
                <ul style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-6)' }}>
                  <li>Newest state of AI agents</li>
                  <li>Secure mandates for agent chains: carrying revocable, auditable authority across MCP and A2A hops</li>
                  <li>Agent identity is not enough: the authority, memory, and intent layer above it</li>
                  <li>Behavioral coherence as a runtime trust signal (trust asymmetry and the completion drive)</li>
                  <li>Human authority at machine speed: execution-time consent and revocation</li>
                  <li>Sovereign identity for organizations: what agent authority looks like when AI joins the org chart</li>
                  <li>Keeping mandates sovereignty-preserving, not surveillance</li>
                  <li>Progress on A2A, AAuth, OAuth support for agentic-driven flows</li>
                  <li>OAuth-related metadata standards evolution</li>
                  <li>Implications to JWTs and claims for supporting agentic workflows</li>
                  <li>Workload-based access grants and flows</li>
                  <li>Where agent-to-agent and agent-to-tool authorization is actually heading: GNAP and OAuth extensions for agents, AuthZEN for fine-grained authorization, capability narrowing and revocation across delegation hops, KERI/ACDC and SEDI for cryptographic authority</li>
                  <li>How MCP and A2A are converging on identity and mandate</li>
                  <li>How the community keeps a human, a company, or a nation the source of authority at execution time as agents chain calls across tools and organizations</li>
                  <li>How trust and behavioral signals can travel with an agent without becoming surveillance</li>
                </ul>
              </div>

              <div className="callout">
                <strong>💡 Have a Topic to Add?</strong>
                <br />
                These topics will be discussed during the agenda creation in the opening circle. If you have additional
                topics you&apos;d like to explore, bring them to the workshop and propose them during the
                agenda-setting session.
              </div>
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
