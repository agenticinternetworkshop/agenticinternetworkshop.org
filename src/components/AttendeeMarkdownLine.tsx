import { Attendee } from '@/lib/types'

/**
 * Renders one attendee line similar to docs/AIW2-attendees.md:
 * Name — role, affiliation (affiliation linked when website is present).
 */
export function AttendeeMarkdownLine({ attendee }: { attendee: Attendee }) {
  const { name, role, affiliation, socialLinks } = attendee
  const site = socialLinks?.website

  if (!role && !affiliation) {
    return <>{name}</>
  }

  const affNode =
    affiliation &&
    (site ? (
      <a href={site} target="_blank" rel="noopener noreferrer">
        {affiliation}
      </a>
    ) : (
      affiliation
    ))

  if (role && affiliation) {
    return (
      <>
        <strong>{name}</strong>
        {' — '}
        {role}, {affNode}
      </>
    )
  }

  if (role) {
    return (
      <>
        <strong>{name}</strong>
        {' — '}
        {role}
      </>
    )
  }

  return (
    <>
      <strong>{name}</strong>
      {' — '}
      {affNode}
    </>
  )
}
