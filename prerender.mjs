// Post-build prerender: turn each route into a static HTML file with real
// content and per-page <head> metadata, so search engines and social scrapers
// (which don't run JS) get a proper page. Runs in plain Node — no browser — so
// it works in Vercel's build environment.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const DIST = 'dist'
const template = readFileSync(join(DIST, 'index.html'), 'utf-8')

/**
 * Must match OG_IMAGE in src/head.ts and the og:image in index.html. Pages
 * using it keep the declared 1200x630; pages that substitute their own image
 * (the historic photographs) get those dimensions stripped, as they aren't
 * that shape.
 */
const DEFAULT_OG_IMAGE = 'https://filtonathletic.co.uk/og-image.jpg'

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

  if (head.ogImage) {
    const image = escapeHtml(head.ogImage)
    out = replaceAttr(out, '<meta property="og:image"', image)
    out = replaceAttr(out, '<meta name="twitter:image"', image)
    // The declared dimensions describe the default crest, so they'd be a lie
    // for any page supplying its own image.
    if (head.ogImage !== DEFAULT_OG_IMAGE) {
      out = out.replace(/\s*<meta property="og:image:(width|height)" content="[^"]*" \/>/g, '')
    }
  }
  if (head.ogType) {
    out = replaceAttr(out, '<meta property="og:type"', escapeHtml(head.ogType))
  }
  if (head.noindex) {
    out = replaceAttr(out, '<meta name="robots"', 'noindex,follow')
  }
  if (head.jsonLd?.length) {
    const blocks = head.jsonLd
      .map(
        (node) =>
          `    <script type="application/ld+json">\n${JSON.stringify(node, null, 2).replace(/</g, '\\u003c')}\n    </script>`,
      )
      .join('\n')
    out = out.replace('</head>', `${blocks}\n  </head>`)
  }
  return out
}

const SITE = 'https://filtonathletic.co.uk'

/**
 * Existing <lastmod> dates, keyed by path, read from the checked-in
 * public/sitemap.xml. Pages we already knew about keep their curated date;
 * anything new gets today's. The generated sitemap is the one that ships, so
 * new routes can never go missing from it again.
 */
function existingLastmods() {
  const map = new Map()
  try {
    const xml = readFileSync(join('public', 'sitemap.xml'), 'utf-8')
    const re = /<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g
    let m
    while ((m = re.exec(xml))) {
      const path = m[1].replace(SITE, '') || '/'
      map.set(path.replace(/\/$/, '') || '/', m[2].trim())
    }
  } catch {
    // No curated sitemap — every page just gets today's date.
  }
  return map
}

const paths = getRoutePaths()
const lastmods = existingLastmods()
const today = new Date().toISOString().slice(0, 10)
const sitemapPaths = []
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

  // Pages we deliberately keep out of the index don't belong in the sitemap.
  if (!head.noindex) sitemapPaths.push(path)
}

// 404 page: render an unmatched path (React shows <NotFoundPage>, head is
// noindex) and write it to dist/404.html. With the SPA catch-all rewrite
// removed from vercel.json, Vercel serves this for any unknown URL with a real
// 404 status instead of a soft-404 homepage. Not added to the sitemap.
{
  const { appHtml, head } = render('/404')
  let notFound = applyHead(template, head)
  notFound = notFound.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  writeFileSync(join(DIST, '404.html'), notFound)
  console.log('Wrote 404.html (noindex).')
}

const urls = sitemapPaths
  .map((path) => {
    const key = path.replace(/\/$/, '') || '/'
    const loc = path === '/' ? `${SITE}/` : `${SITE}${path}`
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmods.get(key) ?? today}</lastmod>\n  </url>`
  })
  .join('\n')

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

console.log(`Prerendered ${count} routes to static HTML.`)
console.log(`Wrote sitemap.xml with ${sitemapPaths.length} URLs.`)
