# Reference patterns (observed live, 2026-10-13)

Reviewed in Chrome at desktop width: yourmoneyline.com, betterup.com, mavehealth.com. Home pages only. Patterns are described in my own words. **None of their statistics or wording is to be reused**; their numbers are theirs, many are US-specific, and some are outcome claims Koshpal cannot make at pilot stage (brief §9).

## YML (closest model: financial wellness sold to HR)

| Observed | What it does for the visitor | Koshpal take |
|---|---|---|
| Announcement bar above nav, then nav: Platform / Who we help / Partners / Pricing / Company / Resources + dark "Watch a demo" button + text "Login" | Login is deliberately quiet; the demo button is the only filled element | Same weight split. Our Login moves to footer + quiet text link. Skip the announcement bar. |
| Hero: eyebrow label, outcome headline, one sentence naming *the product type + the human element (1:1 coaching)*, two buttons: demo and **"See your price"** | Buyer sees price transparency as a first-screen action | Second button stays "See how it works" (we have no price to show). Add a "See pricing" link in the teaser instead. |
| Real-people photo with a product card overlapping its corner | Human + product in one frame | Use a person/coach-session card + real app screen, not stock coins. |
| Three short cards directly under the hero: what employees get (app, expert, benefit) | Answers "what is it" before scrolling | Our credibility strip + pillars cover this. Keep the three-line value summary under the hero. |
| Feature list as tabs/rows (coaching, budgeting, education, goals…) with one visual per feature | Scannable; one idea per row | Walkthrough shows 3–4 app screens, not 8 features. |
| Stats band (percentages + review counts) then testimonials | Social proof is dense and early | **We have none verified.** Section is omitted until real material exists. |
| "HR leaders love us" block: six one-line benefits incl. "launch in days", "know what you'll pay, no hidden fees" | Answers the HR-effort and cost questions together | Our Rollout and Pricing sections, but every claim stays `{{VERIFY}}`. |
| Closing CTA with a warm one-liner | Ends on tone, not pressure | Same. Doc_K gives us the voice. |

Do **not** copy: guarantees of speed or outcomes in the hero ("fast", "in days"), and the credit-score-style overlay.

## BetterUp (outcome-led enterprise)

| Observed | Koshpal take |
|---|---|
| Hero headline cycles one word (performance, retention, resilience…) in a repeated sentence frame | Too clever for us and animation-heavy. Take only the idea: **name the business outcome in the headline**. |
| Proof row immediately under the hero: six named customers, each with one headline number | Format is excellent (one number, one name, "Read story"). **Pattern kept, content empty** until a pilot partner approves. |
| "The best get X" band, then a problem paragraph that names competing point solutions (workshops, surveys) and offers "one partner, one source of truth" | Maps directly to our "why different" table: categories, not named competitors. |
| Three-part product explanation: coaches / AI in the flow of work / intelligence that tracks progress | This is our Connect + Understand + HR dashboard story. Use the three-part rhythm. |
| "What transformation looks like": four large numbers with a footnote on method | The **footnote on method** is the pattern worth keeping, via `StatBlock`'s required `source` line. We show no numbers yet. |
| "One platform, four ways in": four cards, each a named audience layer with a short line and a "Learn about" link | Use for **Learn / Understand / Connect / Grow**, but each card is a *capability*, not an audience. |
| Dark, high-contrast sections alternate with light; very large type | Already in our system; keep strict alternation. |

Do **not** copy: "14x ROI"-style claims, and "transformation" language (banned in brief §8).

## Mave (visual pacing)

| Observed | Koshpal take |
|---|---|
| White, plain top bar: wordmark left, three links, one filled button right | Our nav should look this calm: 7 links is the ceiling. |
| Hero: short headline, one-line benefit, nothing else on the first screen (large empty space) | One message per screen. Resist filling the hero. |
| Testimonials are **people on video stills with name, role and country**, in a carousel with arrows | Attribution format worth copying (name, role, place). Needs real, consented people. |
| Rhythm: problem → "introducing X" → three-step "how it works" (wear / start / move on) → companion app → results → phases → expert quote → science → FAQ | Same arc as our order: problem, product, how it works (3 steps), app, proof, FAQ. |
| FAQ is a plain accordion of ~11 honest questions including data collection and returns | We include "Does it collect my data?" style questions. Honesty about data is a trust signal. |
| Footer carries a plain-language disclaimer of what the product is *not* | We have a real analogue: "not a budgeting app, loan platform, investment marketplace or advisory firm" (Doc_K). Put it in the footer and the Privacy & Trust page. |

Do **not** copy: dense "science" citation walls and percentage "results" (health-efficacy claims; irrelevant and risky for us), and the quote-heavy carousel density (we have no quotes).

## Cross-cutting decisions these confirm

1. **Nav:** short, calm, one filled button. Login demoted.
2. **First screen:** outcome headline + one product sentence + two CTAs + a *human and product* visual. Nothing else.
3. **Proof:** format is "one number, one name, one source line". Ship the component, hide it until populated.
4. **Different-from-what-you-know:** categories, calmly (BetterUp's move).
5. **Cost and effort answered visibly** (YML's move): Pricing teaser and Rollout sections, with `{{VERIFY}}` where facts are missing.
6. **Closing line carries the warmth.**
