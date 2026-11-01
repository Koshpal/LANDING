import React from "react";
import { BookOpen, Briefcase, Building2, Check, Coins, GraduationCap, HandCoins, Landmark, Mail, PiggyBank, Target, TrendingUp, Wallet } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Tag from "../components/site/Tag";
import { H2, Lead } from "../components/site/Heading";
import Faq from "../components/site/Faq";
import { MagentaHero, PinkTag, CtaBand, StepsSection } from "../components/site/PageParts";

/* Figma "Advice with koshpal" (advisor recruiting page). The template's placeholder copy
   (hero tag/buttons, "Taylor Reed" cards, garbled step titles, duplicate FAQ) is replaced with
   real Koshpal wording; layout and styling follow the design. */
const base = "/img/pages/advice";

const BOX = { w: 1378, h: 460 };
const PERSONAS = [
  { t: "First-Time Earners", Icon: TrendingUp, x: 235, y: 130, lx: 230, ly: 203 },
  { t: "Young Families", Icon: GraduationCap, x: 392, y: 298, lx: 392, ly: 367 },
  { t: "Working Professionals", Icon: Briefcase, x: 687, y: 357, lx: 687, ly: 419 },
  { t: "Wealth Managers", Icon: HandCoins, x: 985, y: 298, lx: 985, ly: 370 },
  { t: "Finance Professionals", Icon: Building2, x: 1140, y: 130, lx: 1140, ly: 209, narrow: true },
];

const TOPICS = [
  [["Budgeting", Wallet], ["Clearing debt", Coins], ["Building Savings", PiggyBank], ["Tax Basics", BookOpen]],
  [["Investing", TrendingUp], ["Insurance", Briefcase], ["Goal Planning", Target]],
  [["Retirement", Landmark], ["Guidance", Mail]],
];

const PEOPLE = [
  { t: "Certified Financial Planner", s: "CFP" },
  { t: "Chartered Accountant", s: "CA" },
  { t: "CFA Charterholder", s: "CFA" },
];

const STEPS = [
  { t: "From application to first session.", d: "Tell us about your qualifications and experience. It takes a few minutes." },
  { t: "Get verified", d: "We confirm your certification and background, so every advisor is someone employees can trust." },
  { t: "Quick onboarding", d: "A short onboarding on the Koshpal approach, the tools, and how sessions work." },
  { t: "Start advising", d: "Take your first 1:1 sessions through the app, with support whenever you need it." },
];

const LOOKING = [
  "Chartered Accountants, Certified Financial Planners, CFA charterholders and certified financial counsellors.",
  "People who listen first, explain in plain language, and put the client’s interest ahead of everything.",
  "Comfortable across everyday money topics: budgeting, debt, savings, tax basics and planning.",
  "New to workplace financial wellbeing? We’ll help you get up to speed.",
];

const GET = [
  "A steady stream of 1:1 sessions, booked and managed for you.",
  "Fair, transparent pay for your time, with no commissions or product incentives.",
  "The Koshpal app and scheduling, so your time goes to advising, not admin.",
  "A community of finance professionals, and support whenever you need it.",
];

const FAQ = [
  { q: "Do I need to be certified to advise?", a: "Yes. We work with Chartered Accountants, Certified Financial Planners, CFA charterholders and certified financial counsellors, and we confirm your certification and background before your first session." },
  { q: "How are advisors paid?", a: "Fair, transparent pay for your time. There are no commissions and no product incentives, so your advice stays on the employee’s side." },
  { q: "Who handles scheduling and the platform?", a: "Koshpal does. The app and scheduling are taken care of, so your time goes to advising, not admin." },
  { q: "What does a session look like?", a: "Employees book 1:1 sessions through the app and you take them through the app too, with support from us whenever you need it." },
];

const u = (n) => `${(n / 12.48).toFixed(3)}cqw`;
const cq = (n) => `${(n / (BOX.w / 100)).toFixed(3)}cqw`;
const place = (cx, cy, w) => ({ left: cq(cx - w / 2), top: cq(cy - w / 2), width: cq(w), height: cq(w) });

