import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";

import Hero from "../components/b2b/Hero";
import TrustStrip from "../components/b2b/TrustStrip";
import ProblemSection from "../components/b2b/ProblemSection";
import PlatformSection from "../components/b2b/PlatformSection";
import EmployeeJourney from "../components/b2b/EmployeeJourney";
import PlatformSplit from "../components/b2b/PlatformSplit";
import PrivacySection from "../components/b2b/PrivacySection";
import ImpactSection from "../components/b2b/ImpactSection";
import TechAndHumans from "../components/b2b/TechAndHumans";
import Proof from "../components/b2b/Proof";
import FinalCta from "../components/b2b/FinalCta";

/* Section tone alternates strictly — no two dark bands adjacent:
   Hero(D) · Trust(W) · Problem(W) · Platform(D) · Journey(W) · Split(D)
   · Privacy(W) · Impact(W) · Tech(D) · Proof(W) · FinalCta(D) */
export default function Home() {
  return (
    <div className="min-h-screen font-jakarta bg-[#fff] text-[#3a4468]">
      <Seo
        path="/"
        title=""
        description="Koshpal is the employee financial wellness platform for modern workplaces — personalized financial insights, education and expert guidance for employees, with a privacy-first, measurable view for HR."
      />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <PlatformSection />
        <EmployeeJourney />
        <PlatformSplit />
        <PrivacySection />
        <ImpactSection />
        <TechAndHumans />
        <Proof />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
