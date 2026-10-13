import React from "react";
import { PageShell } from "../components/b2b/PageShell";
import { Section } from "../components/b2b/primitives";
import Needs from "../components/b2b/Needs";

export default function PrivacyPolicy() {
  return (
    <PageShell
      seo={{
        title: "Privacy policy",
        path: "/privacy-policy",
        description: "Koshpal privacy policy.",
        noindex: true,
      }}
    >
      <Section tone="white">
        <div className="pt-16 max-w-[68ch]">
          <h1 className="font-outfit font-bold text-[34px] sm:text-[44px] tracking-[-0.03em] text-[#0b1533]">Privacy policy</h1>
          <p className="font-jakarta mt-5 text-[17px] leading-[1.7] text-[#3a4468]">
            Our full privacy policy is being finalised. In short: an employee's financial information belongs to them, and employers see only aggregated, anonymised insights.
          </p>
          <p className="font-jakarta mt-4 text-[16px] text-[#3a4468]">
            Questions in the meantime? Email{" "}
            <a className="underline" href="mailto:koshpal@koshpal.com">koshpal@koshpal.com</a>.
          </p>
          <Needs kind="PROOF" note="legal-reviewed privacy policy text" />
        </div>
      </Section>
    </PageShell>
  );
}
