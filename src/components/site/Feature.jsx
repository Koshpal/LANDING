import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2, Check, ChartNoAxesColumn, Heart, Inbox, PiggyBank, SprayCan, Soup, Ticket, Umbrella,
} from "lucide-react";
import Navbar from "../Navbar";
import Tag from "./Tag";
import PillButton from "./PillButton";
import { H2 } from "./Heading";
import { PinkTag } from "./PageParts";

/* Building blocks for the Mobile App / Employee Dashboard frames. Hero compositions are laid out
   on the 1440px design canvas and scaled with container-query units from md up; below md they
   collapse to a simple stack (title, then the product image). */

export const BLUE = "linear-gradient(90deg, rgba(0,20,100,0) 30%, rgba(0,20,100,0.28) 100%), radial-gradient(60% 32% at 50% 6%, #5bb8e6 0%, rgba(91,184,230,0) 100%), linear-gradient(180deg,#4a9fe0 0%,#2a75d2 40%,#1c63be 66%,#07397a 81%,#022a68 90%,#010f40 100%)";
export const TEAL = "radial-gradient(55% 28% at 50% 4%, #12cfd0 0%, rgba(18,207,208,0) 100%), linear-gradient(180deg,#0a6b72 0%,#065d67 14%,#065b62 28%,#06535b 47%,#054b53 66%,#03424b 85%,#02404a 100%)";

export const c = (n) => `${(n / 14.4).toFixed(3)}cqw`;

/** Absolutely placed (md+) on the 1440 canvas, anchored by its centre or its top-centre. */
export function At({ x, y, top = false, className = "", style, children }) {
  return (
    <div
      className={`md:absolute md:left-[var(--x)] md:top-[var(--y)] md:-translate-x-1/2 ${top ? "" : "md:-translate-y-1/2"} ${className}`}
      style={{ "--x": c(x), "--y": c(y), ...style }}
    >
      {children}
    </div>
  );
}

/** Hero shell: full-bleed gradient, glass nav, 1440 canvas. */
export function Stage({ bg, h, children }) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: bg }}>
      <Navbar glass />
      <div className="mx-auto max-w-[1440px] md:[container-type:inline-size]">
        <div
          className="relative flex flex-col items-center px-5 pb-10 pt-[130px] text-center md:block md:p-0 md:[aspect-ratio:var(--ar)]"
          style={{ "--ar": `1440 / ${h}` }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

const LIME = "text-[#c8f169]";

/** Eyebrow tag + two-tone headline, positioned by the top of the tag (design y). */
export function HeroTitle({ y, tag, lines, accent = 1, pill, buttons, tagTone = "light", fs = 82, lh = 89, children }) {
  return (
    <At x={720} y={y} top className="flex w-full flex-col items-center md:w-[90cqw]">
      <Tag tone={tagTone}>{tag}</Tag>
      <h1
        className="mt-6 font-figtree font-normal text-white [text-shadow:0_4px_10px_rgba(0,0,0,0.25)] text-[clamp(34px,9vw,52px)] leading-[1.1] md:mt-[2.08cqw] md:[font-size:var(--fs)] md:[line-height:var(--lh)]"
        style={{ "--fs": c(fs), "--lh": c(lh) }}
      >
        {lines.map((l, i) => (
          <span key={i} className={`block ${i >= accent && !pill ? LIME : ""}`}>{l}</span>
        ))}
        {pill && (
          <span className="mt-1 flex flex-wrap items-center justify-center gap-[0.25em] md:mt-0">
            {pill.prefix && <span>{pill.prefix}</span>}
            <span className="inline-block rounded-[1.4em] bg-[#ffbcfc] px-[0.9em] pb-[0.18em] text-[#0b0b0c] [text-shadow:none]">{pill.text}</span>
          </span>
        )}
      </h1>
      {children}
      {buttons && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-[2.2cqw]">
          {buttons.map((b, i) => (
            <PillButton key={b.label} to={b.to} tone={i === 0 ? "lime" : "white"} size="sm" className="!text-[18px]">{b.label}</PillButton>
          ))}
        </div>
      )}
    </At>
  );
}

/* ---- concentric rings + icon bubbles (Spending insights frames) ---- */
const ORBIT = [
  { Icon: PiggyBank, bg: "#c68ec3" },
  { Icon: Soup, bg: "#8fa7e9" },
  { Icon: SprayCan, bg: "#8c9fc9" },
  { Icon: Umbrella, bg: "#c9a592" },
  { Icon: ChartNoAxesColumn, bg: "#f0b660" },
  { Icon: Inbox, bg: "#7a9cf7" },
  { Icon: Building2, bg: "#f08cb1" },
  { Icon: Ticket, bg: "#a5e0d3" },
  { Icon: Heart, bg: "#f2a1c9" },
];

export const ORBIT_SPENDING = [[350, 264], [843, 278], [1145, 316], [112, 683], [1324, 764], [341, 833], [1085, 846], [275, 1186], [1160, 1186]];
export const ORBIT_INSIGHTS = [[351, 262], [833, 281], [1111, 297], [113, 682], [1325, 764], [453, 469], [1008, 509], [263, 944], [1175, 944]];

