import React from "react";
import { PageShell, PageHero, CtaBand } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal, Eyebrow } from "../components/b2b/primitives";
import { BudgetCard, RemindersCard, SessionCard, CashFlowCard, GoalsCard, TagsCard, CashOnHandCard } from "../components/b2b/SampleUI";
import NumberedSteps from "../components/b2b/NumberedSteps";
import DeviceFrame from "../components/b2b/DeviceFrame";
import Needs from "../components/b2b/Needs";

/* Brief section 7: open with "one program, four pillars", one block per
   pillar, real screens in the app section, close with how the coach and
   the app work together. */
function Pillar({ id, n, title, lead, points, visual, flip, tone = "white" }) {
  return (
    <Section tone={tone} id={id}>
      <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
        <Reveal className={flip ? "lg:order-2" : ""}>
          <Eyebrow>{`Pillar ${n}`}</Eyebrow>
          <h2 className="font-outfit font-bold tracking-[-0.028em] leading-[1.1] mt-4 text-[27px] sm:text-[34px] lg:text-[40px] text-[#0b1533]">
            {title}
          </h2>
          <p className="font-jakarta mt-4 text-[17px] leading-[1.65] text-[#3a4468] max-w-[52ch]">{lead}</p>
          <ul className="mt-5 grid gap-2.5 font-jakarta text-[15px] text-[#3a4468]">
            {points.map((t) => (
              <li key={t} className="b2b-row flex gap-2.5">
                <span className="text-primary font-bold">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className={`max-w-[520px] w-full mx-auto lg:mx-0 ${flip ? "lg:order-1" : ""}`}>
          {visual}
        </Reveal>
      </div>
    </Section>
  );
}

export default function Platform() {
  return (
    <PageShell
      seo={{
        title: "Platform",
        path: "/platform",
        description:
          "One program, four pillars: personalised education, AI-powered insight, 1:1 sessions with certified financial experts, and continuous support for employees.",
      }}
    >
      <PageHero
        eyebrow="Platform"
        title="One program, four pillars."
        sub="Learn, Understand, Connect and Grow. Together they give every employee continuous financial support, from their first salary to major life milestones."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/privacy-trust", label: "How privacy works" }}
      />

      <Pillar
        id="learn"
        n="1"
        title="Learn"
        lead="Financial education that adapts to an employee's stage of life. Practical and relevant, so it can be used the same week."
        points={[
          "Personalised to where each person is in life",
          "Workshops and webinars alongside on-demand learning",
          "Financial health assessments to see where to start",
        ]}
        visual={<GoalsCard />}
      />
      <Pillar
        id="understand"
        n="2"
        title="Understand"
        lead="AI-powered insight and behavioural intelligence help employees see their own habits and patterns, and make better decisions with them."
        points={[
          "Budgets and transactions in one place, with tags to organise them",
          "Cash flow that shows where the month went",
          "Insights written in plain language",
        ]}
        visual={<BudgetCard />}
        flip
        tone="tint"
      />
      <Pillar
        id="connect"
        n="3"
        title="Connect"
        lead="One-on-one conversations with certified financial experts. These sessions are about understanding goals, answering questions and solving challenges. They are never about selling products."
        points={[
          "Certified experts, such as CFPs, CAs and CFAs",
          "No commissions, so the guidance is independent",
          "Conversations with experts are private",
        ]}
        visual={<SessionCard />}
      />
      <Needs kind="VERIFY" note="'unlimited' access to experts, session allowance" />
      <Pillar
        id="grow"
        n="4"
        title="Grow"
        lead="Financial confidence isn't how much someone knows. It's how confidently they decide over time. Koshpal keeps supporting employees as their lives change."
        points={[
          "From a first salary to major life milestones",
          "Dues and reminders keep the plan on track",
          "Progress is measured over time, not in a single session",
        ]}
        visual={<RemindersCard />}
        flip
        tone="tint"
      />

      <Section tone="white" id="app">
        <SectionHead
          eyebrow="The app"
          title="The coach gives understanding. The app keeps the plan alive."
          lede="Budgets, transactions, dues and reminders, goals, tags, cash on hand and cash flow. All in one place, on mobile and on the web."
        />
        <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-10 items-center">
          <DeviceFrame
            variant="phone"
            src="/assets/app-home.png"
            alt="The Koshpal app home screen with sample balances and linked accounts"
            width={600}
            height={1218}
            sample
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <CashFlowCard />
            <BudgetCard />
            <TagsCard />
            <CashOnHandCard />
          </div>
        </div>
        <div className="mt-4"><Needs kind="PROOF" note="approved high-resolution app screenshots (Budgets, Transactions, Dues & Reminders, Goals, Tags, Cash on Hand, Cash Flow)" /></div>
      </Section>

      <Section tone="tint" id="together">
        <SectionHead
          eyebrow="How they work together"
          title="Talk, plan, act, stay on track."
        />
        <NumberedSteps
          steps={[
            { h: "Talk", p: "A session with an expert to understand goals and questions." },
            { h: "Plan", p: "The plan becomes budgets and goals in the app." },
            { h: "Act", p: "Day-to-day tracking shows what's actually happening." },
            { h: "Stay on track", p: "Reminders and insights keep the plan from being forgotten." },
          ]}
        />
      </Section>

      <CtaBand
        title="See the program in action."
        sub="We'll show you the employee experience and what HR sees."
        secondary={{ to: "/for-hr", label: "For HR" }}
        note="Your salary is private. Financial stress doesn't have to be invisible."
      />
    </PageShell>
  );
}
