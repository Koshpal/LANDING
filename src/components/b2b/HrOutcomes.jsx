import React from "react";
import { Section, Eyebrow, Reveal, CTA } from "./primitives";
import DashboardMockup from "./DashboardMockup";

/* Question 4: what do I get, and can I show it to leadership?
   Outcomes say what is *measured*, never what has been *achieved*. */
export const HR_OUTCOMES = [
  ["A benefit employees will actually use", "One-to-one sessions with experts and an app they can act in. Not a webinar people forget."],
  ["Anonymised insight into what your people need", "See which money topics come up across the workforce, without seeing any individual."],
  ["A way to track confidence and engagement over time", "Aggregated trends you can take to leadership and review again next quarter."],
];

export const STAGES = ["Awareness", "Understanding", "Planning", "Action", "Confidence"];

export default function HrOutcomes() {
  return (
    <Section tone="white" id="for-hr">
      <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>What HR gets</Eyebrow>
          <h2 className="font-outfit font-bold tracking-[-0.028em] leading-[1.1] mt-4 text-[27px] sm:text-[34px] lg:text-[40px] text-[#0b1533]">
            A benefit people use, and a view you can show leadership.
          </h2>
          <ul className="mt-7 grid gap-5">
            {HR_OUTCOMES.map(([h, p], i) => (
              <Reveal as="li" key={h} delay={i * 0.06} className="list-none flex gap-4">
                <span className="flex-none mt-1 w-7 h-7 rounded-full bg-primary-lightest text-primary grid place-items-center font-outfit font-bold text-[13px]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-outfit font-semibold text-[17px] text-[#0b1533]">{h}</h3>
                  <p className="font-jakarta text-[15px] leading-[1.6] text-[#3a4468] mt-0.5">{p}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-7 font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">
            <span className="font-semibold text-[#0b1533]">How progress is measured: </span>
            {STAGES.join(", ")}.
          </p>
          <div className="mt-6">
            <CTA to="/for-hr" variant="ghost" location="home-hr">See the HR view</CTA>
          </div>
        </div>
        <Reveal delay={0.08}>
          <DashboardMockup />
        </Reveal>
      </div>
    </Section>
  );
}
