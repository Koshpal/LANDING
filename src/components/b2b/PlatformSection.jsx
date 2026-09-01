import React from "react";
import { Section, Eyebrow, Reveal } from "./primitives";

const EMP = [
  "Track spending automatically",
  "Understand financial behaviour",
  "Set and pursue financial goals",
  "Get personalised insights & nudges",
  "Access expert financial guidance",
  "Build better money habits over time",
];
const CO = [
  "Workforce financial-wellness dashboard",
  "Adoption & engagement insights",
  "Program analytics and trends",
  "Aggregated, anonymised outcomes",
  "Simple employee rollout",
  "Privacy-first data architecture",
];

export default function PlatformSection() {
  return (
    <Section id="platform" tone="dark">
      <div className="max-w-[62ch] mb-9 sm:mb-12 lg:mb-14">
        <Eyebrow>The platform</Eyebrow>
        <h2 className="font-outfit font-bold tracking-[-0.02em] leading-[1.12] mt-4 text-[28px] sm:text-[36px] lg:text-[46px] b2b-on-dark-h">
          A complete financial wellness layer for your workforce.
        </h2>
        <div className="flex flex-wrap gap-x-3.5 gap-y-2.5 mt-5">
          {["Not just financial education", "Not just an expense tracker", "Not just a coaching service"].map((t) => (
            <span
              key={t}
              className="font-outfit font-medium text-[14px] b2b-on-dark-soft px-3.5 py-1.5 border border-[#ffffff47] rounded-full line-through decoration-[#ffffff66]"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="font-jakarta mt-4 text-[17px] sm:text-[19px] leading-[1.6] max-w-[60ch] b2b-on-dark-soft">
          Koshpal brings them together into one employee experience — with an enterprise management
          layer for HR.
        </p>
      </div>

      <Reveal className="grid md:grid-cols-2 border border-[#e9ecf7] rounded-[20px] overflow-hidden bg-[#fff] b2b-shadow">
        <div className="font-outfit font-bold text-[14px] tracking-[0.04em] uppercase px-[22px] py-[18px] bg-primary-lightest text-primary">
          For employees
        </div>
        <div className="font-outfit font-bold text-[14px] tracking-[0.04em] uppercase px-[22px] py-[18px] bg-[#e4f3f5] text-secondary-darkest border-t md:border-t-0 md:border-l border-[#e9ecf7]">
          For the company
        </div>
        <ul className="b2b-check grid gap-[11px] content-start px-[22px] pt-2.5 pb-[22px] font-jakarta text-[15px] text-[#3a4468] border-t border-[#e9ecf7]">
          {EMP.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ul className="b2b-check b2b-check-teal grid gap-[11px] content-start px-[22px] pt-2.5 pb-[22px] font-jakarta text-[15px] text-[#3a4468] border-t border-[#e9ecf7] md:border-l">
          {CO.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
