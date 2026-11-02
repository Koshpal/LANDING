import React from "react";
import Footer from "../components/Footer";
import Seo, { faqSchema } from "../components/b2b/Seo";
import Faq from "../components/site/Faq";
import { MagentaHero, CtaBand, ORANGE } from "../components/site/PageParts";
import { EMPLOYEE_FAQ, HR_FAQ, PRIVACY_FAQ } from "../content/faq";

/* Figma "FAQ's" (orange hero, question groups). Questions and answers come from content/faq.js. */
const GROUPS = [
  { title: "For HR and leadership", items: HR_FAQ },
  { title: "For employees", items: EMPLOYEE_FAQ },
  { title: "Privacy and security", items: PRIVACY_FAQ },
];
const ALL = GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        path="/faq"
        title="Employee Financial Wellness FAQ | Koshpal"
        description="Answers for HR and employees: pricing, privacy, how sessions work, who the coaches are and why we sell no products."
        crumbs={[["FAQ", "/faq"]]}
        schema={faqSchema(ALL)}
      />
      <main id="main">
        <MagentaHero
          gradient={ORANGE}
          small
          padTop={248}
          padBottom={197}
          tag="FAQ & help"
          title="Employee financial wellness: your questions answered."
          lead="What HR teams and employees ask most about Koshpal: what it costs, how sessions work, who the coaches are and how privacy is protected."
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
