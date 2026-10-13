import React from "react";
import { Reveal } from "./primitives";

/** Numbered step list. steps: [{ h, p }] */
export default function NumberedSteps({ steps, dark = false, cols = 4 }) {
  const grid = cols === 3 ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <ol className={`grid grid-cols-1 ${grid} gap-[18px]`}>
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.h}
          delay={i * 0.06}
          className={`rounded-[20px] border p-5 list-none ${
            dark ? "border-[#ffffff26] bg-[#ffffff12]" : "border-[#e9ecf7] bg-[#fff] b2b-shadow"
          }`}
        >
          <span className="w-8 h-8 rounded-full bg-primary text-[#fff] grid place-items-center font-outfit font-bold text-[14px]" style={{ color: "#fff" }}>
            {i + 1}
          </span>
          <h3 className={`font-outfit font-semibold text-[17px] mt-3 ${dark ? "text-[#f6f8ff]" : "text-[#0b1533]"}`}>{s.h}</h3>
          <p className={`font-jakarta text-[14.5px] leading-[1.55] mt-1.5 ${dark ? "text-[#c3cdec]" : "text-[#3a4468]"}`}>{s.p}</p>
        </Reveal>
      ))}
    </ol>
  );
}
