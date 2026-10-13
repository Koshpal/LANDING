// Post-build: writes a static HTML shell per route with that page's own
// <title>, description, canonical and Open Graph / Twitter tags, so crawlers
// and link unfurlers that don't run JavaScript see the right metadata.
// The React app still takes over in the browser.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://koshpal.com";
const DIST = "dist";

const ROUTES = [
  ["/platform", "Platform", "One program, four pillars: personalised education, AI-powered insight, 1:1 sessions with certified financial experts, and continuous support for employees."],
  ["/for-hr", "For HR", "Offer financial wellness as an employee benefit people actually use, with anonymised, aggregated insight for HR and no individual data."],
  ["/for-employees", "For Employees", "Private 1:1 sessions with certified financial experts and an app to act on the plan, offered by your employer. Your finances stay yours."],
  ["/privacy-trust", "Privacy & Trust", "Who sees what in Koshpal: an employee's financial information is theirs, and employers see only aggregated, anonymised insights."],
  ["/pricing", "Pricing", "Koshpal is priced per employee per month, so the cost scales with the size of your workforce. Talk to us for a quote."],
  ["/resources", "Resources", "Articles and guides on employee financial wellness for HR and People teams: what it means, how to evaluate a provider, and privacy."],
  ["/about", "About", "Koshpal exists to build financially confident workplaces. Our belief: financial wellness will become the next standard employee benefit."],
  ["/demo", "Book a demo", "Book a Koshpal demo. See the employee experience and the anonymised HR dashboard for your workplace."],
  ["/contact", "Contact", "Get in touch with the Koshpal team about employee financial wellness for your workplace."],
  ["/blog", "Blog", "Short, practical writing on employee financial wellness for HR and People teams."],
  ["/privacy-policy", "Privacy policy", "Koshpal privacy policy.", true],
  ["/terms-of-service", "Terms of service", "Koshpal terms of service.", true],
  ["/login", "Log in", "Log in to Koshpal.", true],
  ["/forgot-password", "Reset password", "Reset your Koshpal password.", true],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const base = readFileSync(join(DIST, "index.html"), "utf8");

function build([path, title, desc, noindex]) {
  const t = `${title} · Koshpal`;
  const url = `${SITE}${path}`;
  let h = base;
  h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(t)}</title>`);
  h = h.replace(/(<meta\s+name="description"\s+content=")[\s\S]*?(")/, `$1${esc(desc)}$2`);
  h = h.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  h = h.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  h = h.replace(/(<meta property="og:title"\s+content=")[\s\S]*?(")/, `$1${esc(t)}$2`);
  h = h.replace(/(<meta property="og:description"\s+content=")[\s\S]*?(")/, `$1${esc(desc)}$2`);
  h = h.replace(/(<meta name="twitter:url" content=")[^"]*(")/, `$1${url}$2`);
  h = h.replace(/(<meta\s+name="twitter:title"\s+content=")[\s\S]*?(")/, `$1${esc(t)}$2`);
  h = h.replace(/(<meta\s+name="twitter:description"\s+content=")[\s\S]*?(")/, `$1${esc(desc)}$2`);
  if (noindex) h = h.replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex, follow" />');
  const dir = join(DIST, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), h);
}

// Home: paint the hero text from static HTML so the largest contentful
// element does not wait for the JS bundle. React replaces it on mount.
const HERO = `<section class="b2b-dark-band relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20"><div class="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16"><div class="max-w-[640px]"><span class="b2b-eyebrow">Employee financial wellness</span><h1 class="font-outfit font-bold tracking-[-0.03em] leading-[1.06] mt-5 text-[32px] sm:text-[44px] lg:text-[52px] text-[#f6f8ff]">Your employees don&#39;t need another finance app. They need someone to talk to about money.</h1><p class="font-jakarta mt-6 text-[17px] sm:text-[19px] leading-[1.62] max-w-[540px] text-[#c3cdec]">Koshpal gives every employee private 1:1 sessions with certified financial experts, plus an app to act on the plan. HR sees anonymised insight, never individual data.</p></div></div></section>`;
if (!base.includes('<div id="root"></div>')) throw new Error("root placeholder not found");
writeFileSync(join(DIST, "index.html"), base.replace('<div id="root"></div>', `<div id="root">${HERO}</div>`));

ROUTES.forEach(build);
console.log(`prerendered metadata for ${ROUTES.length} routes`);
