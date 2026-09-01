import React from "react";
import { PageShell, PageHero, PageCta, CardGrid } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";

const LAYERS = [
  {
    h: "Financial intelligence",
    p: "Automated tracking, categorisation and insight — Koshpal turns raw financial activity into a clear picture and a next best action.",
    tags: ["Auto-tracking", "Insights", "Budgets", "Goals"],
  },
  {
    h: "Financial education",
    p: "Short, practical lessons on tax, debt, investing, insurance and life planning — knowledge employees can use the same week.",
    tags: ["Tax", "Debt", "Investing", "Planning"],
  },
  {
    h: "Human guidance",
    p: "Qualified financial coaches for the decisions technology can't make alone — confidential, one-to-one, on demand.",
    tags: ["1:1 sessions", "Confidential", "Qualified"],
  },
];

export default function Platform() {
  return (
    <PageShell seo={{ title: "Platform", path: "/platform", description: "One platform for employee financial wellbeing: financial intelligence, financial education and human guidance in a single employee experience, with an aggregated dashboard for HR." }}>
      <PageHero
        eyebrow="The platform"
        title="One platform for your employees' financial wellbeing."
        sub="Financial intelligence, financial education and human guidance — combined into a single employee experience, with an aggregated dashboard for HR."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/employee-financial-wellness", label: "For employees" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Architecture"
          title="Three layers, one experience."
          lede="Each layer is useful on its own. Together they cover the full range of what an employee needs — from a daily spending nudge to a major life decision."
        />
        <div className="grid gap-[18px] lg:grid-cols-3">
          {LAYERS.map((l, i) => (
            <Reveal key={l.h} delay={(i % 3) * 0.06} className="bg-[#f6f7fb] border border-[#e3e7f1] rounded-[18px] p-7 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[21px] leading-[1.2] text-[#0e1a3c] mb-2">{l.h}</h3>
              <p className="font-jakarta text-[15px] leading-[1.6] text-[#3f4a63]">{l.p}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {l.tags.map((t) => (
                  <span key={t} className="font-outfit font-medium text-[12px] text-[#6b7590] bg-[#fff] border border-[#e3e7f1] px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead
          dark
          eyebrow="How it comes together"
          title="From financial activity to financial wellbeing."
        />
        <div className="grid gap-2.5 max-w-[560px]">
          {[
            "Financial intelligence · education · human guidance",
            "Employee financial wellness experience",
            "Aggregated, anonymised program signals",
            "HR dashboard — adoption, engagement, outcomes",
          ].map((s, i, arr) => (
            <React.Fragment key={s}>
              <Reveal delay={i * 0.05} className="rounded-[14px] border border-[#ffffff24] bg-[#ffffff0f] px-5 py-3.5 font-outfit font-semibold text-[15px] b2b-on-dark-h">
                {s}
              </Reveal>
              {i < arr.length - 1 && (
                <div className="justify-self-center text-[#8fa6e8]">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M7 0v11m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Section>

      <Section tone="white" id="hr-dashboard">
        <SectionHead
          eyebrow="HR dashboard"
          title="One view for the people running the program."
          lede="Everything HR needs to launch, sustain and report on financial wellness — built on aggregated data, never individual financial detail."
        />
        <Reveal className="mb-10"><Placeholder variant="browser" label="HR dashboard — aggregated view" ratio="16/9" /></Reveal>
        <CardGrid
          items={[
            { h: "Adoption", p: "Who's enrolled and activated, by team or location." },
            { h: "Engagement", p: "Monthly active use and the features people rely on." },
            { h: "Wellness trends", p: "Aggregated financial-health movement over time." },
            { h: "Program utilisation", p: "Coaching sessions, education completed, goals set." },
            { h: "Impact reporting", p: "Board-ready summaries you can export." },
            { h: "Communications", p: "Launch assets and ongoing nudges for your workforce." },
          ]}
          cols={3}
        />
      </Section>

      <PageCta
        title="See the platform in one walkthrough."
        sub="The employee app, the coaching layer and the HR dashboard — in 30 minutes."
        secondary={{ to: "/security", label: "Privacy & security" }}
      />
    </PageShell>
  );
}
