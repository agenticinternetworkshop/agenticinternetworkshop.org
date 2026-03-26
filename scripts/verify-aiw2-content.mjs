#!/usr/bin/env node
/**
 * Compares rendered /topics/ and /whos-coming/ HTML to docs/AIW2-*.md
 * Run with local static server: python3 -m http.server 3333 --directory dist
 *   node scripts/verify-aiw2-content.mjs http://127.0.0.1:3333
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const base = process.argv[2] || 'http://127.0.0.1:3333'

function readMdTopics(md) {
  const sections = []
  let cur = null
  for (const line of md.split(/\r?\n/)) {
    if (line.startsWith('## ')) {
      if (cur) sections.push(cur)
      cur = { title: line.slice(3).trim(), bullets: [] }
    } else if (line.startsWith('- ') && cur) {
      cur.bullets.push(line.slice(2).trim())
    }
  }
  if (cur) sections.push(cur)
  return sections
}

function readMdAttendees(md) {
  const lines = []
  for (const line of md.split(/\r?\n/)) {
    if (line.startsWith('- ')) lines.push(line.slice(2).trim())
  }
  return lines
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
}

/** Extract topic cards: h3 text + li texts (AIW2 cards use topic-list) */
function parseTopicsHtml(html) {
  const cards = []
  const cardRe = /<div class="card">\s*<h3>([^<]*)<\/h3>\s*<ul class="topic-list">([\s\S]*?)<\/ul>\s*<\/div>/g
  let m
  while ((m = cardRe.exec(html)) !== null) {
    const title = decodeEntities(m[1].trim())
    const ul = m[2]
    const bullets = []
    const liRe = /<li>([^<]*)<\/li>/g
    let lm
    while ((lm = liRe.exec(ul)) !== null) {
      bullets.push(decodeEntities(lm[1].trim()))
    }
    cards.push({ title, bullets })
  }
  return cards.length ? cards : null
}

/** Plain text inside attendee-line list items (strip tags, keep link text) */
function parseWhosHtml(html) {
  const block = html.match(/<ul class="attendee-list">([\s\S]*?)<\/ul>/)
  if (!block) return null
  const ul = block[1]
  const lines = []
  const liRe = /<li[^>]*class="attendee-line"[^>]*>([\s\S]*?)<\/li>/g
  let m
  while ((m = liRe.exec(ul)) !== null) {
    const inner = m[1]
    // Replace <a href="...">text</a> with text for comparison to MD link labels
    const stripped = inner
      .replace(/<!--\s*-->/g, '')
      .replace(/<strong>([^<]*)<\/strong>/g, '$1')
      .replace(/<a[^>]*>([^<]*)<\/a>/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    lines.push(decodeEntities(stripped))
  }
  return lines
}

function normalizeAttendeeLine(s) {
  return s.replace(/\s*—\s*/g, ' — ').replace(/\s+,/g, ',').trim()
}

async function main() {
  const topicsMd = fs.readFileSync(path.join(root, 'docs/AIW2-proposed-topics.md'), 'utf8')
  const attMd = fs.readFileSync(path.join(root, 'docs/AIW2-attendees.md'), 'utf8')

  const expectedTopics = readMdTopics(topicsMd)
  const expectedAtt = readMdAttendees(attMd).map(normalizeAttendeeLine)

  const topicsUrl = new URL('/topics/', base).href
  const whosUrl = new URL('/whos-coming/', base).href

  const [topicsRes, whosRes] = await Promise.all([fetch(topicsUrl), fetch(whosUrl)])

  if (!topicsRes.ok) throw new Error(`GET ${topicsUrl} -> ${topicsRes.status}`)
  if (!whosRes.ok) throw new Error(`GET ${whosUrl} -> ${whosRes.status}`)

  const topicsHtml = await topicsRes.text()
  const whosHtml = await whosRes.text()

  const gotTopics = parseTopicsHtml(topicsHtml)
  const gotAtt = parseWhosHtml(whosHtml)

  let failed = false

  if (!gotTopics) {
    console.error('FAIL: could not parse topics-grid from HTML')
    failed = true
  } else {
    if (gotTopics.length !== expectedTopics.length) {
      console.error(`FAIL: topic section count: expected ${expectedTopics.length}, got ${gotTopics.length}`)
      failed = true
    }
    for (let i = 0; i < Math.min(gotTopics.length, expectedTopics.length); i++) {
      const exp = expectedTopics[i]
      const g = gotTopics[i]
      if (exp.title !== g.title) {
        console.error(`FAIL topic[${i}] title: expected ${JSON.stringify(exp.title)}, got ${JSON.stringify(g.title)}`)
        failed = true
      }
      if (exp.bullets.length !== g.bullets.length) {
        console.error(
          `FAIL topic[${i}] "${exp.title}" bullet count: expected ${exp.bullets.length}, got ${g.bullets.length}`
        )
        failed = true
      }
      for (let j = 0; j < Math.min(exp.bullets.length, g.bullets.length); j++) {
        if (exp.bullets[j] !== g.bullets[j]) {
          console.error(`FAIL topic[${i}] bullet[${j}]:\n  MD: ${exp.bullets[j]}\n  UI: ${g.bullets[j]}`)
          failed = true
        }
      }
    }
  }

  if (!gotAtt) {
    console.error('FAIL: could not parse attendee-list from HTML')
    failed = true
  } else {
    if (gotAtt.length !== expectedAtt.length) {
      console.error(`FAIL: attendee line count: expected ${expectedAtt.length}, got ${gotAtt.length}`)
      failed = true
    }
    for (let i = 0; i < Math.min(gotAtt.length, expectedAtt.length); i++) {
      const e = expectedAtt[i]
        .replace(/\[[^\]]+\]\([^)]+\)/g, (m) => {
          const im = m.match(/\[([^\]]+)\]/)
          return im ? im[1] : m
        })
        .trim()
      const g = normalizeAttendeeLine(gotAtt[i])
      const en = normalizeAttendeeLine(e)
      if (en !== g) {
        console.error(`FAIL attendee[${i}]:\n  MD: ${en}\n  UI: ${g}`)
        failed = true
      }
    }
  }

  if (failed) {
    process.exit(1)
  }
  console.log('OK: topics and who\'s coming match docs/AIW2-proposed-topics.md and docs/AIW2-attendees.md')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
