import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

/* 07 — Business impact. No fabricated numbers — the tiles read "—" until a
   live program fills them. */
const CHAIN = ["Financial confidence", "Employee wellbeing", "Focus & engagement", "A stronger workforce"];

const TILES = [
  ["Employee activation", "share of the workforce onboarded"],
  ["Monthly engagement", "share active in a given month"],
  ["Financial confidence", "self-reported, aggregated"],
  ["Program utilisation", "coaching, education and goals used"],
];

export default function ImpactSection() {
  return (
    <Section tone="white">
      <SectionHead
        eyebrow="Business impact"
        title="Financial wellness is more than an employee benefit."
        lede="It's a lever on the things a business already measures — focus, engagement, retention. Koshpal makes that lever visible."
      />

      <div className="flex flex-wrap items-center gap-2.5 mb-10">
        {CHAIN.map((s, i) => (
          <React.Fragment key={s}>
            <Reveal
              delay={i * 0.05}
              as="span"
              className="rounded-full border border-[#e9ecf7] bg-[#f7f8fd] px-4 py-2 font-outfit font-semibold text-[13px] text-[#0b1533]"
            >
              {s}
            </Reveal>
            {i < CHAIN.length - 1 && <span className="text-[#9aa6c8]">→</span>}
          </React.Fragment>
        ))}
      </div>

      <p className="font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase text-[#6b7597] mb-4">
        What Koshpal reports for your workforce
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {TILES.map(([lab, sub], i) => (
          <Reveal
            key={lab}
            delay={(i % 4) * 0.05}
            className="b2b-card b2b-card-hover bg-[#f7f8fd] p-[22px]"
          >
            <div className="font-outfit font-extrabold text-[30px] tracking-[-0.02em] text-[#dfe3f2]">—</div>
            <div className="font-outfit font-semibold text-[13.5px] text-[#0b1533] mt-1.5">{lab}</div>
            <div className="font-jakarta text-[12.5px] text-[#6b7597] mt-1">{sub}</div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 font-jakarta text-[12.5px] text-[#6b7597] italic">
        Figures populate from your live program — Koshpal never shows placeholder numbers as results.
      </p>
    </Section>
  );
}
