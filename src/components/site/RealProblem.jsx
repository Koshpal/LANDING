import React from "react";
import Tag from "./Tag";

/* Figma 14:3653 "The Real Problem". */
const STATS = [
  { n: "87%", t: "of employees feel stressed at work, and money is the biggest cause", fg: "#046645", bg: "#fbfaf7", chip: "#f7f5ee" },
  { n: "56%", t: "say financial stress is dragging down their productivity at work", fg: "#0074dd", bg: "#f6f8ff", chip: "#e1effb" },
  { n: "74%", t: "say money stress is hurting their mental health and sleep", fg: "#6736eb", bg: "#fbf9ff", chip: "#eee9f9" },
  { n: "5%", t: "missed work in the last six months just to deal with money problems", fg: "#9a0c0c", bg: "rgba(213,51,42,0.06)", chip: "#fde4e1" },
];

export default function RealProblem() {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24 xl:px-[100px] xl:py-[120px]">
      <div className="mx-auto flex max-w-[1248px] flex-col items-center gap-10 md:gap-16">
        <div className="flex w-full flex-col items-center">
          <Tag>The Real Problem</Tag>
          <h2 className="mt-6 w-full text-balance text-center font-figtree font-medium text-[#0b0b0c] text-[clamp(36px,5.69vw,82px)] leading-[1.05] tracking-[-0.0127em]">
            Your team does the work. Money worries tag along.
          </h2>
          <p className="mt-6 w-full max-w-[800px] text-center font-figtree text-[clamp(17px,1.67vw,24px)] leading-[1.333] text-black">
            Payday lands, and so do the questions. Will the EMI clear? Where did the salary go? How much can I send home this month? These do not stay at home. They show up as lost focus, sick days, and good people leaving for a small raise.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <li
              key={s.n}
              className="flex min-h-[292px] flex-col justify-between rounded-[10px] px-6 pb-5 pt-[50px]"
              style={{ backgroundColor: s.bg, color: s.fg }}
            >
              <div className="flex flex-col gap-3">
                <p className="font-figtree text-[36px] leading-[39.3px]">{s.n}</p>
                <p className="font-figtree text-[20.3px] leading-[26.6px] text-[#121722]">{s.t}</p>
              </div>
              <p className="mt-6 flex w-fit gap-1 rounded-full px-[10px] py-[6px] font-figtree text-[15px] leading-[12.7px]" style={{ backgroundColor: s.chip }}>
                <span>Source:</span>
                <span>Zion Market Research</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="w-full text-center font-figtree text-[clamp(17px,1.67vw,24px)] leading-[1.333] text-black">
          <p>
            Younger employees and women are hit hardest. And employers are already acting: the global market for financial wellbeing benefits is set to grow from $2.19B in 2023 to $7.91B by 2032 (13.7% CAGR).
          </p>
          <p className="mt-8 font-semibold">~ Zion Market Research</p>
        </div>
      </div>
    </section>
  );
}
