import React from "react";
import { Lock, ShieldCheck, TrendingUp } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Tag from "../components/site/Tag";
import PillButton from "../components/site/PillButton";
import Faq from "../components/site/Faq";
import { H2 } from "../components/site/Heading";
import { MagentaHero, PinkTag, CtaBand, StepsSection, GREEN } from "../components/site/PageParts";
import { EMPLOYEE_FAQ } from "../content/faq";

/* Employees can’t book a demo, so the call to action asks HR to bring Koshpal in (a prefilled email they can send). */
const ASK_HR = `mailto:?subject=${encodeURIComponent("Can we bring Koshpal to our company?")}&body=${encodeURIComponent("Hi,\n\nI came across Koshpal, an employee financial wellness program: certified CFPs and CAs for 1:1 sessions, an app for budgets, goals and dues, and private by design. The company pays and employees never see a bill.\n\nCould we look at it for our team? https://koshpal.com/for-hr\n\nThanks")}`;

/* Figma "Solutions for employees". Hero tag/buttons, the garbled step titles and the duplicated
   privacy card are replaced with Koshpal wording; layout and styling follow the design. */
const base = "/img/pages/employees";

const STEPS = [
  { t: "Start strong", d: "Understand your pay, build an emergency fund, and learn what nobody taught you about tax and EMIs." },
  { t: "Make the big move", d: "A home, a car, a wedding or an ESOP payout, planned with an expert instead of guesswork." },
  { t: "Stay in control", d: "Retirement, insurance and the calm of knowing where you stand." },
];

const tile = "relative overflow-hidden rounded-[28px]";
const h = "font-figtree text-[22px] font-medium leading-7 md:text-[24px]";
const p = "font-figtree text-[16px] leading-[22px] md:text-[18px]";

