import React from "react";
import { H2 } from "./Heading";

/* Figma 2:20353 "How rollout works": dark band, headline left, three numbered steps right. */
const STEPS = [
  { n: "01", t: "Quick setup", d: "A short onboarding call, your logo and an employee list. We handle the rest, with no IT project." },
  { n: "02", t: "Launch to employees", d: "Ready-made announcement materials get your people signed up and into their first session fast." },
  { n: "03", t: "You watch it land", d: "Engagement and impact show up on your dashboard, with a dedicated success manager alongside you." },
];

export default function Rollout() {
  return (
    <section className="bg-[#122020] px-5 py-16 text-white md:px-10 md:py-[120px] xl:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-[60px]">
        <div className="flex flex-col items-start">
          <span className="rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[16px] leading-[33px] text-black md:text-[20px]">How rollout works</span>
          <H2 className="mt-6 text-white lg:text-[clamp(36px,5.69vw,82px)] lg:text-left">Live for your team in just one week.</H2>
          <p className="mt-6 max-w-[360px] font-stack text-[clamp(18px,1.67vw,24px)] leading-[1.33] text-white">There is no long implementation and no new system for HR to run.</p>
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
