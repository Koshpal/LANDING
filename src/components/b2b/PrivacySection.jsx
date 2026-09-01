import React from "react";
import { Section, SectionHead, Reveal, CTA } from "./primitives";

const ROWS = [
  ["Employee financial data", "Stays in the employee's protected personal experience"],
  ["Aggregated, anonymised insights", "Roll up to the employer dashboard — adoption, engagement, trends"],
];

export default function PrivacySection() {
  return (
    <Section id="privacy" tone="white">
      <SectionHead
        eyebrow="Privacy"
        title="Your employees' money is private. Always."
        lede="Employees should never have to choose between financial support and financial privacy. Koshpal is built so companies see program impact — not individual financial detail."
      />
      <div className="grid gap-3.5">
        {ROWS.map(([from, to], i) => (
          <Reveal
            key={from}
            delay={i * 0.06}
            className="b2b-card-hover grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-[18px] rounded-[20px] border border-[#e9ecf7] bg-[#f7f8fd] px-5 py-5 sm:px-[22px] text-center sm:text-left"
          >
            <div className="font-outfit font-semibold text-[15px] text-[#0b1533]">{from}</div>
            <div className="text-primary text-[20px] rotate-90 sm:rotate-0 justify-self-center">→</div>
            <div className="font-jakarta text-[14.5px] text-[#3a4468]">{to}</div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8" delay={0.1}>
        <CTA to="/privacy-policy" variant="ghost">
          Read about security &amp; privacy
        </CTA>
      </Reveal>
    </Section>
  );
}
