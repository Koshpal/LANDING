import React from "react";
import { PageShell, PageHero, CtaBand } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import Needs from "../components/b2b/Needs";

export default function About() {
  return (
    <PageShell
      seo={{
        title: "About",
        path: "/about",
        description:
          "Koshpal exists to build financially confident workplaces. Our belief: financial wellness will become the next standard employee benefit.",
      }}
    >
      <PageHero
        eyebrow="About Koshpal"
        title="Building financially confident workplaces."
        sub="Workplaces now invest in physical and mental wellness. Money is the stress that's still largely invisible. We exist to change that."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/platform", label: "See the platform" }}
      />

      <Section tone="white" id="belief">
        <SectionHead eyebrow="Our belief" title="Financial wellness will be the next standard benefit." />
        <div className="max-w-[68ch] grid gap-4 font-jakarta text-[17px] leading-[1.7] text-[#3a4468]">
          <p>
            Financial stress doesn&apos;t stay at home when people come to work. It follows them into
            meetings, difficult decisions and family conversations, and it affects focus, confidence and
            long-term well-being.
          </p>
          <p>
            Just as organisations now treat physical and mental wellness as essential benefits, we believe
            financial wellness will become the next standard of the modern workplace. That belief is why
            Koshpal exists.
          </p>
        </div>
      </Section>

      <Section tone="tint" id="philosophy">
        <SectionHead eyebrow="Our philosophy" title="Teach people to fish." />
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="grid gap-4 font-jakarta text-[17px] leading-[1.7] text-[#3a4468]">
            <p>
              Helping someone choose an investment, refinance a loan or reduce a tax bill solves today&apos;s
              problem. Tomorrow a new decision arrives.
            </p>
            <p>
              Our goal isn&apos;t only to solve individual financial problems. It&apos;s to help people become
              confident enough to solve future ones themselves.
            </p>
          </div>
          <Reveal className="b2b-card bg-[#fff] p-6">
            <h3 className="font-outfit font-semibold text-[18px] text-[#0b1533]">Why a conversation beats a one-off fix</h3>
            <p className="font-jakarta text-[15px] leading-[1.65] text-[#3a4468] mt-2">
              Seeing a doctor only when you&apos;re ill gets you a prescription. Spending time with a trusted
              doctor regularly teaches you how to stay healthy. We want to be the second kind of help.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white" id="principle">
        <SectionHead eyebrow="Our principle" title="Always act in the employee's best interest." />
        <p className="max-w-[60ch] font-jakarta text-[17px] leading-[1.7] text-[#3a4468]">
          We don&apos;t earn commissions by promoting investments and we don&apos;t push financial products.
          Trust is our business model.
        </p>
      </Section>

      <Section tone="tint" id="team">
        <SectionHead eyebrow="Team" title="The people behind Koshpal." />
        <Needs kind="PROOF" note="team bios, roles and photos; expert panel names and credentials" />
        <p className="font-jakarta text-[15px] text-[#3a4468]">
          Want to know who you&apos;d be talking to? <a className="underline" href="/demo">Book a demo</a> and
          ask.
        </p>
      </Section>

      <CtaBand title="Bring financial wellness to your workplace." sub="See how Koshpal would work for your team." secondary={{ to: "/privacy-trust", label: "Privacy and trust" }} />
    </PageShell>
  );
}
