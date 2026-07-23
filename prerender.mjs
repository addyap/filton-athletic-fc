// Post-build prerender: turn each route into a static HTML file with real
// content and per-page <head> metadata, so search engines and social scrapers
// (which don't run JS) get a proper page. Runs in plain Node — no browser — so
// it works in Vercel's build environment.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const DIST = 'dist'
const template = readFileSync(join(DIST, 'index.html'), 'utf-8')

const { render, getRoutePaths } = await import(
  pathToFileURL(join(process.cwd(), 'dist-ssr', 'entry-server.js')).href
)

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function applyHead(html, head) {
  const title = escapeHtml(head.title)
  const desc = escapeHtml(head.description)
  const canonical = escapeHtml(head.canonical)
  const replaceAttr = (input, marker, value) =>
    input.replace(new RegExp(`(${marker}\\s+content=)"[^"]*"`), `$1"${value}"`)

  let out = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  out = replaceAttr(out, '<meta name="description"', desc)
  out = replaceAttr(out, '<meta property="og:title"', title)
  out = replaceAttr(out, '<meta property="og:description"', desc)
  out = replaceAttr(out, '<meta property="og:url"', canonical)
  out = replaceAttr(out, '<meta name="twitter:title"', title)
  out = replaceAttr(out, '<meta name="twitter:description"', desc)
  out = out.replace(/(<link rel="canonical" href=)"[^"]*"/, `$1"${canonical}"`)
  return out
}

const paths = getRoutePaths()
let count = 0
for (const path of paths) {
  const { appHtml, head } = render(path)
  let html = applyHead(template, head)
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outPath =
    path === '/' ? join(DIST, 'index.html') : join(DIST, path, 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  count++
}

console.log(`Prerendered ${count} routes to static HTML.`)
