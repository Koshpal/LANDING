import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Platform", id: "platform" },
  { label: "How it works", id: "how" },
  { label: "Why Koshpal", id: "why" },
  { label: "Privacy", id: "privacy" },
  { label: "Who it's for", id: "who" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const NavItem = ({ id, label, className }) =>
    isHomePage ? (
      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo(id);
        }}
        className={className}
      >
        {label}
      </a>
    ) : (
      <Link to={`/#${id}`} className={className} onClick={() => setOpen(false)}>
        {label}
      </Link>
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="max-w-6xl px-3 pt-2 mx-auto pointer-events-auto sm:px-4 md:px-6 sm:pt-3 md:pt-4">
        <div className="mx-auto rounded-full bg-white/95 backdrop-blur-lg px-4 sm:px-5 md:px-6 flex items-center justify-between shadow-2xl ring-1 ring-grey-lightest border border-white-light h-[56px] sm:h-[64px] md:h-[70px]">
          {/* logo */}
          <Link to="/" className="flex items-center flex-shrink-0 h-full gap-2 sm:gap-3">
            <img
              src="/assets/logo-removebg.png"
              alt="Koshpal"
              className="h-[24px] sm:h-[26px] md:h-[28px] w-auto cursor-pointer"
            />
          </Link>

          {/* desktop links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-black-light font-outfit font-medium px-2 py-2.5 text-sm xl:text-[15px] flex-1 justify-center">
            {LINKS.map((l) => (
              <NavItem
                key={l.id}
                {...l}
                className="transition cursor-pointer hover:text-primary whitespace-nowrap"
              />
            ))}
            <Link
              to="/contact"
              className="transition cursor-pointer hover:text-primary whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* desktop CTAs */}
          <div className="items-center flex-shrink-0 hidden gap-2 lg:flex">
            <Link
              to="/login"
              className="px-3 py-2 text-sm font-semibold transition-all rounded-full cursor-pointer font-outfit text-black-light hover:text-primary whitespace-nowrap"
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

        {/* mobile dropdown */}
        <div
          className={`lg:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-2xl text-black-light shadow-lg border border-grey-lightest transition-all duration-300 ease-in-out origin-top ${
            open
              ? "opacity-100 scale-y-100 max-h-[520px] p-5 space-y-3"
              : "opacity-0 scale-y-0 max-h-0 p-0 border-0"
          }`}
        >
          {LINKS.map((l) => (
            <NavItem
              key={l.id}
              {...l}
              className="block py-2 text-base font-medium transition cursor-pointer font-outfit hover:text-primary touch-manipulation"
            />
          ))}
          <Link
            to="/contact"
            className="block py-2 text-base font-medium transition cursor-pointer font-outfit hover:text-primary touch-manipulation"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-3 space-y-2">
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
