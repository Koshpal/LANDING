import React from "react";
import { Section, Reveal, CTA } from "./primitives";
import Needs from "./Needs";

/* Question 9: what does it cost? Model only; no figures until supplied. */
export default function PricingTeaser() {
  return (
    <Section tone="white" id="pricing-teaser">
      <Reveal className="rounded-[24px] border border-[#e9ecf7] bg-[#f7f8fd] p-7 sm:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className="font-outfit font-bold tracking-[-0.025em] leading-[1.15] text-[24px] sm:text-[32px] text-[#0b1533]">
            Priced per employee, per month.
          </h2>
          <p className="font-jakarta mt-2.5 text-[16px] leading-[1.6] text-[#3a4468] max-w-[56ch]">
            An employer-sponsored benefit, so employees don&apos;t pay to use it. The price depends on the size
            of your workforce.
          </p>
          <Needs kind="PROOF" note="pricing figures, or the decision to say 'contact us'" />
        </div>
        <CTA to="/pricing" location="home-pricing">See pricing</CTA>
      </Reveal>
    </Section>
  );
}
