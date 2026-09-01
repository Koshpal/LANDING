import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";

const TRACKS = [
  { h: "Money basics", items: ["Budgeting that sticks", "Building an emergency fund", "Saving on an irregular income"] },
  { h: "Debt", items: ["Credit cards without the trap", "Personal & consumer loans", "Prioritising which debt to clear"] },
  { h: "Investing", items: ["Mutual funds & SIPs", "Risk and time horizon", "Asset allocation basics"] },
  { h: "Tax", items: ["Planning through the year", "Tax-saving investments", "Old vs. new regime"] },
  { h: "Life planning", items: ["Marriage & shared finances", "Buying a home", "Planning for children", "Retirement"] },
  { h: "Protection", items: ["Health cover", "Term life", "What insurance is not for"] },
];

export default function FinancialEducation() {
  return (
    <PageShell
      seo={{
        title: "Financial Education",
        path: "/financial-education",
        description:
          "Practical financial education for employees — short lessons on budgeting, debt, investing, tax, insurance and life planning that people can use the same week.",
      }}
    >
      <PageHero
        eyebrow="Financial education"
        title="Financial knowledge employees can actually use."
        sub="Not a course library nobody finishes — short, specific lessons that meet employees at the decision they're facing right now."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/platform", label: "See the platform" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="What's covered"
          title="Six tracks, built around real life."
          lede="Each track is a set of short reads and explainers. Content is surfaced in context — the EMI lesson shows up when an EMI does."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {TRACKS.map((t, i) => (
            <Reveal key={t.h} delay={(i % 3) * 0.05} className="bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-6 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-3">{t.h}</h3>
              <ul className="grid gap-1.5 font-jakarta text-[14px] text-[#3a4468]">
                {t.items.map((x) => (
                  <li key={x} className="flex gap-2"><span className="text-primary font-bold">·</span>{x}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead
          dark
          eyebrow="How it's delivered"
          title="In the flow, not in a separate portal."
          lede="Education lives inside the same experience as tracking and coaching — so learning is one tap from the moment it's relevant."
        />
        <Reveal><Placeholder variant="phone" label="Lesson in the app" /></Reveal>
      </Section>

      <PageCta
        title="Give employees financial knowledge that lands."
        sub="See how education, insights and coaching work together in one experience."
        secondary={{ to: "/financial-coaching", label: "Financial coaching" }}
      />
    </PageShell>
  );
}
