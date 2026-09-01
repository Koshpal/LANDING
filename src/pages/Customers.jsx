import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";

/* No fabricated customers, logos, numbers or quotes anywhere on this page.
   Every card is a labelled slot for real material. */
export default function Customers() {
  return (
    <PageShell
      seo={{
        title: "Customers",
        path: "/customers",
        description:
          "How organisations run Koshpal — adoption, engagement and employee feedback from live financial wellness programs.",
      }}
    >
      <PageHero
        eyebrow="Customers"
        title="Trusted by employees. Valued by organisations."
        sub="As Koshpal programs go live, this is where their real adoption, engagement and feedback lives — never placeholder numbers presented as results."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/business-impact", label: "The business case" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Organisations running Koshpal"
          title="Logos appear here as programs go live."
        />
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-10 min-w-[140px] grid place-items-center rounded-lg border border-dashed border-[#d3d9e8] bg-[#f6f7fb] font-outfit font-semibold text-[11px] tracking-[0.06em] text-[#8a95b4]"
            >
              CLIENT LOGO
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead dark eyebrow="Case studies" title="Challenge → solution → outcome." />
        <div className="grid md:grid-cols-3 gap-[18px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.06} className="rounded-[18px] border border-dashed border-[#ffffff24] bg-[#ffffff0f] p-6 min-h-[220px] flex flex-col justify-between">
              <span className="font-outfit font-semibold text-[12px] tracking-[0.1em] uppercase b2b-on-dark-muted">
                Case study {i + 1}
              </span>
              <span className="font-jakarta text-[13.5px] b2b-on-dark-soft">
                Company · industry · workforce size · what changed. Links to the full story.
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="In their words" title="Quotes from HR teams and employees." />
        <div className="grid md:grid-cols-2 gap-[18px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06} className="rounded-[18px] border border-dashed border-[#d3d9e8] bg-[#f6f7fb] p-6 min-h-[150px]">
              <span className="font-outfit font-semibold text-[12px] tracking-[0.1em] uppercase text-[#8a95b4]">
                {i % 2 === 0 ? "HR / People team" : "Employee"} quote
              </span>
              <p className="font-jakarta text-[13.5px] text-[#a9b2ca] mt-3">Testimonial slot — add a real, attributable quote.</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <PageCta
        title="Add your team to this page."
        sub="Start with a walkthrough of the employee experience and the HR view."
        secondary={{ to: "/for-hr", label: "For HR & People teams" }}
      />
    </PageShell>
  );
}
