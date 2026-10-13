import React, { useState } from "react";
import { Section, SectionHead, Reveal } from "./primitives";
import { SessionCard, BudgetCard, CashFlowCard, RemindersCard } from "./SampleUI";
import { track } from "../../lib/analytics";

/* Question 3 (day to day): talk to an expert, get a plan, act on it, stay on
   track. Sample-data panels stand in for app screens until approved real
   screenshots are supplied (CONTENT_NEEDED.md #20). */
const STEPS = [
  {
    id: "talk",
    tab: "Talk",
    h: "Talk to an expert",
    p: "Bring a goal or a question. The expert listens, asks, and helps you see where you stand.",
    Visual: SessionCard,
  },
  {
    id: "plan",
    tab: "Plan",
    h: "Leave with a plan",
    p: "The plan becomes budgets and goals in the app, so it doesn't stay in a notebook.",
    Visual: BudgetCard,
  },
  {
    id: "act",
    tab: "Act",
    h: "See what's really happening",
    p: "Transactions and cash flow show where the month is going, in plain terms.",
    Visual: CashFlowCard,
  },
  {
    id: "stay",
    tab: "Stay on track",
    h: "Never miss a due date",
    p: "Reminders for rent, EMIs and cards keep the plan from being forgotten.",
    Visual: RemindersCard,
  },
];

export default function ProductWalkthrough() {
  const [active, setActive] = useState(0);
  const s = STEPS[active];
  const V = s.Visual;
  const select = (i) => {
    setActive(i);
    track("walkthrough_step", { step: STEPS[i].id });
  };
  const onKey = (e) => {
    if (e.key === "ArrowRight") select((active + 1) % STEPS.length);
    if (e.key === "ArrowLeft") select((active - 1 + STEPS.length) % STEPS.length);
  };

  return (
    <Section tone="white" id="employee-experience">
      <SectionHead
        eyebrow="What employees experience"
        title="Talk to an expert, get a plan, act on it."
        lede="The expert gives understanding. The app keeps the plan from being forgotten."
      />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div role="tablist" aria-label="Employee journey" onKeyDown={onKey} className="flex flex-wrap gap-2">
            {STEPS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={i === active}
                aria-controls="walkthrough-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                className={`px-4 py-2 rounded-full font-outfit font-semibold text-[14px] border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  i === active
                    ? "bg-primary text-[#fff] border-primary"
                    : "bg-[#fff] text-[#3a4468] border-[#dfe3f2] hover:border-primary"
                }`}
                style={i === active ? { color: "#fff" } : undefined}
              >
                {i + 1}. {t.tab}
              </button>
            ))}
          </div>
          <div id="walkthrough-panel" role="tabpanel" aria-labelledby={`tab-${s.id}`} className="mt-7 min-h-[110px]">
            <h3 className="font-outfit font-bold text-[24px] text-[#0b1533]">{s.h}</h3>
            <p className="font-jakarta text-[17px] leading-[1.65] text-[#3a4468] mt-2">{s.p}</p>
          </div>
        </div>
        <Reveal key={s.id} className="max-w-[520px] w-full mx-auto lg:mx-0">
          <V />
        </Reveal>
      </div>
    </Section>
  );
}
