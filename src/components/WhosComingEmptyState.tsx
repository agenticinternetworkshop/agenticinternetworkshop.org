'use client'

import Link from 'next/link'

export function WhosComingEmptyState() {
  return (
    <div className="callout">
      <strong>👥 Who's Coming</strong><br />
      Registration for AIW #2 is still being finalized. Check back soon to see who will be attending!
      <br /><br />
      In the meantime, you can view the <Link href="/events/1/whos-coming" style={{ textDecoration: 'underline' }}>attendees from AIW #1</Link> to get a sense of the community that gathers for these workshops.
    </div>
  )
}
