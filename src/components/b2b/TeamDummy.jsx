import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";
import { Dummy, DummyNote, DummyBadge } from "./Dummy";

const TEAM = [
  { n: "Founder One", r: "Co-founder", i: "F1" },
  { n: "Founder Two", r: "Co-founder", i: "F2" },
  { n: "Team Member", r: "Product", i: "T1" },
  { n: "Team Member", r: "Engineering", i: "T2" },
];

export default function TeamDummy({ tone = "tint" }) {
  return (
    <Dummy>
      <Section tone={tone} id="team-dummy">
        <SectionHead eyebrow="Team" title="The people behind Koshpal." />
        <DummyNote>Invented names and roles for layout review.</DummyNote>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {TEAM.map((m, i) => (
            <Reveal key={m.i} delay={i * 0.05} className="b2b-card bg-[#fff] p-5 text-center relative">
              <DummyBadge className="absolute top-3 right-3">Dummy</DummyBadge>
              <div className="w-20 h-20 rounded-full mx-auto grid place-items-center font-outfit font-bold text-[22px] text-[#6b7597] bg-[#eef1f8] border border-[#e9ecf7]" aria-hidden="true">
                {m.i}
              </div>
              <div className="font-outfit font-semibold text-[16px] text-[#0b1533] mt-3">{m.n}</div>
              <div className="font-jakarta text-[13.5px] text-[#3a4468]">{m.r}</div>
            </Reveal>
          ))}
        </div>
      </Section>
    </Dummy>
  );
}
