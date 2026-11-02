import React from "react";
import Navbar from "../Navbar";
import PillButton from "./PillButton";
import Tag from "./Tag";
import { H2 } from "./Heading";

/* Building blocks shared by the inner pages (Figma Company / Solutions / Platform frames). */

export const MAGENTA = "linear-gradient(180deg,#b24979 0%,#6b2645 100%)";
/* Blog / FAQ frames use the same hero in orange. */
export const GREEN = "linear-gradient(180deg,#4d9069 0%,#3d7d5a 28%,#336a4b 47%,#2b573e 75%,#214430 100%)";
export const ORANGE = "linear-gradient(180deg,#f5c27a 0%,#f1a748 14%,#d97619 40%,#b74c04 78%,#8f3705 100%)";

/** Pink pill label ("What we are doing"). */
export function PinkTag({ children, className = "" }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[16px] leading-[33px] text-black md:text-[20px] ${className}`}>
      {children}
    </span>
  );
}

/** Small numbered circle ("01"). */
export function NumDot({ n, tone = "pink", className = "" }) {
  const bg = tone === "lime" ? "bg-[#c8f169]" : "bg-[#ffbcfc]";
  return (
    <span className={`flex size-9 items-center justify-center rounded-full font-stack text-[14px] leading-none text-black ${bg} ${className}`}>
      {String(n).padStart(2, "0")}
    </span>
  );
}

/** Magenta hero with glass nav, tag, headline (+ optional highlighted pill), lead and two buttons. */
export function MagentaHero({ tag, title, pillPrefix, pillSuffix, pill, lead, primary, secondary, children, gradient = MAGENTA, small = false, padTop = 224, padBottom, leadMt }) {
  const pb = padBottom ?? (children ? 100 : 120);
  return (
    <section className="relative" style={{ backgroundImage: gradient }}>
      <Navbar glass />
      <div
        className={`mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-[140px] text-center md:px-10 md:pt-[var(--pt)] md:pb-[var(--pb)] ${children ? "pb-10" : "pb-16"}`}
        style={{ "--pt": `${padTop}px`, "--pb": `${pb}px` }}
      >
        <Tag tone="light">{tag}</Tag>
        <h1 className={`${small ? "mt-6 md:mt-3" : "mt-8 md:mt-10"} font-figtree font-normal text-white [text-shadow:0_4px_10px_rgba(0,0,0,0.25)] ${small ? "text-[clamp(36px,5.69vw,82px)] leading-[1.22]" : "text-[clamp(36px,6.25vw,90px)] leading-[1.11]"}`}>
          <span className={`mx-auto block ${small ? "max-w-[1250px]" : "max-w-[1130px]"}`}>{title}</span>
          {pill && (
            <span className="mt-1 flex flex-wrap items-center justify-center gap-[0.25em] md:mt-3">
              {pillPrefix && <span>{pillPrefix}</span>}
              <span className={`inline-block rounded-[1.4em] bg-[#ffbcfc] pb-[0.2em] text-[#0b0b0c] [text-shadow:none] ${pillPrefix || pillSuffix ? "px-[0.8em]" : "px-[1.6em]"}`}>{pill}</span>
              {pillSuffix && <span>{pillSuffix}</span>}
            </span>
          )}
        </h1>
        <p style={leadMt ? { "--lm": `${leadMt}px` } : undefined} className={`text-balance font-stack text-white ${leadMt ? "md:!mt-[var(--lm)] " : ""}${small ? "mt-4 max-w-[720px] text-[clamp(16px,1.67vw,24px)] leading-[1.3]" : "mt-8 max-w-[1000px] text-[clamp(17px,2.22vw,32px)] leading-[1.25] md:mt-10"}`}>{lead}</p>
        {(primary || secondary) && (
          <div className={`flex flex-wrap items-center justify-center gap-4 ${small ? "mt-8 md:mt-10" : "mt-8 md:mt-[34px]"}`}>
            {primary && <PillButton to={primary.to} href={primary.href} tone="lime" size="sm" className="!text-[18px]">{primary.label}</PillButton>}
            {secondary && <PillButton to={secondary.to} href={secondary.href} tone="white" size="sm" className="!text-[18px]">{secondary.label}</PillButton>}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}

/** Dark teal photographic closing band ("Let's build the third pillar…"). */
export function CtaBand({ tag = "Get started", children, cta = "Book a demo", to = "/demo", href, wide = false, py = 120 }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#041a1a",
        backgroundImage:
          "radial-gradient(55% 95% at 100% 38%, #7a8a76 0%, rgba(122,138,118,0) 72%), radial-gradient(45% 90% at 52% 62%, #2f4f4a 0%, rgba(47,79,74,0) 70%), radial-gradient(35% 70% at 100% 100%, #0e4a3c 0%, rgba(14,74,60,0) 80%)",
      }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 py-20 text-center md:py-[var(--py)]" style={{ "--py": `${py}px` }}>
        <Tag tone="light">{tag}</Tag>
        <h2 className={`mt-8 text-balance font-figtree font-normal text-white text-[clamp(34px,5.69vw,82px)] leading-[1.05] tracking-[-0.0127em] ${wide ? "max-w-[1200px]" : "max-w-[1000px]"}`}>{children}</h2>
        <div className="mt-8">
          <PillButton to={href ? undefined : to} href={href} tone="lime" size="sm" className="!text-[18px]">{cta}</PillButton>
        </div>
      </div>
    </section>
  );
}

