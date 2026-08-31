import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

const ITEMS = [
  ["Focus", "Money worries compete with attention during the workday."],
  ["Productivity", "Financial stress quietly reduces day-to-day effectiveness."],
  ["Engagement", "People who feel financially supported feel valued by their employer."],
  ["Retention", "Financial wellbeing is now part of a serious benefits strategy."],
];

export default function ProblemSection() {
  return (
    <Section tone="white">
      <SectionHead
        eyebrow="The business case"
        title="Financial stress doesn't stay at home."
        lede="When employees are worried about money, it shows up at work — in focus, output, engagement and, over time, retention."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {ITEMS.map(([h, p], i) => (
          <Reveal
            key={h}
            delay={i * 0.06}
            className="rounded-[18px] border border-[#e3e7f1] bg-[#f6f7fb] p-5 sm:p-[22px]"
          >
            <h3 className="font-outfit font-semibold text-[18px] text-[#0e1a3c] mb-[7px]">{h}</h3>
            <p className="font-jakarta text-[14.5px] leading-[1.55] text-[#3f4a63]">{p}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-9 sm:mt-12" delay={0.1}>
        <p className="font-outfit font-semibold tracking-[-0.02em] leading-[1.3] text-[19px] sm:text-[28px] text-[#0e1a3c] max-w-[34ch]">
          Your employees don't need another webinar.
          <span className="block font-medium text-[0.8em] text-[#6b7590] mt-2">
            They need ongoing support — that's where Koshpal comes in.
          </span>
        </p>
      </Reveal>
    </Section>
  );
}
