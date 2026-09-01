import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JellyGrid from "./JellyGrid";

/* Shared building blocks for the B2B site. Everything routes through these, so
   restyling them lifts every page. */

const ease = [0.2, 0.8, 0.2, 1];

/** Scroll-into-view reveal — soft fade + rise + blur-in. */
export function Reveal({ children, delay = 0, y = 20, className = "", as = "div" }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={`b2b-reveal ${className}`}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </M>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <span className={`b2b-eyebrow ${className}`}>{children}</span>;
}

/** eyebrow + h2 + optional lede, consistent rhythm. */
export function SectionHead({ eyebrow, title, lede, dark = false, className = "" }) {
  return (
    <div className={`max-w-[64ch] mb-10 sm:mb-14 lg:mb-16 ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className="font-outfit font-bold tracking-[-0.028em] leading-[1.08] mt-5 text-[30px] sm:text-[40px] lg:text-[48px]"
        style={{ color: dark ? "#f6f8ff" : "var(--b2b-ink)" }}
      >
        {title}
      </h2>
      {lede && (
        <p
          className="font-jakarta mt-4 text-[17px] sm:text-[19px] leading-[1.65] max-w-[60ch]"
          style={{ color: dark ? "#c3cdec" : "var(--b2b-ink-2)" }}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/** Pill button. `variant`: "solid" | "ghost". */
export function CTA({ to = "/demo", children, variant = "solid", size = "md", dark = false, className = "" }) {
  const base =
    "relative inline-flex items-center justify-center gap-2 font-outfit font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-[0.97] overflow-hidden";
  const sizes = { md: "px-[22px] py-[13px] text-[15px]", lg: "px-8 py-[17px] text-[16px]" };
  const solid =
    "text-[#fff] shadow-[0_10px_28px_-8px_rgba(51,78,172,0.6)] hover:shadow-[0_16px_40px_-8px_rgba(51,78,172,0.72)] hover:-translate-y-0.5";
  const ghost = dark
    ? "text-[#fff] border border-[#ffffff33] bg-[#ffffff0f] backdrop-blur-sm hover:bg-[#ffffff1f] hover:border-[#ffffff66]"
    : "text-primary border border-[#dfe3f2] bg-[#fff] hover:border-primary hover:bg-primary-lightest";
  const cls = `${base} ${sizes[size]} ${variant === "solid" ? solid : ghost} ${className}`;
  const isHash = typeof to === "string" && to.startsWith("#");
  const isExternal = typeof to === "string" && /^https?:/.test(to);

  const inner = (
    <>
      {variant === "solid" && (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(100deg,#334eac 0%,#4459c9 52%,#3a86b0 100%)" }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 opacity-50"
            style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.4),transparent)" }}
          />
        </>
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  const style = variant === "solid" ? { color: "#fff" } : undefined;
  if (isHash || isExternal) {
    return (
      <a href={to} className={cls} style={style}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} style={style}>
      {inner}
    </Link>
  );
}

/** Standard section wrapper: vertical rhythm + centered container. */
export function Section({ id, children, tone = "white", className = "" }) {
  const tones = {
    white: "bg-[#fff]",
    tint: "bg-[#f7f8fd] border-y border-[#e9ecf7]",
    surface2: "bg-[#f1f3fb] border-y border-[#e9ecf7]",
    dark: "b2b-dark-band text-[#f6f8ff]",
  };
  return (
    <section id={id} className={`relative ${tones[tone]} py-20 sm:py-28 lg:py-32 ${className}`}>
      {tone === "dark" && <JellyGrid color="255, 255, 255" opacity={0.16} />}
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">{children}</div>
    </section>
  );
}
