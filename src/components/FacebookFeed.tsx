const PAGE_URL = 'https://www.facebook.com/FiltonAthleticFC'

/**
 * Live Facebook feed for matchday updates. Uses Facebook's official Page Plugin
 * in its plain-iframe form — no SDK, app ID, API key or cost. It shows the
 * page's recent posts to logged-out visitors and updates automatically as the
 * club posts (goals, cards, half-time and full-time). Facebook's own iframe
 * sets cookies; this is noted in the privacy policy.
 */
function FacebookFeed() {
  const src =
    `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(PAGE_URL)}` +
    '&tabs=timeline&width=500&height=560&small_header=true' +
    '&adapt_container_width=true&hide_cover=false&show_facepile=false'

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#e7f0e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f6b45]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f6b45] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2f6b45]" />
        </span>
        Live match updates
      </span>
      <p className="mt-3 text-sm text-slate-600">
        Goals, cards and full-time scores posted live from the touchline &mdash; straight from our Facebook
        page.
      </p>

      {/* Facebook Page Plugin. Renders recent posts and updates as we post. */}
      <div className="mt-4 overflow-hidden rounded-lg bg-slate-50">
        <iframe
          title="Filton Athletic FC on Facebook"
          src={src}
          className="block h-[560px] w-full"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>

      <a
        href={PAGE_URL}
        target="_blank"
        rel="noreferrer"
        className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#0b2d52] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#123a68]"
      >
        Follow Filton Athletic on Facebook
        <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
      </a>
      <a
        href="https://x.com/FiltonAthletic"
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-block w-fit text-sm font-medium text-[#0b2d52] underline"
      >
        Also on X &rarr;
      </a>
    </div>
  )
}

export default FacebookFeed
