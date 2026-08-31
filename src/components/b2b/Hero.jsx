import React from "react";
import { motion } from "framer-motion";
import { CTA } from "./primitives";
import JellyGrid from "./JellyGrid";

const ease = [0.2, 0.8, 0.2, 1];
const rise = (i) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay: i * 0.09 },
});

/* Composite visual: Employee app → Koshpal platform → HR dashboard.
   Numbers are illustrative and labelled as such. */
function PlatformComposite() {
  return (
    <div className="grid gap-3.5" aria-hidden="true">
      {/* Employee app */}
      <div className="bg-[#fff] border border-[#e3e7f1] rounded-[18px] b2b-shadow-lg p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase text-[#6b7590]">
            Employee app
          </span>
          <span className="w-2 h-2 rounded-full bg-semantic-green-90 shadow-[0_0_0_4px_rgba(27,122,67,0.18)]" />
        </div>
        <div className="flex items-baseline gap-3">
          <span className="font-outfit font-extrabold text-[40px] tracking-[-0.03em] tabular-nums text-[#0e1a3c]">
            82
          </span>
          <span className="font-outfit font-medium text-[13px] text-[#6b7590] leading-tight">
            Financial health
            <br />
            this month
          </span>
        </div>
        <svg className="mt-3" viewBox="0 0 260 40" preserveAspectRatio="none" height="34" width="100%">
          <polyline
            fill="none"
            stroke="#17A2B8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,30 30,26 60,28 90,20 120,22 150,14 180,16 210,9 240,11 260,6"
          />
        </svg>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {["Spending", "Goals", "Insights", "Coaching"].map((p) => (
            <span
              key={p}
              className="font-outfit font-medium text-[12.5px] px-2.5 py-[5px] rounded-full bg-primary-lightest text-primary border border-[#e1e6f5]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* connector */}
      <div className="grid place-items-center text-[#d3d9e8]">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 0v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Platform */}
      <div
        className="rounded-[18px] text-center p-3.5 text-[#fff]"
        style={{ background: "linear-gradient(135deg, #334EAC 0%, #081F5C 100%)" }}
      >
        <div className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase text-[#ffffffb3] mb-1.5">
          Koshpal platform
        </div>
        <div className="font-outfit font-bold text-[15px]">Privacy-first · Automated · Human-backed</div>
      </div>

      <div className="grid place-items-center text-[#d3d9e8]">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 0v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* HR dashboard */}
      <div className="bg-[#fff] border border-[#e3e7f1] rounded-[18px] b2b-shadow-lg p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase text-[#6b7590]">
            HR dashboard
          </span>
          <span className="w-2 h-2 rounded-full bg-semantic-green-90 shadow-[0_0_0_4px_rgba(27,122,67,0.18)]" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            ["1,248", "Employees"],
            ["78%", "Activated"],
            ["64%", "Engaged"],
          ].map(([n, l]) => (
            <div key={l} className="bg-[#f0f2f8] border border-[#e3e7f1] rounded-xl px-3 py-2.5">
              <div className="font-outfit font-extrabold text-[19px] tabular-nums text-[#0e1a3c]">{n}</div>
              <div className="font-outfit font-medium text-[11px] text-[#6b7590] mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 h-[46px] mt-3">
          {[40, 55, 48, 70, 62, 84, 76, 92].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[3px] block"
              style={{ height: `${h}%`, background: "linear-gradient(180deg, #334EAC 0%, #8f9fd6 100%)" }}
            />
          ))}
        </div>
        <div className="font-outfit font-medium text-[11px] text-[#6b7590] mt-2">Wellness trend — illustrative</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="b2b-dark-band relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24">
      <JellyGrid color="255, 255, 255" opacity={0.2} />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-[72px] items-center">
          <div>
            <motion.div {...rise(0)}>
              <span className="b2b-eyebrow">For HR &amp; People teams</span>
            </motion.div>
            <motion.h1
              {...rise(1)}
              className="font-outfit font-bold tracking-[-0.033em] leading-[1.08] mt-4 text-[34px] sm:text-[48px] lg:text-[60px] b2b-on-dark-h"
            >
              Financially healthier employees.{" "}
              <span className="b2b-on-dark-accent">Stronger workplaces.</span>
            </motion.h1>
            <motion.p
              {...rise(2)}
              className="font-jakarta mt-[22px] text-[16.5px] sm:text-[20px] leading-[1.6] max-w-[540px] b2b-on-dark-soft"
            >
              Koshpal gives your workforce the tools, insights and expert guidance to build better
              money habits — and gives HR a simple, privacy-first way to support financial wellbeing
              and measure its impact.
            </motion.p>
            <motion.div {...rise(3)} className="flex flex-wrap gap-3.5 items-center mt-8">
              <CTA to="/demo" size="lg">Book a demo</CTA>
              <CTA to="#how" variant="ghost" size="lg" dark>See how it works</CTA>
            </motion.div>
            <motion.div
              {...rise(4)}
              className="flex flex-wrap gap-x-5 gap-y-2 mt-7 font-outfit font-medium text-[13px] b2b-on-dark-muted"
            >
              {["Built for modern HR & People teams", "Privacy-first architecture", "Employee-first experience"].map(
                (t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            <PlatformComposite />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
