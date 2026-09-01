import React from "react";
import { Eyebrow, Reveal } from "./primitives";
import JellyGrid from "./JellyGrid";

export default function TechAndHumans() {
  return (
    <section className="b2b-dark-band relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <JellyGrid color="255, 255, 255" opacity={0.2} />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <Reveal>
            <Eyebrow>Technology &amp; people</Eyebrow>
            <h2 className="font-outfit font-bold tracking-[-0.02em] leading-[1.12] mt-4 text-[28px] sm:text-[36px] lg:text-[46px] b2b-on-dark-h">
              Automation when employees need speed. Humans when they need answers.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-jakarta text-[17px] sm:text-[19px] leading-[1.6] b2b-on-dark-soft mb-5">
              Koshpal pairs intelligent financial technology with human expertise — continuous digital
              support, plus qualified advisors when a decision actually needs one.
            </p>
            <div className="flex">
              {["RS", "AK", "PM", "NV", "+"].map((a, i) => (
                <span
                  key={a}
                  className="w-[46px] h-[46px] rounded-full border-2 border-[#14245c] grid place-items-center font-outfit font-bold text-[14px] text-primary"
                  style={{
                    marginLeft: i ? -12 : 0,
                    background: "linear-gradient(135deg, #eff1f8, #e5e9fb)",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="font-outfit font-medium text-[13.5px] b2b-on-dark-muted mt-3">Koshpal financial advisors</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
