import React from "react";
import { Helmet } from "react-helmet";

/** FAQ accordion using native <details> (keyboard and screen-reader friendly).
    items: [{ q, a }]. Emits FAQPage JSON-LD. */
export default function FaqAccordion({ items, schema = true }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <>
      {schema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(ld)}</script>
        </Helmet>
      )}
      <div className="max-w-[820px] grid gap-3">
        {items.map((i) => (
          <details
            key={i.q}
            className="group rounded-[16px] border border-[#e9ecf7] bg-[#fff] open:b2b-shadow px-5 py-4"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-outfit font-semibold text-[16px] text-[#0b1533] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-md">
              {i.q}
              <span aria-hidden="true" className="flex-none text-primary text-[20px] leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="font-jakarta text-[15px] leading-[1.65] text-[#3a4468] mt-3">{i.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
