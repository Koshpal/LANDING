import React from "react";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import Faq from "../components/site/Faq";
import { MagentaHero, CtaBand, ORANGE } from "../components/site/PageParts";
import { EMPLOYEE_FAQ, HR_FAQ } from "../content/faq";

/* Figma "FAQ's" (orange hero, four question groups). Answers come from content/faq.js;
   the design's template questions ("Does the app cost employees anything?" x2 ...) are not used. */
const pick = (...qs) => HR_FAQ.filter((f) => qs.includes(f.q));

const GROUPS = [
  { title: "For employees", items: EMPLOYEE_FAQ },
  { title: "For HR & People teams", items: pick("Who are the experts?", "Is it private?", "Do you sell financial products?", "How is success measured?", "What if few people use it?") },
  {
    title: "Privacy & security",
    items: [
      { q: "What can my employer see?", a: "Only aggregated, anonymised insights about the group, such as engagement and the themes people want help with. Never any individual’s data, who asked what, or the content of any session." },
      { q: "Do you sell data or products?", a: "No. There are no commissions, no products pushed and no data sold. Trust is the business model, and that includes data." },
      { q: "How is my data protected?", a: "Data is encrypted in transit and at rest, with strict role-based access, multi-factor authentication and audit trails so access is always accountable." },
      { q: "What do you collect?", a: "Only what helps us support a person, and nothing we don’t." },
    ],
  },
  { title: "Getting started", items: pick("How do employees get started?", "Does it integrate with our systems?", "What does it cost?") },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/faq" title="FAQ & help" description="Answers to the questions employees, HR teams and leaders ask most about Koshpal: how it works, what it costs and how privacy is protected." />
      <main id="main">
        <MagentaHero
          gradient={ORANGE}
          small
          padTop={248}
          padBottom={197}
          tag="FAQ & help"
          title="All your Answers, in one place."
          lead="The questions employees, HR teams and leaders ask most about Koshpal, how it works, what it costs, and how privacy is protected."
          primary={{ label: "Book a demo", to: "/demo" }}
          secondary={{ label: "Contact us", to: "/contact" }}
        />

        <div className="bg-white pb-6 pt-8 md:pb-[60px] md:pt-[60px]">
          {GROUPS.map((g) => (
            <Faq key={g.title} narrow tag="" title={g.title} items={g.items} className="px-5 py-8 md:px-8 md:py-10" />
          ))}
        </div>

        <CtaBand cta="Book a demo" py={110}>Still have questions?</CtaBand>
      </main>
      <Footer />
    </div>
  );
}
