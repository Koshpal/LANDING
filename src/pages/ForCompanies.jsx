import React from "react";
import { Check, Circle, Lightbulb, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Tag from "../components/site/Tag";
import { H2, Lead } from "../components/site/Heading";
import PrivacyFirst from "../components/site/PrivacyFirst";
import { MagentaHero, PinkTag, CtaBand, StepsSection, GREEN } from "../components/site/PageParts";

/* Figma "Solutions for Companies". The template's automation-agency copy (cards, third "See" bullet,
   "Long retainers" row, repeated card eyebrows) is replaced with Koshpal wording; layout and styling follow the design. */
const OUTCOMES = [
  { n: "01", t: "Engagement", d: "A benefit employees actually use: 1:1 expert sessions and an app they come back to, all year.", card: "bg-[#eeece3] text-[#171412]", ghost: "text-black/[0.08]", y: 0 },
  { n: "02", t: "Confidence", d: "Employees understand their money, plan ahead and feel in control, long before anything goes wrong.", card: "bg-[#171412] text-white", ghost: "text-white/[0.1]", y: 1 },
  { n: "03", t: "Retention", d: "A benefit that supports people beyond payday shows you care about their lives, not just their output.", card: "bg-[#9efc65] text-black", ghost: "text-black/[0.12]", y: 2 },
  { n: "04", t: "Productivity", d: "Less money stress means fewer distractions, so people can focus on the work in front of them.", card: "bg-[#3255ff] text-white", ghost: "text-black/[0.18]", y: 3 },
];

const POINTS = ["Engagement, confidence and participation over time", "The themes employees ask about most", "Board-ready summaries, no individual data"];

const CASES = [
  { e: "Adoption", t: "A benefit people use", d: "Add financial wellbeing with confidence, and report on workforce-level impact, without ever seeing an individual’s data.", Icon: Circle },
  { e: "Evidence", t: "A number you can defend", d: "Back a benefit that supports productivity and retention, with anonymised insight to track what it delivers.", Icon: ShieldCheck },
  { e: "Simplicity", t: "One platform, not ten", d: "Replace scattered webinars, apps and one-off consultations with a single, integrated experience.", Icon: Lightbulb },
];

const STEPS = [
  { t: "Scope together", d: "We learn about your people and goals, and shape the programme around them." },
  { t: "Launch", d: "Employees get the app and their expert, with onboarding handled for you." },
  { t: "Sustain", d: "Ongoing workshops and insight keep engagement, and impact, growing." },
];

export default function ForCompanies() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/for-hr" title="Solutions for companies" description="Turn financial wellbeing into measurable business value: engagement, productivity and retention, with anonymised workforce insight and complete employee privacy." />
      <main id="main">
        <MagentaHero
          gradient={GREEN}
          tag="for Company & leadership"
          title="Turn financial wellbeing into measurable"
          pill="business value"
          lead="Koshpal improves the things leadership already cares about, engagement, productivity and retention, and gives you anonymised workforce insight to see it happen, without ever compromising an individual’s privacy."
          primary={{ label: "Book a demo", to: "/demo" }}
          secondary={{ label: "See the platform", to: "/platform" }}
          padBottom={172}
        />

        {/* four outcomes */}
        <section className="bg-white px-5 py-16 md:px-10 md:pb-20 md:pt-20">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>The Business Case</Tag>
            <H2 className="mt-6 max-w-[1000px] text-[#171b26]">
              <span className="text-[#3b3fbc]">Four outcomes</span> leadership can feel, and measure
            </H2>
          </div>
          {/* staircase on desktop, 2-up grid below */}
          <ul className="mx-auto mt-12 grid max-w-[640px] grid-cols-1 gap-4 sm:grid-cols-2 lg:relative lg:mt-[79px] lg:block lg:h-[1036px] lg:max-w-[1200px]">
            {OUTCOMES.map((o) => (
              <li
                key={o.n}
                className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden p-4 lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:h-[345px] lg:w-1/4 lg:min-h-0 ${o.card}`}
                style={{ "--l": `${o.y * 25}%`, "--t": `${[0, 242, 482, 690][o.y]}px` }}
              >
                <span aria-hidden="true" className={`pointer-events-none absolute -top-2 right-0 select-none font-figtree text-[120px] font-light leading-none tracking-[-0.04em] ${o.ghost}`}>{o.n}</span>
                <div className="relative">
                  <p className="font-figtree text-[26px] leading-8">{o.n}</p>
                  <h3 className="font-figtree text-[20px] leading-6">{o.t}</h3>
                </div>
                <p className="relative max-w-[270px] font-figtree text-[14px] leading-[1.25]">{o.d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* employer dashboard */}
        <section className="bg-[#3b3fbc] px-5 py-16 text-white md:px-10 md:py-[120px]">
          <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[536px_minmax(0,1fr)] lg:gap-[60px]">
            <img src="/img/pages/model.jpg" alt="A smiling person holding a product jar" width="536" height="628" loading="lazy" className="aspect-[536/628] w-full max-w-[536px] rounded-[30px] object-cover [object-position:62%_50%]" />
            <div>
              <PinkTag>The Employer Dashboard</PinkTag>
              <h2 className="mt-6 max-w-[660px] font-figtree text-[clamp(32px,3.89vw,56px)] font-medium leading-[1.04] tracking-[-0.02em]">Insight you can act on, and report with confidence</h2>
              <p className="mt-5 max-w-[620px] font-stack text-[clamp(17px,1.39vw,20px)] leading-[1.3]">
                A clear view of how financial wellbeing is landing across the organisation, so you can show impact to leadership and shape your programme, all from anonymised, aggregated data.
              </p>
              <ul className="mt-8 flex flex-col gap-6">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-3 font-stack text-[18px] leading-6">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-[#a0fa6b]" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PrivacyFirst
          seeTitle="What HR sees"
          neverTitle="What HR never sees"
          title="Useful to HR. Invisible at the individual level."
          lead="Koshpal is private by design. Conversations stay between the employee and their expert. You get insight that’s genuinely useful, and never traceable to a person."
          see={["Anonymised, aggregated trends", "Engagement and participation", "The themes people want help with"]}
          never={["Any individual’s data", "Who asked what", "The content of any session"]}
        />

        {/* three cases */}
        <section className="bg-white px-5 pb-16 pt-10 md:px-10 md:pb-[100px] md:pt-[80px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>Every seat at the table</Tag>
            <H2 className="mt-6 text-[#0b0b0c]">One platform, three clear cases</H2>
            <Lead className="mt-4 max-w-[760px] text-[#0b0b0c]">Legacy benefits often treat the symptoms of financial stress, not the cause. Koshpal is the ongoing relationship employees actually use.</Lead>
            <ul className="mt-12 grid w-full gap-[14px] md:mt-[78px] md:grid-cols-3">
              {CASES.map(({ e, t, d, Icon }) => (
                <li key={t} className="flex flex-col items-center rounded-[40px] bg-[#f5f5f5] px-6 pb-9 pt-10 md:rounded-[50px] md:px-[34px] md:pb-[38px] md:pt-[44px]">
                  <p className="font-figtree text-[16px] font-semibold leading-5">{e}</p>
                  <h3 className="mt-[10px] font-figtree text-[18px] leading-6">{t}</h3>
                  <span className="mt-6 flex size-[138px] items-center justify-center rounded-[40px] bg-[#3b3fbc]">
                    <Icon className="size-[34%] text-[#a6a8ea]" aria-hidden="true" strokeWidth={2.2} />
                  </span>
                  <p className="mt-[34px] max-w-[310px] font-figtree text-[17px] leading-[22px]">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <StepsSection
          tag="Getting Started"
          title="A rollout that's light on your team"
          lead="From first conversation to a live programme, Koshpal does the heavy lifting."
          steps={STEPS}
          rowH={206}
        />

        <CtaBand cta="Book a demo" wide py={140}>Bring Koshpal to your people.</CtaBand>
      </main>
      <Footer />
    </div>
  );
}
