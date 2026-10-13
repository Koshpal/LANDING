import React from "react";
import { PageShell, PageHero, CtaBand } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal, Eyebrow } from "../components/b2b/primitives";
import DashboardMockup from "../components/b2b/DashboardMockup";
import NumberedSteps from "../components/b2b/NumberedSteps";
import FaqAccordion from "../components/b2b/FaqAccordion";
import Needs from "../components/b2b/Needs";
import { HR_OUTCOMES, STAGES } from "../components/b2b/HrOutcomes";
import { ROLLOUT_STEPS } from "../components/b2b/Rollout";
import { HR_FAQ } from "../content/faq";

export default function ForHr() {
  return (
    <PageShell
      seo={{
        title: "For HR",
        path: "/for-hr",
        description:
          "Offer financial wellness as an employee benefit people actually use, with anonymised, aggregated insight for HR and no individual data.",
      }}
    >
      <PageHero
        eyebrow="For HR and People teams"
        title="A financial wellness benefit your people will use, and a view you can show leadership."
        sub="Health insurance and mental wellness are standard benefits. Financial wellness is the one most workplaces still leave out."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "#measured", label: "How success is measured" }}
      />

      <Section tone="white" id="problem">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Eyebrow>The business problem</Eyebrow>
            <h2 className="font-outfit font-bold tracking-[-0.028em] leading-[1.1] mt-4 text-[27px] sm:text-[34px] lg:text-[40px] text-[#0b1533]">
              One of the biggest sources of stress is the one nobody talks about.
            </h2>
          </div>
          <div>
            <p className="font-jakarta text-[17px] leading-[1.7] text-[#3a4468]">
              Money worries follow people into meetings, difficult decisions and family conversations. We
              believe they quietly affect focus, confidence and well-being at work, and that a good salary
              doesn&apos;t guarantee someone feels in control.
            </p>
            <p className="font-jakarta text-[17px] leading-[1.7] text-[#3a4468] mt-4">
              Webinars once a year and budgeting apps each solve a small part. What&apos;s missing is
              continuous, trusted guidance.
            </p>
            <div className="mt-4">
              <Needs kind="PROOF" note="verified Indian statistics on financial stress and work, with source links" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="tint" id="outcomes">
        <SectionHead eyebrow="What you get" title="Three things HR takes away." />
        <div className="grid md:grid-cols-3 gap-[18px]">
          {HR_OUTCOMES.map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.06} className="b2b-card bg-[#fff] p-6">
              <span className="w-8 h-8 rounded-full bg-primary-lightest text-primary grid place-items-center font-outfit font-bold text-[14px]">{i + 1}</span>
              <h3 className="font-outfit font-semibold text-[18px] text-[#0b1533] mt-3">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468] mt-1.5">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" id="dashboard">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow>The HR dashboard</Eyebrow>
            <h2 className="font-outfit font-bold tracking-[-0.028em] leading-[1.1] mt-4 text-[27px] sm:text-[34px] text-[#0b1533]">
              Trends for the group. Never an individual.
            </h2>
            <p className="font-jakarta mt-4 text-[17px] leading-[1.65] text-[#3a4468]">
              HR sees how many employees have access, how many are active, and which topics come up across
              the workforce. Everything is aggregated and anonymised.
            </p>
            <Needs kind="VERIFY" note="exact metrics HR sees and the minimum group size for anonymisation" />
          </div>
          <DashboardMockup />
        </div>
      </Section>

      <Section tone="tint" id="rollout">
        <SectionHead eyebrow="Rollout" title="Four steps from signing to insight." />
        <NumberedSteps steps={ROLLOUT_STEPS} />
        <div className="mt-4"><Needs kind="VERIFY" note="onboarding timeline and HR effort" /></div>
      </Section>

      <Section tone="white" id="measured">
        <SectionHead
          eyebrow="How success is measured"
          title="Progress in five stages."
          lede="We measure how confidently employees handle money over time, and how much they engage with the benefit. We report what we measure."
        />
        <ol className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {STAGES.map((s, i) => (
            <li key={s} className="rounded-[16px] border border-[#e9ecf7] bg-[#f7f8fd] p-4 list-none">
              <span className="font-outfit font-bold text-[12px] text-primary">Stage {i + 1}</span>
              <div className="font-outfit font-semibold text-[16px] text-[#0b1533] mt-1">{s}</div>
            </li>
          ))}
        </ol>
        <div className="mt-4"><Needs kind="PROOF" note="measured pilot outcomes, with method and date" /></div>
      </Section>

      <Section tone="tint" id="faq">
        <SectionHead eyebrow="Questions" title="What HR teams ask us." />
        <FaqAccordion items={HR_FAQ} />
      </Section>

      <CtaBand
        title="See what your team would see."
        sub="We'll walk through the employee experience and the HR dashboard."
        secondary={{ to: "/pricing", label: "See pricing" }}
      />
    </PageShell>
  );
}
