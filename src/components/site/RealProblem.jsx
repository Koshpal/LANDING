import React from "react";
import Tag from "./Tag";
import ProblemWeSee from "./ProblemWeSee";

/* Figma 14:3653 "The Real Problem", merged with the worry chips (14:3708). Stats are sourced India figures. */
const STATS = [
  { n: "62%", t: "of Indian millennials live paycheque to paycheque", src: "Deloitte 2025", href: "https://thefederal.com/category/business/deloittes-survey-how-indians-are-living-paycheque-to-paycheque-250076", fg: "#046645", bg: "#fbfaf7", chip: "#f7f5ee" },
  { n: "33%+", t: "of a salaried Indian’s monthly income goes to EMIs", src: "Perfios and PwC India 2025", href: "https://perfios.ai/blogs/earning-individuals-in-india-spend-over-33-salary-on-emis-reveals-perfios-pwc-report/", fg: "#0074dd", bg: "#f6f8ff", chip: "#e1effb" },
  { n: "54%", t: "of Indian Gen Z have put off big life decisions because of money", src: "Deloitte 2026", href: "https://www.deloitte.com/in/en/issues/work/genz-millenial-survey-india-2026.html", fg: "#6736eb", bg: "#fbf9ff", chip: "#eee9f9" },
];

export default function RealProblem() {
  return (
    <>
    <section className="bg-white px-5 py-16 md:px-10 md:py-24 xl:px-[100px] xl:py-[120px]">
      <div className="mx-auto flex max-w-[1248px] flex-col items-center gap-10 md:gap-16">
        <div className="flex w-full flex-col items-center">
          <Tag>The real problem</Tag>
          <h2 className="mt-6 w-full text-balance text-center font-figtree font-medium text-[#0b0b0c] text-[clamp(36px,5.69vw,82px)] leading-[1.05] tracking-[-0.0127em]">
            Good salaries. Still broke by the 25th.
          </h2>
          <p className="mt-6 w-full max-w-[800px] text-center font-figtree text-[clamp(17px,1.67vw,24px)] leading-[1.333] text-black">
            Salary lands on the 1st. Rent, EMIs and the card bill go by the 5th. UPI quietly takes the rest. By the 25th, the question is the same: where did it all go? That worry doesn’t stay at home. It comes to work as lost focus, sick days and good people leaving for a small raise.</p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-[10px] sm:grid-cols-3">
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
              <p className="mt-6 flex w-fit gap-1 rounded-full px-[10px] py-[6px] font-figtree text-[15px] leading-[16px]" style={{ backgroundColor: s.chip }}>
                <span>Source:</span>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{s.src}</a>
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
      <ProblemWeSee />
    </>
  );
}
