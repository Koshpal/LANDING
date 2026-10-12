# Content the Koshpal team must supply

Nothing below has been invented. Where the site needs one of these, it will carry a visible `{{PROOF: …}}` or `{{VERIFY: …}}` marker until the item is provided. Status as of the audit (2026-10-12).

## Proof

| # | Item | Needed for | Status |
|---|---|---|---|
| 1 | Pilot companies, logos, and written permission to display them | Credibility strip, Proof, Customers | Missing (5–8 "CLIENT LOGO" slots in code) |
| 2 | Approved testimonials: employee and HR/People lead, with name/role/company permission | Proof, For HR, For Employees | Missing |
| 3 | Measured pilot outcomes (adoption, engagement, confidence) with method and date | Proof, For HR | Missing |
| 4 | Verified Indian statistics with source links (RBI / SEBI / OECD / World Bank / peer-reviewed). **Investor-deck stats stay off the site until sourced** | Problem section, For HR | Missing |
| 5 | Expert panel: names, credentials (CFP / CA / CFA), years of experience, photos if approved | Credibility strip, Platform, About | Missing. TechAndHumans currently shows invented initials |
| 6 | Team bios and photos | About | Missing (4 "Name / Role" slots) |

## Claims to confirm

| # | Claim | Where it appears now | Question |
|---|---|---|---|
| 7 | "Unlimited" 1:1 access to experts | Brief only; not on site | Is it deliverable? If not, what is the real session allowance? |
| 8 | Onboarding / launch timeline | "30-minute walkthrough" is the demo, not rollout; rollout steps are generic | How many days, how much HR effort? Is "zero setup" true? |
| 9 | How spending data gets into the app | "Track automatically", "no setup", "connects their financial activity" | SMS parsing, account aggregator, UPI import, or manual? Needed for privacy copy too |
| 10 | Approved privacy / security / compliance statements | `/security` encryption, audit logging, export/delete, sub-processors | Which are true and approved? Any certifications, DPDP position, data residency? |
| 11 | Real HR dashboard views | PlatformSplit mock | What metrics does HR actually see? Minimum group size for anonymisation? |
| 12 | Demo response time | "24 hours" and "48 hours" both appear on `/demo` | Which one is real? |
| 13 | Is the app publicly downloadable? | Footer App Store / Google Play badges | Links, or remove |
| 14 | Company phone number | `+91 9983444740` in Footer and Contact | Confirm it's the official line |
| 15 | Do the reports/guides exist? | `/resources/reports`, `/resources/guides` (titles, ToCs, "in production") | Provide the PDFs, or confirm they're future |

## Commercial and operational

| # | Item | Notes |
|---|---|---|
| 16 | Pricing: per-employee-per-month figure, tiers, what's included, what drives price; **or** the decision to say "Contact us" | No numbers anywhere in the repo |
| 17 | Demo-form routing: where submissions go, who is notified, SLA | Currently client-side EmailJS to `koshpal@koshpal.com`, delivery unverified |
| 18 | Resource-download routing: ESP/CRM, and the gated asset itself | `EmailCapture` is a stub and sends nothing |
| 19 | Privacy Policy and Terms of Service (legal-reviewed text) | Both pages are one-line stubs, linked from footer and homepage |

## Assets

| # | Item | Notes |
|---|---|---|
| 20 | High-resolution real app screenshots: Budgets, Transactions, Dues & Reminders, Goals, Tags, Cash on Hand, Cash Flow | A few candidates sit in `public/assets` (`Screen.png`, `Session.png`, …) at 1–7 MB; need confirming they are current and approved |
| 21 | An approved example of a coach-session artefact (plan/summary card) for the hero | Brief asks for "a card representing a coach session" |
| 22 | Brand social card (1200×630) | OG image is currently the logo |
| 23 | Favicon set | `/favicon.ico` referenced but missing |

## Reference documents (not in the repo)

Needed in `docs/references/` before final copy:

- `Doc_K.pdf` (Koshpal overview)
- App feature document ("Koshpal at a Glance")
- `More About Koshpal` (content guide: voice, banned phrases, privacy messaging, CTA rules)
- Koshpal Knowledge Base (Chapters 1–3, Financial Confidence Framework)
- YML HR guide (structure only)

Present: `KoshpalPresentationForInvestors.pptx` (in `/Koshpal/documents/`, outside the repo; stats unsourced and not used).
