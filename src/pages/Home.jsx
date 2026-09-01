import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";

import Hero from "../components/b2b/Hero";
import TrustStrip from "../components/b2b/TrustStrip";
import ProblemSection from "../components/b2b/ProblemSection";
import PlatformSection from "../components/b2b/PlatformSection";
import Pillars from "../components/b2b/Pillars";
import EmployeeJourney from "../components/b2b/EmployeeJourney";
import PlatformSplit from "../components/b2b/PlatformSplit";
import RolloutSteps from "../components/b2b/RolloutSteps";
import PrivacySection from "../components/b2b/PrivacySection";
import ImpactSection from "../components/b2b/ImpactSection";
import TechAndHumans from "../components/b2b/TechAndHumans";
import Proof from "../components/b2b/Proof";
import WhyKoshpal from "../components/b2b/WhyKoshpal";
import FinalCta from "../components/b2b/FinalCta";

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
        {/* 01 positioning */}
        <Hero />
        {/* credibility */}
        <TrustStrip />
        {/* 01–02 business problem & consequence */}
        <ProblemSection />
        {/* 03 solution */}
        <PlatformSection />
        <Pillars />
        {/* 04 employee experience */}
        <EmployeeJourney />
        {/* 05 employer experience */}
        <PlatformSplit />
        <RolloutSteps />
        {/* 06 privacy */}
        <PrivacySection />
        {/* 07 business impact */}
        <ImpactSection />
        {/* coaching */}
        <TechAndHumans />
        {/* 08 proof */}
        <Proof />
        <WhyKoshpal />
        {/* 09 conversion */}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
