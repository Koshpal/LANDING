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

/* Figma "Solutions for employees". Hero tag/buttons, the garbled step titles and the duplicated
   privacy card are replaced with Koshpal wording; layout and styling follow the design. */
const base = "/img/pages/employees";

const STEPS = [
  { t: "Start strong", d: "Set up good habits, understand your pay, and learn how to make the first rupees work, with an expert to answer the questions nobody taught you." },
  { t: "Make the big move", d: "A home, a family, a big move. When the stakes are higher, your expert helps you plan ahead and decide with confidence instead of guesswork." },
  { t: "Stay in control", d: "Retirement, security and the freedom that comes from feeling in control. Koshpal keeps supporting you long after the first conversation." },
];

const tile = "relative overflow-hidden rounded-[28px]";
const h = "font-figtree text-[22px] font-medium leading-7 md:text-[24px]";
const p = "font-figtree text-[16px] leading-[22px] md:text-[18px]";

export default function EmployeesPage() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/for-employees" title="Solutions for employees" description="A certified expert on your side, guidance in the app, and learning that meets you where you are, from a first salary to a first home to retirement." />
      <main id="main">
        <MagentaHero
          gradient={GREEN}
          padBottom={150}
          tag="For employees"
          title="Your whole money life,"
          pillPrefix="on one"
          pill="screen"
          lead="With Koshpal, every employee gets a certified expert who’s genuinely on their side, intelligent guidance in the app, and learning that meets them where they are, from a first salary to a first home to retirement."
          primary={{ label: "Book a demo", to: "/demo" }}
          secondary={{ label: "See the app", to: "/platform/mobile-app" }}
        />

        {/* what every employee gets: bento */}
        <section className="bg-white px-4 pb-16 pt-14 md:px-8 md:pb-[100px] md:pt-[80px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>What every employee gets</Tag>
            <H2 className="mt-6 max-w-[900px] text-[#171b26]">Real support, not another login to forget</H2>
          </div>
          <div className="mx-auto mt-10 flex max-w-[1200px] flex-col gap-[10px] md:mt-[96px]">
            <div className="grid gap-[10px] lg:grid-cols-[593fr_595fr]">
              <div className="flex flex-col gap-[10px]">
                <article className={`${tile} flex flex-col bg-[#c8f169] p-[14px] text-[#132121] lg:min-h-[447px]`}>
                  <img src={`${base}/experts.png`} alt="Advisers going through documents at a table" width="553" height="268" loading="lazy" className="aspect-[553/268] w-full rounded-[20px] object-cover" />
                  <div className="px-[3px] pb-2 pt-[22px]">
                    <h3 className={h}>Unlimited 1:1 experts</h3>
                    <p className={`${p} mt-[6px] max-w-[480px]`}>Talk to a certified expert as often as you like. No limits, no commissions, no sales pitch.</p>
                  </div>
                </article>
                <article className={`${tile} flex min-h-[251px] items-center border border-[#e5e7ea] bg-white`}>
                  <h3 className={`${h} z-10 pl-[33px]`}>Budgets &amp; goals</h3>
                  <img src={`${base}/budgets-phone.png`} alt="" width="352" height="243" loading="lazy" className="absolute bottom-[3px] right-[3px] h-[calc(100%-6px)] w-auto max-w-[62%] object-contain object-right-bottom" />
                </article>
              </div>
              <div className="flex flex-col gap-[10px]">
                <article className={`${tile} min-h-[267px] bg-[#122020] pl-[30px] pr-6 pt-0 text-white`}>
                  <span className="flex h-[110px] w-[84px] items-start justify-center rounded-b-[40px] bg-[#c8f169] pt-[56px] text-black" aria-hidden="true"><TrendingUp className="size-5" strokeWidth={2} /></span>
                  <h3 className={`${h} mt-5`}>Spending insights</h3>
                  <p className={`${p} mt-[6px] max-w-[480px] text-[#b9bdbd]`}>See where your money goes each month, by category, and understand your habits with confidence.</p>
                </article>
                <article className={`${tile} flex min-h-[431px] flex-col justify-end bg-[#1e1e1e] p-[30px] text-white`}>
                  <img src={`${base}/insights-photo.png`} alt="Someone reviewing spending charts on a laptop" width="595" height="304" loading="lazy" className="absolute inset-x-0 top-0 h-[70%] w-full object-cover [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]" />
                  <h3 className={`${h} relative`}>Spending insights</h3>
                  <p className={`${p} relative mt-[6px] max-w-[480px] text-white/80`}>See where your money goes each month, by category, and understand your habits with confidence.</p>
                </article>
              </div>
            </div>
            <div className="grid gap-[10px] lg:grid-cols-[612fr_576fr]">
              <article className={`${tile} flex min-h-[317px] flex-col justify-end bg-[#1e1e1e] p-[30px] text-white`}>
                <img src={`${base}/health-photo.png`} alt="A notebook of charts, glasses and a calculator" width="612" height="260" loading="lazy" className="absolute inset-x-0 top-0 h-[82%] w-full object-cover [mask-image:linear-gradient(to_bottom,#000_75%,transparent)]" />
                <h3 className={`${h} relative`}>A health check for money</h3>
              </article>
              <article className={`${tile} flex min-h-[317px] flex-col justify-center bg-[#3b3fbc] px-[40px] py-8 text-white`}>
                <h3 className={h}>Complete privacy</h3>
                <p className={`${p} mt-3 max-w-[420px]`}>Your conversations are yours. Your employer never sees who said what.</p>
              </article>
            </div>
          </div>
        </section>

        <StepsSection
          tag="The Journey"
          title="Support that grows with every chapter"
          lead="Financial wellbeing isn’t a one-time fix. Koshpal is there as life changes, decision by decision."
          steps={STEPS}
          rowH={226}
        />

        {/* private by design */}
        <section className="bg-white px-4 py-10 md:px-[30px] md:py-[54px]">
          <div className="mx-auto flex max-w-[1380px] flex-col items-center rounded-[28px] bg-black px-5 pb-14 pt-12 text-center text-white md:rounded-[40px] md:px-10 md:pb-[84px] md:pt-[72px]">
            <PinkTag>Private by Design</PinkTag>
            <h2 className="mt-6 max-w-[1100px] font-figtree text-[clamp(34px,5vw,72px)] font-medium leading-[1.15] tracking-[-0.0127em] [text-wrap:wrap]">
              <span className="block">Speak freely. It stays</span>
              <span className="block">between you and your expert.</span>
            </h2>
            <p className="mt-6 max-w-[1040px] font-stack text-[clamp(16px,1.67vw,24px)] leading-[1.3]">
              Your questions, your numbers and your conversations are never shared with your employer. They only ever see anonymised trends across the whole organisation, never anything that points back to you.
            </p>
            <div className="mt-8"><PillButton to="/demo" tone="lime" size="sm" className="!text-[18px]">Book a demo</PillButton></div>
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

        <CtaBand wide py={130}>Bring Koshpal to your people.</CtaBand>
        <Faq narrow tag="questions leaders ask" title="What employees ask" items={EMPLOYEE_FAQ} />
      </main>
      <Footer />
    </div>
  );
}
