/**
 * Blog content. Bodies are plain educational writing — no fabricated statistics,
 * no unverifiable citations. `published: false` renders as an "upcoming" card
 * with no article page.
 */
export const POSTS = [
  {
    slug: "what-financial-wellness-means",
    title: "What “financial wellness” actually means for an employee",
    category: "Fundamentals",
    date: "2026-08-12",
    readMins: 5,
    excerpt:
      "The term gets used loosely. Here's a working definition HR can build a program around — and the six things it's actually made of.",
    published: true,
    body: [
      { t: "p", c: "“Financial wellness” is one of those phrases that sounds obvious until you try to design a program around it. Is it a budgeting app? A seminar? A discount on a loan? For an employer trying to decide what to fund, a loose definition is a real problem." },
      { t: "h", c: "A working definition" },
      { t: "p", c: "Financial wellness is the state of having enough control over day-to-day and month-to-month finances, the capacity to absorb a shock, the ability to stay on track toward goals, and the freedom to make choices that let you enjoy life. It is not a single number, and it is not the same as income — people at similar salaries can be in very different places." },
      { t: "h", c: "The six components" },
      { t: "list", c: [
        "Income — what comes in, and how predictable it is.",
        "Spending — where it goes, and whether that matches intent.",
        "Savings — a buffer for the unexpected, plus progress toward goals.",
        "Debt — the size, cost and structure of what's owed.",
        "Investments — building longer-term security.",
        "Protection — insurance against the events that would otherwise be catastrophic.",
      ] },
      { t: "p", c: "Wrap those six in one more thing — financial confidence, the sense that you understand your situation and can act on it — and you have a picture of financial wellness that a program can actually target." },
      { t: "h", c: "Why it belongs at work" },
      { t: "p", c: "Money stress doesn't switch off at the office door. When someone is worried about an EMI or a shortfall at month-end, that worry competes for attention during the workday. A financial wellness benefit is an employer's most direct lever on that specific pressure — and, unlike a one-off session, it's something people can use every month." },
      { t: "h", c: "What a good program looks like" },
      { t: "p", c: "It's continuous rather than annual. It combines automation for the everyday (tracking, nudges, budgets) with human help for the hard decisions. It teaches in context — the lesson on restructuring a loan appears when a loan does. And it's built so the employer can measure adoption and engagement without ever seeing an individual's finances." },
    ],
  },
  {
    slug: "evaluating-financial-wellness-providers",
    title: "How HR should evaluate a financial wellness provider",
    category: "For HR",
    date: "2026-08-19",
    readMins: 6,
    excerpt:
      "A practical checklist for comparing vendors — the questions that separate a real platform from a repackaged app or a coaching contract.",
    published: true,
    body: [
      { t: "p", c: "Most financial wellness vendors fall into one of three buckets: a consumer app with an employer landing page, a content library of courses, or a coaching service. Each solves part of the problem. A platform ties them together and reports on the whole thing. Here's how to tell which you're looking at." },
      { t: "h", c: "Coverage" },
      { t: "list", c: [
        "Does it cover the everyday (tracking, insights, budgets, goals) and the occasional (a real decision with an expert)?",
        "Is financial education delivered in context, or is it a separate portal employees have to remember to visit?",
        "Are coaches qualified, and are they paid to advise rather than to sell products?",
      ] },
      { t: "h", c: "Privacy" },
      { t: "list", c: [
        "Exactly what can the employer see? Ask for the HR dashboard, field by field.",
        "Is employer reporting built only from aggregated, de-identified data?",
        "Can an employee use the product without their employer seeing individual activity?",
        "Who owns the employee's data, and can they export or delete it?",
      ] },
      { t: "h", c: "Measurement" },
      { t: "list", c: [
        "What does the provider report on day one, and what only after the program matures?",
        "Are the metrics activation, engagement and utilisation — or vanity numbers?",
        "Will you get board-ready summaries, or raw exports you have to assemble yourself?",
      ] },
      { t: "h", c: "Rollout" },
      { t: "list", c: [
        "How long from contract to employees using it?",
        "How much work falls on your team versus the provider?",
        "Does it fit your existing benefits and communication workflow?",
      ] },
      { t: "p", c: "A useful test: ask each vendor to walk you through a single employee's month and a single HR review meeting. The strong providers can do both without hand-waving." },
    ],
  },
  {
    slug: "financial-wellness-and-privacy",
    title: "Financial wellness and privacy: what employers should and shouldn't see",
    category: "Privacy",
    date: "2026-08-26",
    readMins: 4,
    excerpt:
      "Employees won't engage with a benefit that feels like surveillance. The line between useful reporting and overreach is clearer than it sounds.",
    published: true,
    body: [
      { t: "p", c: "The fastest way to kill adoption of a financial wellness program is for employees to suspect their manager can see their spending. Getting the privacy model right isn't a compliance checkbox — it's the thing that determines whether anyone uses the product." },
      { t: "h", c: "What an employer legitimately needs" },
      { t: "list", c: [
        "How many employees are enrolled and active.",
        "Which parts of the program are being used.",
        "Aggregated movement in financial-wellness indicators over time.",
        "Enough to report on the benefit and decide whether to keep investing.",
      ] },
      { t: "h", c: "What an employer should never see" },
      { t: "list", c: [
        "Any individual's transactions, balances, debts, budgets or goals.",
        "The content of a coaching conversation.",
        "Anything that could identify one person's financial situation.",
      ] },
      { t: "h", c: "How that's enforced" },
      { t: "p", c: "The practical mechanism is separation by design: an employee's financial data powers only their personal experience, and employer reporting is assembled from a separate, de-identified, grouped stream. If a vendor can't explain that split simply, treat it as a red flag." },
      { t: "p", c: "Say it out loud in your launch comms, too. Employees are far more likely to connect their accounts when the privacy boundary is stated plainly up front rather than buried in a policy." },
    ],
  },
  {
    slug: "designing-a-financial-wellness-rollout",
    title: "Designing a financial wellness rollout employees actually adopt",
    category: "For HR",
    date: null,
    published: false,
    excerpt: "Launch mechanics, communication cadence and the first-90-days playbook.",
  },
  {
    slug: "measuring-financial-wellness-impact",
    title: "Measuring the impact of a financial wellness program",
    category: "Measurement",
    date: null,
    published: false,
    excerpt: "Which signals to track, what's realistic in year one, and how to report it upward.",
  },
  {
    slug: "education-vs-coaching",
    title: "Financial education vs. financial coaching: where each one helps",
    category: "Fundamentals",
    date: null,
    published: false,
    excerpt: "When a three-minute explainer is enough, and when someone needs to talk to a person.",
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug && p.published);
