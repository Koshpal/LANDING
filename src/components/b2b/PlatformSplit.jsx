import React from "react";
import { Section, SectionHead, Reveal } from "./primitives";

const EMP = [
  "Financial health & spending insights",
  "Budgets, goals & personalised nudges",
  "Financial education library",
  "Expert consultations",
];
const HR = [
  "Employee onboarding & rollout",
  "Program adoption & engagement",
  "Financial-wellness trends (aggregated)",
  "Program utilisation & impact",
];

/* Stylised HR-dashboard mock. Replace with a real screenshot when available. */
function DashboardShot() {
  return (
    <div className="border border-[#e9ecf7] rounded-[20px] bg-[#fff] b2b-shadow-lg overflow-hidden">
      <div className="flex items-center gap-1.5 px-3.5 py-3 border-b border-[#e9ecf7] bg-[#f1f3fb]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#dfe3f2]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#dfe3f2]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#dfe3f2]" />
        <span className="font-outfit font-semibold text-[11px] text-[#6b7597] ml-2">Koshpal · HR dashboard</span>
      </div>
      <div className="p-5 grid gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["1,248", "Employees enrolled"],
            ["78%", "Activated"],
            ["64%", "Monthly engagement"],
          ].map(([n, l]) => (
            <div key={l} className="bg-[#f1f3fb] border border-[#e9ecf7] rounded-xl p-3.5">
              <div className="font-outfit font-extrabold text-[26px] tracking-[-0.02em] tabular-nums text-[#0b1533]">{n}</div>
              <div className="font-outfit font-medium text-[11.5px] text-[#6b7597] mt-[3px]">{l}</div>
            </div>
          ))}
        </div>
        <div className="border border-[#e9ecf7] rounded-xl p-4">
          <div className="flex justify-between font-outfit font-semibold text-[12.5px] text-[#6b7597] mb-3">
            <span>Financial-wellness index</span>
            <span>last 8 months</span>
          </div>
          <svg viewBox="0 0 480 120" preserveAspectRatio="none" height="110" width="100%">
            <defs>
              <linearGradient id="b2bFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#334EAC" stopOpacity="0.28" />
                <stop offset="1" stopColor="#334EAC" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,95 L60,88 L120,90 L180,72 L240,74 L300,55 L360,58 L420,40 L480,32 L480,120 L0,120 Z"
              fill="url(#b2bFill)"
            />
            <polyline
              points="0,95 60,88 120,90 180,72 240,74 300,55 360,58 420,40 480,32"
              fill="none"
              stroke="#334EAC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="480" cy="32" r="4" fill="#17A2B8" />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            ["312", "Coaching sessions"],
            ["1.9k", "Goals set"],
            ["+11pt", "Index vs. launch"],
          ].map(([n, l]) => (
            <div key={l} className="bg-[#f1f3fb] border border-[#e9ecf7] rounded-xl p-3.5">
              <div className="font-outfit font-extrabold text-[26px] tracking-[-0.02em] tabular-nums text-[#0b1533]">{n}</div>
              <div className="font-outfit font-medium text-[11.5px] text-[#6b7597] mt-[3px]">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PlatformSplit() {
  return (
    <Section id="how" tone="dark">
      <SectionHead
        dark
        eyebrow="Employees & HR"
        title="One platform for employees. One view for HR."
        lede="Employees get a personal financial experience. HR gets aggregated visibility into how the program is landing — never individual financial detail."
      />
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <Reveal className="grid gap-[22px]">
          {[
            ["For employees", EMP],
            ["For HR", HR],
          ].map(([head, list]) => (
            <div key={head}>
              <div className="font-outfit font-bold text-[13px] tracking-[0.1em] uppercase b2b-on-dark-muted mb-2.5">
                {head}
              </div>
              <ul className="grid gap-2">
                {list.map((t) => (
                  <li key={t} className="font-jakarta text-[15px] b2b-on-dark flex gap-2.5">
                    <span className="b2b-on-dark-accent font-bold">→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.08}>
          <DashboardShot />
          <p className="mt-3 font-jakarta italic text-[12.5px] b2b-on-dark-muted">
            Placeholder — swap for a real HR-dashboard screenshot.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
