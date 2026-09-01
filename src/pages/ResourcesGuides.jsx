import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";
import EmailCapture from "../components/b2b/EmailCapture";

const TOC = [
  "What financial wellness is — and isn't",
  "Why employees need it, in plain terms",
  "How to evaluate providers (with a scorecard)",
  "The privacy questions every HR team should ask",
  "Planning a rollout employees will adopt",
  "How to measure adoption and engagement",
  "How to think about ROI",
  "A 90-day launch checklist",
];

const MORE = [
  ["The Privacy Checklist for Financial Wellness Vendors", "The exact questions to ask, and the answers that should worry you."],
  ["Financial Wellness Rollout Playbook", "Comms cadence, channels and the first-90-days plan."],
  ["Measuring Program ROI", "A framework for connecting adoption to business outcomes."],
];

export default function ResourcesGuides() {
  return (
    <PageShell
      seo={{
        title: "HR Guides",
        path: "/resources/guides",
        description:
          "Practical guides for HR and People teams evaluating, launching and measuring an employee financial wellness program.",
      }}
    >
      <PageHero
        eyebrow="HR guides"
        title="Playbooks for choosing, launching and measuring a program."
        sub="Written for People teams doing this for the first time — no vendor spin, just the decisions you'll actually have to make."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/resources", label: "All resources" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Flagship guide"
          title="The HR Guide to Employee Financial Wellness"
          lede="An end-to-end walkthrough — from defining the benefit to reporting on it a year later."
        />
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <div>
            <ol className="grid gap-2 font-jakarta text-[14.5px] text-[#3f4a63] max-w-[560px]">
              {TOC.map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="font-outfit font-bold text-primary tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ol>
            <div className="mt-7">
              <EmailCapture label="Download the guide (PDF)" cta="Email me the PDF" />
            </div>
          </div>
          <Reveal><Placeholder variant="plain" label="Guide cover" ratio="3/4" /></Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead dark eyebrow="More guides" title="Focused deep-dives." />
        <div className="grid md:grid-cols-3 gap-[18px]">
          {MORE.map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.06} className="rounded-[18px] border border-[#ffffff24] bg-[#ffffff0f] p-6">
              <h3 className="font-outfit font-semibold text-[16px] b2b-on-dark-h mb-1.5 leading-snug">{h}</h3>
              <p className="font-jakarta text-[13px] leading-[1.5] b2b-on-dark-soft">{p}</p>
              <span className="inline-block mt-3 font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase text-[#8fa6e8]">
                Coming soon
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <PageCta
        title="Ready to move from reading to a plan?"
        sub="We'll help you scope a program for your workforce in one call."
        secondary={{ to: "/for-hr", label: "For HR & People teams" }}
      />
    </PageShell>
  );
}
