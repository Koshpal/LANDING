import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Needs from "../components/b2b/Needs";

/* Pricing states the model only. No figures exist yet (CONTENT_NEEDED.md #16);
   nothing here implies a price, a discount or a free tier. */
export default function Pricing() {
  return (
    <PageShell
      seo={{
        title: "Pricing",
        path: "/pricing",
        description:
          "Koshpal is priced per employee per month, so the cost scales with the size of your workforce. Talk to us for a quote.",
      }}
    >
      <PageHero
        eyebrow="Pricing"
        title="Priced per employee, per month."
        sub="You pay for the people who have access to the benefit. Talk to us and we'll give you a number for your company size."
        primary={{ to: "/demo", label: "Talk to us" }}
        secondary={{ to: "/platform", label: "See what's included" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="How it works"
          title="One benefit, one line on the invoice."
          lede="Koshpal is an employer-sponsored benefit. Employees don't pay to use it."
        />
        <div className="grid md:grid-cols-3 gap-[18px]">
          {[
            ["The model", "A per-employee, per-month fee. No per-session charges and no products sold to your people."],
            ["What decides the price", "Mainly the number of employees with access. Talk to us about your size and rollout."],
            ["What's included", "1:1 sessions with certified financial experts, the app, AI insights, education, and the HR dashboard with anonymised insights."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.05} className="b2b-card b2b-card-hover bg-[#f7f8fd] p-6">
              <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-[7px]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <Needs kind="PROOF" note="pricing details, or the decision to say 'contact us'" />
          <Needs kind="VERIFY" note="session allowance ('unlimited' is deliverable)" />
        </div>
      </Section>

      <PageCta
        title="Get a number for your company."
        sub="A short conversation is enough. We'll ask about your size and how you'd like to roll out."
        primary={{ to: "/demo", label: "Talk to us" }}
        secondary={{ to: "/resources", label: "Read the guides" }}
      />
    </PageShell>
  );
}