export function Orbit({ pos, h }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox={`0 0 1440 ${h}`} fill="none">
        {[606, 497, 386].map((r) => (
          <circle key={r} cx="720" cy="760" r={r} stroke="rgba(255,255,255,0.75)" strokeWidth="1.3" />
        ))}
      </svg>
      {ORBIT.map(({ Icon, bg }, i) => (
        <span
          key={i}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-black/90"
          style={{ left: c(pos[i][0]), top: c(pos[i][1]), width: c(82), height: c(82), background: bg }}
        >
          <Icon style={{ width: c(38), height: c(38) }} strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}

/* ---- scroll-reveal paragraph ---- */
export function RevealText({ children }) {
  const ref = useRef(null);
  const words = String(children).split(" ");
  const [p, setP] = useState(0);

  useEffect(() => {
    const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setP(1); return undefined; }
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      setP(Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.25))));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);

  return (
    <section className="bg-white px-5 pb-16 pt-14 md:px-[84px] md:pb-[141px] md:pt-[142px]">
      <p ref={ref} className="mx-auto max-w-[1256px] font-figtree text-[clamp(24px,3.33vw,48px)] font-medium leading-[1.2]">
        <span className="sr-only">{children}</span>
        <span aria-hidden="true">
          {words.map((w, i) => (
            <span key={i} className="transition-colors duration-200" style={{ color: i / words.length < p ? "#0b0b0c" : "#b5b5b5" }}>{w}{" "}</span>
          ))}
        </span>
      </p>
    </section>
  );
}

/* ---- "X, the way it should be." heading block ---- */
export function RowsHead({ tag, children }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Tag>{tag}</Tag>
      <H2 className="mt-6 max-w-[1000px] text-[#171b26]">{children}</H2>
    </div>
  );
}

