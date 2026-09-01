import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

/* 08 — Social proof. Deliberately built from empty slots: no fabricated logos,
   numbers or quotes. Fill each slot with real material as it becomes available. */
export default function Proof() {
  return (
    <Section tone="white" id="proof">
      <SectionHead
        eyebrow="Proof"
        title="Trusted by employees. Valued by organisations."
        lede="As Koshpal programs go live, real adoption, engagement and feedback appear here — never placeholder numbers dressed up as results."
      />

      <div className="mb-12">
        <p className="font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase text-[#6b7590] mb-5">
          Organisations running Koshpal
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-9 min-w-[132px] grid place-items-center rounded-lg border border-dashed border-[#d3d9e8] bg-[#f6f7fb] font-outfit font-semibold text-[11px] tracking-[0.06em] text-[#8a95b4]"
            >
              CLIENT LOGO
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-[18px]">
        {[
          "Challenge → Solution → Outcome",
          "Employee quote",
          "HR / People-team quote",
        ].map((slot, i) => (
          <Reveal
            key={slot}
            delay={i * 0.06}
            className="rounded-[18px] border border-dashed border-[#d3d9e8] bg-[#f6f7fb] p-6 min-h-[180px] flex flex-col justify-between"
          >
            <span className="font-outfit font-semibold text-[12px] tracking-[0.1em] uppercase text-[#8a95b4]">
              {slot}
            </span>
            <span className="font-jakarta text-[13.5px] text-[#a9b2ca]">
              Case study / testimonial slot — add real content here.
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
