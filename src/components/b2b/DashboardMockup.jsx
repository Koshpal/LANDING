import React from "react";

/* HR dashboard mock. Aggregated, anonymised views only; never anything that
   could identify an individual. Always labelled "Sample data". */
const TOPICS = [
  ["Emergency savings", 72],
  ["Debt and EMIs", 58],
  ["Tax basics", 44],
  ["Planning a big expense", 31],
];

export default function DashboardMockup({ dark = false }) {
  return (
    <div
      className={`rounded-[20px] overflow-hidden border ${
        dark ? "border-[#ffffff24] bg-[#ffffff0f]" : "border-[#e9ecf7] bg-[#fff] b2b-shadow-lg"
      }`}
    >
      <div className="flex items-center gap-1.5 px-3.5 py-3 border-b border-[#e9ecf7] bg-[#f1f3fb]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#dfe3f2]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#dfe3f2]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#dfe3f2]" />
        <span className="font-outfit font-semibold text-[11px] text-[#6b7597] ml-2">Koshpal · HR dashboard</span>
        <span className="ml-auto font-outfit font-bold text-[10.5px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-full bg-[#fff4d6] text-[#7a5200] border border-[#f0d58a]">
          Sample data
        </span>
      </div>
      <div className="p-5 grid gap-4 bg-[#fff]">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["1,248", "Employees with access"],
            ["78%", "Activated"],
            ["64%", "Active this month"],
          ].map(([n, l]) => (
            <div key={l} className="bg-[#f1f3fb] border border-[#e9ecf7] rounded-xl p-3">
              <div className="font-outfit font-extrabold text-[22px] sm:text-[26px] tracking-[-0.02em] tabular-nums text-[#0b1533]">{n}</div>
              <div className="font-outfit font-medium text-[11px] text-[#6b7597] mt-[3px]">{l}</div>
            </div>
          ))}
        </div>

        <div className="border border-[#e9ecf7] rounded-xl p-4">
          <div className="font-outfit font-semibold text-[12.5px] text-[#6b7597] mb-3">
            What employees are asking about (share of sessions)
          </div>
          <div className="grid gap-2.5">
            {TOPICS.map(([t, v]) => (
              <div key={t} className="grid grid-cols-[1fr_auto] gap-x-3 items-center">
                <span className="font-jakarta text-[13px] text-[#3a4468]">{t}</span>
                <span className="font-outfit font-semibold text-[12px] text-[#6b7597] tabular-nums">{v}%</span>
                <div className="col-span-2 h-1.5 rounded-full bg-[#e9ecf7]" aria-hidden="true">
                  <div className="h-full rounded-full" style={{ width: `${v}%`, background: "linear-gradient(90deg,#334eac,#3a86b0)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#e9ecf7] rounded-xl p-4">
          <div className="flex justify-between font-outfit font-semibold text-[12.5px] text-[#6b7597] mb-2">
            <span>Financial confidence (self-reported, aggregated)</span>
          </div>
          <svg viewBox="0 0 480 90" preserveAspectRatio="none" height="80" width="100%" role="img" aria-label="Sample trend line rising over time">
            <polyline
              points="0,70 60,64 120,66 180,52 240,54 300,40 360,42 420,28 480,22"
              fill="none"
              stroke="#334EAC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-jakarta text-[12px] text-[#6b7597]">Group views only. No individual employee is shown.</p>
      </div>
    </div>
  );
}
