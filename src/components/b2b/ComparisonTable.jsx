import React from "react";

/* Compares categories, never named competitors. Calm and factual. */
const COLS = ["Budgeting apps", "One-off webinars and advisor sessions", "Product-selling platforms", "Koshpal"];
const ROWS = [
  ["Continuous guidance", ["Tools, no guidance", "One-off", "Tied to a sale", "Ongoing, from first salary to life milestones"]],
  ["Human experts", ["Rarely", "Occasionally", "Varies", "Certified experts, 1:1"]],
  ["Behavioural support", ["Reports and alerts", "Not the focus", "Not the focus", "Insights and habit-building"]],
  ["No commissions or product selling", ["Varies", "Varies", "No", "Yes, always"]],
  ["Privacy-first HR insights", ["Not built for HR", "Attendance only", "Varies", "Anonymised and aggregated"]],
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-[20px] border border-[#e9ecf7] bg-[#fff] b2b-shadow">
      <table className="w-full min-w-[720px] text-left border-collapse">
        <caption className="sr-only">How Koshpal compares with general categories of financial wellness options</caption>
        <thead>
          <tr>
            <th scope="col" className="px-4 py-4 bg-[#f7f8fd]" />
            {COLS.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={`px-4 py-4 font-outfit font-semibold text-[13.5px] align-bottom ${
                  i === 3 ? "bg-primary text-[#fff]" : "bg-[#f7f8fd] text-[#0b1533]"
                }`}
                style={i === 3 ? { color: "#fff" } : undefined}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([label, cells]) => (
            <tr key={label} className="border-t border-[#e9ecf7]">
              <th scope="row" className="px-4 py-4 font-outfit font-semibold text-[14px] text-[#0b1533] w-[22%]">
                {label}
              </th>
              {cells.map((c, i) => (
                <td
                  key={i}
                  className={`px-4 py-4 font-jakarta text-[14px] leading-[1.45] ${
                    i === 3 ? "bg-primary-lightest text-[#0b1533] font-medium" : "text-[#3a4468]"
                  }`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
