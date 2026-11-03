/* FAQ copy from "Koshpal Website: SEO Content Rewrite" (2 Nov 2026), FAQ page section.
   Not published yet because the doc marks them "(confirm)": a starting price, the Android/iOS line.
   Still to confirm before launch: the data-protection answer and the session policy. */
export const HR_FAQ = [
  {
    q: "What is an employee financial wellness program?",
    a: "A benefit that helps employees manage money with less stress. With Koshpal, every employee gets 1:1 sessions with a certified CFP or CA, an app for budgets, goals and dues, and learning content. HR sees anonymised results.",
  },
  {
    q: "How much does Koshpal cost?",
    a: "Koshpal is priced per employee per month and is free for employees. Talk to us and we’ll give you a number for your company size.",
  },
  {
    q: "How long does rollout take?",
    a: "About one week: one setup call, your logo and an employee list. We run the kickoff webinar and the employee announcements.",
  },
  {
    q: "Can we try it first?",
    a: "Yes. Start with one team for 60 days, see usage and feedback on the dashboard, then decide on a company-wide plan.",
  },
  {
    q: "Who are the coaches?",
    a: "Certified Financial Planners (CFPs) and Chartered Accountants (CAs). They are salaried by Koshpal, so they earn nothing from what an employee buys.",
  },
  {
    q: "What if only a few employees use it?",
    a: "You’ll see sign-ups and sessions on the dashboard from week one. The kickoff webinar, free first sessions and in-app reminders are built to drive take-up.",
  },
  {
    q: "How do you measure success?",
    a: "Sign-ups, sessions, app use and changes in financial confidence over time, all reported in aggregate. Pilot results will be published as they are measured.",
  },
  {
    q: "Do you sell financial products or earn commissions?",
    a: "No. Koshpal is not a bank, a lender, an investment platform or a SEBI-registered investment adviser. Our only income is the employer’s subscription.",
  },
];

export const EMPLOYEE_FAQ = [
  {
    q: "Will my employer see my finances?",
    a: "No. Your sessions, numbers and goals belong to you. Your employer only sees anonymised trends across the company.",
  },
  {
    q: "What does it cost me?",
    a: "Nothing. Your employer pays for it.",
  },
  {
    q: "How often can I talk to a coach?",
    a: "As your plan needs. Most people book 2 to 3 sessions a month.",
  },
  {
    q: "What can I ask about?",
    a: "Anything about your money: salary planning, EMIs and loans, credit cards, tax and the old vs new regime, emergency funds, insurance, ESOPs, buying a car or a home, supporting parents.",
  },
  {
    q: "Will anyone try to sell me something?",
    a: "No. Coaches don’t earn commissions and Koshpal sells no financial products.",
  },
];

export const PRIVACY_FAQ = [
  {
    q: "What exactly can my employer see?",
    a: "Anonymised, aggregated trends: how many people use Koshpal, engagement over time and the topics people ask about most. Never an individual’s data, who asked what, or the content of any session.",
  },
  {
    q: "Do you sell data?",
    a: "No. We don’t sell data, earn commissions or push products.",
  },
  {
    q: "How is my data protected?",
    a: "Encrypted in transit and at rest, with role-based access.",
  },
];

/* The five HR questions shown on the home page and the pricing page, in the doc's order. */
export const HOME_FAQ = HR_FAQ.slice(1, 6);
