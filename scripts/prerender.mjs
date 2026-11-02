// Post-build: renders every public route to static HTML with the app's own server entry, so crawlers
// and link unfurlers (Google, LinkedIn, WhatsApp) get the full page and its own <head> without running
// JavaScript. The browser then hydrates the same markup. Run by `npm run build` after `vite build`
// and `vite build --ssr`.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const SSR = "dist-ssr";

const { render } = await import(pathToFileURL(join(process.cwd(), SSR, "entry-server.mjs")).href);
const base = readFileSync(join(DIST, "index.html"), "utf8");

// Public routes, from the sitemap plus the legal pages. Login-style pages stay client-rendered.
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/koshpal\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
for (const extra of ["/privacy-policy", "/terms-of-service"]) if (!routes.includes(extra)) routes.push(extra);

// Everything Helmet and the static shell both define must come out of the shell before the page's own goes in.
const STRIP = [
  /<title>[\s\S]*?<\/title>\s*/,
  /<meta\s+name="description"[\s\S]*?\/>\s*/,
  /<meta\s+name="keywords"[\s\S]*?\/>\s*/,
  /<link rel="canonical"[^>]*>\s*/,
  /<meta property="og:(?:title|description|url|image|type|site_name|locale)"[\s\S]*?\/>\s*/g,
  /<meta\s+name="twitter:(?:title|description|url|image|card)"[\s\S]*?\/>\s*/g,
];

let failed = 0;
for (const path of routes) {
  try {
    const { html, head } = await render(path);
    let page = base;
    for (const re of STRIP) page = page.replace(re, "");
    // Keep the sitewide Organization schema; the page's own JSON-LD (FAQPage, breadcrumbs) follows it.
    page = page.replace("</head>", `${head}</head>`);
    page = page.replace('<div id="root"></div>', `<div id="root" data-prerendered="${path}">${html}</div>`);
    const dir = join(DIST, path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), page);
  } catch (e) {
    failed++;
    console.error(`prerender failed for ${path}:`, e.message);
  }
}
rmSync(SSR, { recursive: true, force: true });
console.log(`prerendered ${routes.length - failed}/${routes.length} routes`);
if (failed) process.exit(1);
