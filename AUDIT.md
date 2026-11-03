# Koshpal Landing: Audit (Step 1)

Scope: `CODE/LANDING` (React 18 + Vite + Tailwind + Helmet, 26 routes). Branch is clean apart from the untracked `page-section-inventory.md`. No code was changed.

## 0. What this audit is and isn't based on

- **Based on:** a full read of the homepage components, `index.html`, SEO/primitives/shell, Navbar/Footer, Demo, Contact, EmailCapture, Security, Calculator, Customers, About, blog content, plus targeted greps over every other page.
- **Not available in the repo:** `Doc_K.pdf`, the app feature document, `More About Koshpal`, the Knowledge Base, and the YML HR guide. Only `KoshpalPresentationForInvestors.pptx` exists (`/Koshpal/documents/`). So copy was **not** checked against the official positioning or the banned-phrase list in `More About Koshpal`. It was checked against the brief's Sections 8 and 9 only.
- **Not done:** live review of koshpal.com, YML, BetterUp, Mave, or the Vercel preview, and no Lighthouse run. Those need a browser session. The Mave patterns list the brief asks for is therefore still outstanding and goes in the plan.
- **Interior pages** other than Security, Calculator, Customers and About were skim-audited by grep, not read line by line. Their scores are marked "skimmed".

> The "UPI expense tracker" metadata problem named in the brief is on the live site, not in this repo. `index.html` and `Seo.jsx` already describe an employee financial wellness platform. The remaining metadata issues are in 6.

---

## 1. Inventory

### Homepage (`/`, `src/pages/Home.jsx`), in rendered order

| # | Section (component) | Heading | One-line summary |
|---|---|---|---|
| 1 | Hero | "Financially healthier employees. Stronger workplaces." | Tools, insights and expert guidance for staff; privacy-first impact view for HR. CTAs: Book a demo / Explore the platform. Right side: glass-card composite (app score 82, HR KPIs). |
| 2 | TrustStrip | "Built for modern workplaces" | Four generic value cards: Privacy-first, Employee-first, Data-driven, Expert-backed. |
| 3 | ProblemSection | "Financial stress doesn't stay at home." | Four cards (Focus, Productivity, Engagement, Retention) then "Your employees don't need another webinar." |
| 4 | PlatformSection (dark) | "A complete financial wellness layer for your workforce." | Struck-through "Not just education / tracker / coaching", four steps (Understand, Improve, Learn, Get guidance), two checklists: employees / company. |
| 5 | EmployeeJourney | "What your employees actually experience." | Five moments from payday to booking a coach, beside a phone **placeholder**. |
| 6 | PlatformSplit (dark) | "One platform for employees. One view for HR." | Two bullet lists, a hand-drawn HR dashboard mock, and a Launch / Engage / Measure strip. |
| 7 | PrivacySection | "Your employees' money is private. Always." | Two rows ("data stays with employee" / "aggregated insights roll up"). Links to `/privacy-policy`. |
| 8 | ImpactSection | "Financial wellness is more than an employee benefit." | Four-step chain, four KPI tiles showing "—". |
| 9 | TechAndHumans (dark) | "Automation when employees need speed. Humans when they need answers." | One paragraph and a row of avatar bubbles "RS AK PM NV +". |
| 10 | Proof | "Trusted by employees. Valued by organisations." | Five "CLIENT LOGO" slots and three dashed case-study/quote slots. |
| 11 | FinalCta (dark) | "Support your people beyond the payslip." | Book a demo / Explore the platform. |
| 12 | Footer | none | Platform, Resources, Company links; phone, email, LinkedIn; App Store / Google Play labels. |

`LogoBar.jsx` and `WhoItsFor.jsx` exist but are **not** on the homepage (WhoItsFor is used on `/for-hr`).

### Routes

`/` · `/platform` · `/employee-financial-wellness` · `/financial-coaching` · `/financial-education` · `/for-hr` (+ alias `/solutions/hr`) · `/business-impact` · `/security` · `/financial-wellness` · `/customers` · `/about` · `/resources` · `/resources/reports` · `/resources/guides` · `/blog` · `/blog/:slug` (3 published, 3 "coming soon") · `/calculator` · `/demo` · `/contact` · `/login` · `/forgot-password` · `/privacy-policy` (stub) · `/terms-of-service` (stub) · `/video` · `*` (404).

Full per-page section list is in `page-section-inventory.md` (accurate; reviewed).

