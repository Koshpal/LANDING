import React from "react";

/* Dark "• label •" eyebrow pill used above section headings (Figma 14:3656). */
export default function Tag({ children, tone = "dark", className = "" }) {
  const cls = tone === "dark" ? "bg-[#171718] text-white" : "bg-white text-[#0b0b0c]";
  const dot = tone === "dark" ? "bg-white" : "bg-[#0b0b0c]";
  return (
    <span className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-[6px] font-stack text-[14px] leading-[16.8px] ${cls} ${className}`}>
      <i className={`size-[6px] rounded-full ${dot}`} />
      {children}
      <i className={`size-[6px] rounded-full ${dot}`} />
    </span>
  );
}
