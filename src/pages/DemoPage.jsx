import React from "react";
import { PageShell } from "../components/b2b/PageShell";
import DemoForm from "../components/DemoForm";
import JellyGrid from "../components/b2b/JellyGrid";
import Needs from "../components/b2b/Needs";

const NEXT = [
  ["You send the form", "It takes about a minute."],
  ["We email you", "A member of the team replies to find a time that suits."],
  ["We show you the program", "The coach, the app, and the anonymised view HR gets, in about 30 minutes. Then you can try it with one team for 60 days."],
];

export default function DemoPage() {
  return (
    <PageShell
      seo={{
        title: "Book a Demo or Start a 60-Day Pilot | Koshpal",
        path: "/demo",
        crumbs: [["Book a demo", "/demo"]],
        description:
          "See the coach, app and HR dashboard in 30 minutes, then try Koshpal with one team for 60 days.",
      }}
    >
      <section className="b2b-dark-band relative overflow-hidden pt-28 sm:pt-32 pb-16">
        <JellyGrid color="255, 255, 255" opacity={0.16} />
        <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <div>
            <span className="b2b-eyebrow">Book a demo</span>
            <h1 className="font-outfit font-bold tracking-[-0.03em] leading-[1.06] mt-4 text-[32px] sm:text-[44px] text-[#f6f8ff]">
              See how Koshpal would work for your team.
            </h1>
            <p className="font-jakarta mt-5 text-[17px] leading-[1.6] text-[#c3cdec] max-w-[44ch]">
              Tell us a little about your company. We&apos;ll show you the employee experience and what HR sees.
            </p>
            <ol className="mt-8 grid gap-4">
              {NEXT.map(([h, p], i) => (
                <li key={h} className="flex gap-4">
                  <span className="flex-none w-8 h-8 rounded-full bg-[#ffffff1f] border border-[#ffffff33] text-[#fff] grid place-items-center font-outfit font-bold text-[14px]">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-outfit font-semibold text-[16px] text-[#f6f8ff]">{h}</div>
                    <div className="font-jakarta text-[14.5px] text-[#aab6dd]">{p}</div>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 font-jakarta text-[14px] text-[#aab6dd]">
              Private by design. No commissions. No products sold.
            </p>
            <Needs kind="VERIFY" note="demo response time and who is notified" />
          </div>
          <DemoForm />
        </div>
      </section>
    </PageShell>
  );
}
