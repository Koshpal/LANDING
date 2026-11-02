import React, { useEffect, useRef, useState } from "react";
import Tag from "./Tag";

/* Figma 2:19641 "what your people get": headline, then a gradient panel with a
   sticky 4-item menu on the left and four stacked pillar panels on the right.
   The menu highlights whichever panel is in view and scrolls to it on click. */
const PANELS = [
  { menu: "Learn", img: "/img/pages/app/pocket.png", alt: "The Koshpal app on a phone, with spending and an upcoming session", title: "Money lessons that fit their stage of life", body: "First salary, EMIs, tax and saving, taught in lessons practical enough to use the same week." },
  { menu: "Understand", img: "/img/pages/app/phones-insights.png", alt: "Spending insights in the Koshpal app: progress and spending by category", title: "Where the month went, in plain language", body: "The app shows where the month went, by category, across UPI, cards and cash, with insights in plain language." },
  { menu: "Connect", img: "/img/pages/app/sessions-band.png", alt: "An employee booking a 1:1 session from available dates", title: "A certified CFP or CA, in private", body: "Private 1:1 sessions with a certified CFP or CA. Most people book 2 to 3 a month. The coach listens first, then writes a plan with them." },
  { menu: "Grow", img: "/img/pages/app/dashboard-ui.png", alt: "The Koshpal dashboard: spending, budget, sessions attended and savings (sample data)", title: "A plan that becomes daily habits", body: "The plan becomes budgets, goals and reminders in the app. Every check-in builds on the last, from a first salary to an ESOP payout to retirement." },
];

/* One product image per tab, from the Koshpal app and dashboard. */
function Visual({ src, alt }) {
  return (
    <div className="relative aspect-[776/420] w-full overflow-clip rounded-[16px] bg-[#e8edff]">
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
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
          <Tag>What every employee gets</Tag>
          <h2 className="mt-6 text-balance text-center font-figtree font-normal text-[#0b0b0c] text-[clamp(32px,4.3vw,62px)] leading-[1.1] tracking-[-0.0127em]">
            Learn, understand, connect, grow: one program that stays with them
          </h2>
        </div>

        <div className="mt-12 rounded-[28px] bg-gradient-to-b from-[#3b3fbc] to-[#05075b] px-4 py-10 md:mt-20 md:rounded-[40px] md:px-[30px] md:py-[90px]">
          <div className="mx-auto flex max-w-[1224px] flex-col items-start gap-10 lg:flex-row lg:gap-14">
            <nav aria-label="What every employee gets" className="relative w-full shrink-0 lg:sticky lg:top-28 lg:w-[392px]">
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
                    <span className="rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[16px] leading-[33px] text-black md:text-[20px]">{p.menu}</span>
                    <div className="flex flex-col gap-4 text-white">
                      <h3 className="font-figtree text-[26px] font-medium leading-[1.2] tracking-[-1px] md:text-[40px] md:leading-[48px]">{p.title}</h3>
                      <p className="max-w-[698px] font-figtree text-[16px] leading-[26px] tracking-[-0.3px] md:text-[18px]">{p.body}</p>
                    </div>
                  </div>
                  <Visual src={p.img} alt={p.alt} />
                </article>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[900px] text-balance text-center font-stack text-[clamp(18px,1.67vw,24px)] leading-[1.333] text-[#0b0b0c] md:mt-14">The coach builds the plan. The app keeps it alive every day.</p>
      </div>
    </section>
  );
}
