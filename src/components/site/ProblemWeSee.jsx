import React from "react";

/* Figma 14:3708 "The Problem we see": lime card, worry chips, scrolling avatar strip. */
const ROW_1 = [
  ["emi", "Will the EMI clear this month"],
  ["salary", "The salary is gone already"],
  ["rent", "Rent takes half of it"],
  ["card", "Credit-card bill piling up"],
  ["home", "Money to send home"],
];
const ROW_2 = [
  ["savings", "No savings for emergencies"],
  ["plan", "No plan for what is next"],
  ["bill", "One bill away from trouble"],
];
const AVATARS = Array.from({ length: 16 }, (_, i) => `/img/home/avatars/a${i + 1}.png`);

function Chip({ icon, label }) {
  return (
    <li className="flex h-10 items-center gap-2 rounded-[16px] bg-[#292929] py-1 pl-1 pr-3 font-geist text-[16px] leading-6 tracking-[-0.32px] text-white">
      <img src={`/img/home/chips/${icon}.png`} alt="" width="32" height="32" className="size-8 shrink-0" />
      <span>{label}</span>
    </li>
  );
}

export default function ProblemWeSee() {
  return (
    <section className="bg-white px-4 py-10 md:px-[30px] md:py-20">
      <div className="relative mx-auto flex max-w-[1380px] items-center justify-center overflow-clip rounded-[30px] bg-[#c8f169] px-5 py-12 md:p-20">
        <img
          src="/img/home/contour-pattern.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[184%] w-[116%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-10 md:gap-20">
          <div className="flex w-full flex-col items-center">
            <span className="rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[16px] leading-[33px] text-black md:text-[20px]">The Problem we see</span>
            <h2 className="mt-6 w-full text-balance text-center font-figtree font-medium text-[#0b0b0c] text-[clamp(28px,4.03vw,58px)] leading-[1.138] tracking-[-0.018em]">
              These worries do not belong to a few people. They follow millions to work across India, every month.
            </h2>
            <p className="mt-6 w-full text-balance text-center font-stack text-[clamp(17px,1.67vw,24px)] leading-[1.25] text-[#0b0b0c]">
              Here are the ones we hear most, in people’s own words.
            </p>
          </div>

          <div className="flex w-full max-w-[1184px] flex-col gap-10 md:gap-[52px]">
            <div className="flex flex-col items-center gap-4">
              <ul className="flex flex-wrap items-center justify-center gap-4">{ROW_1.map(([i, l]) => <Chip key={i} icon={i} label={l} />)}</ul>
              <ul className="flex flex-wrap items-center justify-center gap-4">{ROW_2.map(([i, l]) => <Chip key={i} icon={i} label={l} />)}</ul>
            </div>

            <div className="h-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]" aria-hidden="true">
              <div className="flex w-max animate-[avatar-scroll_48s_linear_infinite] gap-[10px] motion-reduce:animate-none">
                {[...AVATARS, ...AVATARS].map((src, i) => (
                  <img key={i} src={src} alt="" width="80" height="80" loading="lazy" className="size-[80px] shrink-0 rounded-[24px] object-cover" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
