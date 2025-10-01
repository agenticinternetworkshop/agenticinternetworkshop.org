'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/assets/logo_transparent.png'

export default function DetailsPage() {
  const [activeNav, setActiveNav] = useState('details')

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
              <h1>Workshop Details</h1>
              <p className="description">Comprehensive information about the Agentic Internet Workshop</p>
            </div>

            <div className="details-content">
              <p><em>An Internet Identity Workshop Inspired Event, Hosted by the IIW Foundation</em> <em>(IIW #41 is October 21-23)</em></p>
              
              <p>The AgenticAI space is developing rapidly. Significant innovation is happening around protocols for how agents connect to each other, people, organizations, services, and things.</p>
              
              <p>The goal of this one-day workshop is to bring individuals working on Agentic AI Protocols together to advance the field in a productive and generative manner.</p>
              
              <h2>What is the value of participation?</h2>
              <ul className="value-list">
                <li>Share your AgenticAI protocol work with others innovating protocols and get feedback.</li>
                <li>Learn who else is working on protocols, what are they working on</li>
                <li>Share what you are building with the protocols and discuss how to improve them.</li>
                <li>Gain a more in-depth understanding of key AgenticAI use-cases for protocols</li>
                <li>Discern if there is alignment for future work and collaboration.</li>
                <li>Consider how we can protect humanity, human integrity, judgment and creativity with these protocol stacks</li>
              </ul>
              
              <p>The agenda will be set in the opening circle by the people who are gathered at the event using a process called Open Space Technology. Anyone in attendance can put a topic on the agenda.</p>
              
              <p><strong>The event builds on the legacy of the Internet Identity Workshop</strong>, a forum that has been meeting twice a year since 2005. In the first 10 years of the community's life, we defined protocols such as OpenID Connect and OAuth, which are used a billion times a day on the internet today. In the second 10 years, we worked on decentralized identity protocols, like Decentralized IDentifiers, Verifiable Credentials, Trust Spanning Protocol, DIDComm, OpenID4VC and many others. <strong>Now, with this event, we want to focus on the agentic web and how personal and corporate agents can best engage with each other.</strong></p>
              
              <p><em>Notes will be collected in all sessions and made publicly available.</em></p>
              
              <h2>Places where AI & AI Agent Protocols are being worked on:</h2>
              <div className="protocol-grid">
                <div className="protocol-column">
                  <ul>
                    <li><a href="https://datatracker.ietf.org/group/aipref/about/" target="_blank" rel="noopener noreferrer">AI Preferences</a> (IETF AIPREF)</li>
                    <li><a href="https://datatracker.ietf.org/wg/webbotauth/about/" target="_blank" rel="noopener noreferrer">Web Bot Authentication</a> (BOF at IETF)</li>
                    <li><a href="https://trello.com/c/3pdVLL9w/39-1430-1630-ai-agent-protocols" target="_blank" rel="noopener noreferrer">AI Agents</a> Side Meeting at last IETF</li>
                    <li><a href="https://trello.com/c/v0XjZxf0/48-1100-1300-ai-agent-applications-in-6g-network" target="_blank" rel="noopener noreferrer">AI agent applications in 6G network</a> Side Meeting at IETF</li>
                    <li><a href="https://trello.com/c/tgZesNpH/53-1800-2000-the-impact-of-ai-agent-on-network-infrastructure" target="_blank" rel="noopener noreferrer">The Impact of AI Agent on Network Infrastructure</a> Side Meeting at IETF</li>
                    <li><a href="https://www.w3.org/community/agentprotocol/" target="_blank" rel="noopener noreferrer">AI Agent Protocol Community Group (CG)</a> W3C</li>
                    <li><a href="https://www.w3.org/community/aikr/" target="_blank" rel="noopener noreferrer">AI KR</a> W3C</li>
                    <li><a href="https://openid.net/cg/artificial-intelligence-identity-management-community-group/" target="_blank" rel="noopener noreferrer">AI Identity Management CG</a> OpenID Foundation</li>
                    <li><a href="https://lf-toip.atlassian.net/wiki/spaces/HOME/pages/22982892/AI+Human+Trust+Working+Group" target="_blank" rel="noopener noreferrer">AI and Trust WG</a> Trust over IP</li>
                    <li><a href="hhttps://projnanda.github.io/projnanda/#" target="_blank" rel="noopener noreferrer">Project NANDA</a></li>
                  </ul>
                </div>
                <div className="protocol-column">
                  <ul>
                    <li>Trusted AI Agents Decentralized Identity Foundation</li>
                    <li><a href="https://www.linuxfoundation.org/projects/digital-trust" target="_blank" rel="noopener noreferrer">Linux Foundation Digital Trust</a></li>
                    <li><a href="https://github.com/a2aproject/A2A" target="_blank" rel="noopener noreferrer">A2A</a>, <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener noreferrer">MCP</a>, <a href="https://github.com/nlweb-ai/NLWeb" target="_blank" rel="noopener noreferrer">NLWeb</a></li>
                    <li><a href="https://github.com/skyfire-xyz/kyapay" target="_blank" rel="noopener noreferrer">KYAPay Protocol</a></li>
                    <li><a href="https://www.a2aprotocol.net/" target="_blank" rel="noopener noreferrer">Agent to Agent Protocol (A2A)</a></li>
                    <li><a href="https://agenticprofile.ai/" target="_blank" rel="noopener noreferrer">Agentic Profiles (A2A + DIDs)</a></li>
                    <li><a href="https://www.w3.org/TR/did-1.1/" target="_blank" rel="noopener noreferrer">Decentralized Identifiers</a></li>
                    <li><a href="https://datatracker.ietf.org/wg/gnap/about/" target="_blank" rel="noopener noreferrer">GNAP</a>, <a href="https://datatracker.ietf.org/wg/oauth/about/" target="_blank" rel="noopener noreferrer">OAuth</a></li>
                    <li><a href="https://trustoverip.github.io/tswg-tsp-specification/" target="_blank" rel="noopener noreferrer">Trust Spanning Protocol</a></li>
                  </ul>
                </div>
              </div>
              
              <h2>Recommended Reading</h2>
              <ul className="reading-list">
                <li><a href="https://arxiv.org/abs/2504.16736" target="_blank" rel="noopener noreferrer">A Survey of AI Agent Protocols</a> - Comprehensive analysis of existing agent protocols with systematic classification</li>
                <li><a href="https://projectvrm.org/2025/08/28/on-being-agentic/" target="_blank" rel="noopener noreferrer">On Being Agentic</a> - Doc Searls' perspective on personal AI and agency in the agentic web</li>
                <li><a href="https://arxiv.org/abs/2506.12003" target="_blank" rel="noopener noreferrer">Upgrade or Switch: Do We Need a Next-Gen Trusted Architecture for the Internet of AI Agents?</a></li>
                <li><em>(please share additional reading you recommend)</em></li>
              </ul>
              
              <h2>Tentative Schedule</h2>
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
                      <td><strong>8:00 AM</strong></td>
                      <td>Registration & Welcome</td>
                      <td>Doors open, breakfast and coffee</td>
                    </tr>
                    <tr>
                      <td><strong>9:00 AM - 10:00 AM</strong></td>
                      <td>Opening Circle</td>
                      <td>Agenda Creation using Open Space Technology</td>
                    </tr>
                    <tr>
                      <td><strong>10:00 AM - 11:00 AM</strong></td>
                      <td>Session 1</td>
                      <td>Community-driven discussions</td>
                    </tr>
                    <tr>
                      <td><strong>11:00 AM - 12:00 PM</strong></td>
                      <td>Session 2</td>
                      <td>Community-driven discussions</td>
                    </tr>
                    <tr className="highlight">
                      <td><strong>12:00 PM - 1:00 PM</strong></td>
                      <td>Lunch</td>
                      <td>Networking and informal discussions</td>
                    </tr>
                    <tr>
                      <td><strong>1:00 PM - 2:00 PM</strong></td>
                      <td>Session 3</td>
                      <td>Community-driven discussions</td>
                    </tr>
                    <tr>
                      <td><strong>2:00 PM - 3:00 PM</strong></td>
                      <td>Session 4</td>
                      <td>Community-driven discussions</td>
                    </tr>
                    <tr>
                      <td><strong>3:00 PM - 4:00 PM</strong></td>
                      <td>Closing Circle</td>
                      <td>Session Summaries and Next Steps</td>
                    </tr>
                    <tr className="optional">
                      <td><strong>4:30 PM</strong></td>
                      <td>Post-Event Social</td>
                      <td>Optional networking (TBD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="callout">
                <strong>📝 Open Space Technology</strong><br />
                The agenda will be co-created by participants in the opening circle. Anyone can propose a topic for discussion, ensuring the content is driven by the community's interests and needs.
              </div>
              
              <h2>Cost</h2>
              <p>This event is for those implementing and creating protocols for AgenticAI. We are asking attendees to submit a link of or description about their work on protocols that are relevant to AgenticAI.</p>
              <div className="pricing-details">
                <div className="price-item">
                  <div className="price-amount">$150</div>
                  <div className="price-description">Independent / Startups<br/><small>For those who can provide reference to your work in the AgentAI field</small></div>
                </div>
                <div className="price-item">
                  <div className="price-amount">$300</div>
                  <div className="price-description">Corporate / Regular<br/><small>For those who can provide reference to your work in the AgentAI field</small></div>
                </div>
                <div className="price-item">
                  <div className="price-amount">$1200</div>
                  <div className="price-description">Non-AgentAI Builders<br/><small>Venture Capitalists, etc. - people who want to observe</small></div>
                </div>
              </div>
              
              <div className="callout">
                <strong>📝 Maximum Number of Attendees: 200</strong>
              </div>
              
              <h2>Event Hosts & Organizers</h2>
              <div className="organizers">
                <p><strong>Event Hosts:</strong> Andor Kesselman, Kaliya Young</p>
                <p><strong>IIW Co-Founders:</strong> Phil Windley, Doc Searls</p>
              </div>
              
              <h2>Location</h2>
              <div className="location-info">
                <h3>Computer History Museum</h3>
                <p>1401 N Shoreline Blvd<br/>Mountain View, CA 94043</p>
                
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.0123456789!2d-122.0776843!3d37.4145694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sComputer%20History%20Museum!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%" 
                    height="400" 
                    style={{ border: 0, borderRadius: 'var(--radius-md)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Computer History Museum Location"
                  ></iframe>
                </div>
              </div>
              
              <h2>Potential Topics</h2>
              <p>The agenda will be co-created the day of the event by attendees. These are simply ideas folks have submitted as they register and shared to give perspective on what folks going into the event are thinking about discussing.</p>
              <p><em>Coming soon</em></p>

              <div className="cta-section">
                <h2>Ready to Join?</h2>
                <p>Register now for this groundbreaking workshop on agentic protocols</p>
                <a href="https://www.eventbrite.com/e/agentic-internet-workshop-tickets-1657366079559" className="btn btn-primary">
                  Register on Eventbrite
                </a>
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
