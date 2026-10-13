import React from "react";

/** Large number with a visible source. Refuses to render without one
    (brief section 9: every statistic needs a credible, visible source). */
export default function StatBlock({ value, label, source, href }) {
  if (!source) return null;
  return (
    <div className="b2b-card bg-[#f7f8fd] p-6">
      <div className="font-outfit font-extrabold text-[40px] tracking-[-0.02em] text-[#0b1533]">{value}</div>
      <div className="font-jakarta text-[15px] text-[#3a4468] mt-1">{label}</div>
      <div className="font-jakarta text-[12px] text-[#6b7597] mt-3">
        Source:{" "}
        {href ? (
          <a href={href} className="underline" target="_blank" rel="noopener noreferrer">
            {source}
          </a>
        ) : (
          source
        )}
      </div>
    </div>
  );
}
