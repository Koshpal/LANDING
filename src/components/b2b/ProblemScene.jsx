import React from "react";
import { Section, Eyebrow, Reveal } from "./primitives";
import Needs from "./Needs";

/* Question 2: is this a real problem for my company?
   A scene and one insight, not a wall of statistics. Numbers appear only
   when sourced (CONTENT_NEEDED.md #4). */
export default function ProblemScene() {
  return (
    <Section tone="tint" id="problem">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className="font-outfit font-bold tracking-[-0.028em] leading-[1.1] mt-4 text-[27px] sm:text-[34px] lg:text-[40px] text-[#0b1533]">
            Money worries don&apos;t stay at home.
          </h2>
          <p className="font-jakarta mt-5 text-[17px] sm:text-[18px] leading-[1.7] text-[#3a4468]">
            It&apos;s the 27th. Rent is due, the EMI went out yesterday, and a family expense nobody planned
            for has just landed. The salary is fine. The 11 o&apos;clock meeting isn&apos;t getting your full
            attention.
          </p>
          <p className="font-jakarta mt-4 text-[17px] sm:text-[18px] leading-[1.7] text-[#3a4468]">
            Someone on ₹30,000 a month can feel this. So can someone on ₹3 lakh. The gap is confidence,
            not income.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-outfit font-semibold tracking-[-0.02em] leading-[1.25] text-[26px] sm:text-[34px] text-primary">
            &ldquo;I earn enough, but I still don&apos;t feel in control.&rdquo;
          </p>
          <p className="font-jakarta mt-6 text-[16px] leading-[1.7] text-[#3a4468]">
            Most help on offer is a webinar once a year, a budgeting app, or a product pitch. It&apos;s like
            seeing a doctor only when you&apos;re ill: a few minutes, a prescription, and nobody to help you
            build healthier habits.
          </p>
          <div className="mt-4">
            <Needs kind="PROOF" note="verified Indian statistics with source links (at most 2-3, each with a visible source)" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
