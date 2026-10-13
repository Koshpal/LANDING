import React from "react";
import { PageShell, PageHero, CtaBand } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Needs from "../components/b2b/Needs";
import { PRIVACY_STATEMENTS } from "../components/b2b/PrivacyBand";

/* Privacy & Trust. Only approved statements (brief section 9.6). No technical
   or compliance claims until the team supplies approved wording
   (CONTENT_NEEDED.md #10). */
const ROWS = [
  ["Your individual financial information", "Yes. It's yours.", "No"],
  ["Your conversations with experts", "Yes. You're in them.", "No"],
  ["Aggregated, anonymised trends for the group", "Part of the group", "Yes"],
];

export default function Security() {
  return (
    <PageShell
      seo={{
        title: "Privacy & Trust",
        path: "/privacy-trust",
        description:
          "Who sees what in Koshpal: an employee's financial information is theirs, and employers see only aggregated, anonymised insights.",
      }}
    >
      <PageHero
        eyebrow="Privacy and trust"
        title="Who sees what."
        sub="People won't talk about money if they think someone is watching. So an employee's financial information stays theirs, and employers see only anonymised trends."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/for-employees", label: "For employees" }}
      />

      <Section tone="white" id="who-sees-what">
        <SectionHead eyebrow="At a glance" title="Employee and employer, side by side." />
        <div className="overflow-x-auto rounded-[20px] border border-[#e9ecf7] b2b-shadow">
          <table className="w-full min-w-[560px] text-left border-collapse">
            <caption className="sr-only">What employees and employers can see in Koshpal</caption>
            <thead>
              <tr className="bg-[#f7f8fd]">
                <th scope="col" className="px-5 py-4" />
                <th scope="col" className="px-5 py-4 font-outfit font-semibold text-[14px] text-[#0b1533]">Employee</th>
                <th scope="col" className="px-5 py-4 font-outfit font-semibold text-[14px] text-[#0b1533]">Employer (HR)</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([l, e, h]) => (
                <tr key={l} className="border-t border-[#e9ecf7]">
                  <th scope="row" className="px-5 py-4 font-outfit font-semibold text-[14.5px] text-[#0b1533]">{l}</th>
                  <td className="px-5 py-4 font-jakarta text-[14.5px] text-[#3a4468]">{e}</td>
                  <td className={`px-5 py-4 font-jakarta text-[14.5px] ${h === "No" ? "text-[#b21d15] font-semibold" : "text-[#3a4468]"}`}>{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3"><Needs kind="VERIFY" note="what the expert can see (add an Expert column once confirmed)" /></div>
      </Section>

      <Section tone="tint" id="principles">
        <SectionHead eyebrow="Our commitments" title="What we promise employees." />
        <div className="grid sm:grid-cols-2 gap-[18px]">
          {PRIVACY_STATEMENTS.map(([h, p], i) => (
            <Reveal key={h} delay={(i % 2) * 0.06} className="b2b-card bg-[#fff] p-6">
              <h3 className="font-outfit font-semibold text-[18px] text-[#0b1533]">{h}</h3>
              <p className="font-jakarta text-[15px] leading-[1.6] text-[#3a4468] mt-1.5">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-3"><Needs kind="PROOF" note="approved security, data-handling and compliance statements" /></div>
      </Section>

      <Section tone="white" id="not">
        <SectionHead
          eyebrow="What Koshpal is not"
          title="No commissions. No products."
          lede="Trust is our business model. Guidance only works when people know it's independent."
        />
        <ul className="grid sm:grid-cols-2 gap-3 max-w-[720px]">
          {["A budgeting app", "A loan platform", "An investment marketplace", "A financial advisory firm that earns commissions"].map((t) => (
            <li key={t} className="rounded-[14px] border border-[#e9ecf7] bg-[#f7f8fd] px-5 py-3.5 font-outfit font-semibold text-[15px] text-[#0b1533] flex gap-2.5">
              <span className="text-[#b21d15] font-bold">✕</span>{t}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-jakarta text-[14px] text-[#6b7597]">
          Questions for your security or legal team? Email{" "}
          <a className="underline" href="mailto:koshpal@koshpal.com">koshpal@koshpal.com</a>. Our privacy policy
          is on its way.
        </p>
      </Section>

      <CtaBand
        title="Bring your privacy questions to the demo."
        sub="We'll show exactly what employees see and what HR sees."
        secondary={{ to: "/for-hr", label: "For HR" }}
      />
    </PageShell>
  );
}
