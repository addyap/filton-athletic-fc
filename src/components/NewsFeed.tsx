import { Link } from 'react-router-dom'
import type { TeamId } from '../data/teams'
import { teamName } from '../data/teams'
import { latestNews, newsForTeam, formatNewsDate, type NewsItem } from '../data/news'

function badgeLabel(id: TeamId) {
  return id === 'club' ? 'Club news' : teamName(id)
}

type Props = {
  /** Filter to one team (its own items plus club-wide). Omit to show all teams. */
  team?: TeamId
  /** Maximum number of items to show. */
  limit?: number
  /** Message shown when there is no news to display. */
  emptyMessage?: string
}

/**
 * Renders the club's news as a card grid. Used unfiltered on the front page
 * (news from every team) and filtered by `team` on each team's own page.
 */
function NewsFeed({ team, limit, emptyMessage }: Props) {
  const items: NewsItem[] = team ? newsForTeam(team, limit) : latestNews(limit)

  if (items.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="font-semibold text-[#0b2d52]">No news just yet</p>
        <p className="mt-1 text-sm text-slate-500">
          {emptyMessage ?? 'Check back soon for the latest updates.'}
        </p>
      </div>
    )
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <article key={item.slug} className="flex flex-col overflow-hidden rounded-lg border border-slate-200">
          {item.images && item.images.length > 0 && (
            <div className={item.images.length > 1 ? 'grid grid-cols-2' : ''}>
              {item.images.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              ))}
            </div>
          )}
          <div className="flex flex-1 flex-col p-5">
            <div className="flex flex-wrap items-center gap-2">
              {item.teams.map((t) => (
                <span
                  key={t}
                  className="rounded bg-[#e7f0e9] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#2f6b45]"
                >
                  {badgeLabel(t)}
                </span>
              ))}
              <span className="text-xs text-slate-500">{formatNewsDate(item.date)}</span>
            </div>
            <p className="mt-3 font-semibold text-[#0b2d52]">{item.title}</p>
            <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
            {item.link &&
              (item.link.external ? (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-[#0b2d52] underline"
                >
                  {item.link.label} &rarr;
                </a>
              ) : (
                <Link
                  to={item.link.href}
                  className="mt-3 inline-block text-sm font-semibold text-[#0b2d52] underline"
                >
                  {item.link.label} &rarr;
                </Link>
              ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default NewsFeed
