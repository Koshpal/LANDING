import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* Primary nav: seven flat links (no dropdowns) plus the persistent demo CTA.
   Login is a quiet text link, not a competing button. */
const MENU = [
  { label: "Platform", to: "/platform" },
  { label: "For HR", to: "/for-hr" },
  { label: "For Employees", to: "/for-employees" },
  { label: "Privacy & Trust", to: "/privacy-trust" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile sheet
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
          <nav className="hidden xl:flex items-center gap-0 2xl:gap-1 flex-1 justify-center font-outfit font-medium text-sm xl:text-[15px] text-black-light">
            {MENU.map((m) => (
              <Link
                key={m.to}
                to={m.to}
                className="px-3 py-2 rounded-full transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary whitespace-nowrap"
              >
                {m.label}
              </Link>
            ))}
          </nav>

          {/* desktop CTAs */}
          <div className="items-center flex-shrink-0 hidden gap-2 xl:flex">
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
            className="p-2 -mr-2 transition-transform duration-300 xl:hidden text-black-light touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
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
          className={`xl:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-2xl text-black-light shadow-lg border border-grey-lightest transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            open ? "opacity-100 scale-y-100 max-h-[640px] p-5" : "opacity-0 scale-y-0 max-h-0 p-0 border-0"
          }`}
        >
          {MENU.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium font-outfit hover:text-primary touch-manipulation border-b border-grey-lightest last:border-0"
            >
              {m.label}
            </Link>
          ))}
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
              className="block w-full py-2 text-sm font-medium text-center text-[#3a4468] underline-offset-4 hover:underline font-outfit touch-manipulation"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
