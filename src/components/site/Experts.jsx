import React from "react";
import Tag from "./Tag";
import { H2, Lead } from "./Heading";

/* Figma 15:4559 "Who advises your people". Names are the Figma placeholders. */
const EXPERTS = [
  { name: "Taylor Reed", role: "CFP" },
  { name: "Taylor Reed", role: "CFP" },
  { name: "Taylor Reed", role: "CFP" },
];

export default function Experts() {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-[120px] xl:px-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12 md:gap-[72px]">
        <div className="flex max-w-[1100px] flex-col items-center text-center">
          <Tag>Who advises your people</Tag>
          <H2 className="mt-6 text-[#0b0b0c]">Trusted finance experts, on call for every employee.</H2>
          <Lead className="mt-6 text-[#0b0b0c]">
            Your people get unlimited 1:1 access to certified Chartered Accountants who help them plan, save, and make confident money decisions. Independent experts, with no products to sell.
          </Lead>
        </div>

        <ul className="grid w-full gap-5 md:grid-cols-3">
          {EXPERTS.map((e, i) => (
            <li key={i} className="flex flex-col items-center rounded-[32px] bg-[#f5f5f5] p-[10px] pb-[10px] shadow-[0_0_0_2px_rgba(255,255,255,0.9)] md:rounded-[40px]">
              <div className="pb-[28px] pt-9 text-center text-[#2a2a2a]">
                <p className="font-figtree text-[24px] font-medium leading-[28px]">{e.name}</p>
                <p className="mt-3 font-figtree text-[18px] leading-[21px]">{e.role}</p>
              </div>
              <img
                src="/img/home/expert-portrait.png"
                alt={`${e.name}, ${e.role}`}
                width="380"
                height="280"
                loading="lazy"
                className="aspect-[380/280] w-full rounded-[28px] object-cover md:rounded-[30px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
