import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/b2b/Hero";
// import LogoBar from "../components/b2b/LogoBar"; // hidden for now — re-enable once real client logos are ready
import ProblemSection from "../components/b2b/ProblemSection";
import PlatformSection from "../components/b2b/PlatformSection";
import Pillars from "../components/b2b/Pillars";
import PlatformSplit from "../components/b2b/PlatformSplit";
import PrivacySection from "../components/b2b/PrivacySection";
import WhyKoshpal from "../components/b2b/WhyKoshpal";
import RolloutSteps from "../components/b2b/RolloutSteps";
import TechAndHumans from "../components/b2b/TechAndHumans";
import WhoItsFor from "../components/b2b/WhoItsFor";
import EmployeeStrip from "../components/b2b/EmployeeStrip";
import ImpactSection from "../components/b2b/ImpactSection";
import FinalCta from "../components/b2b/FinalCta";

export default function Home() {
  return (
    <div className="min-h-screen font-jakarta bg-[#fff] text-[#3f4a63]">
      <Navbar />
      <main>
        <Hero />
        {/* <LogoBar /> */}
        <ProblemSection />
        <PlatformSection />
        <Pillars />
        <PlatformSplit />
        <PrivacySection />
        <WhyKoshpal />
        <RolloutSteps />
        <TechAndHumans />
        <WhoItsFor />
        <EmployeeStrip />
        <ImpactSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
