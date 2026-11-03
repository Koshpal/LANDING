import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// useLayoutEffect warns during server render; the prerender only needs the no-op.
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/** Every route change opens at the top of the page. In-page #anchors scroll to their target instead. */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useIsoLayoutEffect(() => {
    // The browser would otherwise restore the old scroll position on back/forward.
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  useIsoLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    // 'instant' ignores any CSS scroll-behavior: smooth, so the new page never visibly scrolls up.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, search, hash])

  return null
}
