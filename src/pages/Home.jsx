import React from "react";
import Footer from "../components/Footer";
import Seo, { faqSchema } from "../components/b2b/Seo";
import HomeHero from "../components/site/HomeHero";
import PillarSection from "../components/site/PillarSection";
import RealProblem from "../components/site/RealProblem";
import CompaniesGet from "../components/site/CompaniesGet";
import ProgramPillars from "../components/site/ProgramPillars";
import Rollout from "../components/site/Rollout";
import Compare from "../components/site/Compare";
import Experts from "../components/site/Experts";
import PrivacyFirst from "../components/site/PrivacyFirst";
import FinalCta from "../components/site/FinalCta";
import Faq from "../components/site/Faq";
import { HOME_FAQ } from "../content/faq";

/* Eleven sections, ordered to follow the pitch: the problem (the 25th), why nothing else works (we sell
   nothing), the belief (third pillar), what employees get, who delivers it (the coaches), what the company
   gets, privacy, how it starts, FAQ, final call to action. Backgrounds alternate to keep the page's rhythm. */
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        path="/"
        title="Employee Financial Wellness Program in India | Koshpal"
        description="Give every employee a certified financial coach and a money app. Employer-paid, private, and we sell nothing. Start a 60-day pilot."
        schema={faqSchema(HOME_FAQ)}
      />
      <main id="main">
        <HomeHero />
        <RealProblem />
        <Compare />
        <PillarSection />
        <ProgramPillars />
        <Experts />
        <CompaniesGet />
        <PrivacyFirst />
        <Rollout />
        <Faq tag="questions leaders ask" title="Questions HR leaders ask" items={HOME_FAQ} />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
