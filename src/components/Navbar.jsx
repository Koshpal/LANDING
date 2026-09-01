import React, { useState, useEffect } from "react";
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
  {
    label: "Solutions",
    items: [
      { label: "For HR & People teams", to: "/for-hr" },
      { label: "Business impact", to: "/business-impact" },
      { label: "Privacy & security", to: "/security" },
      { label: "What is financial wellness?", to: "/financial-wellness" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Resource hub", to: "/resources" },
      { label: "Reports & research", to: "/resources/reports" },
      { label: "HR guides", to: "/resources/guides" },
      { label: "Blog", to: "/blog" },
      { label: "Impact calculator", to: "/calculator" },
    ],
  },
  { label: "Customers", to: "/customers" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile sheet
  const [menu, setMenu] = useState(null); // open desktop dropdown label
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={`max-w-6xl px-3 mx-auto pointer-events-auto sm:px-4 md:px-6 transition-all duration-300 ${
          scrolled ? "pt-1.5 sm:pt-2" : "pt-3 sm:pt-4 md:pt-5"
        }`}
      >
        <div
          className={`mx-auto rounded-full backdrop-blur-xl px-4 sm:px-5 md:px-6 flex items-center justify-between border border-[#ffffffcc] ring-1 ring-[#0b153312] transition-all duration-300 ${
            scrolled
              ? "bg-white/95 h-[52px] sm:h-[56px] md:h-[60px] shadow-[0_14px_44px_-12px_rgba(4,10,35,0.45)]"
              : "bg-white/95 h-[56px] sm:h-[62px] md:h-[66px] shadow-[0_16px_50px_-12px_rgba(4,10,35,0.5)]"
          }`}
        >
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
                    className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] min-w-[252px] rounded-2xl bg-[#fff] border border-[#e9ecf7] shadow-[0_24px_60px_-12px_rgba(11,21,51,0.22)] p-2 transition-all duration-150 origin-top ${
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
                        className="block px-3.5 py-2.5 rounded-xl text-[14px] text-[#3a4468] hover:bg-primary-lightest hover:text-primary transition"
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
              className="relative overflow-hidden text-[#fff] font-semibold font-outfit px-5 xl:px-6 py-2.5 text-sm xl:text-[15px] rounded-full shadow-[0_10px_28px_-10px_rgba(51,78,172,0.7)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(51,78,172,0.8)] transition-all cursor-pointer whitespace-nowrap"
              style={{ color: "#FFFFFF", background: "linear-gradient(100deg,#334eac,#4459c9 55%,#3a86b0)" }}
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
