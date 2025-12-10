'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { Event } from '@/lib/types'

interface ArchivedWhosComingPageClientProps {
  event: Event
}

export function ArchivedWhosComingPageClient({ event }: ArchivedWhosComingPageClientProps) {
  const [activeNav] = useState('whos-coming')

  return (
    <>
      <SiteHeader event={event} activeNav={activeNav} />

      <main>
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h1>Who's Coming - AIW #{event.eventNumber}</h1>
              <p className="description">Organizations and companies that attended the Agentic Internet Workshop</p>
            </div>

            <div className="whos-coming-content">
              <div className="callout">
                <strong>🌐 Diverse Representation</strong><br />
                The workshop brought together a diverse group of organizations working on agentic AI protocols, identity infrastructure, and related technologies. This mix of established companies, startups, and research organizations created a rich environment for collaboration and knowledge sharing.
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
