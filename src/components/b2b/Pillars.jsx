import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

const PILLARS = [
  {
    num: "01 — UNDERSTAND",
    title: "Turn everyday spending into financial clarity.",
    body: "Automatically capture and categorise transactions so employees can see where their money actually goes.",
    tags: ["Auto-tracking", "Categorisation", "Cash-flow view"],
  },
  {
    num: "02 — IMPROVE",
    title: "Turn insight into better habits.",
    body: "Personalised insights, budgets, alerts and recommendations that guide better everyday decisions.",
    tags: ["Budgets", "Smart insights", "Nudges"],
  },
  {
    num: "03 — LEARN",
    title: "Make financial knowledge practical.",
    body: "Focused education on tax, budgeting, investing, loans & debt, insurance, retirement and goal planning.",
    tags: ["Tax", "Investing", "Debt", "Retirement"],
  },
  {
    num: "04 — GET GUIDANCE",
    title: "When money gets complicated, employees get help.",
    body: "One-to-one sessions with qualified financial experts for personalised guidance when it matters.",
    tags: ["1:1 sessions", "Qualified experts", "On-demand"],
  },
];

export default function Pillars() {
  return (
    <Section tone="white">
      <SectionHead eyebrow="What Koshpal does" title="Four things, working together for every employee." />
      <div className="grid md:grid-cols-2 gap-[18px]">
        {PILLARS.map((p, i) => (
          <Reveal
            key={p.num}
            delay={(i % 2) * 0.06}
            className="b2b-card b2b-card-hover bg-[#fff] p-7"
          >
            <div className="font-outfit font-extrabold text-[13px] tracking-[0.1em] text-secondary-darkest">{p.num}</div>
            <h3 className="font-outfit font-semibold text-[21px] leading-[1.2] my-2.5 text-[#0b1533]">{p.title}</h3>
            <p className="font-jakarta text-[15px] leading-[1.6] text-[#3a4468]">{p.body}</p>
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-outfit font-medium text-[12px] text-[#6b7597] bg-[#f1f3fb] border border-[#e9ecf7] px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
