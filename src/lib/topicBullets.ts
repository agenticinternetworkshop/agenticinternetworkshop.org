import type { Topic } from '@/lib/types'

/**
 * Prefer explicit `bullets` when present (AIW2); otherwise parse `description`.
 */
export function getTopicBullets(topic: Topic): string[] {
  if (topic.bullets && topic.bullets.length > 0) return topic.bullets
  return splitTopicDescriptionIntoBullets(topic.description)
}

/**
 * Split a topic `description` from eventData into display bullets.
 * Descriptions are stored as "Topics include: a, b, c" where commas inside
 * parentheses must not split items (e.g. "Delegated authorization (OAuth, MCP)").
 * Commas outside parentheses (e.g. in quoted phrases) can still split incorrectly—use `topic.bullets` when needed.
 */
export function splitTopicDescriptionIntoBullets(description: string): string[] {
  const trimmed = description.trim()
  const prefixMatch = trimmed.match(/^Topics include:\s*/i)
  const body = prefixMatch ? trimmed.slice(prefixMatch[0].length) : trimmed
  if (!body) return []

  const bullets: string[] = []
  let depth = 0
  let start = 0
  for (let i = 0; i < body.length; i++) {
    const c = body[i]
    if (c === '(') depth++
    else if (c === ')') depth = Math.max(0, depth - 1)
    else if (depth === 0 && c === ',' && body[i + 1] === ' ') {
      const segment = body.slice(start, i).trim()
      if (segment) bullets.push(segment)
      start = i + 2
      i++
    }
  }
  const last = body.slice(start).trim()
  if (last) bullets.push(last)
  return bullets
}
