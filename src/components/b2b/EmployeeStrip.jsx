import React from "react";
import { Reveal } from "./primitives";
import JellyGrid from "./JellyGrid";

const FEATS = [
  "Automatic tracking",
  "Financial health score",
  "Smart insights",
  "Budgets & goals",
  "Education library",
  "Expert consultations",
  "Personalised nudges",
];

/* Deliberately compact + secondary — the page speaks to HR first. */
export default function EmployeeStrip() {
  return (
    <section className="b2b-dark-band relative overflow-hidden py-16 sm:py-24">
      <JellyGrid color="255, 255, 255" opacity={0.2} />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <Reveal className="bg-[#fff] border border-[#e3e7f1] rounded-[18px] p-6 sm:p-10 b2b-shadow-lg">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
            <h3 className="font-outfit font-semibold text-[20px] sm:text-[26px] text-[#0e1a3c]">
              What employees get
            </h3>
            <span className="font-outfit font-medium text-[15px] text-[#6b7590]">
              "Help me understand my money."
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {FEATS.map((f) => (
              <span
                key={f}
                className="font-outfit font-medium text-[13.5px] text-[#3f4a63] bg-[#f6f7fb] border border-[#e3e7f1] rounded-full px-3.5 py-[7px]"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
