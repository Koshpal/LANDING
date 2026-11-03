import React, { useState } from "react";
import Tag from "./Tag";
import { H2, Lead } from "./Heading";

/* Figma 15:4559 "Who advises your people". The design's three name cards were placeholders, so until
   coaches agree to be named the section shows what is true of the whole team instead. */
const PROOF = [
  { n: "11+", t: "certified coaches onboarded" },
  { n: "30+", t: "CFPs and finance professionals helped shape the program" },
];

/* Coach cards: the front shows the photo, the back (hover, focus or tap) shows experience and a short bio.
   Names for the second and third coach are not supplied yet, so those cards use their role as the heading. */
const COACHES = [
  {
    name: "Abhishek Kumar",
    tag: "CFP · CWM | 11+ yrs",
    img: "/img/coaches/cfp1.jpg",
    pos: "50% 18%",
    bg: "#fbeaea",
    pill: "#e8827f",
    experience: "11+ years",
    focus: "Financial and behavioural coaching",
    about:
      "A Certified Financial Planner and Chartered Wealth Manager who blends financial planning with behavioural coaching, so people reflect before they act. He has run 750+ corporate seminars and 2,500+ hours of 1:1 sessions, and starts with your relationship with money, your fears and your life goals before building a practical roadmap that grows with you.",
  },
  {
    name: "Koshpal CFP",
    tag: "IIT Indore alumnus | Ex-Axis Securities",
    img: "/img/coaches/cfp2.jpg",
    pos: "50% 22%",
    bg: "#e9f5ef",
    pill: "#82c3a1",
    experience: "5+ years",
    focus: "Equity and quant research",
    about:
      "An IIT Indore alumnus and former CFA Club president who spent five-plus years in equity and quant research at Axis Securities. He uses models and data analytics to turn market signals into clear guidance, and has built proprietary algorithms that optimise across asset classes.",
  },
  {
    name: "Koshpal CFP",
    tag: "CFP | 4 yrs",
    img: "/img/coaches/cfp3.png",
    pos: "50% 100%",
    bg: "#e9edfd",
    pill: "#4a6cf7",
    experience: "4 years",
    focus: "Personal and corporate financial planning",
    about:
      "Helps individuals and companies track their money, save with intent and allocate it where it counts. With four years in personal and corporate financial planning, this coach turns scattered income, expenses and goals into one plan you can follow month after month.",
  },
];

function CoachCard({ c }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <li className="[perspective:1200px]">
      <div
        role="group"
        tabIndex={0}
        aria-label={`${c.name}, ${c.tag}. Show details.`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        onClick={() => setFlipped((v) => !v)}
        className="relative h-[480px] cursor-pointer rounded-[28px] outline-none transition-transform duration-700 [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-[#3b3fbc] motion-reduce:transition-none md:h-[520px]"
        style={{ transform: flipped ? "rotateY(180deg)" : "none" }}
      >
        {/* front */}
        <div aria-hidden={flipped} className="absolute inset-0 flex flex-col items-center overflow-hidden rounded-[28px] px-5 pt-8 [backface-visibility:hidden]" style={{ background: c.bg }}>
          <h3 className="font-figtree text-[26px] font-normal leading-[1.15] text-[#1c2340] md:text-[28px]">{c.name}</h3>
          <p className="mt-4 rounded-full px-5 py-2 text-center font-figtree text-[15px] leading-5 text-[#1c2340]" style={{ background: c.pill }}>{c.tag}</p>
          <img src={c.img} alt={`${c.name}, ${c.tag}`} loading="lazy" className="mt-6 min-h-0 w-full flex-1 rounded-t-[22px] object-cover" style={{ objectPosition: c.pos }} />
        </div>
        {/* back */}
        <div aria-hidden={!flipped} className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-[28px] px-7 py-8 text-left [backface-visibility:hidden] [transform:rotateY(180deg)]" style={{ background: c.bg }}>
          <h3 className="font-figtree text-[24px] font-normal leading-[1.15] text-[#1c2340]">{c.name}</h3>
          <dl className="mt-5 flex flex-col gap-4 font-figtree text-[#1c2340]">
            <div>
              <dt className="text-[12px] uppercase tracking-[0.08em] text-[#4b5266]">Experience</dt>
              <dd className="mt-1 text-[18px] leading-6">{c.experience}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.08em] text-[#4b5266]">Specialization</dt>
              <dd className="mt-1 text-[18px] leading-6">{c.focus}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.08em] text-[#4b5266]">About</dt>
              <dd className="mt-1 text-[14px] leading-[21px] text-[#2a2f45]">{c.about}</dd>
            </div>
          </dl>
        </div>
      </div>
    </li>
  );
}

export default function Experts() {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-[120px] xl:px-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12 md:gap-[72px]">
        <div className="flex max-w-[1100px] flex-col items-center text-center">
          <Tag>The coaches</Tag>
          <H2 className="mt-6 text-[#0b0b0c]">Certified CFPs and CAs, on every employee’s side</H2>
          <Lead className="mt-6 text-[#0b0b0c]">
            Every Koshpal coach is a certified financial planner or chartered accountant, verified before their first session. They’re salaried by Koshpal, so they earn nothing from what an employee buys. They listen first, explain in plain language and stay with the same person over time.
          </Lead>
        </div>

        <ul className="grid w-full max-w-[900px] gap-5 md:grid-cols-2">
          {PROOF.map((p) => (
            <li key={p.n} className="flex flex-col items-center rounded-[32px] bg-[#f5f5f5] px-8 py-12 text-center shadow-[0_0_0_2px_rgba(255,255,255,0.9)] md:rounded-[40px]">
              <p className="font-figtree text-[clamp(56px,6.25vw,90px)] font-medium leading-none tracking-[-0.03em] text-[#3b3fbc]">{p.n}</p>
              <p className="mt-4 max-w-[300px] font-figtree text-[20px] leading-[26px] text-[#2a2a2a]">{p.t}</p>
            </li>
          ))}
        </ul>

        <ul className="grid w-full max-w-[1100px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((c, i) => <CoachCard key={i} c={c} />)}
        </ul>
      </div>
    </section>
  );
}
