import React from "react";
import { SHOW_DUMMY } from "../../lib/dummy";

/** Small amber badge marking invented content. */
export function DummyBadge({ children = "Dummy content", className = "" }) {
  return (
    <span
      className={`inline-block font-outfit font-bold text-[10.5px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-full bg-[#fff4d6] text-[#7a5200] border border-[#f0d58a] ${className}`}
    >
      {children}
    </span>
  );
}

/** Renders children only while dummy content is enabled. */
export function Dummy({ children }) {
  return SHOW_DUMMY ? <>{children}</> : null;
}

/** Banner placed above a block of dummy content. */
export function DummyNote({ children }) {
  if (!SHOW_DUMMY) return null;
  return (
    <p className="mb-5 inline-flex flex-wrap items-center gap-2 font-jakarta text-[13px] text-[#7a5200]">
      <DummyBadge>Dummy content</DummyBadge>
      {children || "Invented for layout review. Not real customers, people or results."}
    </p>
  );
}
