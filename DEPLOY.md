# Deploying the landing site

```
npm install
npm run build        # vite build + per-route static metadata + static home hero
npm run check:copy   # banned-phrase / placeholder check
```

Output is `dist/` (Vercel serves it; `vercel.json` rewrites unknown paths to the SPA).

## Environment variables (Vercel project settings)

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID_DEMO`, `VITE_EMAILJS_PUBLIC_KEY` | Demo form and resource requests |
| `VITE_API_URL`, `VITE_*_PORTAL_URL` | Login redirects |
| `VITE_HIDE_DUMMY=true` | **Set in production.** Removes all labelled dummy proof, team, experts and articles |
| `VITE_SHOW_NEEDS=true` | Optional. Shows `{{PROOF}}` / `{{VERIFY}}` markers in a build (always on in dev) |

## Before going live

See `CONTENT_NEEDED.md`. Blockers: Privacy Policy and Terms text, real proof, approved app screenshots, confirmed claims.

## Audit snapshot (Lighthouse mobile, local production build)

Home: performance 92, accessibility 100, best practices 96, SEO 100. The only console error locally is the Vercel insights script, which exists once deployed.