/** Dark "how it works" block: pink tag + big title on the left, numbered rows on the right. */
export function StepsSection({ id, tag, title, lead, steps, rowH = 197 }) {
  return (
    <section id={id} className="scroll-mt-20 bg-[#122020] px-5 py-16 text-white md:px-[80px] md:pb-[97px] md:pt-[95px]">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1fr)_656px] lg:gap-[60px]">
        <div className="lg:pt-[25px]">
          <PinkTag>{tag}</PinkTag>
          <h2 className="mt-7 max-w-[520px] font-figtree text-[clamp(40px,5vw,72px)] font-medium leading-[1.2] tracking-[-0.0127em] [text-wrap:wrap]">{title}</h2>
          {lead && <p className="mt-5 max-w-[460px] font-stack text-[clamp(17px,1.67vw,24px)] leading-[1.35]">{lead}</p>}
        </div>
        <ol>
          {steps.map((s, i) => (
            <li key={s.t} style={{ "--rh": `${rowH}px` }} className={`grid grid-cols-[72px_1fr] gap-x-4 pb-8 pt-8 md:min-h-[var(--rh)] md:grid-cols-[130px_1fr] md:pb-0 md:pt-[48px] ${i < steps.length - 1 ? "border-b border-white/20" : ""}`}>
              <span className="font-figtree text-[40px] font-light leading-[1] text-[#ffbcfc] md:pt-[6px] md:text-[48px]">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-figtree text-[22px] leading-[1.2] md:text-[clamp(24px,2.22vw,32px)]">{s.t}</h3>
                <p className="mt-3 max-w-[470px] font-figtree text-[15px] leading-6 md:mt-4 md:text-[16px]">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export { H2 };

/** Gradient closing band with floating photo tiles (positions in 1440px design px). */
export function PhotoCta({ tag = "Get started", tiles, heading, cta = "Book a demo", to = "/demo" }) {
  const cq = (px) => `${((px / 1440) * 100).toFixed(3)}cqw`;
  return (
    <section
      className="relative overflow-hidden [container-type:inline-size]"
      style={{ backgroundImage: "linear-gradient(180deg,#fff 0%,#d9edfb 3%,#52aef6 14%,#095af8 40%,#003095 72%,#011748 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {tiles.map((t) => (
          <img key={t.src} src={t.src} alt="" loading="lazy" className="absolute rounded-[8px] object-cover" style={{ left: cq(t.x), top: cq(t.y), width: cq(t.w), height: cq(t.h) }} />
        ))}
      </div>
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-24 pt-32 text-center md:min-h-[1122px] md:justify-center md:px-10 md:pb-[160px] md:pt-[200px]">
        <Tag tone="light">{tag}</Tag>
        <h2 className="mt-6 max-w-[1100px] text-balance font-figtree font-normal text-white text-[clamp(34px,5.69vw,82px)] leading-[1.05] tracking-[-0.0127em]">{heading}</h2>
        <div className="mt-10">
          <PillButton to={to} tone="lime" size="sm" className="!text-[18px]">{cta}</PillButton>
        </div>
      </div>
    </section>
  );
}

const CAROUSEL = [
  { src: "/img/pages/story/c1.png", x: 0, w: 149 },
  { src: "/img/pages/story/c2.png", x: 172, w: 343 },
  { src: "/img/pages/story/c3.png", x: 541, w: 284 },
  { src: "/img/pages/story/c4.png", x: 852, w: 423 },
  { src: "/img/pages/story/c5.png", x: 1301, w: 139 },
];

/** Static photo strip at the foot of a magenta hero (1440px design, centred and cropped on narrower screens). */
export function PhotoCarousel() {
  return (
    <div className="relative overflow-hidden pb-14 md:pb-[120px]" aria-hidden="true">
      <div className="relative mx-auto h-[300px] w-[1440px] origin-top max-md:scale-[0.7] md:h-[429px]" style={{ left: "50%", transform: "translateX(-50%)" }}>
        {CAROUSEL.map((c) => (
          <img key={c.src} src={c.src} alt="" loading="lazy" className="absolute top-0 h-[429px] rounded-[30px] object-cover" style={{ left: c.x, width: c.w }} />
        ))}
      </div>
    </div>
  );
}

/** Alternating image/text rows with numbered dots. rows: [{ t, d }] */
export function AltRows({ rows, image = "/img/pages/model.jpg", className = "mt-14" }) {
  return (
    <ol className={`mx-auto flex max-w-[1200px] flex-col gap-14 md:gap-[102px] ${className}`}>
      {rows.map((r, i) => (
        <li key={r.t} className="grid items-center gap-8 md:grid-cols-2 md:gap-[58px]">
          <img src={r.img || image} alt="" width="538" height="389" loading="lazy" className={`aspect-[538/389] w-full rounded-[30px] object-cover ${i % 2 ? "md:order-2" : ""}`} />
          <div className={i % 2 ? "md:order-1" : ""}>
            {r.tag ? <PinkTag>{r.tag}</PinkTag> : <NumDot n={i + 1} />}
            <h3 className="mt-6 max-w-[430px] text-balance font-figtree text-[clamp(28px,3.33vw,48px)] font-medium leading-[1.2] tracking-[-0.02em]">{r.t}</h3>
            <p className="mt-5 max-w-[470px] font-stack text-[clamp(17px,1.5vw,22px)] leading-[1.3]">{r.d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
