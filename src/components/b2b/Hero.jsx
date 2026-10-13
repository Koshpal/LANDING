import React from "react";
import { motion } from "framer-motion";
import { CTA } from "./primitives";
import JellyGrid from "./JellyGrid";
import { SessionCard } from "./SampleUI";

const ease = [0.2, 0.8, 0.2, 1];
// Text is painted immediately (it is the largest contentful element);
// only the visual eases in.
const rise = () => ({});

/* Question 1: what is this, and is it for me?
   Visual: the real app Home screen next to a coach-session summary card. */
export default function Hero() {
  return (
    <section className="b2b-dark-band relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
      <JellyGrid color="255, 255, 255" opacity={0.16} />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div {...rise(0)}>
              <span className="b2b-eyebrow">Employee financial wellness</span>
            </motion.div>
            <motion.h1
              {...rise(1)}
              className="font-outfit font-bold tracking-[-0.03em] leading-[1.06] mt-5 text-[32px] sm:text-[44px] lg:text-[52px] text-[#f6f8ff]"
            >
              Your employees don&apos;t need another finance app. They need someone to talk to about money.
            </motion.h1>
            <motion.p
              {...rise(2)}
              className="font-jakarta mt-6 text-[17px] sm:text-[19px] leading-[1.62] max-w-[540px] text-[#c3cdec]"
            >
              Koshpal gives every employee private 1:1 sessions with certified financial experts, plus an app
              to act on the plan. HR sees anonymised insight, never individual data.
            </motion.p>
            <motion.div {...rise(3)} className="flex flex-wrap gap-3.5 items-center mt-9">
              <CTA to="/demo" size="lg" location="hero">Book a demo</CTA>
              <CTA to="#employee-experience" variant="ghost" size="lg" dark location="hero">See how it works</CTA>
            </motion.div>
            <motion.ul
              {...rise(4)}
              className="flex flex-wrap gap-x-5 gap-y-2 mt-8 font-outfit font-medium text-[13.5px] text-[#aab6dd]"
            >
              {["Private by design", "No commissions", "No products sold"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "linear-gradient(100deg,#9db4ff,#7fe3ef)" }} />
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0.001, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="relative mx-auto w-full max-w-[460px] lg:max-w-none"
          >
            <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-4 items-end">
              <img
                src="/assets/app-home.png"
                alt="The Koshpal app home screen showing total balance and linked bank accounts, with sample figures"
                width="480"
                height="974"
                fetchpriority="high"
                className="w-full h-auto drop-shadow-[0_30px_50px_rgba(4,10,35,0.55)]"
              />
              <div className="pb-6">
                <SessionCard />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
