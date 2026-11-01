import React from "react";
import { Check, X } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Tag from "../components/site/Tag";
import PillButton from "../components/site/PillButton";
import Faq from "../components/site/Faq";
import { H2, Lead } from "../components/site/Heading";
import { MagentaHero, CtaBand, PhotoCarousel } from "../components/site/PageParts";
import { HR_FAQ } from "../content/faq";

/* Figma "Pricing". No prices exist yet (the model is per employee, per month), so the design's plan card
   lists what is included instead of a plan name and its template features. */
const PRICE_BLUE =
  "radial-gradient(55% 20% at 50% 0%, #228eff 0%, rgba(34,142,255,0) 100%), linear-gradient(180deg,#156fe6 0%,#005bdd 9%,#024fc5 23%,#0043ab 41%,#003a92 58%,#02327e 76%,#012765 93%,#002458 100%)";

const INCLUDED = [
  ["1:1 expert sessions", "with certified financial professionals, booked as often as needed."],
  ["The Koshpal app", "to track spending, set budgets and goals, and never miss a due date."],
  ["AI insights", "to understand spending and improve finances in one place."],
  ["Financial education", "that meets people in context, with their progress over time."],
  ["Complete privacy", "so conversations and personal data stay with the employee."],
];

const HR_GETS = [
  ["Onboarding support", "means you don’t have to do it alone."],
  ["Employer dashboard", "shows programme usage and impact while protecting individuals’ privacy."],
  ["Ongoing workshops and insight", "keep employees informed and engaged with financial wellbeing."],
  ["Priced per employee, per month,", "so the cost scales with the size of your workforce."],
];

const US = ["Certified experts, on call all year", "Spending, budgets and goals in one app", "Anonymised, aggregated insight for HR", "No commissions, no products pushed", "Education that meets people in context", "One fee per employee, per month"];
const THEM = ["A helpline most people never call", "One-off webinars that fade by payday", "Little visibility on what it delivers", "Advice tied to products and commissions", "Scattered tools and separate logins", "Annual contracts, slow to show value"];

const FAQ = HR_FAQ.filter((f) => ["What does it cost?", "Do you sell financial products?", "How do employees get started?", "Does it integrate with our systems?", "What if few people use it?"].includes(f.q));

