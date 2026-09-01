import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";
import Placeholder from "./Placeholder";

/* 04 — What employees actually experience. Realistic UI-card moments rather
   than a paragraph. */
const STEPS = [
  { t: "Payday", d: "Salary lands. Koshpal quietly organises the month's financial activity — no setup, no spreadsheet." },
  { t: "A pattern surfaces", d: "“Dining is up 18% on your usual month.” A plain-language nudge, not a lecture." },
  { t: "A goal gets closer", d: "“You're ₹8,000 from your emergency fund.” Progress is visible and monthly targets are clear." },
  { t: "A lesson that fits", d: "A three-minute read on restructuring an EMI — because that's what this month calls for." },
  { t: "A question worth asking", d: "“Should I prepay the loan or invest?” One tap books time with a qualified coach." },
];

export default function EmployeeJourney() {
  return (
    <Section tone="white" id="employee-experience">
      <SectionHead
        eyebrow="Employee experience"
        title="What your employees actually experience."
        lede="Not a dashboard they have to learn — a steady sequence of small, useful moments across the month."
      />
      <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
        <ol className="grid gap-3.5">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.t}
              delay={i * 0.05}
              className="flex gap-4 rounded-[16px] border border-[#e9ecf7] bg-[#f7f8fd] p-4 sm:p-5"
            >
              <span className="flex-none w-7 h-7 rounded-full bg-primary text-[#fff] grid place-items-center font-outfit font-bold text-[13px]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-outfit font-semibold text-[16px] text-[#0b1533]">{s.t}</h3>
                <p className="font-jakarta text-[14px] leading-[1.55] text-[#3a4468] mt-1">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.1} className="lg:sticky lg:top-28">
          <Placeholder variant="phone" label="Employee app" />
        </Reveal>
      </div>
    </Section>
  );
}
