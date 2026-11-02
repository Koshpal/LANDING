import React from "react";
import { Link } from "react-router-dom";

/* Figma "pill + arrow chip" button. Sized in em so it scales with the
   surrounding font-size; the 24px design size is the default. */
const TONES = {
  indigo: "bg-[#3b3fbc] shadow-[0_5px_7px_rgba(59,63,188,0.5)] hover:shadow-[0_8px_14px_rgba(59,63,188,0.55)]",
  black: "bg-black hover:bg-[#1c1c1c]",
  white: "bg-white !text-[#0b0b0c] hover:bg-[#f3f3f8]",
  lime: "bg-[#a0fa6b] !text-[#0b0b0c] shadow-[0_0_24px_rgba(160,250,107,0.55)] hover:shadow-[0_0_32px_rgba(160,250,107,0.75)]",
};

export default function PillButton({ to, href, onClick, tone = "indigo", size = "lg", children, className = "", ...rest }) {
  const text = size === "lg" ? "text-[clamp(15px,1.39vw,20px)]" : "text-[clamp(15px,1.25vw,18px)]";
  const chipBg = tone === "lime" ? "bg-black" : "bg-white";
  const chip = size === "lg" ? "size-[clamp(30px,2.72vw,39.2px)]" : "size-[30px]";
  const cls = `group inline-flex items-center gap-[clamp(12px,1.39vw,20px)] rounded-full py-[6px] pl-[clamp(20px,2.22vw,32px)] pr-[6px] font-stack font-light leading-[28px] tracking-[-0.01em] text-white whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${TONES[tone]} ${text} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className={`flex shrink-0 items-center justify-center rounded-full ${chipBg} transition-transform duration-200 group-hover:rotate-45 ${chip}`}>
        <img src="/img/home/arrow-insert.svg" alt="" width="20" height="20" className={`-scale-x-100 size-[50%] ${tone === "lime" ? "invert" : ""}`} />
      </span>
    </>
  );
  if (to) return <Link to={to} className={cls} onClick={onClick} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} onClick={onClick} {...rest}>{inner}</a>;
  return <button type="button" className={cls} onClick={onClick} {...rest}>{inner}</button>;
}
