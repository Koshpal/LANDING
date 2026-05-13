import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Only force-scroll to top for contact and demo pages
    if (pathname === '/contact' || pathname === '/demo') {
      // jump to top immediately to ensure content starts from top
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname])

  return null
}
