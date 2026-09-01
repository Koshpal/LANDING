import React, { useState } from "react";

const FREE_DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "proton.me"];

/**
 * Work-email lead capture. Client-side only right now — on submit it validates a
 * business email and shows a success state.
 * TODO: wire `onSubmit` to EmailJS / CRM (see DemoPage for the EmailJS pattern).
 */
export default function EmailCapture({
  label = "Get it by email",
  cta = "Send it to me",
  note = "Work email only. No spam — one email with the download link.",
  dark = false,
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | error | done
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
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
    // TODO: replace with real submission
    setState("done");
    setMsg("Thanks — we'll email the link to you shortly.");
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
          className="rounded-full bg-primary text-[#fff] font-outfit font-semibold text-[14px] px-6 py-3 hover:bg-primary-darkest transition whitespace-nowrap"
          style={{ color: "#fff" }}
        >
          {cta}
        </button>
      </div>
      <p className={`font-jakarta text-[12px] mt-2 ${state === "error" ? "text-[#b21d15]" : noteCls}`}>
        {state === "error" ? msg : note}
      </p>
    </form>
  );
}
