import { lazy, type ComponentType } from 'react'

/**
 * A code-split page that can also be loaded ahead of rendering. The prerenderer
 * and the first browser render both call `preload`, so they render the real page
 * straight away; only in-app navigation goes through React.lazy and Suspense.
 */
export function lazyPage<P extends object>(load: () => Promise<{ default: ComponentType<P> }>) {
  let loaded: ComponentType<P> | undefined
  const Lazy = lazy(load) as unknown as ComponentType<P>

  function Page(props: P) {
    const Current = loaded ?? Lazy
    return <Current {...props} />
  }

  Page.preload = async () => {
    loaded = (await load()).default
  }

  return Page
}
