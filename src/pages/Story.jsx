import React from "react";
import { Circle, Lightbulb, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Tag from "../components/site/Tag";
import { H2 } from "../components/site/Heading";
import { MagentaHero, PinkTag, PhotoCta, PhotoCarousel } from "../components/site/PageParts";

/* Figma "Our story" (2:6625). Hero tag/button labels replace template placeholders. */
const base = "/img/pages/story";
const photoWide = "/img/photos/pair-home-laptop.jpg";
const photoSquare = "/img/coaches/cfp2.jpg";
const photoPortrait = "/img/photos/team.jpg";

const VALUES = [
  { t: "Simplicity", s: "First", d: "We turn complex money decisions into clear, doable steps. Managing money should not feel like a chore.", Icon: Circle },
  { t: "Trust", s: "Through Transparency", d: "No products to sell and no commissions. Our only job is guidance that is right for the person in front of us.", Icon: ShieldCheck },
  { t: "Built to last", s: "Not Quick Fixes", d: "We help people build habits that hold, not one-off tips that fade by next payday.", Icon: Lightbulb },
];

const TILES = [
  { src: `${base}/t1.png`, x: 50, y: 285, w: 105, h: 152 },
  { src: `${base}/t2.png`, x: 392, y: 163, w: 125, h: 114 },
  { src: `${base}/t3.png`, x: 897, y: 105, w: 113, h: 184 },
  { src: `${base}/t4.png`, x: 1205, y: 309, w: 163, h: 102 },
  { src: `${base}/t5.png`, x: 76, y: 743, w: 186, h: 130 },
  { src: `${base}/t6.png`, x: 1172, y: 776, w: 92, h: 104 },
  { src: `${base}/t7.png`, x: 694, y: 887, w: 90, h: 112 },
];

const LETTER = [
  "A few years ago, we watched people around us, hardworking and well paid, still lose sleep over money. They weren’t careless with it. They had simply never had someone to talk to who understood their whole situation and had nothing to sell them.",
  "Koshpal is our attempt to change that. Real experts people can call, tools they’ll actually use, and guidance that stays on their side. We want people to feel calm and in control of their money, long before anything goes wrong.",
  "If we do this well, financial wellbeing will feel as normal at work as health cover does today. That’s the company we’re building, and we’d love for you to be part of it.",
];

export default function Story() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        path="/about"
        title="About Koshpal: Financially Confident Workplaces"
        description="Why we’re building Koshpal: real experts, useful tools and guidance that stays on the employee’s side. Built in Jaipur for India."
        crumbs={[["About", "/about"]]}
      />
      <main id="main">
        <MagentaHero
          tag="About Koshpal"
          title="Building financially"
          pillPrefix="confident"
          pill="workplaces"
          lead="Every company invests in health and in growth. We think financial wellbeing deserves the same place. Koshpal is built in Jaipur for India, to make it standard at work."
          primary={{ label: "Book a demo", to: "/demo" }}
          secondary={{ label: "See the platform", to: "/platform/mobile-app" }}
        >
          <PhotoCarousel />
        </MagentaHero>

        {/* editorial block */}
        <section className="bg-white px-5 py-12 md:px-[100px] md:py-[100px]">
          <div className="mx-auto max-w-[1240px]">
            <Tag>what we believe</Tag>
            <h2 className="mt-6 max-w-[1130px] text-balance font-figtree text-[clamp(28px,3.5vw,50px)] font-medium leading-[1.32] tracking-[-0.02em]">
              Most of us are taught how to earn, but never how to manage, protect or grow what we earn.
            </h2>
            <div className="mt-10 grid items-start gap-8 md:mt-14 md:grid-cols-[718px_minmax(0,406px)] md:justify-between">
              <div>
                <img src={photoWide} alt="Two colleagues going through a plan on a laptop" width="718" height="413" loading="lazy" className="aspect-[718/413] w-full rounded-[24px] object-cover" />
              </div>
              <img src={photoSquare} alt="A Koshpal financial coach" width="406" height="411" loading="lazy" className="aspect-[406/411] w-full max-w-[406px] justify-self-end rounded-[24px] object-cover [object-position:50%_26%] md:mt-0" />
            </div>
            <p className="mt-12 text-right font-figtree text-[clamp(22px,2.78vw,40px)] leading-[1.4] md:ml-auto md:mt-[100px] md:max-w-[1125px]">
              When money worries build up, they follow people to work, into their health, and into how they treat the people around them. We believe the workplace is the best place to change that, with real help people will actually use.
            </p>
          </div>
        </section>

        {/* values */}
        <section className="bg-white px-4 py-6 md:px-[30px]">
          <div className="mx-auto max-w-[1380px] rounded-[28px] px-5 py-14 text-center text-white md:rounded-[40px] md:px-10 md:pb-[80px] md:pt-[70px]" style={{ backgroundImage: "linear-gradient(180deg,#3c40bc 0%,#a1a3df 100%)" }}>
            <Tag>What we stand for</Tag>
            <H2 className="mx-auto mt-6 max-w-[800px]">The values behind everything we build.</H2>
            <ul className="mx-auto mt-12 grid max-w-[1164px] gap-[6px] md:mt-[70px] md:grid-cols-3">
              {VALUES.map(({ t, s, d, Icon }) => (
                <li key={t} className="flex min-h-[395px] flex-col items-center rounded-[32px] bg-[#f5f5f5] px-8 py-9 text-[#0b0b0c] md:rounded-[40px]">
                  <h3 className="font-figtree text-[22px] font-medium leading-7">{t}</h3>
                  <p className="mt-1 font-figtree text-[14px] leading-5 text-[#3b3fbc]">{s}</p>
                  <span className="mt-8 flex size-[138px] items-center justify-center rounded-[40px] bg-[#3b3fbc]">
                    <Icon className="size-[34%] text-[#a6a8ea]" aria-hidden="true" strokeWidth={2.2} />
                  </span>
                  <p className="mt-8 max-w-[300px] font-figtree text-[17px] leading-6">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* how we do it together */}
        <section className="bg-white px-5 py-14 md:px-[100px] md:py-[100px]">
          <div className="mx-auto grid max-w-[1240px] items-start gap-8 md:grid-cols-[536px_minmax(0,1fr)] md:gap-[61px]">
            <img src={photoPortrait} alt="The Koshpal team at a fintech event" width="536" height="628" loading="lazy" className="aspect-[536/628] w-full max-w-[536px] rounded-[30px] object-cover [object-position:50%_30%]" />
            <div className="md:pt-[190px]">
              <PinkTag>How we do it, together</PinkTag>
              <h2 className="mt-6 max-w-[620px] text-balance font-figtree text-[clamp(30px,3.89vw,56px)] font-medium leading-[1.05] tracking-[-0.02em]">We bring it to your people. You make it count.</h2>
              <p className="mt-6 max-w-[620px] font-stack text-[clamp(17px,1.39vw,20px)] leading-[1.3]">
                We handle the experts, the app and the rollout. You give your team permission to use it. Together, that is how financial wellbeing becomes part of how your company works.
              </p>
            </div>
          </div>
        </section>

        {/* letter */}
        <section className="bg-white px-4 pb-16 pt-6 md:px-[30px] md:pb-[100px]">
          <div className="mx-auto flex max-w-[1380px] flex-col items-center">
            <Tag>A note from our team</Tag>
            <H2 className="mt-6 text-center text-[#0b0b0c]">Why we’re building Koshpal</H2>
            <div
              className="mt-10 flex w-full justify-center rounded-[10px] bg-[#4a8fb3] px-4 py-10 md:mt-14 md:px-0 md:py-[112px]"
              style={{ backgroundImage: `url(${base}/sky-l.png), url(${base}/sky-r.png)`, backgroundRepeat: "no-repeat", backgroundPosition: "left center, right center", backgroundSize: "auto 100%" }}
            >
              <div className="w-full max-w-[811px] bg-white px-6 py-10 md:min-h-[966px] md:px-[58px] md:pt-[104px]">
                {LETTER.map((p) => (
                  <p key={p} className="mb-9 font-figtree text-[clamp(17px,1.67vw,24px)] leading-[1.83]">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PhotoCta tiles={TILES} heading={<>Let’s make financial wellbeing standard where you work.</>} />
      </main>
      <Footer />
    </div>
  );
}
