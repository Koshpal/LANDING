import React, { useEffect, useRef, useState } from "react";
import Tag from "./Tag";

/* Figma 2:19641 "what your people get": headline, then a gradient panel with a
   sticky 4-item menu on the left and four stacked pillar panels on the right.
   The menu highlights whichever panel is in view and scrolls to it on click. */
const PANELS = [
  { menu: "Financial Planning", title: "Learn · Money lessons that fit real life", body: "Budgeting, EMIs, tax, investing, explained simply, so your people actually know what to do with their pay." },
  { menu: "Insights", title: "Understand · Insights that do the thinking", body: "Each person sees where their money goes and what to fix next, without touching a spreadsheet." },
  { menu: "Sessions", title: "Connect · A real expert to talk to", body: "Unlimited 1:1 time with a certified CA for any money question. No scripts, and nothing to sell." },
  { menu: "Goals", title: "Grow · Help that keeps up with life", body: "From a first salary to a home loan to retirement, the guidance grows as their needs do." },
];

const CORNERS = [
  ["right-[10px] top-[10px]", ""],
  ["left-[10px] top-[10px]", "-scale-x-100"],
  ["bottom-[10px] right-[10px]", "-scale-y-100"],
  ["bottom-[10px] left-[10px]", "rotate-180"],
];

function Visual() {
  return (
    <div className="relative aspect-[776/420] w-full overflow-clip bg-[#f0f0f0]">
      <div className="absolute left-[calc(50%+1px)] top-1/2 h-[284%] w-[102.3%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <img src="/img/home/program/bg.png" alt="" loading="lazy" className="absolute size-full max-w-none object-cover" />
        <div className="absolute inset-0 bg-[rgba(11,23,19,0.2)]" />
      </div>
      <img
        src="/img/home/program/case.png"
        alt=""
        loading="lazy"
        className="absolute left-1/2 top-1/2 h-[152%] w-[105.5%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      {CORNERS.map(([pos, flip]) => (
        <img key={pos} src="/img/home/program/corner-a.svg" alt="" aria-hidden="true" className={`absolute size-[10px] ${pos} ${flip}`} />
      ))}
    </div>
  );
}

export default function ProgramPillars() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.i));
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (i) => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    refs.current[i]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  };

  return (
    <section className="bg-white px-4 pb-10 pt-16 md:px-[30px] md:pb-20 md:pt-[120px]">
      <div className="mx-auto max-w-[1380px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center">
          <Tag>what your people get</Tag>
          <h2 className="mt-6 text-balance text-center font-figtree font-medium text-[#0b0b0c] text-[clamp(36px,5.69vw,82px)] leading-[1.05] tracking-[-0.0127em]">
            One benefit. Four ways it helps.
          </h2>
          <p className="mt-6 max-w-[1100px] text-balance text-center font-stack text-[clamp(17px,1.67vw,24px)] leading-[1.333] text-[#0b0b0c]">
            Learn, Understand, Connect and Grow, the four parts of a Koshpal membership that work together all year.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] bg-gradient-to-b from-[#3b3fbc] to-[#05075b] px-4 py-10 md:mt-20 md:rounded-[40px] md:px-[30px] md:py-[90px]">
          <div className="mx-auto flex max-w-[1224px] flex-col items-start gap-10 lg:flex-row lg:gap-14">
            <nav aria-label="What your people get" className="relative w-full shrink-0 lg:sticky lg:top-28 lg:w-[392px]">
              <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 hidden w-px bg-[#e5e5e5]/30 lg:block" />
              <span
                aria-hidden="true"
                className="absolute left-0 hidden h-[47px] w-px bg-[#e5e5e5] transition-transform duration-300 lg:block"
                style={{ transform: `translateY(${active * 59}px)` }}
              />
              <ul className="flex flex-col gap-3 lg:gap-3 lg:pl-[11px]">
                {PANELS.map((p, i) => {
                  const on = i === active;
                  return (
                    <li key={p.menu}>
                      <button
                        type="button"
                        onClick={() => go(i)}
                        aria-current={on ? "true" : undefined}
                        className={`flex h-[47px] w-full items-center gap-[10px] rounded-[4px] border px-4 text-left font-figtree text-[20px] leading-[26px] tracking-[-0.3px] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                          on ? "border-[#e5e5e5] bg-white text-[#0b1713]" : "border-[#e5e5e5]/10 bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        <img src={`/img/home/program/${on ? "dot-on" : "dot-off"}.svg`} alt="" width="10" height="10" className="size-[10px]" />
                        {p.menu}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex w-full flex-col gap-10 lg:w-[776px]">
              {PANELS.map((p, i) => (
                <article key={p.menu} ref={(el) => (refs.current[i] = el)} data-i={i} className="flex scroll-mt-28 flex-col gap-[30px]">
                  <div className="flex flex-col items-start gap-5">
                    <span className="rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[16px] leading-[33px] text-black md:text-[20px]">The Problem we see</span>
                    <div className="flex flex-col gap-4 text-white">
                      <h3 className="font-figtree text-[26px] font-medium leading-[1.2] tracking-[-1px] md:text-[40px] md:leading-[48px]">{p.title}</h3>
                      <p className="max-w-[698px] font-figtree text-[16px] leading-[26px] tracking-[-0.3px] md:text-[18px]">{p.body}</p>
                    </div>
                  </div>
                  <Visual />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
