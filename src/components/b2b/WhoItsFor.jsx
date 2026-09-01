import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

const WHO = [
  ["HR & People teams", "Build financial wellness into your benefits strategy."],
  ["L&D teams", "Give employees practical, continuous financial education."],
  ["Founders & leadership", "Build a healthier, more resilient workforce."],
  ["Benefits teams", "Offer a financial-wellness benefit employees actually use."],
];

export default function WhoItsFor() {
  return (
    <Section id="who" tone="white">
      <SectionHead eyebrow="Who it's for" title="Built for modern workplaces." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {WHO.map(([h, p], i) => (
          <Reveal
            key={h}
            delay={(i % 4) * 0.05}
            className="b2b-card-hover bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-[22px]"
          >
            <h3 className="font-outfit font-semibold text-[16px] text-[#0b1533] mb-1.5">{h}</h3>
            <p className="font-jakarta text-[13.5px] leading-[1.55] text-[#3a4468]">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
