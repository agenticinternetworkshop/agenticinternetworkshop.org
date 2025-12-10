'use client'

import Link from 'next/link'
import { useEventContext } from '@/lib/EventContext'
import { ReactNode } from 'react'

interface EventLinkProps {
  href: string
  children: ReactNode
  className?: string
  [key: string]: any
}

export function EventLink({ href, children, className, ...props }: EventLinkProps) {
  const { basePath } = useEventContext()

  // If href is external (starts with http/https) or is an anchor (#), use as-is
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#')) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  // If href is absolute path starting with /events/, use as-is (already an event path)
  if (href.startsWith('/events/')) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  // Otherwise, prefix with basePath for context-aware navigation
  const prefixedHref = `${basePath}${href}`

  return (
    <Link href={prefixedHref} className={className} {...props}>
      {children}
    </Link>
  )
}
