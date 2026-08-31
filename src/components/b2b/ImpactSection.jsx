import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

/* No fabricated numbers — values fill in once a program is live. */
const TILES = [
  ["Employee activation", "% of workforce onboarded"],
  ["Monthly engagement", "% active in a given month"],
  ["Financial confidence", "self-reported, aggregated"],
  ["Program ROI", "utilisation vs. investment"],
];

export default function ImpactSection() {
  return (
    <Section tone="white">
      <SectionHead
        eyebrow="Outcomes"
        title="Designed for measurable impact."
        lede="Every Koshpal program reports on the same four signals. Your numbers appear here once the program is live."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TILES.map(([lab, sub], i) => (
          <Reveal key={lab} delay={(i % 4) * 0.05} className="bg-[#f6f7fb] border border-[#e3e7f1] rounded-[18px] p-[22px]">
            <div className="font-outfit font-extrabold text-[30px] tracking-[-0.02em] text-[#d3d9e8]">—</div>
            <div className="font-outfit font-semibold text-[13.5px] text-[#0e1a3c] mt-1.5">{lab}</div>
            <div className="font-jakarta text-[12.5px] text-[#6b7590] mt-1">{sub}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
