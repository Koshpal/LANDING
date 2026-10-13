# Changelog (visitor's view)

Phases follow `PLAN.md`. Each entry says what a visitor now sees and why.

## Phase C: Homepage
- **Hero** now says what Koshpal is: private 1:1 sessions with certified financial experts plus an app, with anonymised insight for HR. Shows the real app home screen next to a sample session summary. *Why: the old headline could have described any fintech.*
- **Problem** opens with a scene (the 27th of the month) and one line: "I earn enough, but I still don't feel in control." No unsourced statistics.
- **Four pillars** (Learn, Understand, Connect, Grow) replace the old "Understand / Improve / Learn / Get guidance" steps.
- **Walkthrough** is a four-tab story: talk, plan, act, stay on track, with sample-data panels in rupees.
- **What HR gets**: three outcomes beside a "Sample data" dashboard, plus the five measurement stages.
- **Privacy** is a full-width dark band with only approved statements.
- **New sections** for buyer questions the page used to skip: how it differs (categories, not competitors), rollout, pricing teaser, FAQ.
- **Removed**: empty proof slots, fake advisor avatars, the "+11pt" outcome tile.

## Phase D: Interior pages
- **Platform**: "one program, four pillars" with a block per pillar and how coach and app work together.
- **For HR**: business problem in careful language, outcomes, dashboard, rollout, how success is measured, HR FAQ.
- **For Employees** (`/for-employees`): what happens in a session, what the employer can and cannot see, what it costs them (nothing, if sponsored).
- **Privacy & Trust** (`/privacy-trust`): who-sees-what table and commitments. The unverified technical-practice cards are gone.
- **Pricing** (`/pricing`): the model only; no figures.
- **About**: belief, philosophy and principle from the company overview. Team stays empty until supplied.
- **Resources**: three articles and a "notify me" employer-guide form that sends to the Koshpal inbox.
- Reports, guides, coaching and education pages folded away (redirects).

## Phase E: Demo form
- Fields: name, work email, company, company size, role, optional message.
- Validation with inline messages, free-mail block, honeypot and minimum-time check.
- Success panel says what happens next.

## Phase B and A
See git history: seven-link nav, analytics events, safety fixes, noindex on hidden pages.

## Dummy content (2026-10-13)
Added on request, always visible and labelled "Dummy". Set `VITE_HIDE_DUMMY=true` at build time to remove all of it.
- Home: fictional partner names, three dummy quotes, three dummy stat blocks (each with a "Dummy source" line), and a dummy expert panel.
- About: dummy team and expert panel.
- Platform: Tags and Cash on Hand sample screens.
- Blog: three dummy articles (marked, `noindex`) and a dummy employer-guide PDF behind the work-email form.
