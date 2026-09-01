import React from "react";
import { PageShell, PageHero, PageCta, CardGrid } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";

const EMP = [
  { h: "Financial health overview", p: "A single score and view of where each employee stands this month." },
  { h: "Automated transaction tracking", p: "Spending is captured and categorised automatically — no spreadsheets." },
  { h: "Spending insights", p: "Plain-language patterns: where money goes and what changed." },
  { h: "Budgets", p: "Simple limits per category with gentle, timely alerts." },
  { h: "Financial goals", p: "Emergency fund, a home, a trip — tracked with monthly targets." },
  { h: "Personalised recommendations", p: "Next best action, tuned to each person's situation." },
  { h: "Financial education", p: "Short, practical lessons on tax, debt, investing and planning." },
  { h: "Expert guidance", p: "One-to-one sessions with qualified financial coaches when it matters." },
];

const HR = [
  { h: "Easy rollout", p: "Onboard your workforce in days, not quarters." },
  { h: "Employee engagement", p: "A benefit people open every month, not once a year." },
  { h: "Program analytics", p: "Adoption, activity and wellness trends over time." },
  { h: "Aggregated insights", p: "Understand workforce financial health — never individual detail." },
  { h: "Wellness reporting", p: "Board-ready summaries of participation and outcomes." },
  { h: "Communication support", p: "Templates and assets to launch and sustain the program." },
];

export default function EmployeeFinancialWellness() {
  return (
    <PageShell seo={{ title: "Employee Financial Wellness", path: "/employee-financial-wellness", description: "Give employees the tools, insights and expert guidance to make better financial decisions — and give employers a simple, measurable way to deliver financial wellness at scale." }}>
      <PageHero
        eyebrow="Employee financial wellness"
        title="Build a financially healthier workforce."
        sub="Koshpal gives employees the tools, insights and guidance to make better financial decisions — and gives employers a simple way to deliver financial wellness at scale."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/platform", label: "See the platform" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="For employees"
          title="Everything an employee needs to feel in control of money."
          lede="One experience that turns everyday financial activity into clarity, better habits and confident decisions."
        />
        <CardGrid items={EMP} cols={4} />
        <Reveal className="mt-10 flex justify-center"><Placeholder variant="phone" label="Employee app" /></Reveal>
      </Section>

      <Section tone="dark">
        <SectionHead
          dark
          eyebrow="For employers"
          title="Financial wellness you can actually run — and measure."
          lede="Koshpal handles the employee experience. You get a clean way to launch it, keep people engaged and report on impact."
        />
        <CardGrid items={HR} cols={3} tone="onDark" />
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Why it works"
          title="A benefit that compounds."
          lede="Financial confidence isn't built in a single webinar. Koshpal is always on — small nudges, steady progress, expert help on the hard questions."
        />
        <div className="grid sm:grid-cols-3 gap-[18px]">
          {[
            ["Always on", "Support every payday, not once a year."],
            ["Personal", "Guidance shaped by each person's real situation."],
            ["Private", "Individual financial data never reaches the employer."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.05} className="bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-6 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-[7px]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <PageCta
        title="Give your people a financial wellness benefit they'll use."
        sub="A 30-minute walkthrough of the employee experience and the HR view."
        secondary={{ to: "/business-impact", label: "See the business case" }}
      />
    </PageShell>
  );
}
