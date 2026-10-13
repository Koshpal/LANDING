import React from "react";
import { ShieldCheck, BadgeCheck, HandCoins } from "lucide-react";
import Needs from "./Needs";

/* Question 8, early: is this a real, credible thing?
   Uses only facts we can stand behind. Partner logos and expert
   credentials are added when supplied (CONTENT_NEEDED.md #1, #5). */
const POINTS = [
  [BadgeCheck, "Certified experts", "1:1 sessions with CFPs, CAs and CFAs. They are there to understand goals, not to sell."],
  [HandCoins, "No commissions", "We earn nothing from the products people choose, and we push none."],
  [ShieldCheck, "Private by design", "Individual financial information belongs to the employee. Employers see only anonymised trends."],
];

export default function TrustStrip() {
  return (
    <div className="bg-[#fff] border-b border-[#e9ecf7] py-10 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {POINTS.map(([Icon, h, p]) => (
            <li key={h} className="flex gap-4">
              <span
                className="flex-none w-10 h-10 rounded-[11px] border border-[#e5e9fb] grid place-items-center text-primary"
                style={{ background: "linear-gradient(135deg,#eef1ff,#e6faf7)" }}
              >
                <Icon size={19} strokeWidth={2} />
              </span>
              <div>
                <p className="font-outfit font-semibold text-[16px] text-[#0b1533]">{h}</p>
                <p className="font-jakarta text-[14px] leading-[1.55] text-[#3a4468] mt-0.5">{p}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Needs kind="PROOF" note="pilot partner logos with permission; expert names and credentials" />
        </div>
      </div>
    </div>
  );
}
