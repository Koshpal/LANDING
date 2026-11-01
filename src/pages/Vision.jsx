import React from "react";
import { Check } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Tag from "../components/site/Tag";
import { H2, Lead } from "../components/site/Heading";
import { MagentaHero, PinkTag, NumDot, CtaBand, AltRows } from "../components/site/PageParts";

/* Figma "Our Vison" (2:6107). Tag, button labels and the closing CTA replace the
   template's placeholder copy ("Performance marketing studio", "growth audit"). */
const POINTS = ["Financial wellbeing as a standard benefit", "Trusted, independent guidance for all", "Measurable impact, complete privacy"];

const ROWS = [
  { t: "It is the stress people carry most", d: "Money is the pressure most employees feel and the one they rarely raise at work. Support it, and you lift the single biggest source of everyday stress." },
  { t: "It shows up in your results", d: "Financial stress follows people to work, in focus, attendance and the decision to stay. Easing it helps your best people do their best work." },
  { t: "No one is doing this well in India yet", d: "Workplace financial wellbeing is new here. Koshpal is built for Indian realities and the money questions employees here actually face." },
  { t: "A benefit people actually use", d: "Unlike a one-off webinar, this is ongoing, personal help. That means real participation, and wellbeing you can see improve over time." },
];

const PRINCIPLES = [
  { t: "People over products", d: "We help people make good decisions, we never sell them products." },
  { t: "Privacy as a right", d: "Employees speak freely; their data stays theirs." },
  { t: "Confidence that lasts", d: "We measure success in lasting financial confidence, not sign-ups." },
];

const photo = "/img/pages/model.jpg";

export default function Vision() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/our-vision" title="Our vision" description="A future where financial wellbeing is standard at work. Koshpal is building India's first financial wellbeing infrastructure for workplaces." />
      <main id="main">
        <MagentaHero
          tag="Our vision"
          title="A future where financial wellbeing is"
          pill="standard at work"
          lead="Workplaces have learned to support physical and mental health. Financial wellbeing is the missing third pillar, and we are bringing it to India, first."
          primary={{ label: "Book a demo", to: "/demo" }}
          secondary={{ label: "See the platform", to: "/platform" }}
        />

        {/* what we are doing */}
        <section className="bg-[#122020] px-5 py-16 text-white md:px-10 md:py-[120px]">
          <div className="mx-auto grid max-w-[1240px] items-start gap-10 lg:grid-cols-[536px_minmax(0,1fr)] lg:gap-[78px]">
            <img src={photo} alt="A smiling person holding a product jar" width="536" height="629" className="aspect-[536/629] w-full max-w-[536px] rounded-[30px] object-cover [object-position:62%_50%]" />
            <div className="lg:pt-[18px]">
              <PinkTag>What we are doing</PinkTag>
              <h2 className="mt-6 text-balance font-figtree text-[clamp(32px,3.89vw,56px)] font-medium leading-[1.05] tracking-[-0.02em]">Financial confidence, for everyone at work</h2>
              <p className="mt-6 max-w-[640px] font-stack text-[clamp(17px,1.39vw,20px)] leading-[1.3]">
                We imagine workplaces where no one carries money stress alone, where a trusted expert and the right tools are always a tap away, and where employers can see wellbeing improve without ever intruding on a person’s privacy.
              </p>
              <ul className="mt-9 flex flex-col gap-6">
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

        {/* why now */}
        <section className="bg-white px-5 pb-10 pt-16 md:px-10 md:pt-20">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>how we handle data</Tag>
            <H2 className="mt-6 text-[#171b26]">Why your people need this now.</H2>
            <Lead className="mt-4 max-w-[1000px] text-[#0b0b0c]">
              Financial stress is the most common pressure Indian employees carry, and the least supported. That makes it the biggest wellbeing opportunity most companies have not taken yet.
            </Lead>
          </div>
          <AltRows rows={ROWS} />
        </section>

        {/* where we are going */}
        <section className="bg-white px-4 py-10 md:px-[30px] md:py-20">
          <div className="mx-auto max-w-[1380px] rounded-[28px] bg-[#3b3fbc] p-5 pt-12 text-white md:rounded-[40px] md:p-[30px] md:pt-[70px]">
            <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
              <PinkTag>Where we are going</PinkTag>
              <h2 className="mt-6 max-w-[900px] text-balance font-figtree text-[clamp(30px,4.2vw,60px)] font-medium leading-[1.18] tracking-[-0.02em]">India’s first financial wellbeing infrastructure for workplaces.</h2>
              <p className="mt-8 font-figtree text-[clamp(17px,1.94vw,28px)] leading-[1.55]">
                Our ambition is not another HR platform. It is the trusted financial wellbeing infrastructure for workplaces across India, where every employee has real guidance within reach, and where companies measure success not only by revenue, but by the financial confidence of their people.
              </p>
            </div>
            <img src={photo} alt="" width="1320" height="531" loading="lazy" className="mt-10 aspect-[1320/531] w-full rounded-[24px] object-cover md:mt-12 md:rounded-[30px]" />
          </div>
        </section>

        {/* principles */}
        <section className="bg-white px-4 py-10 md:px-[30px] md:py-20">
          <div className="mx-auto max-w-[1380px] rounded-[28px] bg-black px-5 py-14 text-white md:rounded-[40px] md:px-10 md:pb-[100px] md:pt-[80px]">
            <div className="flex flex-col items-center text-center">
              <PinkTag>What guides us</PinkTag>
              <H2 className="mt-6 max-w-[800px]">The principles behind the vision</H2>
            </div>
            <ul className="mx-auto mt-12 grid max-w-[1082px] gap-[31px] md:mt-[110px] md:grid-cols-3">
              {PRINCIPLES.map((p, i) => (
                <li key={p.t} className="flex min-h-[275px] flex-col items-center justify-center rounded-[30px] bg-[#181818] px-8 py-8 text-center">
                  <NumDot n={i + 1} tone="lime" />
                  <h3 className="mt-6 font-stack text-[22px] leading-7">{p.t}</h3>
                  <p className="mt-3 max-w-[240px] font-stack text-[16px] leading-[1.3] text-[#a6a6a6]">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand>
          Let’s build the third pillar of <span className="text-[#c8f169]">Wellbeing with us.</span>
        </CtaBand>
      </main>
      <Footer />
    </div>
  );
}
