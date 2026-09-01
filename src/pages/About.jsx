import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";

const BELIEFS = [
  ["Financial wellbeing is workplace infrastructure", "Not a perk bolted on at open enrolment — a benefit people rely on every month."],
  ["Privacy is non-negotiable", "An employee should never trade financial privacy for financial help."],
  ["Technology and people, not one or the other", "Automation for the everyday; a qualified human for the decisions that matter."],
  ["Impact you can measure", "If a program can't be measured, it can't be improved — or defended in a budget review."],
];

export default function About() {
  return (
    <PageShell
      seo={{
        title: "About",
        path: "/about",
        description:
          "Koshpal is building the employee financial wellness infrastructure for India's workforce — a platform companies use to support their people's financial wellbeing.",
      }}
    >
      <PageHero
        eyebrow="About Koshpal"
        title="We're building the financial wellness infrastructure for India's workforce."
        sub="Koshpal helps companies give every employee continuous financial support — practical tools, real education, and access to qualified experts — with a privacy-first view for HR."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/platform", label: "See the platform" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Why we exist"
          title="Most people never got taught how money works. Their employer can change that."
          lede="Financial stress is one of the most common, least-addressed pressures employees carry. Koshpal exists to make credible financial support a standard part of working somewhere."
        />
        <Reveal className="mt-2">
          <Placeholder variant="browser" label="Team / workplace photo" ratio="16/9" />
        </Reveal>
      </Section>

      <Section tone="dark">
        <SectionHead dark eyebrow="What we believe" title="Four principles behind every decision." />
        <div className="grid sm:grid-cols-2 gap-[18px]">
          {BELIEFS.map(([h, p], i) => (
            <Reveal key={h} delay={(i % 2) * 0.06} className="rounded-[20px] border border-[#ffffff24] bg-[#ffffff0f] p-6">
              <h3 className="font-outfit font-semibold text-[17.5px] b2b-on-dark-h mb-[7px]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] b2b-on-dark-soft">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Team & advisors" title="The people behind Koshpal." lede="Founders, product and engineering, plus a panel of qualified financial advisors." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[18px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.05} className="rounded-[20px] border border-dashed border-[#dfe3f2] bg-[#f7f8fd] p-5 text-center">
              <div className="w-16 h-16 rounded-full bg-[#eef1f8] border border-[#e9ecf7] mx-auto mb-3" />
              <div className="font-outfit font-semibold text-[13.5px] text-[#8a95b4]">Name</div>
              <div className="font-jakarta text-[12px] text-[#a9b2ca]">Role</div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 font-jakarta text-[12.5px] text-[#6b7597] italic">Team section — add real names, roles and photos.</p>
      </Section>

      <PageCta
        title="Bring financial wellness to your workplace."
        sub="See how Koshpal would work for a team your size."
        secondary={{ to: "/business-impact", label: "The business case" }}
      />
    </PageShell>
  );
}
