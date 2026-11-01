import React from "react";
import { ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Tag from "../components/site/Tag";
import { H2 } from "../components/site/Heading";
import PrivacyFirst from "../components/site/PrivacyFirst";
import Faq from "../components/site/Faq";
import { MagentaHero, PinkTag, CtaBand, AltRows, PhotoCarousel } from "../components/site/PageParts";

/* Figma "Privacy & Policy" (2:7088). The template's stray list items and duplicate FAQ are dropped. */
const PROMISES = [
  { t: "We collect only what helps", d: "Data minimisation by default. We gather what’s needed to support a person, and nothing we don’t." },
  { t: "The individual stays private", d: "Data minimisation by default. We gather what’s needed to support a person, and nothing we don’t." },
  { t: "We never sell data", d: "No commissions, no products pushed, no data sold. Trust is the business model, and that includes data." },
];

const LAYERS = [
  { t: "Encryption", d: "Data encrypted in transit and at rest, so information stays protected end to end." },
  { t: "Access controls", d: "Strict, role-based access and multi-factor authentication, with SSO available for enterprises." },
  { t: "Auditability", d: "Monitored infrastructure and clear audit trails, so access is always accountable." },
];

const FAQ = [
  { q: "Where does the insight come from?", a: "Everything an employee needs in one place: 1:1 financial sessions, spending insights, budgets and goals, and dues and reminders, plus learning and their progress over time." },
  { q: "Does the app cost employees anything?" },
  { q: "Can my employer see what I do in the app?" },
  { q: "Who can use the app?" },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/privacy-trust" title="Privacy & trust" description="Private by design, secure by default. How Koshpal protects employee data while giving employers useful, anonymised insight." />
      <main id="main">
        <MagentaHero
          tag="Privacy & trust"
          title="Private by design"
          pill="Secure"
          pillSuffix="by default"
          lead="Financial wellbeing only works when people trust it. So we built Koshpal so employees can speak freely, and employers get genuinely useful insight, without anyone’s private data ever changing hands."
          primary={{ label: "Book a demo", to: "/demo" }}
          secondary={{ label: "See the platform", to: "/platform" }}
        >
          <PhotoCarousel />
        </MagentaHero>

        <PrivacyFirst tag="The Problem we see" title="Useful to employers. Invisible at the individual level." lead="" />

        <section className="bg-white px-5 pb-12 pt-10 md:px-10 md:pt-20">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <Tag>how we handle data</Tag>
            <H2 className="mt-6 max-w-[900px] text-[#171b26]">
              <span className="text-[#3b3fbc]">Three promises</span> we hold ourselves to.
            </H2>
          </div>
          <AltRows rows={PROMISES} />
        </section>

        <section className="bg-[#122020] px-5 py-16 text-white md:px-[80px] md:py-[110px]">
          <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-[60px]">
            <div>
              <PinkTag>The Problem we see</PinkTag>
              <H2 className="mt-6 text-left text-white">Protected at every layer</H2>
            </div>
            <ul className="flex flex-col gap-10 md:gap-[52px]">
              {LAYERS.map((l) => (
                <li key={l.t} className="grid grid-cols-[62px_1fr] items-start gap-x-4 md:gap-x-5">
                  <span className="flex size-[62px] items-center justify-center rounded-full bg-[#ffbcfc] text-black">
                    <ShieldCheck className="size-[45%]" aria-hidden="true" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-stack text-[clamp(26px,2.5vw,36px)] font-light leading-[1.2]">{l.t}</h3>
                    <p className="mt-3 max-w-[520px] font-stack text-[17px] leading-6 md:text-[18px]">{l.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand py={110}>
          <span className="text-[#c8f169]">Speak freely.</span>
          <span className="mx-auto block max-w-[9.5em] [text-wrap:wrap]">It stays between you and your expert.</span>
        </CtaBand>

        <Faq narrow tag="questions leaders ask" title={"Questions about insights"} items={FAQ} />
      </main>
      <Footer />
    </div>
  );
}