### Gap against the brief's IA

| Brief page | In repo? |
|---|---|
| Home | Yes, needs reorder (see 3) |
| Platform | Yes `/platform` |
| For HR | Yes `/for-hr` |
| For Employees | Partly: `/employee-financial-wellness` (page also has an employer feature grid; not written in employee voice, skimmed) |
| Privacy & Trust | Partly: `/security`, reachable only under "Solutions" |
| **Pricing** | **Missing** |
| Resources | Yes (hub, reports, guides, blog) |
| About | Yes, but team and photo are empty slots |
| Book a demo | Yes `/demo`, fields differ from brief |

Pages not in the brief and not requested: `/business-impact`, `/financial-coaching`, `/financial-education`, `/financial-wellness`, `/customers`, `/calculator`, `/video`. The calculator is explicitly Phase 2 in the brief. These overlap with Platform / For HR / Resources.

---

## 2. Clarity score (homepage)

| Section | Score | Reason |
|---|---|---|
| Hero | **vague** | "Financially healthier employees. Stronger workplaces." could be any fintech's. Support line says "tools, insights and expert guidance" and never says *1:1 sessions with certified experts*, the one thing that distinguishes Koshpal. Eyebrow "For HR & People teams" is fine. Trust line ("Built for modern HR & People teams / Privacy-first architecture / Employee-first experience") is three empty adjectives. Visual is invented UI, not the product. |
| TrustStrip | **vague** | Four self-descriptions, no proof. "Data-driven: reported from day one" repeats a later section. "Individual financial data never reaches the employer" is stronger than the approved wording. |
| ProblemSection | **vague** | Four abstract nouns. No human scene, no "I earn enough but still don't feel in control", no ₹30,000 vs ₹3 lakh. Business-case framing (retention, productivity) is the *HR page's* job and is the "careful, sourced language" the brief wants only there. Same four ideas are repeated in ImpactSection. |
| PlatformSection | **confusing** | Three struck-through "Not just…" pills then "brings them together" is the "It's not X, it's Y" device the brief says to avoid, and the line-through reads as a rendering bug. Its four steps (Understand, Improve, Learn, Get guidance) **do not match** the brief's four pillars (Learn, Understand, Connect, Grow). "Complete financial wellness layer" is generic. Two checklists below duplicate PlatformSplit. |
| EmployeeJourney | **clear (copy) / weak (visual)** | Best copy on the page: concrete, Indian, human. But the visual is a grey phone placeholder and its examples ("Dining is up 18%", "₹8,000 from your emergency fund") are not labelled as illustrative. |
| PlatformSplit | **confusing** | Repeats PlatformSection's employee/HR lists a second time. Dashboard mock shows "1,248 employees, 78% activated, 64% engaged, 312 sessions, +11pt vs launch" with a visible caption "Placeholder — swap for a real HR-dashboard screenshot." The rollout strip is buried under it. |
| PrivacySection | **vague** | Two rows only. No "who sees what" by employee / expert / employer. Not visually distinct (white band, same as neighbours). The one link goes to an unwritten policy. |
| ImpactSection | **confusing** | Four empty "—" tiles plus "Figures populate from your live program" implies programs are live. Causal chain "Financial confidence → wellbeing → focus → stronger workforce" is an outcome claim. Overlaps ProblemSection. |
| TechAndHumans | **vague** | One paragraph. Duplicates the point already made in PlatformSection ("one platform, tech + humans"). Initials avatars imply named people. |
| Proof | **confusing** | Eight dashed boxes labelled "CLIENT LOGO" / "Case study / testimonial slot — add real content here." Developer scaffolding in production. |
| FinalCta | **clear** | Fine. Needs a secondary "download a guide" and a warmer close. |

**Repeated or generic lines (fail the "10,000 other sites" test):** "Built for modern workplaces" (TrustStrip title *and* WhoItsFor title), "Employee-first experience", "A complete financial wellness layer", "Financial wellness is more than an employee benefit", "Trusted by employees. Valued by organisations." (identical H2 on Home and `/customers`), "Support your people beyond the payslip" (Home final CTA and Footer CTA).

**Banned-phrase hits (brief Section 8):**

- "Transform" in the `/demo` and `/contact` H1: "Ready to **Transform** Your Finances?"
- "Your finances" on the demo page is consumer/B2C voice.
- "holistic", "empower", "unlock", "seamless", "leverage", "cutting-edge" were grepped for and not found elsewhere.
- Em dashes are frequent (about one per section lede). Worth trimming.

