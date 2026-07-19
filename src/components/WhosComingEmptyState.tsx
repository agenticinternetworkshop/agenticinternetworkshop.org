'use client'

import Link from 'next/link'

export function WhosComingEmptyState() {
  return (
    <div className="callout">
      <strong>👥 Who's Coming</strong><br />
      Registration for AIW #3 has just opened. Check back soon to see who will be attending.
      <br /><br />
      In the meantime you can view the attendees from <Link href="/events/2/whos-coming" style={{ textDecoration: 'underline' }}>AIW #2</Link> and <Link href="/events/1/whos-coming" style={{ textDecoration: 'underline' }}>AIW #1</Link>.
    </div>
  )
}
