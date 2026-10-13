import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import SectionTrack from "../components/b2b/SectionTrack";
import { Section, SectionHead } from "../components/b2b/primitives";

import Hero from "../components/b2b/Hero";
import TrustStrip from "../components/b2b/TrustStrip";
import ProblemScene from "../components/b2b/ProblemScene";
import PillarCards from "../components/b2b/PillarCards";
import ProductWalkthrough from "../components/b2b/ProductWalkthrough";
import HrOutcomes from "../components/b2b/HrOutcomes";
import PrivacyBand from "../components/b2b/PrivacyBand";
import ComparisonTable from "../components/b2b/ComparisonTable";
import Rollout from "../components/b2b/Rollout";
import PricingTeaser from "../components/b2b/PricingTeaser";
import FaqAccordion from "../components/b2b/FaqAccordion";
import FinalCta from "../components/b2b/FinalCta";
import ProofDummy from "../components/b2b/ProofDummy";
import ExpertPanelDummy from "../components/b2b/ExpertPanelDummy";
import Needs from "../components/b2b/Needs";
import { HR_FAQ } from "../content/faq";

/* Order follows the buyer's questions (brief section 2):
   1 what is it · 2 is it my problem · 3 what do employees get · 4 what do I get
   5 is data safe · 6 how is it different · 7 rollout effort · 8 proof
   9 cost · 10 next step.
   Tone alternates: Hero(D) Trust(W) Problem(T) Pillars(W) Walkthrough(W→T)
   HR(W) Privacy(D) Compare(W) Rollout(T) Pricing(W) FAQ(T) Final(D). */
export default function Home() {
  return (
    <div className="min-h-screen font-jakarta bg-[#fff] text-[#3a4468]">
      <Seo
        path="/"
        title=""
        description="Koshpal is a privacy-first employee financial wellness platform. Every employee gets 1:1 sessions with certified financial experts and an app to act on the plan; HR gets anonymised insight."
      />
      <Navbar />
      <main>
        <SectionTrack name="hero"><Hero /></SectionTrack>
        <SectionTrack name="trust"><TrustStrip /></SectionTrack>
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
      </main>
      <Footer />
    </div>
  );
}
