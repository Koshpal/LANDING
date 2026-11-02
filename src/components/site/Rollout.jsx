import React from "react";
import { H2 } from "./Heading";
import PillButton from "./PillButton";

/* Figma 2:20353 "How rollout works": dark band, headline left, three numbered steps right. */
const STEPS = [
  { n: "01", t: "Setup", d: "One call, your logo and an employee list. No IT project." },
  { n: "02", t: "Kickoff", d: "A money webinar for everyone, then free first sessions for anyone who wants one." },
  { n: "03", t: "Pilot", d: "One team for 60 days, with usage and feedback on your dashboard." },
  { n: "04", t: "Roll out", d: "Extend to the whole company on an annual plan." },
];

export default function Rollout() {
  return (
    <section className="bg-[#122020] px-5 py-16 text-white md:px-10 md:py-[120px] xl:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-[60px]">
        <div className="flex flex-col items-start">
          <span className="rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[16px] leading-[33px] text-black md:text-[20px]">How it starts</span>
          <H2 className="mt-6 text-white lg:text-[clamp(36px,5.69vw,82px)] lg:text-left">Live in one week. Start with one team for 60 days.</H2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PillButton to="/demo" tone="lime" size="sm" className="!text-[18px]">Book a demo</PillButton>
            <PillButton to="/demo?pilot=60-day" tone="white" size="sm" className="!text-[18px]">Start a 60-day pilot</PillButton>
          </div>
        </div>

        <ol className="flex flex-col">
          {STEPS.map((s, i) => (
            <li key={s.n} className={`grid grid-cols-[72px_1fr] gap-x-4 py-8 md:grid-cols-[130px_1fr] md:py-[44px] ${i ? "border-t border-white/15" : "pt-0"}`}>
              <span className="font-stack text-[34px] font-light leading-[1.1] text-[#ffbcfc] md:text-[44px]">{s.n}</span>
              <div>
                <h3 className="font-stack text-[26px] font-light leading-[1.2] md:text-[32px]">{s.t}</h3>
                <p className="mt-4 max-w-[470px] font-figtree text-[16px] leading-6">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