function PlanCard() {
  return (
    <div className="px-4 pb-14 md:px-8 md:pb-[117px]">
      <div className="mx-auto grid max-w-[1218px] overflow-hidden rounded-[24px] bg-[#c8f169] p-[10px] text-left md:rounded-[30px] lg:grid-cols-[700px_minmax(0,1fr)]">
        <div className="rounded-[18px] bg-black px-6 pb-8 pt-8 text-white md:rounded-[24px] md:px-[30px] md:pb-[56px] md:pt-[44px]">
          <h2 className="font-stack text-[28px] font-light leading-none md:text-[32px]">What’s included</h2>
          <p className="mt-9 font-stack text-[16px] leading-6 md:mt-[34px]">Koshpal gives every employee access to:</p>
          <ul className="mt-4 flex flex-col gap-[14px] md:gap-[22px]">
            {INCLUDED.map(([b, r]) => (
              <li key={b} className="flex items-start gap-4">
                <Check aria-hidden="true" className="mt-[3px] size-5 shrink-0 text-[#3fe05c]" strokeWidth={2.2} />
                <span className="font-stack text-[16px] leading-[19px]"><b className="font-semibold">{b}</b> {r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 md:mt-[50px]">
            <PillButton to="/demo" tone="white" size="sm" className="!text-[16px]">Talk to us</PillButton>
          </div>
        </div>
        <div className="px-6 py-8 text-[#3b3e2a] lg:px-[76px] lg:pt-[48px]">
          <h3 className="max-w-[380px] font-figtree text-[22px] font-medium leading-[26px]">What HR gets with every rollout:</h3>
          <ul className="mt-8 flex flex-col gap-[30px] md:mt-[34px] md:gap-[34px]">
            {HR_GETS.map(([b, r]) => (
              <li key={b} className="flex items-start gap-4">
                <span aria-hidden="true" className="mt-[9px] size-[6px] shrink-0 rounded-full bg-[#7a1f5c]" />
                <span className="font-figtree text-[16px] leading-6"><b className="font-medium">{b}</b> {r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Col({ items, icon: Icon, tone }) {
  return (
    <ul className="flex flex-col gap-[22px] px-4 pt-8 md:gap-[28px] md:px-[60px] md:pt-[36px]">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-3 font-stack text-[17px] leading-6 md:text-[18px]">
          <Icon aria-hidden="true" className={`size-4 shrink-0 ${tone}`} strokeWidth={2.5} />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/pricing" title="Pricing" description="Free to employees, affordable to employers. Koshpal is priced per employee per month, so the cost scales with your workforce. Talk to us for a quote." />
      <main id="main">
        <MagentaHero
          gradient={PRICE_BLUE}
          padBottom={107}
          leadMt={76}
          tag="Pricing"
          title="Free to Employees Affordable to"
          pill="Employers"
          lead="Koshpal is an employer-sponsored benefit, so employees never pay to use it. You pay per employee, per month, so the cost scales with the size of your workforce. Talk to us and we’ll give you a number for your company size."
          primary={{ label: "Book a demo", to: "/demo" }}
          secondary={{ label: "See the platform", to: "/platform" }}
        >
          <PlanCard />
        </MagentaHero>

        {/* comparison */}
        <section className="bg-white px-5 pb-16 pt-14 md:px-10 md:pb-[100px] md:pt-[80px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>why koshpal</Tag>
            <H2 className="mt-6 max-w-[1000px] text-[#171b26]">Your team deserves better than <span className="text-[#3b3fbc]">one-off advice</span></H2>
            <Lead className="mt-6 max-w-[760px] text-[#0b0b0c]">Legacy benefits often treat the symptoms of financial stress, not the cause. Koshpal is the ongoing relationship employees actually use.</Lead>
            <div className="mt-8"><PillButton to="/demo" tone="lime" size="sm" className="!text-[18px]">Book a demo</PillButton></div>

            <div className="relative mt-12 grid w-full max-w-[1200px] gap-6 text-left md:mt-[107px] md:grid-cols-2 md:gap-[30px]">
              <div>
                <div className="flex h-[72px] items-center justify-center rounded-[10px] bg-[#c8f169] shadow-[0_6px_24px_rgba(200,241,105,0.35)]">
                  <span className="relative block h-[30px] w-[160px]">
                    <img src="/img/home/logo.svg" alt="Koshpal" className="absolute left-[-15%] top-[-55%] h-[210%] w-[130%] max-w-none" />
                  </span>
                </div>
                <Col items={US} icon={Check} tone="text-[#8fd13c]" />
              </div>
              <div>
                <h3 className="flex h-[72px] items-center justify-center rounded-[10px] bg-[#171717] font-stack text-[22px] text-white md:text-[24px]">Traditional EAP &amp; one-off advice</h3>
                <Col items={THEM} icon={X} tone="text-[#b5b5b5]" />
              </div>
              <span className="absolute left-1/2 top-[-0px] z-10 hidden size-[54px] -translate-x-1/2 items-center justify-center rounded-full border border-[#333] bg-[#171717] font-stack text-[16px] text-white md:flex" style={{ top: 9 }} aria-hidden="true">VS</span>
            </div>
          </div>
        </section>

        {/* privacy line with the photo strip */}
        <section className="relative overflow-hidden" style={{ backgroundImage: "linear-gradient(180deg,#ffffff 0%,#6dc2f7 8%,#3188f7 26%,#0046d8 52%,#01195f 82%,#01133d 100%)" }}>
          <div className="mx-auto flex max-w-[1240px] flex-col items-center px-5 pt-20 text-center md:pt-[94px]">
            <Tag tone="light">private by design</Tag>
            <h2 className="mt-8 font-figtree text-[clamp(34px,5.69vw,82px)] font-medium leading-[1.05] tracking-[-0.0127em] text-white">
              <span className="block">Everything in the app</span>
              <span className="block">stays <span className="text-[#c8f169]">the employee’s own</span></span>
            </h2>
            <p className="mt-6 max-w-[760px] font-stack text-[clamp(16px,1.67vw,24px)] leading-[1.3] text-white">Spending, budgets, goals, sessions and reminders are private to each person. Employers only ever see anonymised, aggregated trends, never an individual’s data.</p>
            <div className="mt-8"><PillButton to="/privacy-trust" tone="white" size="sm" className="!text-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.3)]">Read about privacy</PillButton></div>
          </div>
          <div className="mt-10 md:-mb-[32px] md:mt-[70px]"><PhotoCarousel /></div>
        </section>

        <CtaBand wide py={130}>
          <span className="block [text-wrap:wrap]">Get a quote tailored</span>
          <span className="block text-[#c8f169] [text-wrap:wrap]">to your organisation.</span>
        </CtaBand>

        <Faq narrow tag="questions leaders ask" title="Questions about pricing" items={FAQ} />
      </main>
      <Footer />
    </div>
  );
}
