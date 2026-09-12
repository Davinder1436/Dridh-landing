import { marked } from 'marked'

export interface ArticleMeta {
  slug: string
  title: string
  kicker: string
  hook: string
  readingTime: string
  companies?: string[]
  cover?: string
}

/** Resolve a path stored in index.json (e.g. "covers/x.svg") against the base. */
export function assetUrl(relative: string): string {
  return `${import.meta.env.BASE_URL}articles/${relative}`
}

/** Minimal front-matter reader: `key: value` pairs between --- fences.
 *  Deliberately tiny — gray-matter needs a Buffer polyfill in the browser. */
export function parseFrontMatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/.exec(raw)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    let value = line.slice(i + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (key) data[key] = value
  }
  return { data, body: raw.slice(match[0].length) }
}

marked.setOptions({ gfm: true, breaks: false })

/** Render article markdown to HTML, forcing external links to open safely. */
export function renderMarkdown(body: string): string {
  const html = marked.parse(body, { async: false }) as string
  return html.replace(
    /<a href="(https?:\/\/[^"]+)"/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"'
  )
}

/** Build an absolute URL so this works from any base path. */
function articleUrl(file: string): string {
  return new URL(`articles/${file}`, new URL(import.meta.env.BASE_URL, window.location.href)).href
}

export async function loadArticle(slug: string): Promise<{ meta: Record<string, string>; html: string }> {
  const url = articleUrl(`${slug}.md`)

  if (window.location.protocol === 'file:') {
    throw new Error(
      'The page is open as a file:// document, so the browser blocks loading the articles. ' +
        'Run "npm run dev", or serve the dist/ folder over http.'
    )
  }

  let res: Response
  try {
    res = await fetch(url, { cache: 'no-cache' })
  } catch (e) {
    throw new Error(`Network error requesting ${url} — ${(e as Error).message}`)
  }

  if (!res.ok) {
    throw new Error(
      `${url} returned ${res.status} ${res.statusText}. ` +
        (res.status === 404
          ? 'The file is missing, or the dev server was started before it was added — restart it and hard-refresh.'
          : '')
    )
  }

  const raw = await res.text()

  // A misconfigured static host can answer a missing .md with index.html.
  if (/^\s*<(!doctype|html)/i.test(raw)) {
    throw new Error(`${url} returned an HTML page instead of markdown — the file is probably missing.`)
  }

  const { data, body } = parseFrontMatter(raw)
  return { meta: data, html: renderMarkdown(body) }
}

export async function loadArticleIndex(): Promise<ArticleMeta[]> {
  const url = articleUrl('index.json')

  if (window.location.protocol === 'file:') {
    throw new Error(
      'The page is open as a file:// document, so the browser blocks loading the articles. ' +
        'Run "npm run dev", or serve the dist/ folder over http.'
    )
  }

  const res = await fetch(url, { cache: 'no-cache' })
  if (!res.ok) throw new Error(`${url} returned ${res.status} ${res.statusText}`)
  return res.json()
}
