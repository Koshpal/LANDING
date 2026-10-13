import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";
import { Dummy, DummyNote, DummyBadge } from "./Dummy";
import StatBlock from "./StatBlock";
import TestimonialCard from "./TestimonialCard";

/* Question 8: has anyone else done this? Everything here is invented and
   labelled. Fictional names only; no real organisations or people. */
const LOGOS = ["Sample Textiles", "Demo Logistics", "Sample Pharma", "Example Retail", "Test Software", "Mock Foods"];
const QUOTES = [
  { quote: "Dummy quote: my team finally has a benefit that people actually talk about.", name: "HR Lead (dummy)", role: "People Operations", org: "Sample Textiles" },
  { quote: "Dummy quote: I asked the questions I'd been too embarrassed to ask anyone.", name: "Employee (dummy)", role: "Operations", org: "Demo Logistics" },
  { quote: "Dummy quote: the session ended with a plan I could follow in the app.", name: "Employee (dummy)", role: "Sales", org: "Example Retail" },
];
const STATS = [
  { value: "00%", label: "Dummy statistic about activation", source: "Dummy source, not real data" },
  { value: "00", label: "Dummy statistic about sessions booked", source: "Dummy source, not real data" },
  { value: "0.0/5", label: "Dummy statistic about session rating", source: "Dummy source, not real data" },
];

export default function ProofDummy() {
  return (
    <Dummy>
      <Section tone="tint" id="proof">
        <SectionHead eyebrow="Proof" title="Has anyone else done this?" lede="Pilot partners, what employees say, and what we've measured." />
        <DummyNote />

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-10">
          {LOGOS.map((l) => (
            <li
              key={l}
              className="h-11 px-5 grid place-items-center rounded-lg border border-dashed border-[#dfe3f2] bg-[#f7f8fd] font-outfit font-bold text-[13px] tracking-[0.04em] text-[#6b7597] list-none"
            >
              {l}
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-3 gap-[18px] mb-10">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name + i} delay={i * 0.06} className="relative">
              <TestimonialCard {...q} />
              <DummyBadge className="absolute top-3 right-3">Dummy</DummyBadge>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-[18px]">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="relative">
              <StatBlock {...s} />
              <DummyBadge className="absolute top-3 right-3">Dummy</DummyBadge>
            </Reveal>
          ))}
        </div>
      </Section>
    </Dummy>
  );
}
