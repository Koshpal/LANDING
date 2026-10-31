import React from "react";
import Tag from "./Tag";
import { H2, Lead } from "./Heading";

/* Figma 2:20444 "see the product": comparison table with a raised Koshpal column. */
const COLS = ["One-off workshops", "Salary-advance apps", "Generic info & PF tie-ups"];
const ROWS = [
  ["Certified 1:1 experts, real CAs", [0, 1, 0]],
  ["Ongoing support, not a one-off", [0, 1, 0]],
  ["A simple app people keep using", [1, 1, 0]],
  ["Personalised money education", [0, 1, 1]],
  ["No products sold, no commissions", [1, 1, 0]],
  ["Privacy-first insight for HR", [0, 1, 1]],
  ["Impact you can measure and report", [0, 1, 1]],
];

function Badge({ className = "", check }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
      <path d="m9 12 2 2 4-4" fill="none" stroke={check} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function No() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6m0-6 6 6" />
    </svg>
  );
}

export default function Compare() {
  return (
    <section className="bg-white px-4 py-16 md:px-[30px] md:py-[92px]">
      <div className="mx-auto flex max-w-[1380px] flex-col items-center gap-12 md:gap-16">
        <div className="flex max-w-[1240px] flex-col items-center text-center">
          <Tag>see the product</Tag>
          <H2 className="mt-6 text-[#0b0b0c]">A dashboard for the people team. An app for every person.</H2>
          <Lead className="mt-6 max-w-[560px] text-[#0b0b0c]">Every engagement starts with a target and ends with a number. Here’s the last twelve months.</Lead>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="relative mx-auto min-w-[700px] max-w-[1380px] text-[#0b0b0c] [--lw:170px] [--g1:10px] [--kw:124px] [--g2:10px] md:min-w-[1000px] md:[--lw:350px] md:[--g1:29px] md:[--kw:267px] md:[--g2:32px]">
            {/* surfaces */}
            <span aria-hidden="true" className="absolute inset-y-0 left-[calc(var(--lw)-23px)] right-0 rounded-[30px] bg-[#f0f0f0]" />
            <span aria-hidden="true" className="absolute bottom-0 left-0 top-[93px] w-[calc(var(--lw)+10px)] rounded-l-[30px] bg-[#f0f0f0]" />
            <span aria-hidden="true" className="absolute bottom-0 left-[calc(var(--lw)+var(--g1))] top-[43px] w-[var(--kw)] rounded-t-[24px] bg-[#3b3fbc]" />
            <span className="absolute left-[calc(var(--lw)+var(--g1))] top-[29px] z-10 flex w-[var(--kw)] justify-center">
              <span className="rounded-full bg-[#6fc418] px-[21px] py-[6px] font-stack text-[13px] leading-[17px] text-black">We are here</span>
            </span>

            <div className="relative grid grid-cols-[var(--lw)_var(--g1)_var(--kw)_var(--g2)_1fr_1fr_1fr] grid-rows-[170px_repeat(7,50.8px)]">
              <div className="col-span-1" />
              <div />
              <div className="flex flex-col items-center justify-end gap-1 pb-[20px] text-white">
                <img src="/img/home/koshpal-mark.svg" alt="" width="46" height="54" className="h-[54px] w-auto [filter:brightness(1.45)_saturate(1.15)]" />
                <span className="font-figtree text-[22px] leading-6">Koshpal</span>
              </div>
              <div />
              {COLS.map((c) => (
                <div key={c} className="flex items-end justify-center px-2 pb-[26px] text-center font-figtree text-[15px] md:px-6 md:text-[19px] leading-6 tracking-[-0.2px]">
                  {c}
                </div>
              ))}

              {ROWS.map(([label, vals], r) => (
                <React.Fragment key={label}>
                  <div className="flex items-center justify-center border-t border-[#e8e0d8] px-2 text-center font-figtree text-[14px] leading-5 tracking-[-0.3px] md:px-4 md:text-[18px] md:leading-6">{label}</div>
                  <div />
                  <div className="flex items-center justify-center border-t border-white/15">
                    <Badge className="text-[#ffe0c2]" check="#3b3fbc" />
                  </div>
                  <div />
                  {vals.map((v, i) => (
                    <div key={i} className="flex items-center justify-center border-t border-[#ecdcd0]">
                      {v ? <Badge className="text-[#111]" check="#fff" /> : <No />}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
