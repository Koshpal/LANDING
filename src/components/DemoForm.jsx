import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PillButton from "./site/PillButton";
import emailjs from "@emailjs/browser";
import { track } from "../lib/analytics";

const FREE_DOMAINS = ["gmail.com", "yahoo.com", "yahoo.in", "outlook.com", "hotmail.com", "icloud.com", "proton.me", "rediffmail.com"];
const SIZES = ["Under 50", "50 to 200", "201 to 500", "501 to 1,000", "More than 1,000"];
const MIN_FILL_MS = 3000;
const DAILY_LIMIT = 10;

const field =
  "h-[56px] w-full rounded-full border border-transparent bg-white px-[30px] font-figtree text-[18px] text-[#0b0b0c] outline-none transition-shadow placeholder:text-[#8a8a8a] focus:border-[#3b3fbc] focus:ring-2 focus:ring-[#3b3fbc]/20 aria-[invalid=true]:border-[#b21d15]";

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-[10px] block font-figtree text-[18px] font-medium leading-6 text-[#0b0b0c]">
      {children}
    </label>
  );
}

const Err = ({ id, children }) => <p id={id} className="mt-2 pl-[30px] font-figtree text-[14px] text-[#b21d15]">{children}</p>;

const readLimit = () => {
  try {
    const d = JSON.parse(localStorage.getItem("demoSubmissions") || "null");
    const today = new Date().toDateString();
    return d && d.date === today ? d.count : 0;
  } catch {
    return 0;
  }
};
const bumpLimit = () => {
  try {
    localStorage.setItem("demoSubmissions", JSON.stringify({ date: new Date().toDateString(), count: readLimit() + 1 }));
  } catch {
    /* storage unavailable: ignore */
  }
};

export default function DemoForm() {
  const [v, setV] = useState({ name: "", email: "", company: "", size: "", message: "", website: "" });
  const [params] = useSearchParams();
  const pilot = params.get("pilot") === "60-day";
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | failed
  const openedAt = useRef(Date.now());

  // Arriving from a "Start a 60-day pilot" button: say so in the message, set after mount so the prerendered form hydrates cleanly.
  useEffect(() => {
    if (pilot) setV((p) => (p.message ? p : { ...p, message: "I'd like to start a 60-day pilot with one team." }));
  }, [pilot]);

  const set = (k) => (e) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = "Please tell us your name.";
    const em = v.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) e.email = "Enter a valid work email.";
    else if (FREE_DOMAINS.includes(em.split("@")[1])) e.email = "Please use your work email.";
    if (!v.company.trim()) e.company = "Please tell us your company.";
    if (!v.size) e.size = "Choose a company size.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (status === "sending") return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // Spam signals: filled honeypot, or submitted implausibly fast.
    // Respond as if it worked so bots get no feedback.
    if (v.website || Date.now() - openedAt.current < MIN_FILL_MS) {
      setStatus("done");
      return;
    }
    if (readLimit() >= DAILY_LIMIT) {
      setStatus("failed");
      return;
    }

    setStatus("sending");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_DEMO,
        {
          from_name: v.name.trim(),
          from_email: v.email.trim(),
          company: v.company.trim(),
          role: `Company size: ${v.size}${pilot ? " | Asked for: 60-day pilot" : ""}`,
          message: v.message.trim(),
          to_email: "koshpal@koshpal.com",
          submitted_at: new Date().toISOString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        bumpLimit();
        track("demo_submit", { status: "success", size: v.size });
        setStatus("done");
      })
      .catch(() => {
        track("demo_submit", { status: "error" });
        setStatus("failed");
      });
  };

  if (status === "done") {
    return (
      <div role="status" className="rounded-[30px] bg-[#f0f0f0] p-8 md:rounded-[40px] md:p-[50px]">
        <h2 className="font-figtree text-[32px] font-normal leading-[1.15] text-[#0b0b0c]">Thanks, we have your request.</h2>
        <p className="mt-4 font-figtree text-[18px] leading-[1.45] text-[#0b0b0c]">
          A member of the Koshpal team will email you at the address you gave to find a time. Until then, you might want to read how privacy works.
        </p>
        <a href="/privacy-trust" className="mt-6 inline-block font-figtree text-[18px] font-medium text-[#3b3fbc] underline underline-offset-4">Who sees what</a>
      </div>
    );
  }

  return (
    <form id="book" onSubmit={submit} noValidate className="grid gap-[22px] rounded-[30px] bg-[#f0f0f0] p-6 md:rounded-[40px_40px_30px_30px] md:p-[30px] md:pb-[34px]">
      {/* honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} />
        </label>
      </div>

      <div>
        <Label htmlFor="d-name">Full name*</Label>
        <input id="d-name" className={field} value={v.name} onChange={set("name")} autoComplete="name" placeholder="Enter your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
        {errors.name && <Err id="e-name">{errors.name}</Err>}
      </div>

      <div className="grid gap-[22px] sm:grid-cols-2 sm:gap-[30px]">
        <div>
          <Label htmlFor="d-size">Company size*</Label>
          <div className="relative">
            <select id="d-size" className={`${field} appearance-none pr-12 ${v.size ? "" : "text-[#8a8a8a]"}`} value={v.size} onChange={set("size")} aria-invalid={!!errors.size} aria-describedby={errors.size ? "e-size" : undefined}>
              <option value="">Number of employees</option>
              {SIZES.map((s) => <option key={s}>{s}</option>)}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-[#555]" />
          </div>
          {errors.size && <Err id="e-size">{errors.size}</Err>}
        </div>
        <div>
          <Label htmlFor="d-company">Company*</Label>
          <input id="d-company" className={field} value={v.company} onChange={set("company")} autoComplete="organization" placeholder="Company name" aria-invalid={!!errors.company} aria-describedby={errors.company ? "e-company" : undefined} />
          {errors.company && <Err id="e-company">{errors.company}</Err>}
        </div>
      </div>

      <div>
        <Label htmlFor="d-email">Email address*</Label>
        <input id="d-email" type="email" className={field} value={v.email} onChange={set("email")} autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
        {errors.email && <Err id="e-email">{errors.email}</Err>}
      </div>

      <div>
        <Label htmlFor="d-message">What would you like to see?</Label>
        <textarea id="d-message" rows={4} maxLength={500} placeholder="A sentence or two about your goals and current setup." className="min-h-[120px] w-full resize-none rounded-[24px] border border-transparent bg-white px-[30px] py-[20px] font-figtree text-[18px] text-[#0b0b0c] outline-none placeholder:text-[#8a8a8a] focus:border-[#3b3fbc] focus:ring-2 focus:ring-[#3b3fbc]/20" value={v.message} onChange={set("message")} />
      </div>

      {status === "failed" && (
        <p role="alert" className="rounded-[20px] bg-[#fde8e6] px-5 py-3 font-figtree text-[15px] text-[#8a1c14]">
          That didn&apos;t go through. Please try again, or email us at{" "}
          <a className="underline" href="mailto:koshpal@koshpal.com">koshpal@koshpal.com</a>.
        </p>
      )}

      <div className="mt-2 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <PillButton type="submit" tone="lime" size="sm" disabled={status === "sending"} className="!text-[18px] disabled:opacity-70">
          {status === "sending" ? "Sending..." : "Book a demo"}
        </PillButton>
        <p className="max-w-[230px] font-figtree text-[18px] leading-[1.15] text-[#0b0b0c] sm:text-right">We reply within one working day. No spam, ever.</p>
      </div>
    </form>
  );
}
