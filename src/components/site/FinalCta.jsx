import React from "react";
import Tag from "./Tag";
import { H2, Lead } from "./Heading";
import PillButton from "./PillButton";

/* Figma 2:20655 "private by design": white-to-navy gradient with floating photo tiles.
   Tiles are positioned in container-query units so they keep their place as the band scales. */
const TILES = [
  { n: 1, x: 393, y: 186, w: 124, h: 114 },
  { n: 2, x: 898, y: 175, w: 111, h: 139 },
  { n: 3, x: 51, y: 307, w: 103, h: 152 },
  { n: 4, x: 1206, y: 330, w: 162, h: 105 },
  { n: 5, x: 76, y: 766, w: 186, h: 130 },
  { n: 6, x: 1172, y: 798, w: 92, h: 105 },
  { n: 7, x: 695, y: 910, w: 88, h: 111 },
];
const cq = (px) => `${((px / 1440) * 100).toFixed(3)}cqw`;

export default function FinalCta() {
  return (
    <section
      className="relative overflow-hidden [container-type:inline-size]"
      style={{ backgroundImage: "linear-gradient(180deg,#fff 0%,#abdbf9 3.5%,#5fbdf7 12%,#0050f8 43%,#003095 72%,#001033 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {TILES.map((t) => (
          <img
            key={t.n}
            src={`/img/home/jars/j${t.n}.png`}
            alt=""
            loading="lazy"
            className="absolute rounded-[8px] object-cover"
            style={{ left: cq(t.x), top: cq(t.y), width: cq(t.w), height: cq(t.h) }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-24 pt-32 text-center md:min-h-[1146px] md:justify-center md:px-10 md:pb-[160px] md:pt-[180px]">
        <Tag tone="light">private by design</Tag>
        <H2 className="mt-6 max-w-[1080px] text-white">
          See what <span className="text-[#c8f169]">lower financial</span> stress does for your business.
        </H2>
        <Lead className="mt-6 max-w-[700px] text-white">Book a 30-minute demo. We’ll walk you through the dashboard and the app, and tailor a 60-day pilot to your team.</Lead>
        <div className="mt-10">
          <PillButton to="/demo" tone="lime" size="sm" className="!text-[20px] !leading-[28px]">Book a Demo</PillButton>
        </div>
      </div>
    </section>
  );
}
