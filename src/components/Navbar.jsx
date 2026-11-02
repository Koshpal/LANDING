import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PillButton from "./site/PillButton";

/* Figma nav: logo · five dropdown triggers · "Book a demo" pill.
   `glass` is the translucent bar that sits over the home hero; the default is
   a solid white bar for pages that have not been moved to the new design yet. */
const MENU = [
  {
    label: "Platform",
    items: [
      { label: "Mobile app", to: "/platform/mobile-app" },
      { label: "Employee dashboard", to: "/platform/dashboard" },
      { label: "Spending insights", to: "/platform/spending-insights" },
      { label: "Budgets & goals", to: "/platform/budgets-goals" },
      { label: "Dues & reminders", to: "/platform/dues-reminders" },
      { label: "Book a session", to: "/platform/book-a-session" },
      { label: "Privacy & trust", to: "/privacy-trust" },
    ],
  },
  { label: "Solution", items: [{ label: "For employees", to: "/for-employees" }, { label: "For companies", to: "/for-hr" }] },
  { label: "Resources", items: [{ label: "Blog", to: "/blog" }, { label: "FAQ & help", to: "/faq" }] },
  { label: "Company", items: [{ label: "About", to: "/about" }, { label: "Our vision", to: "/our-vision" }, { label: "Coach with Koshpal", to: "/coach-with-us" }, { label: "Contact us", to: "/contact" }] },
  { label: "Pricing", items: [{ label: "Pricing", to: "/pricing" }] },
];

function Logo() {
  return (
    <Link to="/" aria-label="Koshpal home" className="relative block h-[34px] w-[138px] shrink-0 max-md:w-[112px] max-md:h-[28px]">
      <span className="absolute" style={{ top: "-60.67%", right: "-16.37%", bottom: "-68.22%", left: "-15.49%" }}>
        <img src="/img/home/logo.svg" alt="Koshpal" className="block size-full max-w-none" />
      </span>
    </Link>
  );
}

function Chevron() {
  return <img src="/img/home/chevron.svg" alt="" width="10" height="6" className="transition-transform duration-200 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />;
}

export default function Navbar({ glass = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fixed to the top while scrolling. The glass bar only reads against the hero, so once the page
  // scrolls it becomes a solid white bar that stays legible over any section.
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const bar = scrolled
    ? "bg-white/95 border-b border-[#e6e8f2] shadow-[0_4px_20px_rgba(11,11,12,0.08)] backdrop-blur-md"
    : glass
      ? "bg-white/[0.08] border-b border-white/25 backdrop-blur-[2px]"
      : "bg-white border-b border-[#e6e8f2]";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ${bar}`}>
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-20 max-md:h-[72px]">
        <Logo />

        <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-[10px] lg:flex">
          {MENU.map((m) => (
            <div key={m.label} className="group/nav relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-[33.6px] items-center gap-[6px] rounded-full px-[9px] py-2 font-stack text-[18px] leading-[17.6px] text-[#0b0b0c] transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b3fbc]"
              >
                {m.label}
                <Chevron />
              </button>
              <div className="invisible absolute left-1/2 top-full z-10 w-max min-w-[190px] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                <ul className="rounded-[20px] bg-white p-2 shadow-[0_16px_40px_rgba(11,11,12,0.16)]">
                  {m.items.map((it) => (
                    <li key={it.to}>
                      <Link to={it.to} className="block rounded-[14px] px-4 py-2.5 font-stack text-[16px] text-[#0b0b0c] transition-colors hover:bg-[#f1f1fb]">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton to="/demo" size="lg" className="!text-[19px]">Book a demo</PillButton>
        </div>

        <button
          type="button"
          className="p-2 -mr-2 text-[#0b0b0c] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 max-h-[calc(100vh-96px)] overflow-y-auto rounded-[24px] bg-white p-5 shadow-[0_16px_40px_rgba(11,11,12,0.18)] lg:hidden">
          {MENU.map((m) => (
            <div key={m.label} className="border-b border-[#eceef6] py-3 last:border-0">
              <p className="font-stack text-[13px] uppercase tracking-wider text-[#7a7f99]">{m.label}</p>
              {m.items.map((it) => (
                <Link key={it.to} to={it.to} onClick={() => setOpen(false)} className="block py-1.5 font-stack text-[18px] text-[#0b0b0c]">
                  {it.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-4">
            <PillButton to="/demo" size="sm" onClick={() => setOpen(false)}>Book a demo</PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
