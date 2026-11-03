import React from "react";
import Tag from "./Tag";
import { H2, Lead } from "./Heading";

/* Figma 15:4559 "Who advises your people". The design's three name cards were placeholders, so until
   coaches agree to be named the section shows what is true of the whole team instead. */
const PROOF = [
  { n: "11+", t: "certified coaches onboarded" },
  { n: "30+", t: "CFPs and finance professionals helped shape the program" },
];

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
      </div>
    </section>
  );
}