export default function EmployeesPage() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        path="/for-employees"
        title="Free Financial Coaching for Employees | Koshpal"
        description="Talk privately to a certified CFP or CA about EMIs, tax, savings and goals, paid for by your employer. Your company never sees your data."
        crumbs={[["For employees", "/for-employees"]]}
      />
      <main id="main">
        <MagentaHero
          gradient={GREEN}
          padBottom={150}
          tag="For employees"
          title="Free financial coaching from your employer, and it"
          pill="stays private"
          lead="Talk to a certified CFP or CA about your salary, EMIs, tax, savings and goals. Use the app to stick to the plan. Your company pays for it and never sees your data."
          primary={{ label: "Ask HR to bring Koshpal", href: ASK_HR }}
          secondary={{ label: "See the app", to: "/platform/mobile-app" }}
        />

        {/* what every employee gets: bento */}
        <section className="bg-white px-4 pb-16 pt-14 md:px-8 md:pb-[100px] md:pt-[80px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>Your benefit</Tag>
            <H2 className="mt-6 max-w-[900px] text-[#171b26]">What you get</H2>
          </div>
          <div className="mx-auto mt-10 flex max-w-[1200px] flex-col gap-[10px] md:mt-[96px]">
            <div className="grid gap-[10px] lg:grid-cols-[593fr_595fr]">
              <div className="flex flex-col gap-[10px]">
                <article className={`${tile} flex flex-col bg-[#c8f169] p-[14px] text-[#132121] lg:min-h-[447px]`}>
                  <img src={`${base}/experts.png`} alt="An employee working on a laptop" width="553" height="268" loading="lazy" className="aspect-[553/268] w-full rounded-[20px] object-cover" />
                  <div className="px-[3px] pb-2 pt-[22px]">
                    <h3 className={h}>1:1 sessions with a certified expert</h3>
                    <p className={`${p} mt-[6px] max-w-[480px]`}>Most people book 2 to 3 a month. No commissions, no sales pitch.</p>
                  </div>
                </article>
                <article className={`${tile} flex min-h-[251px] items-center border border-[#e5e7ea] bg-white`}>
                  <div className="z-10 max-w-[38%] pl-[33px] md:max-w-[36%]">
                    <h3 className={h}>Budgets &amp; goals</h3>
                    <p className={`${p} mt-[6px]`}>Set them once and track them across UPI, cards and cash.</p>
                  </div>
                  <img src={`${base}/budgets-phone.png`} alt="" width="352" height="243" loading="lazy" className="absolute bottom-[3px] right-[3px] h-[calc(100%-6px)] w-auto max-w-[62%] object-contain object-right-bottom" />
                </article>
              </div>
              <div className="flex flex-col gap-[10px]">
                <article className={`${tile} min-h-[267px] bg-[#122020] pl-[30px] pr-6 pt-0 text-white`}>
                  <span className="flex h-[110px] w-[84px] items-start justify-center rounded-b-[40px] bg-[#c8f169] pt-[56px] text-black" aria-hidden="true"><TrendingUp className="size-5" strokeWidth={2} /></span>
                  <h3 className={`${h} mt-5`}>Spending insights</h3>
                  <p className={`${p} mt-[6px] max-w-[480px] text-[#b9bdbd]`}>See where the month went, by category, in plain language.</p>
                </article>
                <article className={`${tile} flex min-h-[431px] flex-col justify-end bg-[#1e1e1e] p-[30px] text-white`}>
                  <img src={`${base}/insights-photo.png`} alt="Two colleagues checking dues and reminders on a laptop" width="595" height="304" loading="lazy" className="absolute inset-x-0 top-0 h-[70%] w-full object-cover [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]" />
                  <h3 className={`${h} relative`}>Dues &amp; reminders</h3>
                  <p className={`${p} relative mt-[6px] max-w-[480px] text-white/80`}>Bills, EMIs and card payments, with a reminder before each one falls due.</p>
                </article>
              </div>
            </div>
            <div className="grid gap-[10px] lg:grid-cols-[612fr_576fr]">
              <article className={`${tile} flex min-h-[317px] flex-col justify-end bg-[#1e1e1e] p-[30px] text-white`}>
                <img src={`${base}/health-photo.png`} alt="Two colleagues talking through a plan" width="612" height="260" loading="lazy" className="absolute inset-x-0 top-0 h-[82%] w-full object-cover [mask-image:linear-gradient(to_bottom,#000_75%,transparent)]" />
                <div className="relative">
                  <h3 className={h}>A health check for money</h3>
                  <p className={`${p} mt-[6px] max-w-[480px] text-white/80`}>See where you stand on spending, savings and goals, and what to work on next.</p>
                </div>
              </article>
              <article className={`${tile} flex min-h-[317px] flex-col justify-center bg-[#3b3fbc] px-[40px] py-8 text-white`}>
                <h3 className={h}>Complete privacy</h3>
                <p className={`${p} mt-3 max-w-[420px]`}>Your employer never sees who asked what.</p>
              </article>
            </div>
          </div>
        </section>

        <StepsSection
          tag="The journey"
          title="Help for every chapter: first salary, big moves, staying in control"
          steps={STEPS}
          rowH={226}
        />

        {/* private by design */}
        <section className="bg-white px-4 py-10 md:px-[30px] md:py-[54px]">
          <div className="mx-auto flex max-w-[1380px] flex-col items-center rounded-[28px] bg-black px-5 pb-14 pt-12 text-center text-white md:rounded-[40px] md:px-10 md:pb-[84px] md:pt-[72px]">
            <PinkTag>Private by Design</PinkTag>
            <h2 className="mt-6 max-w-[1100px] font-figtree text-[clamp(34px,5vw,72px)] font-medium leading-[1.15] tracking-[-0.0127em] [text-wrap:wrap]">
              <span className="block">Speak freely. It stays</span>
              <span className="block">between you and your coach.</span>
            </h2>
            <p className="mt-6 max-w-[1040px] font-stack text-[clamp(16px,1.67vw,24px)] leading-[1.3]">
              Your questions, your numbers and your conversations are never shared with your employer. They only ever see anonymised trends across the company, never anything that points back to you.
            </p>
            <div className="mt-8"><PillButton href={ASK_HR} tone="lime" size="sm" className="!text-[18px]">Ask HR to bring Koshpal</PillButton></div>
            <ul className="mt-12 grid w-full max-w-[560px] gap-[31px] sm:grid-cols-2 md:mt-[60px]">
              <li className="flex min-h-[185px] flex-col items-start justify-between rounded-[24px] bg-[#3b3fbc] p-5 text-left">
                <span className="flex size-[44px] items-center justify-center rounded-full bg-white text-black"><Lock className="size-5" aria-hidden="true" /></span>
                <div>
                  <h3 className="font-figtree text-[18px] font-medium leading-6">Stays with you</h3>
                  <p className="mt-1 font-figtree text-[14px] leading-[18px]">Your sessions, your goals, your questions, your numbers.</p>
                </div>
              </li>
              <li className="flex min-h-[185px] flex-col items-start justify-between rounded-[24px] bg-[#ffbcfc] p-5 text-left text-black">
                <span className="flex size-[44px] items-center justify-center rounded-full bg-black text-white"><ShieldCheck className="size-5" aria-hidden="true" /></span>
                <div>
                  <h3 className="font-figtree text-[18px] font-medium leading-6">Never shared</h3>
                  <p className="mt-1 font-figtree text-[14px] leading-[18px]">Your employer only sees anonymised trends, never anything that points back to you.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <CtaBand wide py={130} cta="Ask HR to bring Koshpal to your company" href={ASK_HR}>Bring Koshpal to <span className="text-[#c8f169]">your company.</span></CtaBand>
        <Faq narrow tag="questions employees ask" title="What employees ask" items={EMPLOYEE_FAQ} />
      </main>
      <Footer />
    </div>
  );
}
