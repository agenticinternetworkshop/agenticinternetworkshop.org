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
                <strong>📚 Recommended Reading</strong>
                <br />
                We ask attendees when they register for suggestions. Here are some recommended resources:
                <ul style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-6)' }}>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      A Survey of AI Agent Protocols
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      On Being Agentic
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Upgrade or Switch: Do We Need a Next-Gen Trusted Architecture for the Internet of AI Agents?
                    </a>
                  </li>
                  <li>
                    <a href="https://code.sgo.to" target="_blank" rel="noopener noreferrer">
                      HTTP, APIs and identity articles at code.sgo.to
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://code.sgo.to/2014/09/05/ws-rest-2014-keynote.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WS-REST 2014 Keynote
                    </a>
                  </li>
                  <li>
                    <a href="https://collab101.org" target="_blank" rel="noopener noreferrer">
                      Collaboration vlog at collab101.org
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Bot or Not? Why Incentives Matter More Than Identity
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Roads, Robots, and Responsibility: Why Agentic AI Needs Identity Infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      AI Permissions vs. Human Permissions: What Really Changes?
                    </a>
                  </li>
                  <li>
                    <a href="https://gluufederation.medium.com/" target="_blank" rel="noopener noreferrer">
                      Articles at gluufederation.medium.com
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Draft OAuth AI Agents on Behalf of User
                    </a>
                  </li>
                  <li>
                    <a href="https://firstperson.network" target="_blank" rel="noopener noreferrer">
                      The First Person Project White Paper at firstperson.network
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Email Verifications Protocol
                    </a>
                  </li>
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
          <p>&copy; 2025 Agentic Internet Workshop. Hosted by IIW Foundation.</p>
          <p>
            <strong>Event Hosts:</strong> Andor Kesselman & Kaliya Young
          </p>
          <p>
            <strong>IIW Co-Founders:</strong> Phil Windley, Doc Searls
          </p>
        </div>
      </footer>
    </>
  )
}
