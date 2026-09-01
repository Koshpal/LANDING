import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

/* 07 — Business impact. Premium dark section. No fabricated numbers — the tiles
   read "—" until a live program fills them. */
const CHAIN = ["Financial confidence", "Employee wellbeing", "Focus & engagement", "A stronger workforce"];

const TILES = [
  ["Employee activation", "share of the workforce onboarded"],
  ["Monthly engagement", "share active in a given month"],
  ["Financial confidence", "self-reported, aggregated"],
  ["Program utilisation", "coaching, education and goals used"],
];

export default function ImpactSection() {
  return (
    <Section tone="dark">
      <SectionHead
        dark
        eyebrow="Business impact"
        title="Financial wellness is more than an employee benefit."
        lede="It's a lever on the things a business already measures — focus, engagement, retention. Koshpal makes that lever visible."
      />

      <div className="flex flex-wrap items-center gap-3 mb-12">
        {CHAIN.map((s, i) => (
          <React.Fragment key={s}>
            <Reveal
              delay={i * 0.05}
              as="span"
              className="rounded-full border border-[#ffffff24] bg-[#ffffff0f] px-4 py-2 font-outfit font-semibold text-[13.5px] b2b-on-dark-h"
            >
              {s}
            </Reveal>
            {i < CHAIN.length - 1 && <span className="text-[#8fa6e8]">→</span>}
          </React.Fragment>
        ))}
      </div>

      <p className="font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase b2b-on-dark-muted mb-5">
        What Koshpal reports for your workforce
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {TILES.map(([lab, sub], i) => (
          <Reveal
            key={lab}
            delay={(i % 4) * 0.05}
            className="rounded-[20px] border border-[#ffffff24] bg-[#ffffff0f] p-[22px]"
          >
            <div className="font-outfit font-extrabold text-[30px] tracking-[-0.02em] text-[#ffffff4d]">—</div>
            <div className="font-outfit font-semibold text-[13.5px] b2b-on-dark-h mt-1.5">{lab}</div>
            <div className="font-jakarta text-[12.5px] b2b-on-dark-muted mt-1">{sub}</div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 font-jakarta text-[12.5px] b2b-on-dark-muted italic">
        Figures populate from your live program — Koshpal never shows placeholder numbers as results.
      </p>
    </Section>
  );
}
