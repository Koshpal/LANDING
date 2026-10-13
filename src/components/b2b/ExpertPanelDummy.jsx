import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";
import { Dummy, DummyNote, DummyBadge } from "./Dummy";

/* Placeholder expert panel. Invented people and credentials, labelled. */
const EXPERTS = [
  { n: "Expert One", c: "CFP", y: "12 years", i: "E1" },
  { n: "Expert Two", c: "CA", y: "9 years", i: "E2" },
  { n: "Expert Three", c: "CFA", y: "15 years", i: "E3" },
  { n: "Expert Four", c: "CFP", y: "7 years", i: "E4" },
];

export default function ExpertPanelDummy({ tone = "white" }) {
  return (
    <Dummy>
      <Section tone={tone} id="experts">
        <SectionHead eyebrow="The experts" title="Who you'd be talking to." lede="Certified professionals whose job is to understand your goals, not to sell." />
        <DummyNote>Invented names and credentials for layout review.</DummyNote>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {EXPERTS.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.05} className="b2b-card bg-[#fff] p-5 text-center relative">
              <DummyBadge className="absolute top-3 right-3">Dummy</DummyBadge>
              <div
                className="w-20 h-20 rounded-full mx-auto grid place-items-center font-outfit font-bold text-[22px] text-primary border border-[#e5e9fb]"
                style={{ background: "linear-gradient(135deg,#eef1ff,#e6faf7)" }}
                aria-hidden="true"
              >
                {e.i}
              </div>
              <div className="font-outfit font-semibold text-[16px] text-[#0b1533] mt-3">{e.n}</div>
              <div className="font-jakarta text-[13.5px] text-[#3a4468]">{e.c} · {e.y}</div>
            </Reveal>
          ))}
        </div>
      </Section>
    </Dummy>
  );
}
