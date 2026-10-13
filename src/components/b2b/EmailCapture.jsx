import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { track } from "../../lib/analytics";

const FREE_DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "proton.me"];

/**
 * Work-email lead capture. Validates a business email and sends the request
 * to the Koshpal inbox through EmailJS (same service as the demo form).
 * Success is shown only after the send succeeds.
 */
export default function EmailCapture({
  label = "Get it by email",
  cta = "Send it to me",
  note = "Work email only.",
  dark = false,
  resource = "Employer guide",
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | error | done
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (state === "sending") return;
    const v = email.trim().toLowerCase();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) {
      setState("error");
      setMsg("Enter a valid email address.");
      return;
    }
    if (FREE_DOMAINS.includes(v.split("@")[1])) {
      setState("error");
      setMsg("Please use your work email.");
      return;
    }
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_DEMO;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    setState("sending");
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: "Resource request",
          from_email: v,
          company: "",
          role: "",
          message: `${resource}: please send when available (requested from ${window.location.pathname})`,
          to_email: "koshpal@koshpal.com",
          submitted_at: new Date().toISOString(),
        },
        publicKey
      )
      .then(() => {
        track("resource_submit", { resource, status: "success" });
        setState("done");
        setMsg("Thanks. We've noted your request and will email it to you as soon as it's ready.");
      })
      .catch(() => {
        track("resource_submit", { resource, status: "error" });
        setState("error");
        setMsg("That didn't go through. Please email koshpal@koshpal.com and we'll send it to you.");
      });
  };

  const inputCls = dark
    ? "bg-[#ffffff0f] border-[#ffffff24] text-[#fff] placeholder:text-[#ffffff66]"
    : "bg-[#fff] border-[#dfe3f2] text-[#0b1533] placeholder:text-[#9aa6c8]";
  const noteCls = dark ? "text-[#93a1cf]" : "text-[#6b7597]";

  if (state === "done") {
    return (
      <div
        className={`rounded-[16px] border px-5 py-4 font-jakarta text-[14px] ${
          dark ? "border-[#ffffff24] bg-[#ffffff0f] text-[#c3cdec]" : "border-[#cfe6d8] bg-[#eef7f1] text-[#1b7a43]"
        }`}
      >
        {msg}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="max-w-[440px]">
      {label && (
        <label className={`block font-outfit font-semibold text-[13px] mb-2 ${dark ? "text-[#c3cdec]" : "text-[#0b1533]"}`}>
          {label}
        </label>
      )}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="you@company.com"
          className={`flex-1 rounded-full border px-5 py-3 font-jakarta text-[14px] outline-none focus:border-primary transition ${inputCls}`}
          aria-invalid={state === "error"}
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full bg-primary text-[#fff] font-outfit font-semibold text-[14px] px-6 py-3 hover:bg-primary-darkest transition whitespace-nowrap"
          style={{ color: "#fff" }}
        >
          {state === "sending" ? "Sending..." : cta}
        </button>
      </div>
      <p className={`font-jakarta text-[12px] mt-2 ${state === "error" ? "text-[#b21d15]" : noteCls}`}>
        {state === "error" ? msg : note}
      </p>
    </form>
  );
}