---

## 3. Order problems (against the 10 buyer questions)

| Q | Brief's question | Where answered now | Verdict |
|---|---|---|---|
| 1 | What is this, in one sentence? | Hero | Answered vaguely (no experts, no "employee benefit" framing) |
| 2 | Is this a problem for *my* company? | Problem (#3) | Abstract, no scene |
| 3 | What will employees get? | Platform (#4), Journey (#5) | OK but the pillar model is wrong and the visual is a placeholder |
| 4 | What will I get? | PlatformSplit (#6) | Present but duplicates #4 |
| 5 | Is data safe / watched? | Privacy (#7) | **Too late and too thin.** Sits after three product sections, one band wide. |
| 6 | How is this different? | **Nowhere** | Only the struck-through pills hint at it |
| 7 | How much work to roll out? | Three one-liners inside PlatformSplit | Buried; no steps, no honest effort statement |
| 8 | Proof? | Proof (#10) | Empty placeholders; no pilot, no credentials |
| 9 | Cost? | **Nowhere** (no pricing page either) | Missing |
| 10 | Next step? | FinalCta | OK, but no secondary |

Specific order faults:

1. **Impact (#8) re-asks Problem (#3)'s question after the product has been shown.** One of the two should go.
2. **TechAndHumans (#9) restates #4** and sits in the slot where "how is this different" should be.
3. **No FAQ** and **no pricing teaser**.
4. **Credibility strip precedes the claim it should support.** The strip in #2 has no proof in it, so the bar is spent before the problem section.
5. Rollout (Q7) is a footnote to the dashboard, not its own beat.

---

## 4. Claim risks

Legend: **OK** supported by a source in repo · **VERIFY** needs the team to confirm · **REMOVE** take off before launch.

| Claim / element | Where | Status | Note |
|---|---|---|---|
| "Individual financial data never reaches the employer" | TrustStrip | VERIFY | Approved idea is "employers receive only aggregated, anonymised insights". "Never" is absolute. |
| "Financial stress … shows up … in focus, output, engagement and, over time, retention." | Problem | VERIFY | Causal workplace claim, unsourced. Brief allows only on For HR with sources. |
| "Financial wellbeing is now part of a serious benefits strategy." | Problem | VERIFY | Unsourced trend claim. |
| "Qualified financial coaches / qualified advisors" | TrustStrip, TechAndHumans, Platform | VERIFY | Brief says CFP/CA/CFA; need the actual credentials. |
| Avatar bubbles "RS AK PM NV +" captioned "Koshpal financial advisors" | TechAndHumans | **REMOVE** | Invented people. |
| Hero composite: "82 Financial health", "1,248 Employees", "78% Activated", "64% Engaged", trend bars | Hero | **REMOVE** (or label "Sample data") | `aria-hidden`; only a tiny "illustrative" caption on the trend bars. Reads as real. |
| Dashboard mock: 1,248 / 78% / 64% / 312 sessions / 1.9k goals / **"+11pt Index vs. launch"** | PlatformSplit | **REMOVE** the "+11pt" outcome; relabel the rest "Sample data" | "+11pt vs launch" is an achieved-outcome claim. Brief §9.5: no ROI/outcome claims at pilot stage. |
| "Financial-wellness index" | PlatformSplit | VERIFY | Not in the brief's frameworks. |
| "Dining is up 18%", "₹8,000 from your emergency fund" | EmployeeJourney | VERIFY | Fine as an example if labelled as one. |
| "Koshpal quietly organises the month's financial activity — no setup, no spreadsheet." | EmployeeJourney | VERIFY | "No setup" and automatic tracking: how is data connected (SMS, bank, manual)? Security page says "employee connects their financial activity". |
| "Track spending automatically" | PlatformSection, meta, Footer, JSON-LD | VERIFY | Same question. Also leads positioning with a tracker, which is the pillar the brief says Koshpal is *not*. |
| "Adoption, engagement and outcomes reported from day one" | TrustStrip | VERIFY | |
| "Organisations running Koshpal" / "Trusted by teams piloting Koshpal" | Proof, LogoBar, `/customers` | **REMOVE** until real | Implies customers; slots visible. |
| "Trusted by employees. Valued by organisations." | Proof, `/customers` | **REMOVE** | Unsupported. |
| "Figures populate from your live program" | ImpactSection | VERIFY | Implies live programs exist. |
| Encryption "in transit and at rest", "audit logging", "export or delete on request", "Sub-processors held to the same standard" | `/security` | **VERIFY / REMOVE** | Brief §9.6 forbids technical claims. The page itself carries "Placeholder copy — align exact wording and certifications…". It is live. |
| "HR can never see: the content of any coaching conversation" | `/security` | OK-ish | Maps to "conversations with experts are private". Keep wording tight. |
| "Board-ready impact summaries" | `/security` | VERIFY | Does that export exist? |
| "A 30-minute walkthrough" | FinalCta, Platform, Blog, Resources, Employee page | VERIFY | Repeated on 6+ pages. |
| "We'll get back to you within 24 hours" / "within 48 hours" | `/demo` (both on one page), `/contact` | VERIFY | **Contradiction on the same page.** |
| "Coaches … don't earn commission on the outcome" | `/financial-coaching` | OK (matches brief §1) | |
| "Measure ROI" (guide titles "Measuring Program ROI", "How to think about ROI") | Resources, Guides | VERIFY | Promising an ROI framework is not an ROI claim, but the guides are described as products. Do they exist? |
| Report "in production", PDF download | `/resources/reports` | VERIFY | EmailCapture does not send anything (6). |
| Calculator: 33% stressed, 2 hrs/week lost, 46 weeks | `/calculator` | VERIFY | Defaults are unsourced and the result shows a ₹ productivity figure. Disclaimed, but it is a US-style ROI tool. Phase 2 in the brief. |
| "Unlimited" access to experts | not found | OK | Not used anywhere. Keep it that way until confirmed. |
| App Store / Google Play badges | Footer | **REMOVE** | Non-link spans labelled as store badges. Is there a public app? |
| Phone +91 9983444740 | Footer, Contact | VERIFY | Is this a company number? |
| JSON-LD / meta: "automated financial tracking, personalised insights, education and expert guidance" | `index.html`, Footer | VERIFY | Same tracker lead. |
| Statistics from the investor deck | not found | OK | None leaked in. |
| US statistics | not found | OK | None leaked in. |

---

## 5. Navigation and CTA problems

1. **Nav does not match the brief.** Current: Platform ▾ · Solutions ▾ · Resources ▾ · Customers · About · Login · Book a demo. Brief: Platform · For HR · For Employees · Privacy & Trust · Pricing · Resources · About. "Privacy & security" is two clicks deep; "Pricing" doesn't exist; "For Employees" isn't labelled as such. Fifteen items across three dropdowns for a pre-launch product.
2. **Login sits next to Book a demo** in the primary nav and competes visually. It serves existing users (employees/HR/coaches), not the buyer.
3. **Dead or stub destinations:**
   - Privacy section on the homepage → `/privacy-policy` → heading "Privacy Policy will be written here". Same for `/terms-of-service` (linked in Footer).
   - Footer "App Store" / "Google Play" are not links.
   - `/customers` and the homepage Proof section are empty shells.
   - 3 blog cards say "coming soon".
   - `EmailCapture` (reports/guides): shows "we'll email the link" but sends nothing (`// TODO: replace with real submission`). **This is a false confirmation.**
4. **Competing / repeated CTAs:** every interior page ends with the same "Book a demo + secondary" band, and the footer on non-home pages adds another. Secondary CTA on Hero is "Explore the platform", but the brief wants "See how it works" scrolling to the walkthrough (the `#employee-experience` anchor already exists).
5. **No secondary conversion on the homepage.** Resource download exists only on `/resources/*`.
6. **`/solutions/hr` and `/for-hr` are duplicates** with no redirect or canonical pointing at one. Duplicate-content risk.
7. **Demo form** (`/demo`):
   - Fields: first, last, work email, company, role (HR / Finance / Admin / Other), message. Brief wants name, work email, company, **company size**, role, optional message. **Company size missing**, and nothing blocks free-mail domains (EmailCapture does, DemoPage doesn't).
   - Success state is a one-line banner; the form clears. It doesn't say what happens next.
   - Submits via client-side EmailJS to `koshpal@koshpal.com`. Delivery not verified. Keys are build-time `VITE_*` values in `.env`.
   - "Spam protection" is a localStorage counter of 10/day, which any visitor can clear. No honeypot, no CAPTCHA, no server check.
   - Page doesn't use `PageShell`/`Seo`, so it inherits the static title/description.
   - Visual language differs from the rest of the site (Tailwind gray/blue, decorative pink/yellow blobs).

---

## 6. Technical gaps

### SEO

- `index.html` canonical/OG point to `https://koshpal.com/`; `public/sitemap.xml` lists only `https://www.koshpal.com/` (www) with a 2025-11-02 date. **Host mismatch, and a one-URL sitemap for a 26-route site.** `Seo.jsx` `SITE` also lacks `www`.
- Per-page titles/descriptions/canonicals come from Helmet at runtime (client-rendered SPA); crawlers that don't run JS see only the homepage's `index.html` tags on every URL. Fix options in the plan: prerender, or at minimum per-route static HTML.
- `og:image` / `twitter:image` is the logo (`/assets/logo.png`), not a 1200×630 card. `og:locale` is `en_US`; should be `en_IN`. `apple-touch-icon` points at `/assets/logo.png`; `public/assets` has no confirmed `logo.png` (verify). `<link rel="icon" href="/favicon.ico">` points to a file that doesn't exist (`public/favicon.ico` missing).
- Pages without `Seo`: `/demo`, `/contact`, `/login`, `/forgot-password`, `/privacy-policy`, `/terms-of-service`, 404. Login/forgot-password should be `noindex`.
- `/video` has external poster/video and no navbar/footer.
- JSON-LD is `Organization` only. No `WebSite`, `FAQPage` (once FAQ exists), or `BreadcrumbList`.
- `keywords` meta is ignored by search engines; harmless.

### Accessibility

- Hero composite is `aria-hidden`; fine if decorative, but it's the main visual.
- Custom cursor hides the OS cursor on fine-pointer devices (`cursor:none !important`). It respects reduced-motion for trailing, but removing the native cursor is an accessibility and usability risk with no opt-out.
- `Reveal` starts every block at `opacity:0` with `blur(8px)` until scrolled into view; if JS fails or `IntersectionObserver` is slow, content is invisible. Check that reduced-motion disables it (CSS has `prefers-reduced-motion` blocks at index.css:405/469/530; confirm they cover `.b2b-reveal`, which is inline-styled by framer-motion).
- Only 7 `<img>` in the whole `src`; most visuals are CSS/SVG. Meaningful ones (dashboard mock) have no text alternative.
- Focus-visible styling: only `.floating-focus:focus` found. No global `:focus-visible` ring seen. **Needs a keyboard pass.**
- Contrast not measured. Several greys (`#8a95b4`, `#a9b2ca` on `#f7f8fd`, `#6b7597` at 11–12px) look below WCAG AA; confirm.
- Struck-through pills in PlatformSection read as "deleted" to screen readers.
- Navbar dropdowns open on hover; keyboard behaviour unverified.

### Performance

- Main JS chunk `index-CN0ZyomQ.js` is ~370 KB (before gzip). `gsap` is a dependency but **not imported anywhere** in `src`. Remove.
- Four canvas `JellyGrid` backgrounds on the homepage alone, plus continuous float animation on the hero, `backdrop-blur`, and `blur()` filters on every reveal. Likely expensive on mid-range Android, which is the target device for HR/employee audiences.
- `public/assets` holds multi-MB PNGs (`Session.png` 6.9 MB, `Screen.png` 4.8 MB, `Frame 2147207729.png` 1.8 MB, `feature-center1.png` 1.5 MB, `Einstein.png` 1.4 MB). Unclear if the new build uses them; if used they must be converted to WebP/AVIF and sized. `public/video.mp4` is 2.4 MB.
- `dist/`, `_legacy_backup/`, `preview-b2b-homepage.html` (51 KB), `changes-24-Jan-2026.md` are committed or lying in the project root. `dist` is stale (Sep 1).
- No `loading="lazy"`, `width`/`height`, or `srcset` anywhere (few images, but the plan will add real screenshots).
- Fonts: Outfit + Plus Jakarta Sans via CSS; confirm `font-display: swap` and preconnect.

### Analytics

- Only `@vercel/analytics` page views. **None** of the brief's required events exist: CTA clicks, demo submissions, scroll depth per section, resource downloads. `CTA` in `primitives.jsx` is the single place to instrument clicks.

### Responsiveness

- Tailwind breakpoints are used throughout and the inventory notes collapses for every grid. 360/768/1024/1440 haven't been visually tested. The hero composite stacks under the headline on mobile, pushing the first CTA fine but the "visual" below the fold.

### Code health

- Two styling systems: new `b2b/*` components (arbitrary Tailwind values, hard-coded hex everywhere) versus legacy-style Demo/Contact/Login (Tailwind gray/blue, inline styles). The brief says keep the design-token system. `Color palatte koshpal tokens.css` and `koshpal_typography_tokens.json` exist, but b2b components hard-code hexes (`#0b1533`, `#f7f8fd`, `#6b7597`…) rather than using tokens. `primary` and `secondary-darkest` Tailwind tokens are used in places.
- `Hero.jsx` embeds a 100-line `PlatformComposite`; `PlatformSplit.jsx` embeds `DashboardShot`. These need to become the shared `DashboardMockup` / `DeviceFrame` components the brief lists.
- Placeholder strings live in production components (`Placeholder — swap for…`, `CLIENT LOGO`, `Team section — add real names`). They should become explicit `{{PROOF: …}}` / `{{VERIFY: …}}` markers that build-fail or render only in dev, per brief §9.1.

---

## 7. Quick wins and structural changes

### Quick wins (small, safe, no new content needed)

1. Remove the four-person initials row in TechAndHumans and the "+11pt vs launch" tile.
2. Relabel every mock number "Sample data" (Hero composite, PlatformSplit dashboard) in a visible badge, not 11px italic.
3. Fix the privacy link: point at `/security` until a real policy exists; stop linking to the stub.
4. Demo page: delete "Ready to **Transform** Your Finances?", reconcile 24h/48h, add a "what happens next" confirmation.
5. Remove the Footer App Store / Google Play fake badges.
6. Make `EmailCapture` stop claiming success until it submits (or disable the form with "coming soon").
7. Delete unused `gsap`; add `noindex` to `/login`, `/forgot-password`.
8. Fix sitemap (all routes, `https://koshpal.com` or www, one choice) and `og:locale`.
9. Hero secondary CTA → "See how it works" anchored to `#employee-experience`.
10. Add a `/solutions/hr` → `/for-hr` redirect.

### Structural changes (need your approval, go in the plan)

1. **Reorder homepage to follow the 10 buyer questions** and add the missing sections: Why-different table, Rollout steps, FAQ, Pricing teaser.
2. **Rebuild the "Platform" block on the four pillars** (Learn, Understand, Connect, Grow) and move "measured by the Financial Confidence Framework" into the HR section.
3. **Merge** Problem + Impact into one problem section with a human scene; merge PlatformSection + PlatformSplit; fold TechAndHumans into pillars.
4. **Replace placeholder visuals with real app screenshots** (device frames) and a "Sample data"-labelled aggregate-only HR dashboard. Needs the screenshots (see `CONTENT_NEEDED.md`).
5. **Privacy as a distinct full-width band** with a who-sees-what table; `/security` becomes **Privacy & Trust** with only approved statements; the technical-practice cards are removed until the team supplies approved wording.
6. **Add `/pricing`**; **retitle** the employee page "For Employees"; cut or hide pages not in the brief (Customers, Calculator, Business Impact, Financial Wellness) until content exists. Hide from nav rather than delete.
7. **Navigation** to the brief's seven items plus the Book a demo button; Login moves to the footer (or a quieter text link).
8. **Analytics layer** (single `track()` helper, wired into `CTA`, forms, section visibility, downloads).
9. **Demo form**: add company size, work-email check, honeypot + server-side route (EmailJS can't give real spam protection), real success state.
10. **Prerender/SSR** per-route metadata so each page's title and OG tags exist in static HTML.
11. **Move hard-coded hexes to tokens** as sections are touched, not in one sweep.

---

## 8. Questions for you before the plan

1. **Reference documents.** Can you drop `Doc_K.pdf`, the app feature document, `More About Koshpal` and the Knowledge Base into `docs/references/`? I can't write final copy, or enforce the banned-phrase list, without them.
2. **Cut or hide the extra pages** (Customers, Calculator, Business Impact, Financial Wellness, Video)? My recommendation is hide from nav and sitemap and add `noindex`, not delete.
3. **Pricing:** show the "per employee per month" model only, or "Contact us"? (No numbers exist in the repo.)
4. **Where do demo submissions go**, and is EmailJS to `koshpal@koshpal.com` acceptable, or should it hit the backend (`api.koshpal.com`)?
5. **Is there a public app** (App Store / Play)? If not, the badges go.
6. **Do you want me to start on the quick wins** now, ahead of the plan approval, or hold everything for the checkpoint?
