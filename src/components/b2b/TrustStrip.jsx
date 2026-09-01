import React from "react";
import { ShieldCheck, HeartHandshake, BarChart3, GraduationCap } from "lucide-react";
import { Reveal } from "./primitives";

const POINTS = [
  [ShieldCheck, "Privacy-first", "Individual financial data never reaches the employer."],
  [HeartHandshake, "Employee-first", "A benefit built to be used, not just offered."],
  [BarChart3, "Data-driven", "Adoption, engagement and outcomes reported from day one."],
  [GraduationCap, "Expert-backed", "Qualified financial coaches behind the technology."],
];

/* Credibility strip directly under the hero. No fabricated logos — swap in real
   customer logos here when they exist. */
export default function TrustStrip() {
  return (
    <div className="bg-[#fff] border-b border-[#e9ecf7] py-10 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <p className="text-center font-outfit font-semibold text-[12px] tracking-[0.16em] uppercase text-[#6b7597]">
          Built for modern workplaces
        </p>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {POINTS.map(([Icon, h, p], i) => (
            <Reveal
              key={h}
              delay={i * 0.05}
              className="b2b-card b2b-card-hover bg-[#f7f8fd] !rounded-[16px] p-5 text-center sm:text-left"
            >
              <div
                className="w-9 h-9 rounded-[10px] border border-[#e5e9fb] grid place-items-center text-primary mb-3 mx-auto sm:mx-0"
                style={{ background: "linear-gradient(135deg,#eef1ff,#e6faf7)" }}
              >
                <Icon size={17} strokeWidth={2} />
              </div>
              <h3 className="font-outfit font-semibold text-[15px] text-[#0b1533]">{h}</h3>
              <p className="font-jakarta text-[13px] leading-[1.5] text-[#6b7597] mt-1">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
