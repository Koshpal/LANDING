import React from "react";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { H2, Lead } from "./Heading";

/* Figma 2:20524 "Privacy First": black card, two-column "sees / never sees" lists. */
const SEE = ["Anonymised, aggregated trends", "Engagement and participation", "The themes people want help with"];
const NEVER = ["Any individual’s data", "Who asked what", "The content of any session"];

function List({ items, icon: Icon, tone }) {
  return (
    <ul className="flex flex-col gap-5 px-6 pt-8 md:gap-[26px] md:pl-[62px]">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-3 font-stack text-[18px] leading-6 text-white">
          <Icon aria-hidden="true" className={`size-4 shrink-0 ${tone}`} strokeWidth={2.5} />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyFirst({ seeTitle = "What employers see", neverTitle = "What they never see", see = SEE, never = NEVER, tag = "Privacy First", title = "Employees speak freely. Employers still see what matters.", lead = "Employees only speak freely when they trust the service. Employers still get useful insight, with no individual’s data changing hands.", link = { to: "/privacy-trust", label: "How we protect data" } }) {
  return (
    <section className="bg-white px-4 py-10 md:px-[30px] md:py-20">
      <div className="mx-auto max-w-[1380px] rounded-[28px] bg-black px-5 pb-14 pt-14 md:rounded-[40px] md:px-[60px] md:pb-[84px] md:pt-20">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <span className="rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[18px] leading-[33px] text-black md:text-[20px]">{tag}</span>
          <H2 className="mt-6 text-white">{title}</H2>
          {lead && <Lead className="mt-6 max-w-[760px] text-white">{lead}</Lead>}
        </div>

        <div className="mx-auto mt-14 grid max-w-[1200px] gap-x-[30px] gap-y-2 md:mt-[100px] md:grid-cols-2">
          <div className="relative">
            <h3 className="flex h-[72px] items-center justify-center rounded-[10px] bg-[#a0fa6b] font-stack text-[24px] leading-none text-black md:text-[28px]">{seeTitle}</h3>
            <List items={see} icon={Check} tone="text-[#a0fa6b]" />
            <span className="absolute -bottom-[0px] right-[-42px] top-[9px] z-10 hidden size-[54px] items-center justify-center rounded-full bg-[#ffbcfc] font-stack text-[18px] text-black md:flex" aria-hidden="true">VS</span>
          </div>
          <div>
            <h3 className="mt-6 flex h-[72px] items-center justify-center rounded-[10px] bg-white font-stack text-[24px] leading-none text-black md:mt-0 md:text-[28px]">{neverTitle}</h3>
            <List items={never} icon={X} tone="text-white/60" />
          </div>
        </div>

        {link && (
          <div className="mt-10 text-center md:mt-14">
            <Link to={link.to} className="font-stack text-[18px] text-white underline underline-offset-4 hover:text-[#a0fa6b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">{link.label}</Link>
          </div>
        )}
      </div>
    </section>
  );
}
