'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/assets/logo_transparent.png'
import { getCurrentEvent } from '@/lib/eventData'

export default function InteropPage() {
  const event = getCurrentEvent()
  const [activeNav, setActiveNav] = useState('interop')

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
            <Link href="/interop" className={`nav-link ${activeNav === 'interop' ? 'active' : ''}`}>
              Interop Day
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
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h1>Interop Day</h1>
              <p className="description">Wednesday, November 5 — Computer History Museum, Mountain View</p>
            </div>

            <div className="details-content">
              <p>
                Interop Day is a hands-on working day for people building agentic AI systems. Bring your
                implementation, your spec, or your hardest technical question and work side by side with
                others solving the same problems.
              </p>

              <p>
                The day runs in parallel with Day 3 of Internet Identity Workshop #43 at the same venue.
              </p>

              <h2>Schedule</h2>
              <div className="schedule-table-wrapper">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>10:30 AM</strong></td>
                      <td>Introductions & Interests</td>
                      <td>Everyone shares who they are and what they want to work on. Connections form and working groups emerge.</td>
                    </tr>
                    <tr>
                      <td><strong>11:15 AM</strong></td>
                      <td>Morning Working Sessions</td>
                      <td>Multiple groups run in parallel, self-organized around what came up in introductions.</td>
                    </tr>
                    <tr className="highlight">
                      <td><strong>12:30 PM</strong></td>
                      <td>Regroup Over Lunch</td>
                      <td>Quick share-back across groups: what worked, what broke, what surprised us.</td>
                    </tr>
                    <tr>
                      <td><strong>1:00 PM</strong></td>
                      <td>Afternoon Working Sessions</td>
                      <td>Groups that need more time keep going. New groups form around questions that emerged in the morning.</td>
                    </tr>
                    <tr>
                      <td><strong>2:30 PM</strong></td>
                      <td>Closing Circle</td>
                      <td>What did we learn? What interop actually happened? What needs to happen next?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Potential Topics</h2>
              <p>
                These topic clusters emerged from what registered attendees said they want to work on. All
                topics are open — you do not need to sign up in advance, and new topics are welcome on the day.
              </p>

              <div className="topics-grid">
                <div className="card">
                  <h3>Live Interop Testing</h3>
                  <p>
                    Attendees are bringing running implementations of agent identity and credential systems
                    to test against each other. Multiple people have built agent credential formats — JWT-based
                    tokens, dual-signed credentials, cryptographic delegation chains — and want to see whether
                    one system's verifier can consume another system's credentials. Others are bringing
                    conformance fixtures and test suites. The questions: where do wire formats align? Where do
                    they diverge? What breaks when you cross the boundary between two systems that were built
                    independently?
                  </p>
                  <p>
                    This is the core of what makes an interop day different from a conference. Code on laptops,
                    side by side, finding out what actually works.
                  </p>
                </div>

                <div className="card">
                  <h3>Agent Identity</h3>
                  <p>
                    Multiple approaches to agent identity are represented — JWT-based identity tokens,
                    cryptographic delegation chains (vLEI, KERI, ACDC), attestation-based frameworks, SPIFFE
                    and WIMSE workload identity, and decentralized identifiers. The question is not which one
                    wins. The question is: what does each approach actually give you that the others don't?
                    Where do they overlap? Can we produce a comparison matrix with real technical criteria that
                    an implementer could use to choose — or discover that two approaches are solving the same
                    problem and should be talking to each other?
                  </p>
                </div>

                <div className="card">
                  <h3>Authorization and Delegation</h3>
                  <p>
                    The largest cluster of interest. When a human delegates authority to an agent, and that
                    agent calls a tool or hands off to another agent, how does the authority travel? How do you
                    scope it so the agent can only do what it was authorized to do? How do you revoke it
                    mid-chain? How do you audit what happened after the fact?
                  </p>
                  <p>
                    Attendees are working on this from multiple angles: mandate delegation through digital
                    wallets, policy-based access control engines, mission-based governance models, and
                    capability-based authorization. A recurring theme from registration: existing OAuth and
                    authorization RFCs may not be sufficient for agent-to-agent delegation chains. MCP and A2A
                    both have authorization gaps that show up when agents chain calls across tools and
                    organizations. This session is where the people working on those gaps can map them together
                    and figure out what to close first.
                  </p>
                </div>

                <div className="card">
                  <h3>Trust, Audit, and Evidence</h3>
                  <p>
                    What evidence does an agent action need to produce? When an agent acts on your behalf —
                    makes a purchase, signs a document, sends a message — what record of that action needs to
                    exist, and who needs to see it?
                  </p>
                  <p>
                    This covers threat modeling for agentic systems, how guardrails and evaluations can
                    reference standardized threat taxonomies, agent fiduciary models, consumer protection by
                    design, and shared signal frameworks for mandate lifecycle events. The underlying question:
                    how do you separate human intent from governance decisions from delegated authority from
                    execution evidence in a way that is auditable?
                  </p>
                </div>

                <div className="card">
                  <h3>Credentials Agents Carry for Humans</h3>
                  <p>
                    When an agent presents your age, your photo ID, or a payment credential on your behalf —
                    what does the relying party need to verify? How does that work across MCP, A2A, and
                    verifiable credential presentation protocols? What is the minimum disclosure needed? How do
                    you handle consent at machine speed when the human is not in the loop for each transaction?
                  </p>
                  <p>
                    This touches digital wallet interop, verifiable credential presentation, and the practical
                    question of how agents participate in regulated transactions (age-gated content, financial
                    services, identity verification) without becoming a new surveillance surface.
                  </p>
                </div>

                <div className="card">
                  <h3>Personal Agent Memory and Storage</h3>
                  <p>
                    If an agent builds up context about you over time — your preferences, your conversation
                    history, your working patterns — where does that data live? Who controls it? Can you move
                    it to a different agent or a different provider?
                  </p>
                  <p>
                    Attendees are exploring portable memory architectures, permissioned storage that the agent
                    can access but does not own, privacy-preserving agent-to-agent matching for personal data,
                    and the design question of how to give agents useful context without creating a new class
                    of data lock-in.
                  </p>
                </div>

                <div className="card">
                  <h3>Standards Landscape</h3>
                  <p>
                    Where is agentic AI standardization happening today? IETF working groups, W3C community
                    groups, DIF, OpenID Foundation, ITU-T focus groups, and industry consortia are all active.
                    How do these efforts relate to each other? Where do they overlap, and where are the gaps?
                    This is a map-making session — useful for everyone, especially people who are building
                    something and want to know where their work fits in the bigger picture.
                  </p>
                </div>
              </div>

              <div className="cta-section">
                <h2>Join Us</h2>
                <p>
                  Interop Day is for builders, protocol designers, and technical evaluators working on
                  agentic AI. Show up at 10:30 with what you've got.
                </p>
                {event.details.registrationUrl ? (
                  <a href={event.details.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Register on Eventbrite
                  </a>
                ) : (
                  <p><em>Registration opens soon.</em></p>
                )}
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
