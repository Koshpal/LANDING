import React from "react";

/* Figma "Container" 5:1282: 1380x1332 rounded card.
   On lg+ every element is placed in container-query units of the card width
   (1380 design px = 100cqw), so the composition scales exactly. Below lg the
   copy stacks above a cropped version of the same art stage (--oy shifts the
   art up by the empty space left of the headline). */
const U = 100 / 1380;
const cq = (px) => `${(px * U).toFixed(4)}cqw`;
const at = (x, y, w, h) => ({
  left: cq(x),
  top: `calc(${cq(y)} - var(--oy))`,
  ...(w ? { width: cq(w) } : null),
  ...(h ? { height: cq(h) } : null),
});

function PillarBar({ x, y, color, label, labelRight }) {
  return (
    <>
      <div
        className="absolute overflow-clip border-[0.06cqw] border-white"
        style={{ ...at(x, y, 300.08, 578.894), borderRadius: cq(31.5), backgroundColor: color, boxShadow: `inset 0 ${cq(3.15)} ${cq(39.4)} rgba(255,255,255,0.25)` }}
      />
      <p
        className="absolute -translate-x-full whitespace-nowrap text-right font-figtree font-normal uppercase text-[#0b0b0c]"
        style={{ left: cq(labelRight), top: `calc(${cq(y + 32)} - var(--oy))`, fontSize: cq(52.13), lineHeight: cq(69.51) }}
      >
        {label}
      </p>
    </>
  );
}

export default function PillarSection() {
  return (
    <section className="bg-white px-4 py-10 md:px-[30px] md:py-20">
      <div
        className="relative mx-auto max-w-[1380px] overflow-clip rounded-[30px] [container-type:inline-size] lg:aspect-[1380/1332]"
        style={{ backgroundImage: "linear-gradient(203.22deg, #3b3fbc 15.387%, #1b1d56 170.36%)" }}
      >
        {/* copy */}
        <div className="relative z-10 flex flex-col items-end p-6 pb-0 text-right md:p-10 md:pb-0 lg:absolute lg:left-[42.25%] lg:top-[4.49%] lg:w-[52.8%] lg:p-0">
          <span className="whitespace-nowrap rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[16px] leading-[33px] text-black lg:px-[1.304cqw] lg:py-[0.58cqw] lg:text-[1.449cqw] lg:leading-[2.39cqw]">
            Our belief
          </span>
          <h2 className="mt-6 font-figtree font-normal text-white text-balance text-[clamp(32px,7vw,56px)] leading-[1.05] tracking-[-0.0127em] lg:mt-[1.739cqw] lg:text-[5.942cqw] lg:leading-[6.232cqw]">
            Body and mind are covered at work. <span className="text-[#c8f169]">Money is the missing third pillar.</span>
          </h2>
          <p className="mt-6 font-figtree text-white text-balance text-[17px] leading-[1.5] md:text-[22px] lg:mt-[2.464cqw] lg:text-[2.319cqw] lg:leading-[3.478cqw]">
            Workplaces learned to care for physical health, then mental health. Money, the worry employees carry most, still gets a webinar once a year. We believe financial wellbeing will become the third standard benefit at work, and we’re building it for India first.</p>
        </div>

        {/* art stage */}
        <div
          className="relative mt-8 aspect-[1380/1120] overflow-clip [--oy:15.36cqw] [container-type:inline-size] lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto lg:[--oy:0cqw]"
          aria-hidden="true"
        >
          <img src="/img/home/pillar-shape.svg" alt="" className="absolute max-w-none" style={at(0, 507.77, 332, 911)} />
          <div className="absolute flex flex-col items-center" style={at(72, 240.77, 394)}>
            <span className="relative block" style={{ width: cq(182), height: cq(45) }}>
              <span className="absolute" style={{ top: "-60.67%", right: "-16.37%", bottom: "-68.22%", left: "-15.49%" }}>
                <img src="/img/home/logo-light.svg" alt="" className="block size-full max-w-none" />
              </span>
            </span>
            <p className="font-figtree font-normal uppercase text-[#c8f169]" style={{ fontSize: cq(81.19), lineHeight: cq(108.25) }}>Financial</p>
          </div>
          <img src="/img/home/pillar-column.png" alt="" className="absolute max-w-none" style={at(0, 370.77, 563, 962)} />
          <PillarBar x={496} y={905.44} color="#ffbcfc" label="Mental" labelRight={749} />
          <PillarBar x={874} y={1056.77} color="#c8f169" label="Physical" labelRight={1148} />
        </div>
      </div>
    </section>
  );
}
