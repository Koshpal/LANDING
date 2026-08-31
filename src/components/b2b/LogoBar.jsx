import React from "react";

/* Trust bar. Swap the .logo-slot divs for real <img> client logos. */
export default function LogoBar() {
  return (
    <div className="bg-[#fff] border-y border-[#e3e7f1] py-9 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <p className="text-center font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase text-[#6b7590] mb-6">
          Trusted by teams piloting Koshpal
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-[34px] min-w-[120px] grid place-items-center rounded-lg border border-dashed border-[#d3d9e8] bg-[#f0f2f8] font-outfit font-semibold text-[12px] tracking-[0.06em] text-[#6b7590]"
            >
              CLIENT LOGO
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
