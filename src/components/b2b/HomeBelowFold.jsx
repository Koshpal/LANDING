import React from "react";
import SectionTrack from "./SectionTrack";
import { Section, SectionHead } from "./primitives";
import ProblemScene from "./ProblemScene";
import PillarCards from "./PillarCards";
import ProductWalkthrough from "./ProductWalkthrough";
import HrOutcomes from "./HrOutcomes";
import PrivacyBand from "./PrivacyBand";
import ComparisonTable from "./ComparisonTable";
import Rollout from "./Rollout";
import PricingTeaser from "./PricingTeaser";
import FaqAccordion from "./FaqAccordion";
import FinalCta from "./FinalCta";
import Needs from "./Needs";
import ProofDummy from "./ProofDummy";
import ExpertPanelDummy from "./ExpertPanelDummy";
import { HR_FAQ } from "../../content/faq";

/* Everything below the hero and credibility strip. Loaded as a separate
   chunk so the first paint only needs the hero. */
export default function HomeBelowFold() {
  return (
    <>
      <SectionTrack name="problem"><ProblemScene /></SectionTrack>

      <SectionTrack name="pillars">
        <Section tone="white" id="pillars">
          <SectionHead
            eyebrow="What Koshpal gives every employee"
            title="Four ways Koshpal helps, in one program."
            lede="Financial wellbeing is built from many small decisions, made well, over time."
          />
          <PillarCards />
          <div className="mt-5"><Needs kind="VERIFY" note="'unlimited' access to experts is deliverable" /></div>
        </Section>
      </SectionTrack>

      <SectionTrack name="employee_experience"><ProductWalkthrough /></SectionTrack>
      <SectionTrack name="hr_outcomes"><HrOutcomes /></SectionTrack>
      <SectionTrack name="privacy"><PrivacyBand /></SectionTrack>

      <SectionTrack name="different">
        <Section tone="white" id="different">
          <SectionHead
            eyebrow="How it differs"
            title="Not another app. Not a one-off webinar."
            lede="Each of these solves a small part of the problem. Koshpal puts guidance, learning, habits and privacy in one continuous program."
          />
          <ComparisonTable />
          <p className="mt-4 font-jakarta text-[12.5px] text-[#6b7597]">
            General categories, not specific products.
          </p>
        </Section>
      </SectionTrack>

      <SectionTrack name="experts"><ExpertPanelDummy tone="tint" /></SectionTrack>
      <SectionTrack name="rollout"><Rollout tone="white" /></SectionTrack>
      <SectionTrack name="proof"><ProofDummy /></SectionTrack>
      <SectionTrack name="pricing"><PricingTeaser /></SectionTrack>

      <SectionTrack name="faq">
        <Section tone="tint" id="faq">
          <SectionHead eyebrow="Questions" title="What HR teams ask us." />
          <FaqAccordion items={HR_FAQ} />
        </Section>
      </SectionTrack>

      <SectionTrack name="final_cta"><FinalCta /></SectionTrack>
    </>
  );
}
