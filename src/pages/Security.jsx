import React from "react";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Placeholder from "../components/b2b/Placeholder";

export default function Security() {
  return (
    <PageShell seo={{ title: "Privacy & Security", path: "/security", description: "Koshpal is built so a company can measure the impact of its financial wellness program without ever seeing an individual employee’s financial detail." }}>
      <PageHero
        eyebrow="Privacy & security"
        title="Your employees' financial lives are private."
        sub="Koshpal is built so a company can measure the impact of its financial wellness program without ever seeing an individual employee's financial detail."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/platform", label: "See the platform" }}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="The principle"
          title="Support and privacy are not a trade-off."
          lede="Employees should never have to expose their finances to their employer to get help with them. So they don't."
        />
        <Reveal className="mb-10">
          <Placeholder variant="browser" label="Employer view — aggregated only" ratio="16/9" />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-[18px]">
          <Reveal className="rounded-[18px] border border-[#e3e7f1] bg-[#f6f7fb] p-6 b2b-shadow">
            <h3 className="font-outfit font-semibold text-[17.5px] text-[#0e1a3c] mb-2">What HR can see</h3>
            <ul className="grid gap-2 font-jakarta text-[14.5px] text-[#3f4a63]">
              {["Enrolment and activation rates", "Monthly engagement", "Aggregated financial-wellness trends", "Program utilisation (coaching, education, goals)", "Board-ready impact summaries"].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-primary font-bold">✓</span>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="rounded-[18px] border border-[#e3e7f1] bg-[#f6f7fb] p-6 b2b-shadow">
            <h3 className="font-outfit font-semibold text-[17.5px] text-[#0e1a3c] mb-2">What HR can never see</h3>
            <ul className="grid gap-2 font-jakarta text-[14.5px] text-[#3f4a63]">
              {["Individual transactions or balances", "A named employee's spending or debt", "Budgets or goals for a specific person", "The content of any coaching conversation", "Anything that identifies one employee's finances"].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-[#b21d15] font-bold">✕</span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead
          dark
          eyebrow="Data architecture"
          title="How data moves through Koshpal."
        />
        <div className="grid gap-2.5 max-w-[560px]">
          {[
            "Employee connects their financial activity",
            "Data is protected inside Koshpal",
            "It powers that employee's personal experience only",
            "Separately: activity is stripped of identity and aggregated",
            "Aggregated signals roll up to the HR dashboard",
          ].map((s, i, arr) => (
            <React.Fragment key={s}>
              <Reveal delay={i * 0.05} className="rounded-[14px] border border-[#ffffff24] bg-[#ffffff0f] px-5 py-3.5 font-outfit font-semibold text-[15px] b2b-on-dark-h">
                {s}
              </Reveal>
              {i < arr.length - 1 && (
                <div className="justify-self-center text-[#8fa6e8]">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M7 0v11m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Practices"
          title="How employee data is protected."
          lede="Financial data is treated as sensitive by default — encrypted, access-controlled, and retained only as long as it's needed."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {[
            ["Encryption", "Data encrypted in transit and at rest."],
            ["Least privilege", "Strict internal access controls and audit logging."],
            ["Aggregation by design", "Employer reporting is built only from de-identified, grouped data."],
            ["Consent", "Employees choose what to connect and can disconnect any time."],
            ["Data ownership", "The employee's data is theirs — export or delete on request."],
            ["Vendor diligence", "Sub-processors held to the same standard."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={(i % 3) * 0.05} className="bg-[#f6f7fb] border border-[#e3e7f1] rounded-[18px] p-6 b2b-shadow">
              <h3 className="font-outfit font-semibold text-[17.5px] text-[#0e1a3c] mb-[7px]">{h}</h3>
              <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3f4a63]">{p}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 font-jakarta text-[13px] text-[#6b7590] italic">
          Placeholder copy — align exact wording and certifications with your security team before launch.
        </p>
      </Section>

      <PageCta
        title="Bring your security questions to the demo."
        sub="We'll walk your team through the data model and answer procurement's checklist."
        secondary={{ to: "/for-hr", label: "For HR & People teams" }}
      />
    </PageShell>
  );
}
