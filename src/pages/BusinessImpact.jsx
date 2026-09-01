import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";

const CHAIN = [
  "Financial stress",
  "Workplace distraction",
  "Lower engagement",
  "Reduced productivity & higher turnover",
  "Financial wellness intervention",
  "Better financial confidence",
  "A healthier, steadier workforce",
];

export default function BusinessImpact() {
  return (
    <PageShell seo={{ title: "Business Impact", path: "/business-impact", description: "Financial stress is a documented driver of lost focus, engagement and retention. See how an employee financial wellness program acts on all three — with metrics you can report." }}>
      <PageHero
        eyebrow="Business impact"
        title="Financial wellness isn't just a benefit. It's a business strategy."
        sub="When employees are worried about money, focus, output, engagement and retention all take the hit. A financial wellness program is a lever on all four."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/for-hr", label: "For HR & People teams" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="The chain"
          title="How money stress becomes a business cost — and how it's broken."
          lede="Each link is somewhere a financial wellness program can intervene. Koshpal is built to act at the top of the chain, before stress reaches performance."
        />
        <div className="grid gap-2.5 max-w-[560px]">
          {CHAIN.map((s, i) => {
            const turn = i === 4; // the intervention link
            return (
              <React.Fragment key={s}>
                <Reveal
                  delay={i * 0.04}
                  className={`rounded-[16px] border px-5 py-3.5 font-outfit font-semibold text-[15px] ${
                    turn
                      ? "border-primary bg-primary-lightest text-primary"
                      : "border-[#e9ecf7] bg-[#f7f8fd] text-[#0b1533]"
                  }`}
                >
                  {s}
                </Reveal>
                {i < CHAIN.length - 1 && (
                  <div className="justify-self-center text-[#9aa6c8]">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M7 0v11m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead
          dark
          eyebrow="Where it shows up"
          title="Four places financial stress costs you."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {[
            ["Focus", "Money worries pull attention away from work throughout the day."],
            ["Productivity", "Stress reliably drags on day-to-day effectiveness."],
            ["Engagement", "People who feel financially supported feel valued."],
            ["Retention", "Financial wellbeing is now table stakes in a serious benefits offer."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.06} className="rounded-[20px] border border-[#ffffff24] bg-[#ffffff0f] p-5 sm:p-[22px]">
              <h3 className="font-outfit font-semibold text-[18px] b2b-on-dark-h mb-[7px]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.55] b2b-on-dark-soft">{p}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-9 font-jakarta text-[13.5px] b2b-on-dark-muted max-w-[60ch]">
          Koshpal reports on activation, engagement and aggregated financial-confidence movement so you can
          track the intervention's effect for your own workforce — with real numbers, not borrowed stats.
        </p>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Make the case internally"
          title="What to bring to the budget conversation."
          lede="A financial wellness program is straightforward to frame: a recurring, measurable benefit that targets a known driver of turnover and lost productivity."
        />
        <div className="grid sm:grid-cols-3 gap-[18px]">
          {[
            ["Recurring value", "Used all year, not just at open enrolment."],
            ["Measurable", "Adoption and engagement reported from day one."],
            ["Targeted", "Aimed squarely at a documented workforce risk."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.05} className="bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-6 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-[7px]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <PageCta
        title="Put a number on it for your workforce."
        sub="We'll walk through the metrics Koshpal reports and how they map to your goals."
        secondary={{ to: "/platform", label: "See the platform" }}
      />
    </PageShell>
  );
}
