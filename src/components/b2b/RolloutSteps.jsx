import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

const STEPS = [
  ["01 — LAUNCH", "Set the program up", "We work with your HR team to configure the program and communicate it to employees.", "Onboarding → Setup → Comms"],
  ["02 — ENGAGE", "Employees get support", "Your people use Koshpal and receive ongoing, personalised financial support.", "Track → Learn → Improve → Guidance"],
  ["03 — MEASURE", "HR sees the impact", "Aggregated insight into adoption, engagement and financial-wellness outcomes.", "Adoption → Engagement → Outcomes → ROI"],
];

export default function RolloutSteps() {
  return (
    <Section tone="white">
      <SectionHead eyebrow="Rollout" title="From rollout to impact in three steps." />
      <Reveal className="grid md:grid-cols-3 border border-[#e9ecf7] rounded-[20px] overflow-hidden bg-[#f7f8fd] b2b-shadow">
        {STEPS.map(([num, h, p, flow], i) => (
          <div
            key={num}
            className={`p-[26px] sm:p-[30px] ${i < 2 ? "border-b md:border-b-0 md:border-r border-[#e9ecf7]" : ""}`}
          >
            <div className="font-outfit font-extrabold text-[14px] tracking-[0.1em] text-secondary-darkest">{num}</div>
            <h3 className="font-outfit font-semibold text-[20px] text-[#0b1533] my-2.5">{h}</h3>
            <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">{p}</p>
            <div className="font-outfit font-semibold text-[12.5px] text-primary mt-3.5">{flow}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
