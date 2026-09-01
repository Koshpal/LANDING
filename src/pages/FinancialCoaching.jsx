import React from "react";
import { PageShell, PageHero, PageCta, CardGrid } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";

const QUESTIONS = [
  "Should I take this loan?",
  "How should I plan my taxes this year?",
  "How much should I be saving?",
  "Should I pay off debt or start investing?",
  "How do I plan for buying a house?",
  "Is my emergency fund enough?",
];

export default function FinancialCoaching() {
  return (
    <PageShell seo={{ title: "Financial Coaching", path: "/financial-coaching", description: "Every employee gets access to qualified financial coaches — confidential, one-to-one, and focused on guidance, not selling products." }}>
      <PageHero
        eyebrow="Financial coaching"
        title="Technology for everyday decisions. Experts for the moments that matter."
        sub="Every employee gets access to qualified financial coaches — confidential, one-to-one, and focused on guidance, not selling products."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/platform", label: "See the platform" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="What employees bring to a session"
          title="Real questions, answered by someone qualified."
          lede="The decisions where a nudge isn't enough — where an employee needs to talk it through with an expert who has no product to push."
        />
        <Reveal className="mb-10 max-w-[520px]">
          <Placeholder variant="plain" label="Book a coaching session" ratio="16/10" />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-2.5 max-w-[720px]">
          {QUESTIONS.map((q, i) => (
            <Reveal
              key={q}
              delay={(i % 2) * 0.05}
              className="rounded-[16px] border border-[#e9ecf7] bg-[#f7f8fd] px-5 py-3.5 font-outfit font-medium text-[15px] text-[#0b1533]"
            >
              &ldquo;{q}&rdquo;
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead
          dark
          eyebrow="How it works"
          title="Straightforward for the employee. Invisible to the employer."
        />
        <CardGrid
          items={[
            { h: "Qualified coaches", p: "Vetted financial professionals — not salespeople, not chatbots." },
            { h: "Confidential", p: "Conversations stay between the employee and the coach. The employer never sees them." },
            { h: "On demand", p: "Book a session from inside the app when a question comes up." },
            { h: "Guidance, not sales", p: "Coaches help employees decide — they don't earn commission on the outcome." },
            { h: "Context-aware", p: "Coaches can work from the employee's own goals and spending picture, with permission." },
            { h: "Follow-through", p: "Actions from a session flow back into the app as goals and reminders." },
          ]}
          cols={3}
          tone="onDark"
        />
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Why it's different"
          title="Coaching that complements the technology."
          lede="Most employees never need more than the app. For the ones facing a big decision, a 30-minute conversation with an expert changes the outcome."
        />
        <div className="grid sm:grid-cols-3 gap-[18px]">
          {[
            ["Everyday", "The app: tracking, insight, budgets, goals."],
            ["Occasional", "A coach: loans, taxes, debt vs. invest, big purchases."],
            ["Always", "Private — the employer sees participation, never advice."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.05} className="bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-6 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-[7px]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <PageCta
        title="Give employees an expert to call."
        sub="See how coaching fits alongside the app and the HR dashboard."
        secondary={{ to: "/security", label: "How privacy works" }}
      />
    </PageShell>
  );
}
