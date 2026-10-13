import React from "react";
import { PageShell, PageHero, CtaBand } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import NumberedSteps from "../components/b2b/NumberedSteps";
import FaqAccordion from "../components/b2b/FaqAccordion";
import Needs from "../components/b2b/Needs";
import { EMPLOYEE_FAQ } from "../content/faq";

/* Warm and reassuring. Exists to build trust and adoption. */
export default function ForEmployees() {
  return (
    <PageShell
      seo={{
        title: "For Employees",
        path: "/for-employees",
        description:
          "Private 1:1 sessions with certified financial experts and an app to act on the plan, offered by your employer. Your finances stay yours.",
      }}
    >
      <PageHero
        eyebrow="For employees"
        title="A private place to talk about money."
        sub="Your employer offers Koshpal as a benefit. You get a certified financial expert to talk to, and an app to put the plan into action."
        primary={{ to: "/privacy-trust", label: "What my employer can see" }}
        secondary={{ to: "#session", label: "What a session is like" }}
      />

      <Section tone="white" id="session">
        <SectionHead
          eyebrow="What happens in a session"
          title="You bring the question. They bring the time."
          lede="Sessions are about understanding your goals and answering your questions. Nobody is trying to sell you anything."
        />
        <NumberedSteps
          cols={3}
          steps={[
            { h: "Tell them what's on your mind", p: "A goal, a worry, a decision you're stuck on. Big or small." },
            { h: "Talk it through", p: "A certified financial expert listens, asks questions and explains your options." },
            { h: "Leave with a plan", p: "Next steps you can follow in the app, with reminders so they don't slip." },
          ]}
        />
      </Section>

      <Section tone="tint" id="visibility">
        <SectionHead
          eyebrow="What your employer can and cannot see"
          title="They see trends. They never see you."
        />
        <div className="grid sm:grid-cols-2 gap-[18px]">
          <Reveal className="b2b-card bg-[#fff] p-6">
            <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-3">Your employer can see</h3>
            <ul className="grid gap-2 font-jakarta text-[14.5px] text-[#3a4468]">
              {["Aggregated, anonymised insights about the group", "How the benefit is being used, in total"].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-primary font-bold">✓</span>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="b2b-card bg-[#fff] p-6">
            <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-3">Your employer cannot see</h3>
            <ul className="grid gap-2 font-jakarta text-[14.5px] text-[#3a4468]">
              {[
                "Your individual financial information",
                "What you discuss with an expert",
                "Anything that identifies you in the group view",
              ].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-[#b21d15] font-bold">✕</span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <p className="mt-5 font-jakarta text-[15px] text-[#3a4468]">
          Asking for guidance should never affect your career.
        </p>
        <div className="mt-2"><Needs kind="VERIFY" note="approved wording of what employers can/cannot see" /></div>
      </Section>

      <Section tone="white" id="todo">
        <SectionHead eyebrow="What you'll need to do" title="Not much." lede="Start with whatever feels easiest." />
        <div className="grid md:grid-cols-3 gap-[18px]">
          {[
            ["Sign in", "Your employer invites you. Create your account and you're in."],
            ["Pick a starting point", "Book a session, open the app, or begin with the learning content."],
            ["Go at your pace", "Use it when it's useful. There's nothing you have to complete."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.06} className="b2b-card bg-[#f7f8fd] p-6">
              <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468] mt-1.5">{p}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 font-jakarta text-[16px] text-[#0b1533] font-medium">
          What it costs you: nothing, if your employer sponsors it.
        </p>
      </Section>

      <Section tone="tint" id="faq">
        <SectionHead eyebrow="Questions" title="What people ask before they trust it." />
        <FaqAccordion items={EMPLOYEE_FAQ} />
      </Section>

      <CtaBand
        eyebrow="Not an employee?"
        title="Thinking about this for your team?"
        sub="Book a demo and we'll show you what employees and HR each see."
      />
    </PageShell>
  );
}
