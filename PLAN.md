# Koshpal Landing: Plan (Step 2)

Status: **awaiting approval**. Nothing implemented. Builds on `AUDIT.md`.

## 0. Inputs and what changed since the audit

- **Reference received:** `about_koshpal.pdf` (6 pages, the "Doc_K" overview). It sits at `CODE/docs/references/`, i.e. the monorepo root, not inside `LANDING/` (which has its own `.git`). I'll copy it to `LANDING/docs/references/` when implementation starts so it travels with the repo. Say if you'd rather it stay where it is.
- **Still missing:** app feature document, `More About Koshpal` (voice and banned phrases beyond the brief), Knowledge Base, YML HR guide. Until they arrive, copy follows brief §8–9 only, and anything depending on those (Financial Confidence Framework wording, privacy do/don't list, CTA rules) stays marked `{{VERIFY}}`.
- **Your answers applied:**
  - Hide the extra pages (Customers, Calculator, Business Impact, Financial Wellness, Video): **yes**. Hidden from nav and sitemap, `noindex`, routes kept.
  - Pricing: **no numbers**. The page states the per-employee-per-month model and "Talk to us".
  - Demo routing: **no decision yet**. I keep client-side EmailJS as a stop-gap and flag it in `CONTENT_NEEDED.md`.
  - App Store / Play badges: **removed until a public app link exists**. (Your last "yes" was ambiguous between "public app?" and "do quick wins now?". I've read it as the latter, so quick wins are in Phase A below, which needs your go on this plan. Correct me if that's wrong.)

### What Doc_K settles

| Question from the audit | Answer in Doc_K |
|---|---|
| Four pillars | Learn, Understand, Connect, Grow, with definitions (usable nearly verbatim) |
| "Unlimited" experts | **Appears in company materials** ("unlimited access to certified financial experts", twice). Brief §9.8 still says confirm before prominent use, so it stays `{{VERIFY}}` and the hero won't lean on it. |
| What Koshpal is not | Exact list: budgeting app, loan platform, investment marketplace, advisory firm. No commissions. "Trust is our business model." |
| Problem narrative | Money follows people to work; the "doctor visit vs an hour every two weeks" analogy; "teach them to fish" |
| Services | AI guidance, 1:1 certified experts, education, workshops/webinars, money tools, **financial health assessments**, HR dashboard |
| Outcomes | Doc says Koshpal improves "well-being, productivity, engagement, retention". That's positioning, not a result. Site says what is *measured*, not *achieved*. |
| Gaps still open | No expert names or credentials, no onboarding timeline, no pricing, no privacy mechanics. All stay in `CONTENT_NEEDED.md`. |

One thing the doc does that the brief forbids: it uses "transforms" and "intelligent technology". The site copy won't.

---

## 1. Page list and navigation

**Nav (sticky, persistent Book a demo):** Platform · For HR · For Employees · Privacy & Trust · Pricing · Resources · About · **[Book a demo]**. Login moves to the footer and a quiet text link in the utility row. No dropdowns (seven items fit; dropdowns hide the structure the buyer needs to see).

| Route | Page | Source today | Action |
|---|---|---|---|
| `/` | Home | `Home.jsx` | Rebuild section order (§2) |
| `/platform` | Platform | `Platform.jsx` | Rewrite around "one program, four pillars" |
| `/for-hr` | For HR | `ForHr.jsx` (+ `BusinessImpact` content) | Rewrite; absorb the sourced business case |
| `/for-employees` | For Employees | `EmployeeFinancialWellness.jsx` | Rename and rewrite in employee voice. `/employee-financial-wellness` redirects here. |
| `/privacy-trust` | Privacy & Trust | `Security.jsx` | Rewrite: who-sees-what table, approved statements only. `/security` redirects. |
| `/pricing` | Pricing | none | **New**, model only, "Talk to us" |
| `/resources` | Resources | `Resources*.jsx`, `Blog*.jsx` | Merge into one grid and one gated guide. Reports/guides/blog stay as sub-routes. |
| `/about` | About | `About.jsx` | Rewrite from Doc_K (belief, philosophy); team stays `{{PROOF}}` |
| `/demo` | Book a demo | `DemoPage.jsx` | Rebuild form, success state, tracking |
| `/privacy-policy`, `/terms-of-service` | Legal | stubs | Stay; **need your text**. Footer-only, honest "coming soon" state is not acceptable on a privacy-first site, so this blocks launch. |
| `/contact`, `/login`, `/forgot-password` | Utility | keep | Restyle only, `noindex` on auth pages |
| `/financial-coaching`, `/financial-education` | Sub-pages | keep | Fold into Platform; hide from nav, `noindex`, redirect once Platform has the content |
| `/customers`, `/calculator`, `/business-impact`, `/financial-wellness`, `/video`, `/solutions/hr` | Hidden | keep | Hidden, `noindex`, out of sitemap. `/solutions/hr` → 301 to `/for-hr`. |

---

## 2. Homepage: section order and what happens to each existing component

Order follows the buyer's questions. One idea per section, alternating layouts.

| # | Section | Buyer Q | Component | Built from | Note |
|---|---|---|---|---|---|
| 1 | **Hero** | 1 | `Hero` | rewrite | Headline + one line + Book a demo / See how it works (`#experience`). Product visual: phone with real app screen + a coach-session card. |
| 2 | **Credibility strip** | 8 (early) | `TrustStrip` | rewrite | Expert credentials (CFP / CA / CFA) when supplied; otherwise the three approved facts only ("Private by design · No commissions · No products sold"). **No fake logos.** |
| 3 | **The problem** | 2 | `ProblemScene` | merges `ProblemSection` + `ImpactSection` | Human scene → "I earn enough, but I still don't feel in control." → ₹30,000 vs ₹3 lakh. No stat block until sourced. |
| 4 | **Four pillars** | 3 | `PillarCard` ×4 | replaces `PlatformSection` | Learn / Understand / Connect / Grow, each links to `/platform#…`. |
| 5 | **Employee experience** | 3 (day-to-day) | `ProductWalkthrough` | `EmployeeJourney` copy + real screenshots in `DeviceFrame` | 3–4 steps: session → plan → app → reminders. |
| 6 | **What HR gets** | 4 | `OutcomeBlock` + `DashboardMockup` | `PlatformSplit` | Three outcomes left, "Sample data" dashboard right, aggregate-only. Framework appears here as how progress is *measured*. |
| 7 | **Privacy band** | 5 | `PrivacyBand` | `PrivacySection` | Full-width, visually distinct. Approved statements only. Links `/privacy-trust`. |
| 8 | **Why different** | 6 | `ComparisonTable` | new (replaces `TechAndHumans`) | Categories, not competitors. Calm tone. Doc_K "doctor every two weeks" analogy lives here or in #3. |
| 9 | **Rollout** | 7 | `NumberedSteps` | new, from `PlatformSplit` strip | 4 steps, effort stated plainly, timeline `{{VERIFY}}`. |
| 10 | **Proof** | 8 | `TestimonialCard` / `StatBlock` | `Proof` | **Omitted** until real material exists, per brief. Slot and conditional render are ready. |
| 11 | **Pricing teaser** | 9 | `PricingTeaser` | new | "Per employee per month" + See pricing. |
| 12 | **FAQ** | 1–10 | `FaqAccordion` | new | 6–8 HR questions, `FAQPage` JSON-LD. |
| 13 | **Final CTA** | 10 | `CtaBand` | `FinalCta` | Primary + "Download the employer guide" secondary, warm closing line. |

Retired components: `TechAndHumans`, `PlatformSection`, `PlatformSplit` (split into #5/#6/#9), `ProblemSection`, `ImpactSection`, `WhoItsFor` (moves to For HR if useful), `LogoBar` (deleted; unused).

### Draft copy direction (for approval, not final)

- **Hero headline, two options:**
  - **A (recommended):** "Your employees don't need another finance app. They need someone to talk to about money."
  - **B:** "Building financially confident workplaces."
  - *Why A:* it says what the thing is and who it's for within seconds, and it positions against the budgeting-app assumption in one line. B is on-brand but is the tagline; it works better as the About page and footer line.
- **Support line:** "Koshpal gives every employee private 1:1 sessions with certified financial experts, plus an app to act on the plan. HR sees anonymised insight, never individual data." (Avoids "unlimited" until verified.)
- **Trust line under buttons:** "Private by design. No commissions. No products sold." (all from Doc_K)
- **Problem:** open on the scene, not a statistic. Em dashes kept to a minimum.

---

## 3. Components (build once, reuse)

Reuse what exists; add only what's missing.

| Brief component | Status | Where |
|---|---|---|
| Sticky header + CTA | Exists (`Navbar`); simplify to 7 links | `components/Navbar.jsx` |
| Hero | Rewrite | `b2b/Hero.jsx` |
| Trust strip | Rewrite | `b2b/TrustStrip.jsx` |
| Section header | Exists (`SectionHead`) | `primitives.jsx` |
| Pillar card | **New** | `b2b/PillarCard.jsx` |
| Product walkthrough | **New** (tabs/steps, replaces journey list) | `b2b/ProductWalkthrough.jsx` |
| Device frame | **New** (replaces `Placeholder` phone) | `b2b/DeviceFrame.jsx` |
| Outcome block | **New** | `b2b/OutcomeBlock.jsx` |
| Dashboard mockup + "Sample data" label | **New**, extracted from `PlatformSplit` | `b2b/DashboardMockup.jsx` |
| Comparison table | **New**, accessible `<table>` | `b2b/ComparisonTable.jsx` |
| Numbered steps | **New** (generalises `FlowChain`) | `b2b/NumberedSteps.jsx` |
| Stat block with source line | **New**; refuses to render without `source` | `b2b/StatBlock.jsx` |
| Testimonial card | **New**; refuses to render without `attribution` | `b2b/TestimonialCard.jsx` |
| FAQ accordion | **New**, `<details>` or ARIA disclosure | `b2b/FaqAccordion.jsx` |
| CTA band | Exists (`PageCta`) → rename `CtaBand`, add secondary | `PageShell.jsx` |
| Resource card | **New** | `b2b/ResourceCard.jsx` |
| Demo form | **Rebuild** | `components/DemoForm.jsx` |
| Footer | Rewrite links | `components/Footer.jsx` |
| Placeholder markers | **New** `<Needs kind="PROOF" note="…"/>`: renders a visible tag in dev/preview, **renders nothing in production** | `b2b/Needs.jsx` |
| Analytics helper | **New** `track(event, props)` wired into `CTA`, forms, downloads, section views | `lib/analytics.js` |

Design tokens: keep `#334EAC` and the existing token files. New components consume Tailwind tokens (`primary`, `secondary-darkest`), not raw hex; existing sections are converted only as they're touched.

---

## 4. Patterns to apply from the references

**Not yet reviewed live** (needs a browser session; the references are unopened). From the brief, the intended takeaways are below. I'll replace this list with observed specifics before Phase C.

| Source | Pattern to verify and apply |
|---|---|
| YML | Hero with two CTAs and three-line value summary under it; logo bar immediately under hero; visible pricing; report lead-magnet |
| BetterUp | Outcome-led hero; proof early; "one platform, four ways in" for the pillars; Trust & Security as a destination |
| Mave | One message per screen; generous whitespace; device-framed product imagery; restrained motion |

Decision for you: **may I open these sites in Chrome now and write the observed list?** (Recommended; it takes one short pass and avoids designing from the brief's paraphrase.)

---

## 5. Engineering work

| Area | Change |
|---|---|
| SEO | One canonical host (`https://koshpal.com`, matching `Seo.jsx` and `index.html`; **say if `www` is the real host**); full sitemap; `en_IN`; 1200×630 OG card (needs asset); favicon; per-route static HTML via prerender (vite-plugin-ssg or a build-time script) so titles/OG exist without JS; `noindex` on auth + hidden pages; `FAQPage` + `WebSite` JSON-LD |
| Analytics | `track()` on every `CTA`, `DemoForm` submit/success/error, `EmailCapture` submit, resource download, and section-view via IntersectionObserver (once per section per session). Backend: keep Vercel Analytics for page views; event destination to be agreed (Vercel custom events works with no new vendor) |
| Forms | `DemoForm`: name, work email (free-mail block), company, **company size**, role, optional message; honeypot + time-to-submit check; success state that says what happens next; EmailJS kept as interim. `EmailCapture`: honest state until a destination exists (disabled with "Guide coming soon", **no false success**) |
| Performance | Remove `gsap`; lazy-load JellyGrid and cap at hero + final CTA; swap `backdrop-blur`/`blur()` reveals for opacity+transform; convert any used PNGs >200 KB to WebP/AVIF with `srcset`/`width`/`height`; drop `dist/`, `preview-b2b-homepage.html`, `_legacy_backup/` from the working tree (history keeps them) |
| Accessibility | Global `:focus-visible` ring; keyboard-operable nav; custom cursor off by default (opt-in) or removed; contrast pass on greys; `prefers-reduced-motion` disables reveals; real `alt` on screenshots; semantic `<table>` and headings in order |
| QA | Manual at 360/768/1024/1440; Lighthouse mobile ≥90 target; axe pass; link checker; banned-phrase grep as a script in `scripts/` run in CI |

---

## 6. Phases and commits

Each phase is small and reviewable; I stop after each for a look.

| Phase | Scope | Needs from you |
|---|---|---|
| **A: Safety and hygiene** (audit quick wins) | Remove fake advisor avatars, "+11pt", store badges; "Sample data" labels; fix privacy link; fix `/demo` copy and 24h/48h; honest `EmailCapture`; remove `gsap`; sitemap/canonical/locale fixes; `noindex` hidden pages; `/solutions/hr` redirect | This plan approved |
| **B: Foundations** | `Needs`, `track()`, new nav, `DeviceFrame`, `SectionHead`/`CtaBand` tweaks, footer | |
| **C: Homepage** | Sections 1–13 in order, one commit per 2–3 sections | Real screenshots (else clearly-labelled mock frames) |
| **D: Interior pages** | Platform → For HR → For Employees → Privacy & Trust → Pricing → About → Resources | Approved privacy statements; pricing decision |
| **E: Demo form + analytics wiring** | `DemoForm`, events, success state | Routing decision |
| **F: QA and changelog** | Checklist §13, `CHANGELOG.md` per page in visitor terms | |

Changelog: `CHANGELOG.md` entry per commit, phrased as "what the visitor now sees and why".

---

## 7. Decisions needed from you

1. **Approve this plan** (or mark changes).
2. **Hero headline:** A (recommended) or B?
3. **Open the reference sites in Chrome** to write the observed pattern list? (Recommended: yes.)
4. **Host:** `koshpal.com` or `www.koshpal.com` as canonical?
5. **Is there a public app link** (App Store / Play)? Until then, no badges.
6. **Legal text:** who writes Privacy Policy and Terms? Both are launch blockers for a privacy-first brand.
7. **Remaining reference docs** (feature doc, `More About Koshpal`, Knowledge Base). Phase C copy is drafted from the brief and Doc_K only until they arrive.
