import React from "react";
import { Section, SectionHead } from "./primitives";
import NumberedSteps from "./NumberedSteps";
import Needs from "./Needs";

/* Question 7: how much work is it for my team? */
export const ROLLOUT_STEPS = [
  { h: "Partner and configure", p: "We set the program up with your HR team." },
  { h: "Employees onboard", p: "Your people are invited and get started." },
  { h: "Sessions and app", p: "They book sessions with experts and use the app day to day." },
  { h: "HR sees the insight", p: "Anonymised, aggregated views in your dashboard." },
];

export default function Rollout({ tone = "tint" }) {
  return (
    <Section tone={tone} id="rollout">
      <SectionHead
        eyebrow="Rollout"
        title="Four steps from signing to insight."
        lede="Most of the effort sits with us. Your part is configuration and telling your people it exists."
      />
      <NumberedSteps steps={ROLLOUT_STEPS} />
      <div className="mt-5">
        <Needs kind="VERIFY" note="onboarding timeline and the exact HR effort ('zero setup' / 'live in X days')" />
      </div>
    </Section>
  );
}
