import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";
import EmailCapture from "../components/b2b/EmailCapture";

const UPCOMING = [
  ["India Employee Financial Wellness Report", "Workforce financial stress, savings, debt and employer expectations — the annual benchmark.", "In production"],
  ["Financial Stress & the Workplace", "How money pressure interacts with focus, engagement and retention.", "Planned"],
  ["Gen Z vs. Millennials at Work: Money Edition", "How financial priorities and behaviours differ across the workforce.", "Planned"],
];

export default function ResourcesReports() {
  return (
    <PageShell
      seo={{
        title: "Reports & Research",
        path: "/resources/reports",
        description:
          "Koshpal research on employee financial wellness — workplace financial stress, adoption benchmarks and program outcomes. Get notified when each report is published.",
      }}
    >
      <PageHero
        eyebrow="Reports & research"
        title="Data HR leaders can take into a planning meeting."
        sub="Koshpal's research program studies workplace financial stress, program adoption and outcomes. Reports are published here — and only with methodology and sources attached."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/resources", label: "All resources" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Flagship"
          title="India Employee Financial Wellness Report"
          lede="An annual benchmark on how India's workforce is doing financially — stress levels, emergency savings, debt, financial literacy, investment behaviour and what employees expect from employers."
        />
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <div>
            <p className="font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase text-[#6b7597] mb-4">
              In production
            </p>
            <ul className="grid gap-2 font-jakarta text-[14.5px] text-[#3a4468] max-w-[520px]">
              {["Financial stress by salary band and life stage", "Emergency savings and debt exposure", "UPI and everyday spending behaviour", "Financial literacy and investment confidence", "What employees want from a financial wellness benefit"].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-primary font-bold">·</span>{t}</li>
              ))}
            </ul>
            <div className="mt-7">
              <EmailCapture label="Get the report when it's published" cta="Notify me" note="One email when it's out. Work email only." />
            </div>
          </div>
          <Reveal><Placeholder variant="plain" label="Report cover" ratio="3/4" /></Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead dark eyebrow="Pipeline" title="What's next." />
        <div className="grid md:grid-cols-3 gap-[18px]">
          {UPCOMING.map(([h, p, status], i) => (
            <Reveal key={h} delay={i * 0.06} className="rounded-[20px] border border-[#ffffff24] bg-[#ffffff0f] p-6 flex flex-col">
              <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase text-[#8fa6e8] mb-2">{status}</span>
              <h3 className="font-outfit font-semibold text-[16px] b2b-on-dark-h mb-1.5 leading-snug">{h}</h3>
              <p className="font-jakarta text-[13px] leading-[1.5] b2b-on-dark-soft">{p}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 font-jakarta text-[12.5px] b2b-on-dark-muted italic">
          Titles and scope are indicative — no findings are published until the research is complete and sourced.
        </p>
      </Section>

      <PageCta
        title="Want the data applied to your workforce?"
        sub="Book a walkthrough and we'll show the metrics Koshpal reports for a team your size."
        secondary={{ to: "/business-impact", label: "The business case" }}
      />
    </PageShell>
  );
}
