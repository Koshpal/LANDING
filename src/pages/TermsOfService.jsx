import React from "react";
import { PageShell } from "../components/b2b/PageShell";
import { Section } from "../components/b2b/primitives";
import Needs from "../components/b2b/Needs";

export default function TermsOfService() {
  return (
    <PageShell
      seo={{
        title: "Terms of Service | Koshpal",
        path: "/terms-of-service",
        description: "Koshpal terms of service.",
        noindex: true,
      }}
    >
      <Section tone="white">
        <div className="pt-16 max-w-[68ch]">
          <h1 className="font-outfit font-bold text-[34px] sm:text-[44px] tracking-[-0.03em] text-[#0b1533]">Terms of service</h1>
          <p className="font-jakarta mt-5 text-[17px] leading-[1.7] text-[#3a4468]">
            Our terms of service are being finalised. If you are evaluating Koshpal for your organisation, we will share the agreed terms with you directly.
          </p>
          <p className="font-jakarta mt-4 text-[16px] text-[#3a4468]">
            Questions in the meantime? Email{" "}
            <a className="underline" href="mailto:koshpal@koshpal.com">koshpal@koshpal.com</a>.
          </p>
          <Needs kind="PROOF" note="legal-reviewed terms of service text" />
        </div>
      </Section>
    </PageShell>
  );
}
