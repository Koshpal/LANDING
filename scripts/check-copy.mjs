// Fails if banned phrases (brief section 8) appear in user-facing source,
// or if known-unsafe claims sneak back in. Run: node scripts/check-copy.mjs
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const BANNED = [
  "in today's fast-paced", "unlock", "empower", "transform", "revolutioni", "game-changer", "game changer",
  "the future of", "at the end of the day", "seamless", "holistic", "cutting-edge", "next-generation", "leverage",
];
const UNSAFE = ["CLIENT LOGO", "Placeholder", "will be written here", "lorem ipsum", "+11pt"];
// Hidden / noindexed pages are out of scope for the launch copy check.
const SKIP = ["Customers.jsx", "Calculator.jsx", "BusinessImpact.jsx", "FinancialWellness.jsx", "VideoWatch.jsx",
  "LoginPage.jsx", "ForgotPasswordPage.jsx", "Placeholder.jsx", "JellyGrid.jsx", "CustomCursor.jsx", "posts.js"];

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let bad = 0;
for (const f of walk("src").filter((p) => /\.(jsx?|js)$/.test(p) && !SKIP.some((s) => p.endsWith(s)))) {
  const lines = readFileSync(f, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (/^\s*(import|\/\/|\*|\/\*)/.test(line)) return;
    // ignore CSS classes and attributes; only visible copy matters
    const l = line.replace(/className=(\{`[^`]*`\}|"[^"]*")/g, "").replace(/placeholder=("[^"]*")/g, "").replace(/placeholder:\S+|transition-transform|\btransform\b(?= -| translate)/g, "").toLowerCase();
    for (const w of [...BANNED, ...UNSAFE.map((x) => x.toLowerCase())]) {
      if (l.includes(w)) { console.log(`${f}:${i + 1}  "${w}"  ${line.trim().slice(0, 90)}`); bad++; }
    }
  });
}
console.log(bad ? `\n${bad} issue(s)` : "copy check passed");
process.exit(bad ? 1 : 0);
