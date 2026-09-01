import React from "react";
import { PageShell, PageHero, PageCta, CardGrid } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";
import WhoItsFor from "../components/b2b/WhoItsFor";

const PROBLEMS = [
  "Employees are financially stressed — and it shows up at work.",
  "Existing benefits are underused and hard to measure.",
  "Financial education tends to be one-off, then forgotten.",
  "HR has little visibility into workforce financial wellbeing.",
  "Employees don't know where to get trustworthy financial guidance.",
];

const DEIM = [
  { h: "Deploy", p: "Easy employee onboarding that fits your existing benefits workflow." },
  { h: "Engage", p: "Ongoing financial wellness people actually return to each month." },
  { h: "Measure", p: "Aggregated program analytics — adoption, engagement, outcomes." },
  { h: "Improve", p: "Spot where to strengthen your benefits strategy next." },
];

export default function ForHr() {
  return (
    <PageShell seo={{ title: "For HR & People Teams", path: "/for-hr", description: "Make financial wellness a benefit employees actually use. Deploy in days, keep people engaged, and report on adoption and outcomes — without exposing anyone’s private finances." }}>
      <PageHero
        eyebrow="For HR & People teams"
        title="Make financial wellness a benefit employees actually use."
        sub="Built for CHROs, People Ops, benefits and L&D leaders who want a financial wellness program that's simple to run and easy to justify."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/business-impact", label: "The business case" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="The problem"
          title="You already know financial stress is a workforce issue."
          lede="What's missing is a way to address it that doesn't add headcount, doesn't expose private data, and reports on itself."
        />
        <ul className="grid gap-2.5 max-w-[640px]">
          {PROBLEMS.map((p, i) => (
            <Reveal
              key={p}
              delay={i * 0.04}
              className="flex gap-3 items-start rounded-[14px] border border-[#e3e7f1] bg-[#f6f7fb] px-5 py-3.5 font-jakarta text-[15px] text-[#3f4a63]"
            >
              <span className="text-primary font-bold mt-0.5">—</span>
              {p}
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <SectionHead
          dark
          eyebrow="What Koshpal gives HR"
          title="Deploy. Engage. Measure. Improve."
        />
        <CardGrid items={DEIM} cols={4} tone="onDark" />
        <Reveal className="mt-10"><Placeholder variant="browser" label="HR dashboard" ratio="16/9" tone="brand" /></Reveal>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Fits how you work"
          title="Designed to slot into your benefits stack."
          lede="No new system for your team to learn. Launch it alongside what you already offer."
        />
        <CardGrid
          items={[
            { h: "Fast to launch", p: "Live for your workforce in days." },
            { h: "Low HR lift", p: "Koshpal runs the experience and the comms." },
            { h: "Privacy-safe", p: "You see program impact, not personal finances." },
            { h: "Reportable", p: "Numbers you can take to leadership every quarter." },
          ]}
          cols={4}
        />
      </Section>

      <WhoItsFor />

      <PageCta
        title="Bring financial wellness to your workforce."
        sub="See exactly what rollout, engagement and reporting look like for a team your size."
        secondary={{ to: "/employee-financial-wellness", label: "What employees get" }}
      />
    </PageShell>
  );
}
