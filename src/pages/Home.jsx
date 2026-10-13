import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import SectionTrack from "../components/b2b/SectionTrack";
import Hero from "../components/b2b/Hero";
import TrustStrip from "../components/b2b/TrustStrip";

const HomeBelowFold = lazy(() => import("../components/b2b/HomeBelowFold"));

/* Order follows the buyer's questions (brief section 2):
   1 what is it · 2 is it my problem · 3 what do employees get · 4 what do I get
   5 is data safe · 6 how is it different · 7 rollout effort · 8 proof
   9 cost · 10 next step. See HomeBelowFold for sections 2 onward. */
export default function Home() {
  return (
    <div className="min-h-screen font-jakarta bg-[#fff] text-[#3a4468]">
      <Seo
        path="/"
        title=""
        description="Koshpal is a privacy-first employee financial wellness platform. Every employee gets 1:1 sessions with certified financial experts and an app to act on the plan; HR gets anonymised insight."
      />
      <Navbar />
      <main id="main">
        <SectionTrack name="hero"><Hero /></SectionTrack>
        <SectionTrack name="trust"><TrustStrip /></SectionTrack>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <HomeBelowFold />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
