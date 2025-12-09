'use client'

import { useState } from 'react'
import Image from 'next/image'
import logoImage from '@/assets/logo_transparent.png'
import { EventLink } from '@/components/EventLink'
import { Event } from '@/lib/types'

interface SiteHeaderProps {
  event: Event
  activeNav?: string
  onNavClick?: (section: string) => void
}

export function SiteHeader({ event, activeNav = 'about', onNavClick }: SiteHeaderProps) {
  const handleNavClick = (section: string) => {
    if (onNavClick) {
      onNavClick(section)
    } else {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="site-header">
      <nav className="navbar container">
        <div className="brand">
          <EventLink href="/">
            <Image src={logoImage} alt="Agentic Internet Workshop Logo" width={48} height={48} />
            <span className="brand-text">
              Agentic Internet Workshop{event.status === 'archived' ? ` #${event.eventNumber}` : ''}
              {event.status === 'archived' && <span className="brand-archived"> (Archived)</span>}
            </span>
          </EventLink>
        </div>
        <div className="nav-links">
          <a
            onClick={() => handleNavClick('about')}
            className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            About
          </a>
          <EventLink href="/details" className={`nav-link ${activeNav === 'details' ? 'active' : ''}`}>
            Details
          </EventLink>
          <EventLink href="/topics" className={`nav-link ${activeNav === 'topics' ? 'active' : ''}`}>
            Topics
          </EventLink>
          <EventLink href="/whos-coming" className={`nav-link ${activeNav === 'whos-coming' ? 'active' : ''}`}>
            Who's Coming
          </EventLink>
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
  )
}
