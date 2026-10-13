import React from "react";
import { Eyebrow, Reveal, CTA } from "./primitives";
import JellyGrid from "./JellyGrid";
import Needs from "./Needs";

/* Question 5: will employees feel watched? Is data safe?
   The main trust section, so it looks like one. Only approved statements. */
export const PRIVACY_STATEMENTS = [
  ["Your financial information is yours", "Each employee's personal financial information belongs to them."],
  ["Employers see trends, never people", "Employers receive only aggregated, anonymised insights about the group."],
  ["Conversations with experts are private", "What an employee discusses with an expert stays between them."],
  ["Asking for guidance never counts against you", "Seeking help with money should never affect anyone's career."],
];

export default function PrivacyBand() {
  return (
    <section id="privacy" className="b2b-dark-band relative overflow-hidden py-16 sm:py-24">
      <JellyGrid color="255, 255, 255" opacity={0.16} />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <Reveal className="max-w-[60ch]">
          <Eyebrow>Privacy</Eyebrow>
          <h2 className="font-outfit font-bold tracking-[-0.028em] leading-[1.1] mt-4 text-[28px] sm:text-[38px] lg:text-[46px] b2b-on-dark-h">
            Your employer sees trends. Never you.
          </h2>
          <p className="font-jakarta mt-5 text-[17px] sm:text-[19px] leading-[1.6] b2b-on-dark-soft">
            People won&apos;t talk about money if they think someone is watching. So Koshpal is built the other
            way round.
          </p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {PRIVACY_STATEMENTS.map(([h, p], i) => (
            <Reveal
              key={h}
              delay={(i % 2) * 0.06}
              className="rounded-[20px] border border-[#ffffff26] bg-[#ffffff12] p-6"
            >
              <h3 className="font-outfit font-semibold text-[18px] text-[#f6f8ff]">{h}</h3>
              <p className="font-jakarta text-[15px] leading-[1.6] b2b-on-dark-soft mt-1.5">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CTA to="/privacy-trust" variant="ghost" dark location="home-privacy">Who sees what</CTA>
          <Needs kind="PROOF" note="approved security and compliance statements (no technical claims until supplied)" />
        </div>
      </div>
    </section>
  );
}
