import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JellyGrid from "./JellyGrid";

/* Shared building blocks for the B2B homepage.
   Keeps the section components small and the visual language consistent. */

const ease = [0.2, 0.8, 0.2, 1];

/** Scroll-into-view fade/rise. Mirrors the framer-motion usage elsewhere in the app. */
export function Reveal({ children, delay = 0, y = 18, className = "", as = "div" }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={`b2b-reveal ${className}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </M>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <span className={`b2b-eyebrow ${className}`}>{children}</span>;
}

/** eyebrow + h2 + optional lede, with consistent spacing */
export function SectionHead({ eyebrow, title, lede, dark = false, className = "" }) {
  return (
    <div className={`max-w-[62ch] mb-9 sm:mb-12 lg:mb-14 ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className="font-outfit font-bold tracking-[-0.02em] leading-[1.12] mt-4 text-[28px] sm:text-[36px] lg:text-[46px]"
        style={{ color: dark ? "#f4f6fd" : "var(--b2b-ink)" }}
      >
        {title}
      </h2>
      {lede && (
        <p
          className="font-jakarta mt-4 text-[17px] sm:text-[19px] leading-[1.6] max-w-[60ch]"
          style={{ color: dark ? "#b9c3e6" : "var(--b2b-ink-2)" }}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/** Pill button. `variant`: "solid" | "ghost". Renders <Link> for internal, <a> for hash/external. */
export function CTA({ to = "/demo", children, variant = "solid", size = "md", dark = false, className = "" }) {
  const base =
    "inline-flex items-center gap-2 font-outfit font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap";
  const sizes = { md: "px-[22px] py-[13px] text-[15.5px]", lg: "px-7 py-4 text-[16.5px]" };
  const solid =
    "bg-primary text-[#fff] border-[1.5px] border-primary shadow-[0_6px_18px_rgba(51,78,172,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(51,78,172,0.34)]";
  const ghost = dark
    ? "bg-transparent text-[#fff] border-[1.5px] border-[#ffffff4d] hover:bg-[#ffffff1a] hover:border-[#ffffff99]"
    : "bg-transparent text-primary border-[1.5px] border-[#d3d9e8] hover:bg-primary-lightest hover:border-primary";
  const cls = `${base} ${sizes[size]} ${variant === "solid" ? solid : ghost} ${className}`;
  const isHash = typeof to === "string" && to.startsWith("#");
  const isExternal = typeof to === "string" && /^https?:/.test(to);
  if (isHash || isExternal) {
    return (
      <a href={to} className={cls} style={variant === "solid" ? { color: "#fff" } : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} style={variant === "solid" ? { color: "#fff" } : undefined}>
      {children}
    </Link>
  );
}

/** Standard section wrapper: vertical rhythm + centered max-width container. */
export function Section({ id, children, tone = "white", className = "" }) {
  const tones = {
    white: "bg-[#fff]",
    tint: "bg-[#f6f7fb] border-y border-[#e3e7f1]",
    surface2: "bg-[#f0f2f8] border-y border-[#e3e7f1]",
    dark: "b2b-dark-band text-[#f4f6fd]",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 lg:py-32 ${className}`}>
      {tone === "dark" && <JellyGrid color="255, 255, 255" opacity={0.2} />}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">{children}</div>
    </section>
  );
}
