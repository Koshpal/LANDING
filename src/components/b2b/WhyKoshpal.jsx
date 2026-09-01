import React from "react";
import { Heart, ShieldCheck, Activity, CheckCircle2, BarChart3, Rocket } from "lucide-react";
import { Section, SectionHead, Reveal } from "./primitives";

const CARDS = [
  [Heart, "Increase employee wellbeing", "Practical support for the everyday financial challenges people actually face."],
  [ShieldCheck, "Strengthen your benefits", "Add financial wellness to your benefits ecosystem with one rollout."],
  [Activity, "Improve engagement", "Value employees feel every month — not just during an annual session."],
  [CheckCircle2, "Reduce financial distraction", "Help employees get clarity and confidence around money."],
  [BarChart3, "Measure impact", "Understand adoption, engagement and wellness outcomes through aggregated insights."],
  [Rocket, "Easy to deploy", "Designed to fit existing HR and employee-benefit workflows."],
];

export default function WhyKoshpal() {
  return (
    <Section id="why" tone="dark">
      <SectionHead dark eyebrow="Why companies choose Koshpal" title="A benefit your people actually use — all year." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {CARDS.map(([Icon, h, p], i) => (
          <Reveal
            key={h}
            delay={(i % 3) * 0.05}
            className="b2b-card b2b-card-hover bg-[#fff] p-6"
          >
            <div
              className="w-[38px] h-[38px] rounded-[11px] border border-[#e5e9fb] grid place-items-center text-primary mb-3.5"
              style={{ background: "linear-gradient(135deg,#eef1ff,#e6faf7)" }}
            >
              <Icon size={18} strokeWidth={2} />
            </div>
            <h3 className="font-outfit font-semibold text-[17.5px] text-[#0b1533] mb-[7px]">{h}</h3>
            <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468]">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
