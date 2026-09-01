import React from "react";
import { motion } from "framer-motion";
import { CTA } from "./primitives";
import JellyGrid from "./JellyGrid";
import Counter from "./Counter";

const ease = [0.2, 0.8, 0.2, 1];
const rise = (i) => ({
  initial: { opacity: 0, y: 22, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, ease, delay: i * 0.09 },
});

const glass =
  "rounded-[20px] border border-[#ffffff2e] bg-[#ffffff14] backdrop-blur-md shadow-[0_24px_60px_-20px_rgba(4,10,35,0.65)] p-5";

/* Composite visual: Employee app → Koshpal platform → HR dashboard.
   Glass cards floating on the mesh hero. Numbers are illustrative. */
function PlatformComposite() {
  const Connector = () => (
    <div className="grid place-items-center text-[#ffffff40]">
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path d="M8 0v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
  return (
    <div className="grid gap-3.5" aria-hidden="true">
      {/* Employee app */}
      <div className={glass}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase text-[#c3cdec]">Employee app</span>
          <span className="w-2 h-2 rounded-full bg-[#3ddc97] shadow-[0_0_0_4px_rgba(61,220,151,0.22)]" />
        </div>
        <div className="flex items-baseline gap-3">
          <span className="font-outfit font-extrabold text-[42px] tracking-[-0.03em] tabular-nums text-[#fff]">
            <Counter value={82} />
          </span>
          <span className="font-outfit font-medium text-[13px] text-[#aab6dd] leading-tight">
            Financial health
            <br />
            this month
          </span>
        </div>
        <svg className="mt-3" viewBox="0 0 260 40" preserveAspectRatio="none" height="34" width="100%">
          <defs>
            <linearGradient id="heroSpark" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9db4ff" />
              <stop offset="1" stopColor="#7fe3ef" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="url(#heroSpark)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,30 30,26 60,28 90,20 120,22 150,14 180,16 210,9 240,11 260,6"
          />
        </svg>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {["Spending", "Goals", "Insights", "Coaching"].map((p) => (
            <span key={p} className="font-outfit font-medium text-[12px] px-2.5 py-[5px] rounded-full bg-[#ffffff1a] text-[#dbe2ff] border border-[#ffffff2e]">
              {p}
            </span>
          ))}
        </div>
      </div>

      <Connector />

      {/* Platform */}
      <div
        className="rounded-[20px] text-center p-4 text-[#fff] border border-[#ffffff2e] shadow-[0_20px_50px_-16px_rgba(4,10,35,0.7)]"
        style={{ background: "linear-gradient(100deg,#4459c9,#3a86b0)" }}
      >
        <div className="font-outfit font-bold text-[11px] tracking-[0.14em] uppercase text-[#ffffffcc] mb-1.5">Koshpal platform</div>
        <div className="font-outfit font-bold text-[15px]">Privacy-first · Automated · Human-backed</div>
      </div>

      <Connector />

      {/* HR dashboard */}
      <div className={glass}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase text-[#c3cdec]">HR dashboard</span>
          <span className="w-2 h-2 rounded-full bg-[#3ddc97] shadow-[0_0_0_4px_rgba(61,220,151,0.22)]" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { v: 1248, s: "", l: "Employees" },
            { v: 78, s: "%", l: "Activated" },
            { v: 64, s: "%", l: "Engaged" },
          ].map((k) => (
            <div key={k.l} className="bg-[#ffffff12] border border-[#ffffff24] rounded-xl px-3 py-2.5">
              <div className="font-outfit font-extrabold text-[19px] tabular-nums text-[#fff]">
                <Counter value={k.v} suffix={k.s} />
              </div>
              <div className="font-outfit font-medium text-[11px] text-[#aab6dd] mt-0.5">{k.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 h-[46px] mt-3">
          {[40, 55, 48, 70, 62, 84, 76, 92].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[3px] block"
              style={{ height: `${h}%`, background: "linear-gradient(180deg,#9db4ff,#5d6ef6)" }}
            />
          ))}
        </div>
        <div className="font-outfit font-medium text-[11px] text-[#8fa0cf] mt-2">Wellness trend — illustrative</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="b2b-dark-band relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-28">
      <JellyGrid color="255, 255, 255" opacity={0.16} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute blur-[110px] opacity-70 w-[620px] h-[620px] top-[-180px] right-[-140px]"
        style={{ background: "radial-gradient(closest-side, rgba(93,110,246,0.6), rgba(23,162,184,0.28) 55%, transparent)" }}
      />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-[72px] items-center">
          <div>
            <motion.div {...rise(0)}>
              <span className="b2b-eyebrow">For HR &amp; People teams</span>
            </motion.div>
            <motion.h1
              {...rise(1)}
              className="font-outfit font-bold tracking-[-0.037em] leading-[1.02] mt-5 text-[38px] sm:text-[56px] lg:text-[68px] text-[#f6f8ff]"
            >
              Financially healthier employees.{" "}
              <span className="b2b-gradient-text" style={{ backgroundImage: "linear-gradient(100deg,#9db4ff,#7fe3ef)" }}>
                Stronger workplaces.
              </span>
            </motion.h1>
            <motion.p
              {...rise(2)}
              className="font-jakarta mt-6 text-[17px] sm:text-[20px] leading-[1.62] max-w-[540px] text-[#c3cdec]"
            >
              Koshpal gives your workforce the tools, insights and expert guidance to build better
              money habits — and gives HR a simple, privacy-first way to support financial wellbeing
              and measure its impact.
            </motion.p>
            <motion.div {...rise(3)} className="flex flex-wrap gap-3.5 items-center mt-9">
              <CTA to="/demo" size="lg">Book a demo</CTA>
              <CTA to="/platform" variant="ghost" size="lg" dark>Explore the platform</CTA>
            </motion.div>
            <motion.div
              {...rise(4)}
              className="flex flex-wrap gap-x-5 gap-y-2 mt-8 font-outfit font-medium text-[13px] text-[#aab6dd]"
            >
              {["Built for modern HR & People teams", "Privacy-first architecture", "Employee-first experience"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "linear-gradient(100deg,#9db4ff,#7fe3ef)" }} />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <PlatformComposite />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