function Bullets({ items, fluid = false }) {
  return (
    <ul className="flex flex-col" style={fluid ? { gap: u(20) } : { gap: 20 }}>
      {items.map((t) => (
        <li key={t} className="flex items-start" style={{ gap: fluid ? u(24) : 16 }}>
          <Check aria-hidden="true" className="shrink-0 text-black" strokeWidth={2.5} style={fluid ? { width: u(16), height: u(16), marginTop: u(8) } : { width: 16, height: 16, marginTop: 7 }} />
          <span className="font-stack" style={fluid ? { fontSize: u(20), lineHeight: u(32) } : { fontSize: 17, lineHeight: 1.6 }}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Advise() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/advise" title="Advise with Koshpal" description="Join Koshpal's network of certified finance professionals and put your expertise where it matters most: helping employees build financial confidence." />
      <main id="main">
        <MagentaHero
          tag="Advise with Koshpal"
          title="Put your expertise"
          pillPrefix="where it"
          pill="matters most"
          lead="Join a network of certified finance professionals helping employees across India build real financial confidence. We handle the app, the scheduling and the support, so you can focus on giving great advice."
          primary={{ label: "Apply to advise", to: "/contact" }}
          secondary={{ label: "How it works", to: "/advise#how-it-works" }}
        />

        {/* who you'll help */}
        <section className="bg-white px-4 py-10 md:px-[30px] md:py-20">
          <div className="mx-auto max-w-[1378px] overflow-hidden rounded-[28px] pb-12 pt-14 text-center text-white md:rounded-[40px] md:pb-20 md:pt-20" style={{ backgroundImage: "linear-gradient(180deg,#3c40bc 0%,#a1a3df 100%)" }}>
            <PinkTag>Who you’ll help</PinkTag>
            <h2 className="mx-auto mt-6 px-5 font-figtree text-[clamp(32px,4.17vw,60px)] font-medium leading-[1.2] tracking-[-0.0127em]">One expert. Every kind of saver.</h2>
            <Lead className="mx-auto mt-5 max-w-[700px] px-5 text-white !leading-[1.2]">
              Your guidance reaches people at every stage of working life, from a first salary to the last stretch before retirement.
            </Lead>

            {/* orbit: desktop composition */}
            <div className="mt-[52px] hidden lg:block" style={{ containerType: "inline-size" }}>
              <div className="relative mx-auto w-full" style={{ aspectRatio: `${BOX.w} / ${BOX.h}` }}>
                <svg className="absolute inset-0 size-full overflow-visible" viewBox={`0 0 ${BOX.w} ${BOX.h}`} fill="none" aria-hidden="true">
                  <path d="M264 -10 V29 A425 298 0 0 0 1114 29 V-10" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
                </svg>
                <img src={`${base}/portrait.png`} alt="A Koshpal advisor" width="176" height="176" className="absolute rounded-full" style={place(687, 128, 176)} />
                {PERSONAS.map(({ t, Icon, x, y, lx, ly, narrow }) => (
                  <React.Fragment key={t}>
                    <span className="absolute flex items-center justify-center rounded-[18.75%] bg-[#c8f169] text-black" style={place(x, y, 96)}>
                      <Icon className="size-[46%]" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span
                      className="absolute -translate-x-1/2 -translate-y-1/2 text-center font-figtree font-medium leading-[1.2] text-white"
                      style={{ left: cq(lx), top: cq(ly), fontSize: "1.45cqw", width: narrow ? cq(140) : "max-content" }}
                    >
                      {t}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* orbit: mobile / tablet fallback */}
            <div className="mt-10 px-5 lg:hidden">
              <img src={`${base}/portrait.png`} alt="A Koshpal advisor" width="176" height="176" className="mx-auto size-[140px] rounded-full" />
              <ul className="mx-auto mt-8 grid max-w-[560px] grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3">
                {PERSONAS.map(({ t, Icon }) => (
                  <li key={t} className="flex flex-col items-center gap-3">
                    <span className="flex size-[72px] items-center justify-center rounded-[18px] bg-[#c8f169] text-black">
                      <Icon className="size-8" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="font-figtree text-[16px] font-medium leading-5">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* topics */}
            <div className="mx-4 mt-10 rounded-[28px] border border-white/30 bg-white/20 px-5 pb-8 pt-10 backdrop-blur-[2px] md:mx-auto md:mt-[43px] md:w-[88.53%] md:rounded-[40px] md:pb-[31px] md:pt-[60px]">
              <p className="mx-auto max-w-[700px] font-figtree text-[clamp(19px,1.8vw,26px)] font-medium leading-[1.12] text-black">
                Your guidance reaches people at every stage of working life, from a first salary to the last stretch before retirement.
              </p>
              <div className="mt-8 flex flex-col items-center gap-[17px] md:mt-[66px]">
                {TOPICS.map((row, i) => (
                  <ul key={i} className="flex flex-wrap items-center justify-center gap-[14px]">
                    {row.map(([label, Icon]) => (
                      <li key={label} className="flex h-12 items-center gap-2 rounded-full bg-white px-[18px] font-figtree text-[16px] text-black md:text-[18px]">
                        <Icon className="size-5 shrink-0" strokeWidth={1.7} aria-hidden="true" />
                        {label}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* people you'd work alongside */}
        <section className="bg-white px-5 pb-12 pt-10 md:px-10 md:pb-[84px] md:pt-20">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>why advise with koshpal</Tag>
            <H2 className="mt-6 max-w-[1000px] text-[#0b0b0c]">These are the people you’d be working alongside.</H2>
            <ul className="mt-12 grid w-full max-w-[1240px] gap-5 md:mt-[79px] md:grid-cols-3">
              {PEOPLE.map((p) => (
                <li key={p.t} className="flex flex-col items-center rounded-[40px] bg-[#f4f4f4] px-[11px] pb-[5px] pt-7 shadow-[0_0_0_4px_rgba(0,0,0,0.03)] md:pt-[34px]">
                  <h3 className="font-figtree text-[22px] font-medium leading-[30px] md:text-[24px]">{p.t}</h3>
                  <p className="mt-[2px] font-figtree text-[16px] leading-[22px] md:text-[18px]">{p.s}</p>
                  <img src={`${base}/advisor.png`} alt="" width="340" height="250" loading="lazy" className="mt-5 aspect-[378/280] w-full rounded-[28px] object-cover md:mt-[41px]" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <StepsSection id="how-it-works" tag="How it works" title="From application to first session." steps={STEPS} />

        {/* who we're looking for / what you get */}
        <section className="bg-white px-4 py-10 md:px-[30px] md:py-[78px]">
          <div className="mx-auto grid max-w-[1250px] gap-4 lg:hidden">
            <div className="rounded-[28px] bg-[#edf0e0] px-6 py-10">
              <PinkTag>Who we’re looking for</PinkTag>
              <h2 className="mt-6 font-stack text-[clamp(32px,6vw,44px)] leading-[1.1] tracking-[-0.02em]">Certified, and genuinely in it for people.</h2>
              <div className="mt-8"><Bullets items={LOOKING} /></div>
            </div>
            <div className="rounded-[28px] bg-[#c8f169] px-6 py-10">
              <PinkTag>What you get</PinkTag>
              <h2 className="mt-6 font-stack text-[clamp(32px,6vw,44px)] leading-[1.1] tracking-[-0.02em]">Everything but the admin.</h2>
              <div className="mt-8"><Bullets items={GET} /></div>
            </div>
          </div>

          {/* desktop: two interlocking cards with a 20px white gutter (design 1248 x 787) */}
          <div className="relative mx-auto hidden w-full max-w-[1248px] lg:block" style={{ containerType: "inline-size", aspectRatio: "1248 / 787" }}>
            <div className="absolute bottom-0 left-0 top-[55.5%] w-[56.9%] rounded-[1.4cqw] bg-[#edf0e0]" />
            <div className="absolute inset-y-0 left-0 w-[41.5%] rounded-[1.4cqw] bg-[#edf0e0]" />
            <div className="absolute right-0 top-0 h-[53.1%] w-[56.9%] rounded-[1.4cqw] bg-[#c8f169]" />
            <div className="absolute inset-y-0 right-0 w-[41.5%] rounded-[1.4cqw] bg-[#c8f169]" />

            <div className="absolute" style={{ left: u(56), top: u(56), width: u(430) }}>
              <PinkTag className="!text-[1.6cqw] !leading-[2.64cqw]" >Who we’re looking for</PinkTag>
              <h2 className="font-stack tracking-[-0.03em] [text-wrap:wrap]" style={{ marginTop: u(32), fontSize: u(56), lineHeight: u(58), width: u(380) }}>Certified, and genuinely in it for people.</h2>
              <div style={{ marginTop: u(38), width: u(400) }}><Bullets items={LOOKING} fluid /></div>
            </div>
            <div className="absolute" style={{ left: u(786), top: u(56), width: u(430) }}>
              <PinkTag className="!text-[1.6cqw] !leading-[2.64cqw]">What you get</PinkTag>
              <h2 className="font-stack tracking-[-0.03em] [text-wrap:wrap]" style={{ marginTop: u(32), fontSize: u(56), lineHeight: u(58) }}>Everything but the admin.</h2>
              <div style={{ marginTop: u(38), width: u(414) }}><Bullets items={GET} fluid /></div>
            </div>
          </div>
        </section>

        <CtaBand tag="Advise with Koshpal" cta="Apply to advise" to="/contact" wide py={144}>
          Ready to <span className="text-[#c8f169]">advise with Koshpal?</span>
        </CtaBand>

        <Faq narrow tag="Advisor questions" title="Questions from finance professionals" items={FAQ} />
      </main>
      <Footer />
    </div>
  );
}
