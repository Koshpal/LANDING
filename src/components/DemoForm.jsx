import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { track } from "../lib/analytics";

const FREE_DOMAINS = ["gmail.com", "yahoo.com", "yahoo.in", "outlook.com", "hotmail.com", "icloud.com", "proton.me", "rediffmail.com"];
const SIZES = ["Under 50", "50 to 200", "201 to 500", "501 to 1,000", "More than 1,000"];
const ROLES = ["HR or People team", "Finance", "Founder or leadership", "Benefits or L&D", "Other"];
const MIN_FILL_MS = 3000;
const DAILY_LIMIT = 10;

const field =
  "w-full rounded-xl border border-[#cfd6ea] bg-[#fff] px-4 py-3 font-jakarta text-[15px] text-[#0b1533] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

function Label({ htmlFor, children, optional }) {
  return (
    <label htmlFor={htmlFor} className="block font-outfit font-semibold text-[13.5px] text-[#0b1533] mb-1.5">
      {children}
      {optional && <span className="font-normal text-[#6b7597]"> (optional)</span>}
    </label>
  );
}

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
  const [v, setV] = useState({ name: "", email: "", company: "", size: "", role: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | failed
  const openedAt = useRef(Date.now());

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
    if (!v.role) e.role = "Choose your role.";
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
          role: `${v.role} | Company size: ${v.size}`,
          message: v.message.trim(),
          to_email: "koshpal@koshpal.com",
          submitted_at: new Date().toISOString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        bumpLimit();
        track("demo_submit", { status: "success", size: v.size, role: v.role });
        setStatus("done");
      })
      .catch(() => {
        track("demo_submit", { status: "error" });
        setStatus("failed");
      });
  };

  if (status === "done") {
    return (
      <div role="status" className="rounded-[24px] border border-[#cfe6d8] bg-[#eef7f1] p-7 sm:p-9">
        <h2 className="font-outfit font-bold text-[24px] text-[#14502d]">Thanks, we have your request.</h2>
        <p className="font-jakarta text-[16px] leading-[1.65] text-[#1b5e37] mt-2">
          A member of the Koshpal team will email you at the address you gave to find a time. Until then,
          you might want to read how privacy works.
        </p>
        <a href="/privacy-trust" className="inline-block mt-4 font-outfit font-semibold text-primary underline">
          Who sees what
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-[24px] border border-[#e9ecf7] bg-[#fff] b2b-shadow-lg p-6 sm:p-9 grid gap-5">
      {/* honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="d-name">Your name</Label>
          <input id="d-name" className={field} value={v.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
          {errors.name && <p id="e-name" className="text-[13px] text-[#b21d15] mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="d-email">Work email</Label>
          <input id="d-email" type="email" className={field} value={v.email} onChange={set("email")} autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
          {errors.email && <p id="e-email" className="text-[13px] text-[#b21d15] mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="d-company">Company</Label>
        <input id="d-company" className={field} value={v.company} onChange={set("company")} autoComplete="organization" aria-invalid={!!errors.company} aria-describedby={errors.company ? "e-company" : undefined} />
        {errors.company && <p id="e-company" className="text-[13px] text-[#b21d15] mt-1">{errors.company}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="d-size">Company size (employees)</Label>
          <select id="d-size" className={field} value={v.size} onChange={set("size")} aria-invalid={!!errors.size}>
            <option value="">Select</option>
            {SIZES.map((s) => <option key={s}>{s}</option>)}
          </select>
          {errors.size && <p className="text-[13px] text-[#b21d15] mt-1">{errors.size}</p>}
        </div>
        <div>
          <Label htmlFor="d-role">Your role</Label>
          <select id="d-role" className={field} value={v.role} onChange={set("role")} aria-invalid={!!errors.role}>
            <option value="">Select</option>
            {ROLES.map((s) => <option key={s}>{s}</option>)}
          </select>
          {errors.role && <p className="text-[13px] text-[#b21d15] mt-1">{errors.role}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="d-message" optional>Anything we should know?</Label>
        <textarea id="d-message" rows={4} maxLength={500} className={`${field} resize-none`} value={v.message} onChange={set("message")} />
      </div>

      {status === "failed" && (
        <p role="alert" className="rounded-xl bg-[#fde8e6] text-[#8a1c14] px-4 py-3 font-jakarta text-[14px]">
          That didn&apos;t go through. Please try again, or email us at{" "}
          <a className="underline" href="mailto:koshpal@koshpal.com">koshpal@koshpal.com</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full font-outfit font-semibold text-[16px] px-8 py-3.5 transition disabled:opacity-70 hover:-translate-y-0.5"
        style={{ color: "#fff", background: "linear-gradient(100deg,#334eac,#4459c9 55%,#3a86b0)" }}
      >
        {status === "sending" ? "Sending..." : "Book a demo"}
      </button>
      <p className="font-jakarta text-[12.5px] text-[#6b7597]">
        We use your details only to arrange the demo. We never share them.
      </p>
    </form>
  );
}
