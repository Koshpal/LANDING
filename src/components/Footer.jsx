import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { H2 } from "./site/Heading";
import { track } from "../lib/analytics";

/* Figma "Koshpal Footer" (2:20832): CTA headline, newsletter, link columns,
   large logo with company blurb, legal lines. */
const PLATFORM = [
  { label: "Employee Dashboard", to: "/platform/dashboard" },
  { label: "Mobile App", to: "/platform/mobile-app" },
  { label: "Book a Session", to: "/platform/book-a-session" },
  { label: "Pricing", to: "/pricing" },
];
const SOLUTIONS = [
  { label: "For Employees", to: "/for-employees" },
  { label: "For HR & People", to: "/for-hr" },
];
const RESOURCES = [
  { label: "Blogs", to: "/blog" },
  { label: "FAQ & Help", to: "/faq" },
];
const COMPANY = [
  { label: "About", to: "/about" },
  { label: "Our Vision", to: "/our-vision" },
  { label: "Privacy & Security", to: "/privacy-trust" },
  { label: "Coach with Koshpal", to: "/coach-with-us" },
];

const head = "font-figtree text-[16px] uppercase leading-5 text-white";
const link = "font-figtree text-[14px] leading-5 text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

function Col({ title, items }) {
  return (
    <div>
      <h3 className={head}>{title}</h3>
      <ul className="mt-4 flex flex-col gap-[6px]">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className={link}>{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function XMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error

  const submit = (e) => {
    e.preventDefault();
    const v = email.trim().toLowerCase();
    if (state === "sending") return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      setState("error");
      return;
    }
    setState("sending");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_DEMO,
        {
          from_name: "Newsletter signup",
          from_email: v,
          company: "",
          role: "",
          message: `Newsletter signup from ${window.location.pathname}`,
          to_email: "koshpal@koshpal.com",
          submitted_at: new Date().toISOString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        track("newsletter_submit", { status: "success" });
        setState("done");
        setEmail("");
      })
      .catch(() => setState("error"));
  };

  return (
    <form onSubmit={submit} noValidate className="w-full max-w-[400px]">
      <label htmlFor="footer-email" className="sr-only">Your email address</label>
      <div className="flex h-[60px] items-center rounded-full border border-white/30 bg-white/10 py-[5px] pl-5 pr-[5px] backdrop-blur-sm">
        <input
          id="footer-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== "sending") setState("idle");
          }}
          placeholder="Your email address*"
          autoComplete="email"
          className="min-w-0 flex-1 bg-transparent font-figtree text-[16px] text-white outline-none placeholder:text-white/60"
        />
        <button type="submit" aria-label="Subscribe" disabled={state === "sending"} className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105 disabled:opacity-60">
          <ArrowRight size={22} aria-hidden="true" />
        </button>
      </div>
      <p role="status" className="mt-2 min-h-[20px] pl-5 font-figtree text-[14px] text-white/80">
        {state === "done" && "Thanks, you’re on the list."}
        {state === "error" && "Please enter a valid email address."}
      </p>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white px-2 pb-2 pt-[30px] md:px-[6px] md:pb-[6px]">
      <div
        className="relative mx-auto max-w-[1420px] overflow-hidden rounded-[28px] px-4 pb-12 pt-14 md:rounded-[40px] md:px-8 md:pt-[100px]"
        style={{ backgroundImage: "linear-gradient(180deg,#3b3fbc 0%,#1b1d6e 100%)" }}
      >
        {[13.4, 50, 86.6].map((x) => (
          <span key={x} aria-hidden="true" className="pointer-events-none absolute inset-y-0 hidden w-px bg-white/10 lg:block" style={{ left: `${x}%` }} />
        ))}

        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center">
          <H2 className="text-center text-[#f4f4f8]">
            Build a financially <span className="text-[#c8f169]">confident workplace.</span>
          </H2>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-[960px] flex-col items-start justify-between gap-8 md:mt-[56px] md:flex-row md:items-center">
          <div>
            <p className="font-stack text-[32px] font-light leading-[1.2] text-white md:text-[36px]">Stay connected</p>
            <p className="mt-3 max-w-[340px] font-figtree text-[18px] leading-[22px] text-white/65">Join our newsletter for tips, updates, and project highlights only the good stuff.</p>
          </div>
          <Newsletter />
        </div>

        <div className="relative mx-auto mt-16 grid max-w-[1280px] gap-12 lg:mt-[100px] lg:grid-cols-[1fr_540px_1fr] lg:gap-0">
          <div className="order-2 flex flex-col gap-9 lg:order-1">
            <Col title="Platform" items={PLATFORM} />
            <Col title="Solutions" items={SOLUTIONS} />
            <Col title="Resources" items={RESOURCES} />
          </div>

          <div className="order-1 flex flex-col items-center text-center lg:order-2">
            <Link to="/" aria-label="Koshpal home" className="relative block h-[58px] w-[235px] md:h-[116px] md:w-[470px]">
              <span className="absolute" style={{ top: "-60.67%", right: "-16.37%", bottom: "-68.22%", left: "-15.49%" }}>
                <img src="/img/home/logo-light.svg" alt="Koshpal" className="block size-full max-w-none" />
              </span>
            </Link>
            <p className="mt-8 max-w-[460px] font-figtree text-[14px] leading-[18px] text-white">
              Koshpal is an employee financial wellness program for Indian workplaces. Every employee gets a certified CFP or CA to talk to and an app for budgets, goals and dues. The company pays, HR sees only anonymised trends, and we sell nothing.</p>
            <div className="mt-9 flex items-center gap-5 text-white">
              <a href="https://www.linkedin.com/company/koshpal/" target="_blank" rel="noopener noreferrer" aria-label="Koshpal on LinkedIn" className="transition-opacity hover:opacity-80">
                <Linkedin size={30} aria-hidden="true" />
              </a>
              <span aria-hidden="true" title="Instagram"><Instagram size={30} /></span>
              <span aria-hidden="true" title="X"><XMark width="28" height="28" /></span>
            </div>
          </div>

          <div className="order-3 flex flex-col gap-9 lg:pl-[74px]">
            <Col title="Company" items={COMPANY} />
            <div>
              <h3 className={head}>Contact</h3>
              <ul className="mt-4 flex flex-col gap-[6px] font-figtree text-[14px] leading-5 text-white/90">
                <li><a href="mailto:koshpal@koshpal.com" className={link}>Koshpal Support</a></li>
                <li>
                  General Enquiries:
                  <br />
                  <a href="mailto:koshpal@koshpal.com" className={link}>koshpal@koshpal.com</a>
                </li>
                <li>
                  Other Enquiries:
                  <br />
                  <a href="https://koshpal.com" className={link}>koshpal.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-[540px] border-t border-white/40 pt-8 text-center font-figtree text-[14px] leading-5 text-white">
          <p>Koshpal provides financial education and guidance. It is not a SEBI-registered investment adviser and does not sell financial products.</p>
          <p className="mt-4">Jaipur, Rajasthan, India</p>
          <nav aria-label="Legal" className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <Link to="/terms-of-service" className={link}>Disclaimer</Link>
            <Link to="/privacy-policy" className={link}>Privacy policy</Link>
            <Link to="/contact" className={link}>Grievance redressal</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
