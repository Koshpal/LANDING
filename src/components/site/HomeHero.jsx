import React from "react";
import Navbar from "../Navbar";
import PillButton from "./PillButton";
import Tag from "./Tag";

/* Figma "Frame 2147259280 / Container" (1440 wide). The headline is sized in em off one fluid
   font-size so the 102px design scales down to phones without re-flowing the pill graphics.
   The design's stat card (a 56% figure and a market size) is replaced by a trust line. */
const TRUST = ["Certified CFPs and CAs", "No products, no commissions", "Private by design", "Live in one week"];

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "linear-gradient(0deg, #001033 0%, #003095 27.638%, #0050f8 55.275%, #5fbdf7 89%, #abdbf9 95%, #f8f9fc 98%, #fff 100%)" }}
    >
      <img
        src="/img/home/hero-bg-texture.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(50%-20px)] top-[calc(50%+319.72px)] h-[2516px] w-[4472px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-180 object-cover"
      />
      <Navbar glass />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-[92px] pt-[148px] md:px-10 md:pt-[181.6px] xl:px-[100px] max-md:pb-14">
        <div className="flex max-w-[1200px] flex-col items-center gap-5">
          <Tag tone="light">Employee financial wellness program, built for India</Tag>
          <h1 className="text-center font-figtree font-normal text-white [text-shadow:0_4px_10px_rgba(0,0,0,0.25)] text-[clamp(34px,6.25vw,90px)] leading-[1.2745]">
            <span className="block">Every employee deserves</span>
            <span className="-mt-[0.235em] flex flex-wrap items-center justify-center gap-[0.147em]">
              <img src="/img/home/rupee-pill.svg" alt="" width="164" height="71" className="h-[0.7em] w-[1.613em]" />
              <span>someone to talk to</span>
            </span>
            <span className="-mt-[0.1em] flex items-center justify-center gap-[0.245em]">
              <span>about</span>
              <span className="rounded-[1.08em] bg-[#ffbcfc] px-[0.353em] pb-[0.196em] leading-[1] text-[#0b0b0c]">money.</span>
            </span>
          </h1>
          <p className="mt-5 text-center font-stack font-light text-white text-[clamp(16px,2.22vw,32px)] leading-[1.19]">
            Koshpal is a financial wellness program for Indian workplaces. Each employee gets a certified CFP or CA to talk to and an app that turns the plan into daily habits. The company pays. We sell nothing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[30px] pt-[50px] max-md:gap-4 max-md:pt-6">
            <PillButton to="/demo" tone="indigo">Book a demo</PillButton>
            <PillButton to="/demo?pilot=60-day" tone="black">Start a 60-day pilot</PillButton>
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-md:mt-8 md:mt-14" aria-label="Why employers choose Koshpal">
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2 font-stack text-[clamp(14px,1.25vw,18px)] text-white">
              <i aria-hidden="true" className="size-[6px] rounded-full bg-[#c8f169]" />
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-14 w-full max-w-[1248px] overflow-clip rounded-[22.7px] max-md:mt-10 max-md:aspect-[846/525] md:h-[524.755px]">
          <img src="/img/home/hero-photo.png" alt="Two colleagues smiling at their phones" width="846" height="525" className="size-full object-cover" />
        </div>
      </div>
    </section>
  );
}