/* ---- photo + copy split (light on white, or dark rounded card) ---- */
export function Split({ dark = false, tag, title, lead, points, image = "/img/pages/model.jpg" }) {
  const body = (
    <div className={`grid items-center gap-10 ${dark ? "lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-[50px]" : "lg:grid-cols-[536px_minmax(0,1fr)] lg:gap-[60px]"}`}>
      <img src={image} alt="A smiling person holding a product jar" width="536" height="628" loading="lazy" className={`w-full object-cover [object-position:62%_50%] ${dark ? "aspect-[620/700] rounded-[28px] lg:max-w-[620px]" : "aspect-[536/628] max-w-[536px] rounded-[30px]"}`} />
      <div className={dark ? "lg:pr-10" : ""}>
        <PinkTag>{tag}</PinkTag>
        <h2 className="mt-6 max-w-[660px] font-figtree text-[clamp(32px,3.89vw,56px)] font-medium leading-[1.04] tracking-[-0.02em]">{title}</h2>
        <p className="mt-5 max-w-[620px] font-stack text-[clamp(17px,1.39vw,20px)] leading-[1.3]">{lead}</p>
        <ul className="mt-8 flex flex-col gap-6">
          {points.map((t) => (
            <li key={t} className="flex items-center gap-3 font-stack text-[18px] leading-6">
              <Check aria-hidden="true" className="size-4 shrink-0 text-[#a0fa6b]" strokeWidth={2.5} />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  return dark ? (
    <section className="bg-white px-4 py-10 md:px-[30px] md:py-20">
      <div className="mx-auto max-w-[1380px] rounded-[28px] bg-[#122020] p-5 text-white md:rounded-[40px] md:p-4">{body}</div>
    </section>
  ) : (
    <section className="bg-white px-5 py-14 md:px-10 md:py-[110px]">
      <div className="mx-auto max-w-[1240px] [&_li]:text-[#0b0b0c]">{body}</div>
    </section>
  );
}

/* ---- tabbed feature card ("Track your spending effortlessly.") ---- */
export function FeatureTabs({ kicker, title, lead, tabs, image }) {
  const [on, setOn] = useState(0);
  return (
    <section className="bg-white px-4 py-10 md:px-[30px] md:py-[80px]">
      <div className="mx-auto grid max-w-[1242px] gap-[10px] lg:grid-cols-[595px_minmax(0,1fr)]">
        <div className="flex items-center justify-center overflow-hidden rounded-[24px] bg-[#bdc2ff] lg:min-h-[516px]">
          <img src={image} alt="" width="579" height="498" loading="lazy" className="w-full max-w-[579px] object-contain" />
        </div>
        <div className="rounded-[24px] bg-[#212124] px-6 pb-8 pt-8 text-white md:px-10 md:pt-10">
          <p className="font-figtree text-[11px] font-bold uppercase tracking-[0.04em] text-[#8c7cff]">{kicker}</p>
          <h3 className="mt-4 font-figtree text-[clamp(26px,2.2vw,32px)] font-semibold leading-[1.15] tracking-[-0.02em]">{title}</h3>
          <p className="mt-9 max-w-[420px] font-figtree text-[14px] leading-5 text-[#a0a0a4]">{lead}</p>
          <ul className="mt-12 flex flex-col gap-1" role="tablist" aria-label={kicker}>
            {tabs.map((t, i) => {
              const active = on === i;
              return (
                <li key={t.t}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setOn(i)}
                    className={`flex w-full items-center justify-between gap-4 rounded-[14px] px-4 py-[14px] text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8c7cff] ${active ? "bg-[#2f2f35]" : "hover:bg-white/5"}`}
                  >
                    <span>
                      <span className="flex items-center gap-2 font-figtree text-[15px] font-semibold">
                        {active && <span className="flex size-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">{i + 1}</span>}
                        {t.t}
                      </span>
                      {active && <span className="mt-1 block font-figtree text-[12px] leading-4 text-[#a0a0a4]">{t.d}</span>}
                    </span>
                    <span className={`flex size-9 shrink-0 items-center justify-center rounded-[9px] ${active ? "bg-[#4a3cf5]" : "bg-[#333338]"}`}>
                      <t.Icon className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---- blue gradient CTA with floating photos ---- */
const FLOATS = [
  { n: 1, x: 389, y: 157, w: 129, h: 118 },
  { n: 2, x: 893, y: 145, w: 118, h: 144 },
  { n: 3, x: 48, y: 278, w: 108, h: 157 },
  { n: 4, x: 1202, y: 301, w: 169, h: 111 },
  { n: 5, x: 72, y: 736, w: 192, h: 135 },
  { n: 6, x: 1168, y: 767, w: 98, h: 111 },
  { n: 7, x: 691, y: 880, w: 94, h: 116 },
];

export function FloatingCta({ title, lead, cta = { label: "Book a demo", to: "/demo" }, tag = "private by design" }) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "linear-gradient(180deg,#ffffff 0%,#6dc2f7 8%,#3188f7 26%,#0046d8 52%,#01195f 80%,#01133d 100%)" }}>
      <div className="mx-auto max-w-[1440px] md:[container-type:inline-size]">
        <div className="relative flex flex-col items-center px-5 py-24 text-center md:block md:p-0 md:[aspect-ratio:1440/1117]">
          {FLOATS.map((f) => (
            <img
              key={f.n}
              src={`/img/pages/app/float-${f.n}.png`}
              alt=""
              loading="lazy"
              className="absolute hidden rounded-[6px] object-cover shadow-[0_6px_18px_rgba(0,0,0,0.25)] md:block"
              style={{ left: c(f.x), top: c(f.y), width: c(f.w), height: c(f.h) }}
            />
          ))}
          <At x={720} y={364} top className="flex w-full flex-col items-center md:w-[70cqw]">
            <Tag tone="light">{tag}</Tag>
            <h2 className="mt-6 font-figtree font-normal text-white text-[clamp(34px,5.69vw,82px)] leading-[1.02] tracking-[-0.0127em] md:mt-[2.2cqw]">{title}</h2>
            <p className="mt-6 max-w-[700px] font-stack text-[clamp(16px,1.39vw,20px)] leading-[1.3] text-white">{lead}</p>
            <div className="mt-8 md:mt-[2.6cqw]">
              <PillButton to={cta.to} tone="white" size="sm" className="!text-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.3)]">{cta.label}</PillButton>
            </div>
          </At>
        </div>
      </div>
    </section>
  );
}

/* ---- three small grey cards ("Three taps from a worry to a plan") ---- */
export function TrioCards({ tag, title, cards }) {
  return (
    <section className="bg-white px-5 py-14 md:px-10 md:pb-[100px] md:pt-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
        <Tag>{tag}</Tag>
        <H2 className="mt-6 max-w-[900px] text-[#0b0b0c]">{title}</H2>
        <ul className="mt-12 grid w-full max-w-[1164px] gap-[6px] md:mt-[96px] md:grid-cols-3">
          {cards.map(({ t, s, d, Icon }) => (
            <li key={t} className="flex flex-col items-center rounded-[40px] bg-[#f5f5f5] px-7 pb-9 pt-8 md:min-h-[395px]">
              <h3 className="font-figtree text-[18px] font-medium leading-6">{t}</h3>
              <p className="mt-[6px] font-figtree text-[11px] font-semibold uppercase leading-4 tracking-[0.02em] text-[#6c6cf0]">{s}</p>
              <span className="mt-6 flex size-[138px] items-center justify-center rounded-[40px] bg-[#3b3fbc]">
                <Icon className="size-[34%] text-[#a6a8ea]" aria-hidden="true" strokeWidth={2.2} />
              </span>
              <p className="mt-6 max-w-[290px] font-figtree text-[13px] leading-[17px]">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* tiny helper so pages can link out of hero images */
export function HeroImage({ src, alt = "", x, y, w, h, className = "" }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        className={`hidden select-none md:absolute md:block ${className}`}
        style={{ left: c(x), top: c(y), width: c(w), height: c(h) }}
      />
      <img src={src} alt={alt} width={w} height={h} className={`mt-8 block w-full max-w-[560px] md:hidden ${className}`} />
    </>
  );
}

export { Link };
