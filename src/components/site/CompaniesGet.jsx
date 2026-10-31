import React, { useState } from "react";
import Tag from "./Tag";

/* Figma 20:4730 "What companies get": glass panel over a colour-wash photo,
   with a three-tab strip under the case-study image. */
const TABS = [
  {
    title: "See it being used",
    body: "A privacy-first dashboard shows take-up, engagement, and the money topics your team asks about most, as anonymised trends. Enough to report up, never traceable to a person.",
  },
  {
    title: "Prove the return",
    body: "Less money stress means fewer sick days, sharper focus, and people who stay. A benefit that pays itself back, with clear pricing and no commissions.",
  },
  {
    title: "No admin, no IT project",
    body: "We handle setup, data security, and privacy. You hand it to your team and watch it work.",
  },
];

export default function CompaniesGet() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0a2a8a]">
      {/* the Figma wash is a 2747x1388 rotated image, centred and cropped */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 flex h-[1388px] w-[2747px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="h-[2747px] w-[1388px] shrink-0 rotate-90">
            <img src="/img/home/companies-bg.png" alt="" className="size-full max-w-none object-cover" />
          </div>
        </div>
      </div>

      <div className="relative mt-4 border-y border-white/30 bg-[rgba(29,27,27,0.09)] px-4 py-14 backdrop-blur-[66px] md:px-6 md:pb-0 md:pt-[90px]">
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-10 md:gap-16">
          <div className="flex w-full flex-col items-center">
            <Tag tone="light">What companies get</Tag>
            <h2 className="mt-6 w-full text-balance text-center font-figtree font-medium text-white text-[clamp(34px,5.69vw,82px)] leading-[1.098] tracking-[-0.0127em]">
              Everything your people need. Nothing new for companies to run.
            </h2>
            <p className="mt-6 w-full max-w-[1100px] text-balance text-center font-stack text-[clamp(17px,1.67vw,24px)] leading-[1.333] text-white">
              You give employees the benefit. Koshpal handles the experts, the app and the rollout, and reports the impact back to you as anonymised, board-ready numbers.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-12">
            <div className="hidden h-px w-full max-w-[1200px] bg-black/10 md:block" />
            <div className="w-full">
              <img
                src="/img/home/companies-case.png"
                alt="A smiling person holding a product jar against a blue sky"
                width="1392"
                height="647"
                loading="lazy"
                className="aspect-[1392/647] w-full object-cover"
              />
              <div role="tablist" aria-label="What companies get" className="mt-8 grid gap-6 md:grid-cols-3 md:gap-9">
                {TABS.map((t, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={t.title}
                      role="tab"
                      type="button"
                      aria-selected={on}
                      onClick={() => setActive(i)}
                      className={`flex flex-col gap-2 pb-[14px] pt-[25px] text-left text-white transition-[border-color,opacity] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                        on ? "border-t-2 border-white" : "border-t-[0.5px] border-white/50 opacity-90 hover:opacity-100"
                      }`}
                    >
                      <span className="font-figtree text-[24px] font-semibold leading-[28.8px] tracking-[-0.72px] md:text-[28px]">{t.title}</span>
                      <span className="max-w-[348px] font-figtree text-[18px] leading-[20.8px]">{t.body}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
