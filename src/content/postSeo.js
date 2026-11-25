/**
 * Search metadata for blog posts, kept apart from the article text so the drafts stay untouched.
 *   title        <title> / og:title, 60 characters or fewer, target phrase first
 *   description  meta description, 155 characters or fewer
 *   updated      last meaningful edit (ISO date); falls back to the post date
 * Every post links to the pillar article (what-is-employee-financial-wellness) so the cluster
 * reinforces one phrase: "employee financial wellness".
 */
export const PILLAR_SLUG = "what-is-employee-financial-wellness";

export const POST_SEO = {
  "what-is-employee-financial-wellness": {
    title: "What Is Employee Financial Wellness? HR Guide",
    description: "What employee financial wellness means, why companies invest in it, the benefits for employees and employers, and how a program works in India.",
    updated: "2026-11-26",
  },
  "hidden-financial-challenges-employees-face-at-work": {
    title: "Hidden Financial Challenges Employees Face at Work",
    description: "Eight money worries HR rarely sees, from living paycheque to paycheque to EMI pressure, and how employee financial wellness support helps.",
  },
  "employee-financial-stress-productivity-engagement-retention": {
    title: "Employee Financial Stress: Impact on Productivity",
    description: "How employee financial stress shows up as lost focus, lower engagement, absenteeism and attrition, and what a financial wellness program can do.",
  },
  "salary-hike-still-not-financially-secure": {
    title: "Salary Hike but Still Not Financially Secure? Here's Why",
    description: "A raise from ₹50,000 to ₹65,000 can leave you with barely more savings. Why that happens, and how to take control of the extra income.",
  },
  "what-financial-wellness-means": {
    title: "What Is Financial Wellness? A Definition for Employers",
    description: "A working definition of financial wellness for employees, its six components, and how it differs from financial literacy. Built for HR teams.",
    updated: "2026-11-26",
  },
  "evaluating-financial-wellness-providers": {
    title: "How to Choose a Financial Wellness Provider (HR Guide)",
    description: "A checklist for HR comparing employee financial wellness providers: coverage, privacy, measurement and rollout, plus red flags to watch for.",
    updated: "2026-11-26",
  },
  "financial-wellness-and-privacy": {
    title: "Financial Wellness and Privacy: What Employers See",
    description: "What an employer should and should never see in an employee financial wellness program, and how privacy by design is enforced.",
    updated: "2026-11-26",
  },
  "measure-roi-employee-financial-wellness-program": {
    title: "How to Measure ROI of an Employee Financial Wellness Program",
    description: "Which metrics prove an employee financial wellness program works: adoption, engagement, confidence and workplace outcomes, with a 90-day scorecard.",
    updated: "2026-11-26",
  },
};

/** Title, description and dates for a post, falling back to its own fields. */
export function seoOf(post) {
  const s = POST_SEO[post.slug] || {};
  const raw = `${post.title} | Koshpal`;
  return {
    title: s.title ? `${s.title} | Koshpal`.length <= 60 ? `${s.title} | Koshpal` : s.title : raw.length <= 60 ? raw : post.title,
    description: s.description || post.excerpt,
    published: post.date,
    modified: s.updated || post.date,
  };
}
