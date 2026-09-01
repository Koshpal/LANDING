import React, { useState } from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, CTA } from "../components/b2b/primitives";
import Counter from "../components/b2b/Counter";

const INR = (n) =>
  "₹" +
  Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="font-outfit font-semibold text-[13px] text-[#0b1533]">{label}</span>
      <div className="mt-1.5">{children}</div>
      {hint && <span className="font-jakarta text-[11.5px] text-[#8a95b4] mt-1 block">{hint}</span>}
    </label>
  );
}

export default function Calculator() {
  // company inputs
  const [employees, setEmployees] = useState(1000);
  const [salary, setSalary] = useState(900000); // avg annual CTC
  // model assumptions — visible and adjustable, not presented as Koshpal claims
  const [stressPct, setStressPct] = useState(33); // % of workforce reporting money stress
  const [hoursLost, setHoursLost] = useState(2); // distracted hours / stressed employee / week
  const [weeks, setWeeks] = useState(46); // working weeks / year

  const hourlyValue = salary / (weeks * 40);
  const stressedCount = employees * (stressPct / 100);
  const annualHours = stressedCount * hoursLost * weeks;
  const productivityValue = annualHours * hourlyValue;

  return (
    <PageShell
      seo={{
        title: "Financial Stress Impact Calculator",
        path: "/calculator",
        description:
          "An illustrative model to estimate the potential cost of employee financial stress for a workforce your size — with every assumption adjustable and shown.",
      }}
    >
      <PageHero
        eyebrow="Calculator"
        title="Estimate what financial stress could be costing your workforce."
        sub="A simple, transparent model. Every assumption is shown and adjustable — these are your inputs, not Koshpal statistics."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/business-impact", label: "The business case" }}
      />

      <Section tone="white">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* inputs */}
          <div className="grid gap-6">
            <div>
              <h2 className="font-outfit font-bold text-[20px] text-[#0b1533] mb-4">Your workforce</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Number of employees">
                  <input
                    type="number"
                    min="1"
                    value={employees}
                    onChange={(e) => setEmployees(Math.max(1, +e.target.value || 0))}
                    className="w-full rounded-lg border border-[#dfe3f2] px-3.5 py-2.5 font-jakarta text-[14px] text-[#0b1533] outline-none focus:border-primary"
                  />
                </Field>
                <Field label="Average annual salary (₹)">
                  <input
                    type="number"
                    min="0"
                    step="10000"
                    value={salary}
                    onChange={(e) => setSalary(Math.max(0, +e.target.value || 0))}
                    className="w-full rounded-lg border border-[#dfe3f2] px-3.5 py-2.5 font-jakarta text-[14px] text-[#0b1533] outline-none focus:border-primary"
                  />
                </Field>
              </div>
            </div>

            <div>
              <h2 className="font-outfit font-bold text-[20px] text-[#0b1533] mb-1">Model assumptions</h2>
              <p className="font-jakarta text-[12.5px] text-[#6b7597] mb-4">
                Defaults are conservative placeholders. Adjust them to match your own data or research you trust.
              </p>
              <div className="grid gap-5">
                <Field label={`Share of workforce reporting financial stress — ${stressPct}%`}>
                  <input type="range" min="5" max="70" value={stressPct} onChange={(e) => setStressPct(+e.target.value)} className="w-full accent-[#334eac]" />
                </Field>
                <Field label={`Distracted hours per stressed employee, per week — ${hoursLost}`}>
                  <input type="range" min="0" max="6" step="0.5" value={hoursLost} onChange={(e) => setHoursLost(+e.target.value)} className="w-full accent-[#334eac]" />
                </Field>
                <Field label={`Working weeks per year — ${weeks}`}>
                  <input type="range" min="40" max="50" value={weeks} onChange={(e) => setWeeks(+e.target.value)} className="w-full accent-[#334eac]" />
                </Field>
              </div>
            </div>
          </div>

          {/* results */}
          <div className="b2b-card-hover rounded-[20px] border border-[#e9ecf7] bg-[#f7f8fd] p-6 sm:p-8 b2b-shadow lg:sticky lg:top-28">
            <p className="font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase text-[#6b7597]">
              Illustrative estimate
            </p>
            <div className="grid gap-5 mt-5">
              <div>
                <div className="font-outfit font-extrabold text-[34px] text-[#0b1533] tracking-[-0.02em]">
                  <Counter value={Math.round(stressedCount)} />
                </div>
                <div className="font-jakarta text-[13px] text-[#6b7597]">employees likely to be carrying money stress</div>
              </div>
              <div>
                <div className="font-outfit font-extrabold text-[34px] text-[#0b1533] tracking-[-0.02em]">
                  <Counter value={Math.round(annualHours)} />
                </div>
                <div className="font-jakarta text-[13px] text-[#6b7597]">distracted working hours across the year</div>
              </div>
              <div>
                <div className="font-outfit font-extrabold text-[34px] text-secondary-darkest tracking-[-0.02em]">
                  {INR(productivityValue)}
                </div>
                <div className="font-jakarta text-[13px] text-[#6b7597]">
                  approximate annual value of that lost focus
                </div>
              </div>
            </div>
            <div className="mt-6">
              <CTA to="/demo">See how Koshpal helps</CTA>
            </div>
            <p className="font-jakarta text-[11.5px] text-[#8a95b4] mt-4 leading-[1.5]">
              This is a directional model built entirely from the inputs above. It is not a Koshpal statistic, a
              guarantee, or based on a specific published study. Use it to frame a conversation, not as a forecast.
            </p>
          </div>
        </div>
      </Section>

      <PageCta
        title="Turn the estimate into a plan."
        sub="We'll walk through the metrics Koshpal actually reports for a workforce your size."
        secondary={{ to: "/platform", label: "See the platform" }}
      />
    </PageShell>
  );
}
