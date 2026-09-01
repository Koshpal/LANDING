import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal, CTA } from "../components/b2b/primitives";

const COMPONENTS = [
  ["Income", "What comes in — and how predictable it is."],
  ["Spending", "Where it goes, and whether that matches intent."],
  ["Savings", "A buffer for the unexpected, plus progress toward goals."],
  ["Debt", "The size, cost and structure of what's owed."],
  ["Investments", "Building longer-term security."],
  ["Protection", "Insurance against the events that would otherwise be catastrophic."],
  ["Financial confidence", "Understanding your situation well enough to act on it."],
];

export default function FinancialWellness() {
  return (
    <PageShell
      seo={{
        title: "What is Employee Financial Wellness?",
        path: "/financial-wellness",
        description:
          "A working definition of employee financial wellness, the six components it's made of, why it matters at work, and what a financial wellness program looks like.",
      }}
    >
      <PageHero
        eyebrow="Guide"
        title="What does employee financial wellness actually mean?"
        sub="A definition HR can build a program around — the components it's made of, how financial stress shows up at work, and what a good program looks like."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/platform", label: "See the platform" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Definition"
          title="Control, capacity, and freedom of choice — not just income."
          lede="Financial wellness is having enough control over day-to-day finances, the capacity to absorb a shock, the ability to stay on track toward goals, and the freedom to make choices you want to make. People at similar salaries can be in very different places."
        />
      </Section>

      <Section tone="dark">
        <SectionHead dark eyebrow="What it's made of" title="Six components, plus confidence." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {COMPONENTS.map(([h, p], i) => (
            <Reveal key={h} delay={(i % 3) * 0.05} className="rounded-[20px] border border-[#ffffff24] bg-[#ffffff0f] p-6">
              <h3 className="font-outfit font-semibold text-[17px] b2b-on-dark-h mb-1.5">{h}</h3>
              <p className="font-jakarta text-[14px] leading-[1.55] b2b-on-dark-soft">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="At work"
          title="Why it belongs in an employee benefits strategy."
          lede="Money stress doesn't switch off during working hours. When someone is worried about an EMI or a month-end shortfall, that worry competes for attention. A financial wellness benefit is an employer's most direct lever on that specific pressure."
        />
        <div className="grid sm:grid-cols-3 gap-[18px]">
          {[
            ["It's continuous", "Used every month — not an annual seminar people forget."],
            ["It's contextual", "The lesson on restructuring a loan appears when a loan does."],
            ["It's measurable", "Adoption and engagement are visible from day one."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.05} className="bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-6 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[17px] text-[#0b1533] mb-1.5">{h}</h3>
              <p className="font-jakarta text-[14px] leading-[1.55] text-[#3a4468]">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead dark eyebrow="What a program looks like" title="Automation for the everyday. A human for the hard calls." />
        <div className="grid gap-2.5 max-w-[560px]">
          {[
            "Automated tracking and insight, so people see their real picture",
            "Budgets, goals and nudges that build habits",
            "Practical education, surfaced in context",
            "Access to qualified coaches for major decisions",
            "Aggregated reporting for HR — never individual detail",
          ].map((s, i, arr) => (
            <React.Fragment key={s}>
              <Reveal delay={i * 0.05} className="rounded-[16px] border border-[#ffffff24] bg-[#ffffff0f] px-5 py-3.5 font-outfit font-semibold text-[15px] b2b-on-dark-h">
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

      <Section tone="white">
        <SectionHead eyebrow="Go deeper" title="Related reading." />
        <div className="grid sm:grid-cols-3 gap-[18px]">
          {[
            ["Business impact", "How financial stress becomes a business cost.", "/business-impact"],
            ["Privacy & security", "What HR can and can't see.", "/security"],
            ["HR guides", "Evaluate providers, launch a program, measure ROI.", "/resources/guides"],
          ].map(([h, p, to], i) => (
            <Reveal key={h} delay={i * 0.05} className="bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-6 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[16px] text-[#0b1533] mb-1.5">{h}</h3>
              <p className="font-jakarta text-[13.5px] leading-[1.55] text-[#3a4468] mb-3">{p}</p>
              <CTA to={to} variant="ghost">Read</CTA>
            </Reveal>
          ))}
        </div>
      </Section>

      <PageCta
        title="Turn the definition into a program."
        sub="See how Koshpal delivers each part of financial wellness in one experience."
        secondary={{ to: "/for-hr", label: "For HR & People teams" }}
      />
    </PageShell>
  );
}
