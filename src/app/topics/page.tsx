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
              <h1>Potential Topics</h1>
              <p className="description">The agenda will be co-created the day of the event by attendees using Open Space Technology. These are ideas folks have submitted as they register, shared to give perspective on what participants are thinking about discussing.</p>
            </div>

            <div className="topics-content">
              <div className="callout">
                <strong>🌐 Open Space Technology</strong><br />
                We use Open Space Technology to co-create the agenda live the morning of the event. Below is the list of what attendees shared with us as they registered about topics they hope to learn about, want to present about and topics to discuss with others at the event. It is important to note this list is not used to "create the agenda" that is done by everyone gathered in person October 24th beginning at 9am.
              </div>

              <div className="topics-grid">
                <div className="card">
                  <h3>Identity & Trust Infrastructure</h3>
                  <ul className="topic-list">
                    <li>The role of decentralized identity in personal AI agents</li>
                    <li>The role of SSI in agentic identity and inter-agent protocols</li>
                    <li>Trust & identity</li>
                    <li>Identity, trust in general for AgenticAI</li>
                    <li>Trust and identity frameworks for Agentic AI</li>
                    <li>How to anchor agents to ground truth</li>
                    <li>DIDs and DIDCOMM are central to the overall Web 7.9 Agentic OS architecture</li>
                    <li>How is trust maintained across a network of downstream services?</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Agentic Commerce & Markets</h3>
                  <ul className="topic-list">
                    <li>How will agentic commerce work? What are the UX, liability, and payment implications?</li>
                    <li>AI agent marketplaces and negotiation mechanisms</li>
                    <li>Equitable compute/resources for agentic AI markets</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Security, Access & Policy</h3>
                  <ul className="topic-list">
                    <li>AI permissions vs Human permissions</li>
                    <li>Managing access rights</li>
                    <li>Access control to data</li>
                    <li>Agents access control who are accessing on behalf of users</li>
                    <li>Particularly interested in delegation issues as well as dynamic authorization</li>
                    <li>I would like to see how state management tokens are held in a secure way so that there is no privacy loss</li>
                    <li>How will cryptographic tokens represent delegation?</li>
                    <li>How to express security policies to authorize access, enforce restrictions, and track obligations?</li>
                    <li>Access control and delegation in agentic systems</li>
                    <li>Cryptographic tokens for delegation and dynamic authorization</li>
                    <li>MCP security frameworks and evaluation</li>
                    <li>How to ensure fairness and accountability across the agentic web</li>
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
                    <li>Agent to agent negotiation</li>
                    <li>MCP, A2A, ERC-8004, and beyond</li>
                    <li>Why OAuth isn't a fit for MCP</li>
                    <li>Browser integration and the role of credential managers</li>
                    <li>Agentic Internet registries and credential registries</li>
                    <li>Project NANDA & Agentic Registries</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Credential Management & Registries</h3>
                  <ul className="topic-list">
                    <li>Agentic Internet Registries</li>
                    <li>The role of credential managers in the agentic AI ecosystem</li>
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
                  <h3>Governance & Infrastructure</h3>
                  <ul className="topic-list">
                    <li>How will we govern agentic AI? What tools are needed that don't exist today? What are the limits of identity for governance?</li>
                    <li>What are the risks of delay while security and culture evolves to keep pace with existing progress?</li>
                    <li>Policy derivations with AI agents</li>
                    <li>Decentralized agentic swarms</li>
                    <li>Infrastructure requirements for the agentic web</li>
                    <li>Governance models and limits of identity in AI governance</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Human-Agent Experience & Design</h3>
                  <ul className="topic-list">
                    <li>Semantic interoperability</li>
                    <li>Modeling social and collaborative agentic situations</li>
                  </ul>
                </div>

                <div className="card">
                  <h3>Research & Collaboration</h3>
                  <ul className="topic-list">
                    <li>Project NANDA</li>
                    <li>There is a ton of work going on in very different places. I'm hoping to leave this day with a better sense of who is doing what</li>
                    <li>Ongoing work at Project NANDA and other research initiatives</li>
                    <li>Mapping who's working on what across the ecosystem</li>
                  </ul>
                </div>
              </div>

              <div className="callout">
                <strong>📚 Recommended Reading</strong><br />
                We ask attendees when they register for suggestions. Here are some recommended resources:
                <ul style={{marginTop: 'var(--space-3)', paddingLeft: 'var(--space-6)'}}>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">A Survey of AI Agent Protocols</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">On Being Agentic</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Upgrade or Switch: Do We Need a Next-Gen Trusted Architecture for the Internet of AI Agents?</a></li>
                  <li><a href="https://code.sgo.to" target="_blank" rel="noopener noreferrer">HTTP, APIs and identity articles at code.sgo.to</a></li>
                  <li><a href="https://code.sgo.to/2014/09/05/ws-rest-2014-keynote.html" target="_blank" rel="noopener noreferrer">WS-REST 2014 Keynote</a></li>
                  <li><a href="https://collab101.org" target="_blank" rel="noopener noreferrer">Collaboration vlog at collab101.org</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Bot or Not? Why Incentives Matter More Than Identity</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Roads, Robots, and Responsibility: Why Agentic AI Needs Identity Infrastructure</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">AI Permissions vs. Human Permissions: What Really Changes?</a></li>
                  <li><a href="https://gluufederation.medium.com/" target="_blank" rel="noopener noreferrer">Articles at gluufederation.medium.com</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Draft OAuth AI Agents on Behalf of User</a></li>
                  <li><a href="https://firstperson.network" target="_blank" rel="noopener noreferrer">The First Person Project White Paper at firstperson.network</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Email Verifications Protocol</a></li>
                </ul>
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
