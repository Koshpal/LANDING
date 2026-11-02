import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import PillButton from "../components/site/PillButton";

/* Figma "Contact Us" (2:8860). Layout and styling follow the design; the
   template's placeholder contact details are replaced with Koshpal's own.
   The map is the design's raster (public/img/contact/map.png). */
const OFFICE = "Jaipur, Rajasthan";
const EMAIL = "koshpal@koshpal.com";

const field =
  "w-full rounded-[28px] bg-white px-[30px] font-stack text-[18px] leading-6 text-[#0b0b0c] outline-none placeholder:text-[#8a8a8a] focus-visible:ring-2 focus-visible:ring-[#3b3fbc]";
const label = "block pb-[14px] font-stack text-[20px] leading-6 text-[#0b0b0c]";

function checkRateLimit() {
  const today = new Date().toDateString();
  try {
    const stored = localStorage.getItem("emailSubmissions");
    if (stored) {
      const { date, count } = JSON.parse(stored);
      if (date !== today) {
        localStorage.setItem("emailSubmissions", JSON.stringify({ date: today, count: 0 }));
        return true;
      }
      return count < 10;
    }
    localStorage.setItem("emailSubmissions", JSON.stringify({ date: today, count: 0 }));
  } catch {
    /* storage unavailable: do not block the send */
  }
  return true;
}

function bumpSubmissionCount() {
  try {
    const { count } = JSON.parse(localStorage.getItem("emailSubmissions"));
    localStorage.setItem("emailSubmissions", JSON.stringify({ date: new Date().toDateString(), count: count + 1 }));
  } catch {
    /* ignore */
  }
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (busy) return;
    if (!form.name.trim()) return setStatus({ type: "error", message: "Please enter your name." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return setStatus({ type: "error", message: "Please enter a valid email address." });
    }
    if (!checkRateLimit()) {
      return setStatus({ type: "error", message: "Daily submission limit reached (10 per day). Please try again tomorrow." });
    }

    setBusy(true);
    setStatus({ type: "", message: "" });
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: "Website enquiry",
          message: form.message,
          to_email: EMAIL,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        bumpSubmissionCount();
        setStatus({ type: "success", message: "Message sent successfully! We’ll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus({ type: "error", message: "Failed to send message. Please try again or email us directly." }))
      .finally(() => setBusy(false));
  };

  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path="/contact" title="Contact Us | Koshpal" crumbs={[["Contact", "/contact"]]} description="Get in touch with the Koshpal team about employee financial wellness for your workplace, or ask us anything." />
      <main id="main">
        <section className="relative" style={{ backgroundImage: "linear-gradient(180deg,#b24979 0%,#6b2645 100%)" }}>
          <Navbar glass />
          <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-16 pt-[140px] md:px-10 md:pb-[120px] md:pt-[248px]">
            <span className="rounded-full bg-[#ffbcfc] px-[18px] py-2 font-stack text-[20px] leading-[33px] text-black">Contact</span>
            <h1 className="mt-6 text-balance text-center font-figtree font-medium text-white text-[clamp(38px,5vw,72px)] leading-[1.15] tracking-[-0.0127em]">
              Tell us your requirements
            </h1>
            <p className="mt-6 max-w-[900px] text-balance text-center font-stack text-[clamp(17px,1.67vw,24px)] leading-[1.25] text-white">
              Whether it’s a product question, demo request, or data inquiry, our team will help you explore the right solution for your workplace.
            </p>

            <div className="mt-12 grid w-full max-w-[1240px] gap-[34px] md:mt-[88px] lg:grid-cols-[532px_minmax(0,1fr)]">
              {/* map + contact cards */}
              <div
                className="relative mx-auto aspect-[532/560] w-full max-w-[532px] overflow-hidden rounded-[30px] bg-[#aee0f4] bg-cover bg-top [container-type:inline-size] lg:mx-0"
                style={{ backgroundImage: "url(/img/contact/map.png)" }}
              >
                <a
                  href={`mailto:${EMAIL}`}
                  className="absolute flex flex-col justify-between rounded-[30px] bg-[#ffbcfc] text-[#0b0b0c] [padding:3.76cqw]"
                  style={{ left: "3.76%", bottom: "3.57%", width: "45.1%", height: "29.5%" }}
                >
                  <span className="flex items-center justify-center rounded-full bg-white [height:8.65cqw] [width:8.65cqw]"><Mail className="size-[55%]" aria-hidden="true" /></span>
                  <span>
                    <span className="block font-stack [font-size:max(11px,2.63cqw)]">Email</span>
                    <span className="block break-all font-stack leading-tight [font-size:max(12px,3.38cqw)]">{EMAIL}</span>
                  </span>
                </a>
                <div
                  className="absolute flex flex-col justify-between rounded-[30px] bg-[#0b0b0c] text-white [padding:3.76cqw]"
                  style={{ left: "50.9%", bottom: "3.57%", width: "45.9%", height: "29.5%" }}
                >
                  <span className="flex items-center justify-center rounded-full bg-white text-[#0b0b0c] [height:8.65cqw] [width:8.65cqw]"><MapPin className="size-[55%]" aria-hidden="true" /></span>
                  <span>
                    <span className="block font-stack [font-size:max(11px,2.63cqw)]">Office</span>
                    <span className="block font-stack leading-tight [font-size:max(12px,3.38cqw)]">{OFFICE}</span>
                  </span>
                </div>
              </div>

              {/* form */}
              <form onSubmit={onSubmit} noValidate className="flex flex-col rounded-[30px] bg-[#f0f0f0] p-6 md:rounded-[40px] md:p-[30px] md:pb-[45px]">
                <div>
                  <label htmlFor="c-name" className={label}>Your Name</label>
                  <input id="c-name" name="name" value={form.name} onChange={onChange} autoComplete="name" placeholder="Enter your full name" className={`${field} h-14`} />
                </div>
                <div className="mt-[34px]">
                  <label htmlFor="c-email" className={label}>Work email address</label>
                  <input id="c-email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" placeholder="name@company.com" className={`${field} h-14`} />
                </div>
                <div className="mt-[34px]">
                  <label htmlFor="c-msg" className={label}>Tell us what you are looking for?</label>
                  <textarea id="c-msg" name="message" value={form.message} onChange={onChange} placeholder="A sentence or two about your goals and current setup." className={`${field} h-[121px] resize-none py-[18px]`} />
                </div>
                <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                  <PillButton type="submit" tone="lime" size="sm" disabled={busy} className="!text-[18px] !leading-6 disabled:opacity-60">
                    {busy ? "Sending…" : "Send message"}
                  </PillButton>
                  <p className="max-w-[240px] font-stack text-[18px] leading-6 text-[#0b0b0c] sm:text-right">We reply within one working day. No spam, ever.</p>
                </div>
                <p role="status" aria-live="polite" className={`mt-4 min-h-[24px] font-stack text-[16px] ${status.type === "error" ? "text-[#b42318]" : "text-[#067647]"}`}>
                  {status.message}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
