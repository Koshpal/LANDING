import { track as vercelTrack } from "@vercel/analytics";
import { useEffect } from "react";

/**
 * Single entry point for product analytics events.
 *
 * Event names (keep this list in sync with the brief, section 3):
 *   cta_click        { label, to, location }
 *   demo_submit      { status: "success" | "error" }
 *   resource_submit  { resource, status }
 *   section_view     { section, path }
 *
 * Always safe to call: failures never reach the UI. Events also go to
 * window.dataLayer when a tag manager is present, and to the console in dev.
 */
export function track(event, props = {}) {
  try {
    if (import.meta.env.DEV) console.debug("[track]", event, props);
    vercelTrack(event, props);
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...props });
    }
  } catch {
    /* analytics must never break the page */
  }
}

/**
 * Fires `section_view` once per section per page load, when ~35% of the
 * element is on screen. Pass a ref to the section element.
 */
export function useSectionView(ref, section) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track("section_view", { section, path: window.location.pathname });
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, section]);
}
