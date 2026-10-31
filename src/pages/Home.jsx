import React from "react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import HomeHero from "../components/site/HomeHero";
import PillarSection from "../components/site/PillarSection";
import RealProblem from "../components/site/RealProblem";
import ProblemWeSee from "../components/site/ProblemWeSee";
import CompaniesGet from "../components/site/CompaniesGet";
import ProgramPillars from "../components/site/ProgramPillars";
import OnePlace from "../components/site/OnePlace";
import Rollout from "../components/site/Rollout";
import Compare from "../components/site/Compare";
import Experts from "../components/site/Experts";
import PrivacyFirst from "../components/site/PrivacyFirst";
import FinalCta from "../components/site/FinalCta";
import Faq from "../components/site/Faq";

/* Section order follows the Figma "Website 2.0" home frame (2:19331). */
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        path="/"
        title=""
        description="Koshpal is a privacy-first employee financial wellness platform. Every employee gets 1:1 sessions with certified financial experts and an app to act on the plan; HR gets anonymised insight."
      />
      <main id="main">
        <HomeHero />
        <PillarSection />
        <RealProblem />
        <ProblemWeSee />
        <CompaniesGet />
        <ProgramPillars />
        <OnePlace />
        <Rollout />
        <Compare />
        <Experts />
        <PrivacyFirst />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
