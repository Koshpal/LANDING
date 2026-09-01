import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/* Primary nav. Dropdowns on desktop, flattened groups in the mobile sheet. */
const MENU = [
  {
    label: "Platform",
    items: [
      { label: "Overview", to: "/platform" },
      { label: "Employee financial wellness", to: "/employee-financial-wellness" },
      { label: "Financial education", to: "/financial-education" },
      { label: "Financial coaching", to: "/financial-coaching" },
    ],
  },
  { label: "For HR", to: "/for-hr" },
  {
    label: "Why Koshpal",
    items: [
      { label: "Business impact", to: "/business-impact" },
      { label: "Privacy & security", to: "/security" },
    ],
  },
  { label: "Customers", to: "/customers" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile sheet
  const [menu, setMenu] = useState(null); // open desktop dropdown label

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="max-w-6xl px-3 pt-2 mx-auto pointer-events-auto sm:px-4 md:px-6 sm:pt-3 md:pt-4">
        <div className="mx-auto rounded-full bg-white/95 backdrop-blur-lg px-4 sm:px-5 md:px-6 flex items-center justify-between shadow-2xl ring-1 ring-grey-lightest border border-white-light h-[56px] sm:h-[64px] md:h-[70px]">
          {/* logo */}
          <Link to="/" className="flex items-center flex-shrink-0 h-full gap-2">
            <img
              src="/assets/logo-removebg.png"
              alt="Koshpal"
              className="h-[24px] sm:h-[26px] md:h-[28px] w-auto cursor-pointer"
            />
          </Link>

          {/* desktop menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center font-outfit font-medium text-sm xl:text-[15px] text-black-light">
            {MENU.map((m) =>
              m.items ? (
                <div
                  key={m.label}
                  className="relative"
                  onMouseEnter={() => setMenu(m.label)}
                  onMouseLeave={() => setMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-full transition hover:text-primary whitespace-nowrap"
                    onClick={() => setMenu(menu === m.label ? null : m.label)}
                  >
                    {m.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform ${menu === m.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] min-w-[248px] rounded-2xl bg-[#fff] border border-[#e3e7f1] shadow-[0_20px_50px_rgba(14,26,60,0.16)] p-2 transition-all duration-150 origin-top ${
                      menu === m.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    {m.items.map((it) => (
                      <Link
                        key={it.to}
                        to={it.to}
                        onClick={() => setMenu(null)}
                        className="block px-3 py-2.5 rounded-xl text-[14px] text-[#3f4a63] hover:bg-primary-lightest hover:text-primary transition"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={m.to}
                  to={m.to}
                  className="px-3 py-2 rounded-full transition hover:text-primary whitespace-nowrap"
                >
                  {m.label}
                </Link>
              )
            )}
          </nav>

          {/* desktop CTAs */}
          <div className="items-center flex-shrink-0 hidden gap-2 lg:flex">
            <Link
              to="/login"
              className="px-3 py-2 text-sm font-semibold transition rounded-full font-outfit text-black-light hover:text-primary whitespace-nowrap"
            >
              Login
            </Link>
            <Link
              to="/demo"
              className="bg-primary text-[#fff] font-semibold font-outfit px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-[15px] rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap"
              style={{ color: "#FFFFFF" }}
            >
              Book a demo
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            className="p-2 -mr-2 transition-transform duration-300 lg:hidden text-black-light touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* mobile sheet */}
        <div
          className={`lg:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-2xl text-black-light shadow-lg border border-grey-lightest transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            open ? "opacity-100 scale-y-100 max-h-[640px] p-5" : "opacity-0 scale-y-0 max-h-0 p-0 border-0"
          }`}
        >
          {MENU.map((m) =>
            m.items ? (
              <div key={m.label} className="py-2 border-b border-grey-lightest last:border-0">
                <div className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase text-[#6b7590] mb-1">
                  {m.label}
                </div>
                {m.items.map((it) => (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[15px] font-medium font-outfit hover:text-primary touch-manipulation"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={m.to}
                to={m.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium font-outfit hover:text-primary touch-manipulation border-b border-grey-lightest last:border-0"
              >
                {m.label}
              </Link>
            )
          )}
          <div className="pt-4 space-y-2">
            <Link
              to="/demo"
              onClick={() => setOpen(false)}
              className="block w-full px-4 py-3 text-base font-semibold text-center text-[#fff] transition-all rounded-full cursor-pointer bg-primary font-outfit hover:bg-primary-darkest touch-manipulation"
              style={{ color: "#FFFFFF" }}
            >
              Book a demo
            </Link>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block w-full px-4 py-3 text-base font-semibold text-center transition-all border-2 rounded-full cursor-pointer text-primary border-primary font-outfit hover:bg-primary hover:text-[#fff] touch-manipulation"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
