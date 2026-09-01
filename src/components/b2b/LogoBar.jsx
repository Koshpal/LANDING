import React from "react";

/* Trust bar. Swap the .logo-slot divs for real <img> client logos. */
export default function LogoBar() {
  return (
    <div className="bg-[#fff] border-y border-[#e9ecf7] py-9 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <p className="text-center font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase text-[#6b7597] mb-6">
          Trusted by teams piloting Koshpal
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-[34px] min-w-[120px] grid place-items-center rounded-lg border border-dashed border-[#dfe3f2] bg-[#f1f3fb] font-outfit font-semibold text-[12px] tracking-[0.06em] text-[#6b7597]"
            >
              CLIENT LOGO
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
