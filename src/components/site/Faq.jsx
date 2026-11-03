import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Tag from "./Tag";

/* Figma 2:20737 "Before you book": questions left, accordion right. Pass `items` ([{ q, a }]). */
export default function Faq({ tag = "questions leaders ask", title = "Questions HR leaders ask", items, narrow = false, className }) {
  const [open, setOpen] = useState(0);

  /* narrow: the inner-page frames (title at x=84, list 567-1355) vs the home frame (60 / 590-1380). */
  const shell = className ?? (narrow ? "px-5 py-16 md:px-8 md:py-[92px]" : "px-5 py-16 md:px-[60px] md:py-[92px]");
  const grid = narrow ? "max-w-[1272px] lg:grid-cols-[minmax(0,1fr)_788px]" : "max-w-[1320px] lg:grid-cols-[minmax(0,1fr)_minmax(0,790px)]";

  return (
    <section className={`bg-white ${shell}`}>
      <div className={`mx-auto grid gap-10 lg:gap-[60px] ${grid}`}>
        <div className="flex flex-col items-start">
          {tag && <Tag>{tag}</Tag>}
          <h2 className={`${tag ? "mt-6" : ""} font-figtree text-[clamp(40px,3.89vw,56px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#0b0b0c]`}>{title}</h2>
        </div>

        <ul className="flex flex-col gap-3">
          {items.map((it, i) => {
            const on = open === i;
            return (
              <li key={it.q} className="rounded-[20px] bg-[#f0f0f0]">
                <h3 className="m-0 font-normal">
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(on ? -1 : i)}
                  className="flex min-h-[73px] w-full items-center justify-between gap-4 rounded-[20px] px-[30px] py-4 text-left font-figtree text-[18px] leading-6 text-[#0b0b0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b3fbc] md:text-[20px]"
                >
                  {it.q}
                  <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[#3b3fbc] text-white">
                    {on ? <Minus size={16} strokeWidth={2.5} aria-hidden="true" /> : <Plus size={16} strokeWidth={2.5} aria-hidden="true" />}
                  </span>
                </button>
                </h3>
                <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-[30px] pb-6 pt-2 font-figtree text-[18px] leading-[22px] text-[#0b0b0c] md:text-[20px]">{it.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
