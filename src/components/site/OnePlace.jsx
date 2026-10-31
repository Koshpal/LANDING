import React from "react";
import Tag from "./Tag";
import { H2, Lead } from "./Heading";

/* Figma 2:20219 "What we provide": headline + lime card (copy / photo / three features). */
const FEATURES = [
  { t: "Dashboard", d: "Anonymised, aggregated views of engagement, confidence and the topics people ask about. Enough to act on and report." },
  { t: "The Mobile App", d: "Spending insights, budgets, goals and bill reminders, with smart nudges built in." },
  { t: "Financial Sessions with CFP", d: "A certified CFP to talk to whenever a money question comes up. Confidential, with no limits." },
];

export default function OnePlace() {
  return (
    <section className="bg-white px-4 py-16 md:px-5 md:py-[120px]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 md:gap-16">
        <div className="flex max-w-[1100px] flex-col items-center text-center">
          <Tag>What we provide</Tag>
          <H2 className="mt-6 text-[#0b0b0c]">One place for every money decision your people face.</H2>
          <Lead className="mt-6 text-[#0b0b0c]">Experts, an app and insights, working together all year, from a tough month to a long-term goal.</Lead>
        </div>

        <div className="relative w-full overflow-hidden rounded-[28px] bg-[#c8f169] px-6 py-10 md:rounded-[40px] md:px-[88px] md:py-[60px]">
          <img src="/img/home/contour-pattern.svg" alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[170%] w-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
          <div className="relative grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)_minmax(0,1fr)] lg:gap-[40px]">
            <div className="flex flex-col justify-between gap-12 text-[#0b0b0c] lg:pt-[28px]">
              <div>
                <h3 className="font-figtree text-[28px] font-normal leading-[1.25] md:text-[32px] md:leading-10">One programme does the whole job.</h3>
                <p className="mt-5 max-w-[340px] font-figtree text-[16px] leading-6">They work together, not in isolation, so the right help is there on a hard month and on the way to a big goal.</p>
              </div>
              <div className="lg:pb-[28px]">
                <p className="font-figtree text-[36px] leading-[1.2] md:text-[40px]">Unlimited</p>
                <p className="mt-3 font-figtree text-[16px] leading-6">1:1 expert sessions</p>
              </div>
            </div>

            <img
              src="/img/home/one-place-photo.png"
              alt="A smiling person holding a product jar"
              width="440"
              height="560"
              loading="lazy"
              className="aspect-[440/560] w-full max-w-[440px] justify-self-center rounded-[16px] object-cover"
            />

            <ul className="flex flex-col justify-end gap-6 text-[#0b0b0c] lg:pb-[28px]">
              {FEATURES.map((f) => (
                <li key={f.t} className="grid grid-cols-[20px_1fr] gap-x-[10px]">
                  <span className="mt-[3px] size-5 rounded-full bg-black" />
                  <div>
                    <h4 className="font-figtree text-[20px] leading-[26px]">{f.t}</h4>
                    <p className="mt-3 max-w-[310px] font-figtree text-[16px] leading-6">{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
