import React from "react";
import { Reveal, CTA } from "./primitives";
import JellyGrid from "./JellyGrid";

export default function FinalCta() {
  return (
    <section id="demo" className="b2b-dark-band py-20 sm:py-28 text-center">
      <JellyGrid color="255, 255, 255" opacity={0.2} />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 grid gap-6 justify-items-center">
        <Reveal className="grid gap-6 justify-items-center">
          <span className="b2b-eyebrow">Get started</span>
          <h2
            className="font-outfit font-bold tracking-[-0.02em] leading-[1.12] text-[28px] sm:text-[38px] lg:text-[46px] max-w-[20ch]"
            style={{ color: "#fff" }}
          >
            Support your people beyond the payslip.
          </h2>
          <p className="font-jakarta text-[16px] leading-[1.6] text-[#b9c3e6] max-w-[52ch]">
            See how Koshpal would work for your team — a 30-minute walkthrough of the employee
            experience and the HR dashboard.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <CTA to="/demo" size="lg">Book a demo</CTA>
            <CTA to="/platform" variant="ghost" size="lg" dark>Explore the platform</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
