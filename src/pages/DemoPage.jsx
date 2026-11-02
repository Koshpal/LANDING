import React from "react";
import { Mail, MapPin } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Seo from "../components/b2b/Seo";
import DemoForm from "../components/DemoForm";
import Tag from "../components/site/Tag";
import PillButton from "../components/site/PillButton";
import { NumDot } from "../components/site/PageParts";
import { RevealText } from "../components/site/Feature";

/* Figma "Book a demo": blue-to-cyan hero with the form card, a scroll-reveal paragraph, three steps
   beside a photo, then the footer. The design's repeated list items, "growth audit" button and
   template steps are replaced with Koshpal wording. */
const HERO_BG =
  "radial-gradient(60% 45% at 100% 0%, #25d4f6 0%, rgba(37,212,246,0) 100%), radial-gradient(45% 40% at 0% 25%, #3b9be6 0%, rgba(59,155,230,0) 100%), radial-gradient(50% 35% at 100% 100%, #2b80e4 0%, rgba(43,128,228,0) 100%), linear-gradient(180deg,#1f7fe3 0%,#0c4fd6 40%,#0a30c4 75%,#0a2bb8 100%)";

const NEXT = [
  ["Tell us about your team", "It takes about a minute."],
  ["We email you", "We reply within one working day to find a time."],
  ["We show you the program", "The coach, the app and the HR dashboard, in about 30 minutes."],
];

const STEPS = [
  { chip: "bg-[#ffb800]", t: "Setup", d: "One call, your logo and an employee list. No IT project." },
  { chip: "bg-[#6db3f2]", t: "Kickoff", d: "A money webinar for everyone, then free first sessions for anyone who wants one." },
  { chip: "bg-[#8cc63f]", t: "Pilot", d: "One team for 60 days, with usage and feedback on your dashboard." },
];

const photo = "/img/home/hero-photo.png";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        path="/demo"
        title="Book a Demo or Start a 60-Day Pilot | Koshpal"
        description="See the coach, app and HR dashboard in 30 minutes, then try Koshpal with one team for 60 days."
        crumbs={[["Book a demo", "/demo"]]}
      />
      <main id="main">
        <section className="relative" style={{ backgroundImage: HERO_BG }}>
          <Navbar glass />
          <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-[140px] md:px-[89px] md:pb-[149px] md:pt-[248px]">
            <div className="flex flex-col items-center text-center">
              <Tag tone="light">Book a Demo</Tag>
              <h1 className="mt-8 max-w-[900px] font-figtree text-[clamp(36px,5.69vw,82px)] font-normal leading-[1.06] tracking-[-0.0127em] text-white [text-shadow:0_4px_10px_rgba(0,0,0,0.2)] md:mt-9">
                Let’s build a financially confident <span className="text-[#a0fa6b]">workplace</span>
              </h1>
              <p className="mt-6 max-w-[800px] text-balance font-stack text-[clamp(17px,1.67vw,24px)] leading-[1.33] text-white">
                Tell us a little about your organisation. We’ll walk you through the app, the coach sessions and the employer dashboard, and tailor it to your team. No commitment, no pressure.
              </p>
            </div>

            <div className="mt-12 grid items-stretch gap-10 md:mt-[82px] lg:grid-cols-[minmax(0,1fr)_674px] lg:gap-[40px]">
              <div className="flex flex-col justify-between gap-12 lg:pt-[48px]">
                <ol className="flex flex-col gap-8 md:gap-[34px]">
                  {NEXT.map(([t, d], i) => (
                    <li key={t} className="flex items-start gap-4">
                      <NumDot n={i + 1} className="!size-12 shrink-0 !text-[14px]" />
                      <div>
                        <h2 className="font-figtree text-[22px] font-normal leading-[1.2] text-white md:text-[24px]">{t}</h2>
                        <p className="mt-2 font-figtree text-[17px] leading-6 text-white md:text-[18px]">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="grid max-w-[540px] gap-4 sm:grid-cols-2 sm:gap-[30px]">
                  <a href="mailto:koshpal@koshpal.com" className="flex min-h-[184px] flex-col justify-between rounded-[30px] bg-[#ffbcfc] p-6 text-[#0b0b0c] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    <span className="flex size-[50px] items-center justify-center rounded-full bg-white"><Mail className="size-6" aria-hidden="true" /></span>
                    <span>
                      <span className="block font-figtree text-[14px] leading-5 text-[#3b3b3b]">Email</span>
                      <span className="mt-1 block break-all font-figtree text-[18px] leading-6">koshpal@koshpal.com</span>
                    </span>
                  </a>
                  <div className="flex min-h-[184px] flex-col justify-between rounded-[30px] bg-[#0b0b0b] p-6 text-white">
                    <span className="flex size-[50px] items-center justify-center rounded-full bg-white text-[#0b0b0c]"><MapPin className="size-6" aria-hidden="true" /></span>
                    <span>
                      <span className="block font-figtree text-[14px] leading-5 text-white/70">Office</span>
                      <span className="mt-1 block font-figtree text-[18px] leading-6">Jaipur, Rajasthan</span>
                    </span>
                  </div>
                </div>
              </div>

              <DemoForm />
            </div>
          </div>
        </section>

        <RevealText>In about 30 minutes you’ll see how a certified coach, a daily app and an anonymised HR dashboard work together, and how one team can try Koshpal for 60 days before you decide.</RevealText>

        <section className="bg-white px-5 pb-16 pt-4 md:px-[29px] md:pb-[110px]">
          <div className="mx-auto grid max-w-[1382px] items-start gap-10 lg:grid-cols-[minmax(0,460px)_470px_minmax(0,317px)] lg:justify-between lg:gap-[40px]">
            <div>
              <Tag>what to expect</Tag>
              <h2 className="mt-8 font-figtree text-[clamp(44px,5.6vw,80px)] font-normal leading-[1.06] tracking-[-0.02em] text-[#171b26] [text-wrap:wrap]">
                <span className="text-[#3b3fbc]">Three steps</span> to a 60-day pilot.
              </h2>
              <p className="mt-8 max-w-[400px] font-figtree text-[clamp(18px,1.67vw,24px)] leading-[1.25]">
                No long contracts and no IT project. Start with one team, watch usage and feedback on your dashboard, then decide on a company-wide plan.
              </p>
              <div className="mt-10">
                <PillButton href="#book" tone="lime" size="sm" className="!text-[18px]">Book a demo</PillButton>
              </div>
            </div>

            <img src={photo} alt="Two colleagues smiling at their phones" width="470" height="698" loading="lazy" className="aspect-[470/698] w-full max-w-[470px] justify-self-center object-cover [object-position:92%_50%] lg:justify-self-auto" />

            <ol className="flex flex-col gap-10 lg:gap-[84px]">
              {STEPS.map((s, i) => (
                <li key={s.t} className="border-b border-[#8a8a8a]/70 pb-8">
                  <span className={`inline-block px-[10px] py-[3px] font-figtree text-[12px] uppercase leading-4 text-[#0b0b0c] ${s.chip}`}>Step {i + 1}</span>
                  <h3 className="mt-5 font-figtree text-[clamp(26px,2.2vw,32px)] font-normal leading-[1.15] text-[#5b1a4a]">{s.t}</h3>
                  <p className="mt-3 font-figtree text-[18px] leading-[1.25]">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
