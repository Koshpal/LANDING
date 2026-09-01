import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Seo from "./Seo";
import JellyGrid from "./JellyGrid";
import { Reveal, CTA } from "./primitives";

const ease = [0.2, 0.8, 0.2, 1];

/** Soft brand glow blob behind a dark hero / CTA band. */
function GlowOrb({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-0 blur-[90px] opacity-70 ${className}`}
      style={{
        background:
          "radial-gradient(closest-side, rgba(93,110,246,0.55), rgba(23,162,184,0.28) 60%, transparent)",
      }}
    />
  );
}

/** Full page frame: top gradient bar + SEO + fixed navbar + main + footer. */
export function PageShell({ seo, children }) {
  return (
    <div className="min-h-screen font-jakarta bg-[#fff] text-[#3a4468]">
      {seo && <Seo {...seo} />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

/** Standard interior-page hero — dark mesh band, glow, jelly grid, big headline. */
export function PageHero({ eyebrow, title, sub, primary, secondary }) {
  return (
    <section className="b2b-dark-band relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
      <JellyGrid color="255, 255, 255" opacity={0.16} />
      <GlowOrb className="w-[560px] h-[560px] top-[-160px] right-[-120px]" />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-[58ch]"
        >
          {eyebrow && <span className="b2b-eyebrow">{eyebrow}</span>}
          <h1 className="font-outfit font-bold tracking-[-0.035em] leading-[1.04] mt-4 text-[32px] sm:text-[46px] lg:text-[54px] text-[#f6f8ff]">
            {title}
          </h1>
          {sub && (
            <p className="font-jakarta mt-5 text-[16.5px] sm:text-[18.5px] leading-[1.6] max-w-[54ch] text-[#c3cdec]">
              {sub}
            </p>
          )}
          {(primary || secondary) && (
            <div className="flex flex-wrap gap-3.5 items-center mt-9">
              {primary && (
                <CTA to={primary.to || "/demo"} size="lg">
                  {primary.label || "Book a demo"}
                </CTA>
              )}
              {secondary && (
                <CTA to={secondary.to} variant="ghost" size="lg" dark>
                  {secondary.label}
                </CTA>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/** Reusable closing call-to-action band. */
export function PageCta({ eyebrow = "Get started", title, sub, primary, secondary }) {
  return (
    <section className="b2b-dark-band relative overflow-hidden py-16 sm:py-24 text-center">
      <JellyGrid color="255, 255, 255" opacity={0.16} />
      <GlowOrb className="w-[520px] h-[520px] left-1/2 -translate-x-1/2 top-[-140px]" />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 grid gap-6 justify-items-center">
        <Reveal className="grid gap-6 justify-items-center">
          <span className="b2b-eyebrow">{eyebrow}</span>
          <h2 className="font-outfit font-bold tracking-[-0.03em] leading-[1.08] text-[27px] sm:text-[36px] lg:text-[42px] text-[#f6f8ff] max-w-[22ch]">
            {title}
          </h2>
          {sub && (
            <p className="font-jakarta text-[17px] leading-[1.6] text-[#c3cdec] max-w-[52ch]">{sub}</p>
          )}
          <div className="flex flex-wrap gap-3.5 justify-center">
            <CTA to={primary?.to || "/demo"} size="lg">
              {primary?.label || "Book a demo"}
            </CTA>
            {secondary && (
              <CTA to={secondary.to} variant="ghost" size="lg" dark>
                {secondary.label}
              </CTA>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- small shared content primitives for interior pages ---- */

/** Icon-free feature card grid. items: [{ h, p }] */
export function CardGrid({ items, cols = 3, tone = "light" }) {
  const grid =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";
  const card = tone === "onDark" ? "bg-[#fff]" : "bg-[#f7f8fd]";
  return (
    <div className={`grid grid-cols-1 ${grid} gap-[18px]`}>
      {items.map((it, i) => (
        <Reveal
          key={it.h}
          delay={(i % 4) * 0.05}
          className={`b2b-card b2b-card-hover ${card} p-6`}
        >
          <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-[7px]">{it.h}</h3>
          <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">{it.p}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Vertical arrow-linked flow. steps: string[] */
export function FlowChain({ steps, dark = false }) {
  return (
    <div className="grid gap-2.5 max-w-[520px]">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <Reveal
            delay={i * 0.04}
            className={`rounded-[16px] border px-5 py-4 font-outfit font-semibold text-[15px] ${
              dark
                ? "border-[#ffffff24] bg-[#ffffff0f] text-[#f6f8ff]"
                : "border-[#e9ecf7] bg-[#f7f8fd] text-[#0b1533]"
            }`}
          >
            {s}
          </Reveal>
          {i < steps.length - 1 && (
            <div className={`justify-self-center ${dark ? "text-[#8fa6e8]" : "text-[#9aa6c8]"}`}>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M7 0v11m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
