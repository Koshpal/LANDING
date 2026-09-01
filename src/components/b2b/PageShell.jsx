import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Seo from "./Seo";
import JellyGrid from "./JellyGrid";
import { Reveal, CTA } from "./primitives";

const ease = [0.2, 0.8, 0.2, 1];

/** Full page frame: SEO + fixed navbar + main + white footer. */
export function PageShell({ seo, children }) {
  return (
    <div className="min-h-screen font-jakarta bg-[#fff] text-[#3f4a63]">
      {seo && <Seo {...seo} />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

/** Standard interior-page hero — navy band, jelly grid, big headline + CTAs. */
export function PageHero({ eyebrow, title, sub, primary, secondary }) {
  return (
    <section className="b2b-dark-band relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-28">
      <JellyGrid color="255, 255, 255" opacity={0.2} />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[54ch]"
        >
          {eyebrow && <span className="b2b-eyebrow">{eyebrow}</span>}
          <h1 className="font-outfit font-bold tracking-[-0.03em] leading-[1.08] mt-4 text-[32px] sm:text-[46px] lg:text-[58px] b2b-on-dark-h">
            {title}
          </h1>
          {sub && (
            <p className="font-jakarta mt-5 text-[16.5px] sm:text-[20px] leading-[1.6] max-w-[52ch] b2b-on-dark-soft">
              {sub}
            </p>
          )}
          {(primary || secondary) && (
            <div className="flex flex-wrap gap-3.5 items-center mt-8">
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
    <section className="b2b-dark-band relative overflow-hidden py-20 sm:py-28 text-center">
      <JellyGrid color="255, 255, 255" opacity={0.2} />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 grid gap-6 justify-items-center">
        <Reveal className="grid gap-6 justify-items-center">
          <span className="b2b-eyebrow">{eyebrow}</span>
          <h2 className="font-outfit font-bold tracking-[-0.02em] leading-[1.12] text-[28px] sm:text-[38px] lg:text-[46px] b2b-on-dark-h max-w-[24ch]">
            {title}
          </h2>
          {sub && (
            <p className="font-jakarta text-[16px] leading-[1.6] b2b-on-dark-soft max-w-[52ch]">{sub}</p>
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
  const card =
    tone === "onDark"
      ? "bg-[#fff] border border-[#e3e7f1]"
      : "bg-[#f6f7fb] border border-[#e3e7f1]";
  return (
    <div className={`grid grid-cols-1 ${grid} gap-[18px]`}>
      {items.map((it, i) => (
        <Reveal key={it.h} delay={(i % 4) * 0.05} className={`${card} rounded-[18px] p-6 b2b-shadow`}>
          <h3 className="font-outfit font-semibold text-[17.5px] text-[#0e1a3c] mb-[7px]">{it.h}</h3>
          <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3f4a63]">{it.p}</p>
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
            className={`rounded-[14px] border px-5 py-3.5 font-outfit font-semibold text-[15px] ${
              dark
                ? "border-[#ffffff24] bg-[#ffffff0f] b2b-on-dark-h"
                : "border-[#e3e7f1] bg-[#f6f7fb] text-[#0e1a3c]"
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
