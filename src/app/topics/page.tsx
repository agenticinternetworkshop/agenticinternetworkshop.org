'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/assets/logo_transparent.png'

export default function TopicsPage() {
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
            <Link href="/#register" className={`nav-link ${activeNav === 'register' ? 'active' : ''}`}>
              Register
            </Link>
            <Link href="/#sponsors" className={`nav-link ${activeNav === 'sponsors' ? 'active' : ''}`}>
              Sponsors
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h1>Potential Topics</h1>
              <p className="description">The agenda will be co-created the day of the event by attendees using Open Space Technology. These are ideas folks have submitted as they register, shared to give perspective on what participants are thinking about discussing.</p>
            </div>

            <div className="topics-content">
              <div className="callout">
                <strong>🪩 Open Space Technology</strong><br />
                We use Open Space Technology to co-create the agenda live the morning of the event. Below is the list of what attendees shared with us as they registered about topics they hope to learn about, want to present about and topics to discuss with others at the event. It is important to note this list is not used to "create the agenda" that is done by everyone gathered in person October 24th beginning at 9am.
              </div>

              <div className="topics-grid">
                <div className="card">
                  <h3>Identity & Trust Infrastructure</h3>
                  <ul className="topic-list">
                    <li>The role of decentralized identity in personal AI agents</li>
                    <li>The role of SSI in agentic identity and inter-agent protocols</li>
                    <li>Identity, trust in general for AgenticAI</li>
                    <li>Trust & identity</li>
                    <li>How to anchor agents to ground truth</li>
                    <li>DIDs and DIDCOMM are central to the overall Web 7.9 Agentic OS architecture</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Access Control & Permissions</h3>
                  <ul className="topic-list">
                    <li>AI permissions vs Human permissions</li>
                    <li>Managing access rights</li>
                    <li>Access control to data</li>
                    <li>Agents access control who are accessing on behalf of users</li>
                    <li>Particularly interested in delegation issues as well as dynamic authorization</li>
                    <li>I would like to see how state management tokens are held in a secure way so that there is no privacy loss</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Protocols & Standards</h3>
                  <ul className="topic-list">
                    <li>MCP MCP MCP MCP!</li>
                    <li>MCP security</li>
                    <li>Why OAuth is not a fit for MCP</li>
                    <li>I think I'm interested most in learning about MCP and how OAuth might relate to it, and specifically, how/whether browsers can help</li>
                    <li>A2A protocol and cross app for Agentic AI</li>
                    <li>ERC-8004, A2A, MCP</li>
                    <li>The current state of standard and to see if an issue we see is being discussed or not</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Credential Management</h3>
                  <ul className="topic-list">
                    <li>The role of credential managers in the agentic AI ecosystem</li>
                    <li>Agentic Internet Registries</li>
                    <li>How to incorporate an access layer and a payment layer in a decentralized way</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Web & Browser Integration</h3>
                  <ul className="topic-list">
                    <li>I'm interested in learning how / whether the web and browsers can help</li>
                    <li>My goal for XMLUI is that a developer using agents to build XMLUI apps will enjoy a level of MCP support that reliably steers agents to correct patterns. I don't think this requires more or different protocols, it does require discovery and application of practical techniques. agentic experiences, and in what ways they may need to change</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Agent Communication & Negotiation</h3>
                  <ul className="topic-list">
                    <li>Agent to agent negotiation</li>
                    <li>There is a ton of work going on in very different places. I'm hoping to leave this day with a better sense of who is doing what</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Governance & Security</h3>
                  <ul className="topic-list">
                    <li>How will cryptographic tokens represent delegation?</li>
                    <li>How is trust maintained across a network of downstream services?</li>
                    <li>How to express security policies to authorize access, enforce restrictions, and track obligations?</li>
                    <li>How will we govern agentic AI? What tools are needed that don't exist today? What are the limits of identity for governance?</li>
                    <li>What are the risks of delay while security and culture evolves to keep pace with existing progress?</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Research & Collaboration</h3>
                  <ul className="topic-list">
                    <li>MIT-NANDA</li>
                    <li>There is a ton of work going on in very different places. I'm hoping to leave this day with a better sense of who is doing what</li>
                  </ul>
                </div>
              </div>

              <div className="callout">
                <strong>💡 Have a Topic to Add?</strong><br />
                These topics will be discussed during the agenda creation in the opening circle. If you have additional topics you'd like to explore, bring them to the workshop and propose them during the agenda-setting session.
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
