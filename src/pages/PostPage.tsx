import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { getPost, formatPostDate, posts } from '../data/posts'

function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window === 'undefined' ? '' : window.location.href

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const shareText = encodeURIComponent(`${title} — Filton Athletic FC`)
  const shareUrl = encodeURIComponent(url)

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
      <span className="text-sm font-semibold text-slate-600">Share this post:</span>
      <a
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
        href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
      <a
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        X / Twitter
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
      >
        {copied ? 'Link copied' : 'Copy link'}
      </button>
    </div>
  )
}

function PostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (post) {
      document.title = `${post.title} — Filton Athletic FC`
    }
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-[#0b2d52]">Post not found</h2>
          <p className="mt-3 text-slate-600">That post may have been removed or the link is wrong.</p>
          <Link to="/#join" className="mt-6 inline-block text-[#0b2d52] underline">
            Back to Join Us
          </Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link to="/#join" className="text-sm text-[#0b2d52] underline">
          &larr; Back to Join Us
        </Link>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[#3f8a5b]">
          {post.category}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-[#0b2d52]">{post.title}</h2>
        <p className="mt-2 text-sm text-slate-500">{formatPostDate(post.date)}</p>

        <div className="mt-6 space-y-4 text-slate-700">
          {post.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-[#f7faf8] p-6">
          <h3 className="font-semibold text-[#0b2d52]">Interested? Get in touch</h3>
          {post.contactName && <p className="mt-2 text-slate-700">Speak to {post.contactName}</p>}
          {post.contactPhone && <p className="mt-1 text-slate-700">{post.contactPhone}</p>}
          {post.contactEmail && (
            <p className="mt-1">
              <a className="text-[#0b2d52] underline" href={`mailto:${post.contactEmail}?subject=${encodeURIComponent(post.title)}`}>
                {post.contactEmail}
              </a>
            </p>
          )}
        </div>

        <ShareButtons title={post.title} />

        {others.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-[#0b2d52]">More ways to get involved</h3>
            <ul className="mt-4 space-y-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link to={`/join/${p.slug}`} className="text-[#0b2d52] underline">
                    {p.title}
                  </Link>
                  <p className="text-sm text-slate-600">{p.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <SiteFooter />
    </div>
  )
}

export default PostPage
