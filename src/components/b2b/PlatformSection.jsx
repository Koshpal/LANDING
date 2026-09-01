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
      <div className="max-w-[60ch] mb-8 sm:mb-10">
        <Eyebrow>The platform</Eyebrow>
        <h2 className="font-outfit font-bold tracking-[-0.028em] leading-[1.1] mt-4 text-[27px] sm:text-[34px] lg:text-[40px] b2b-on-dark-h">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          ["01 — Understand", "Automated tracking turns everyday spending into a clear picture."],
          ["02 — Improve", "Insights, budgets and nudges that guide better daily decisions."],
          ["03 — Learn", "Focused education on tax, debt, investing and life planning."],
          ["04 — Get guidance", "One-to-one sessions with qualified financial experts."],
        ].map(([h, p], i) => (
          <Reveal
            key={h}
            delay={i * 0.05}
            className="b2b-card-hover rounded-[16px] border border-[#ffffff26] bg-[#ffffff12] backdrop-blur-sm p-4"
          >
            <div className="font-outfit font-bold text-[12.5px] tracking-[0.04em] text-[#9db4ff] mb-1.5">{h}</div>
            <p className="font-jakarta text-[13px] leading-[1.5] b2b-on-dark-soft">{p}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="grid md:grid-cols-2 border border-[#ffffff26] rounded-[20px] overflow-hidden bg-[#fff] b2b-shadow-lg">
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
