import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, Reveal } from "../components/b2b/primitives";
import { POSTS } from "../content/posts";

const fmtDate = (d) =>
  d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "";

export default function Blog() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))], []);
  const [cat, setCat] = useState("All");
  const shown = POSTS.filter((p) => cat === "All" || p.category === cat);

  return (
    <PageShell
      seo={{
        title: "Blog — Financial Wellness Insights",
        path: "/blog",
        description:
          "Short, practical writing on employee financial wellness for HR and People teams — definitions, provider evaluation, privacy, rollout and measurement.",
      }}
    >
      <PageHero
        eyebrow="Blog"
        title="Financial wellness, explained for People teams."
        sub="Short pieces on the decisions HR actually faces — what financial wellness is, how to evaluate it, and how to run a program well."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/resources", label: "All resources" }}
      />

      <Section tone="white">
        <div className="flex flex-wrap gap-2 mb-9">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-outfit font-semibold text-[13px] px-4 py-2 rounded-full border transition ${
                cat === c
                  ? "bg-primary text-[#fff] border-primary"
                  : "bg-[#fff] text-[#3a4468] border-[#dfe3f2] hover:border-primary hover:text-primary"
              }`}
              style={cat === c ? { color: "#fff" } : undefined}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {shown.map((p, i) => {
            const card = (
              <div
                className={`h-full rounded-[20px] border p-6 flex flex-col ${
                  p.published
                    ? "bg-[#f7f8fd] border-[#e9ecf7] b2b-shadow hover:-translate-y-1 hover:shadow-[0_2px_6px_rgba(14,26,60,0.06),0_30px_60px_rgba(14,26,60,0.12)] transition-all duration-200"
                    : "bg-[#f7f8fd] border-dashed border-[#dfe3f2]"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase text-secondary-darkest">
                    {p.category}
                  </span>
                  {p.published ? (
                    <span className="font-jakarta text-[11px] text-[#8a95b4]">
                      · {fmtDate(p.date)} · {p.readMins} min
                    </span>
                  ) : (
                    <span className="font-jakarta text-[11px] text-[#a9b2ca]">· coming soon</span>
                  )}
                </div>
                <h3 className={`font-outfit font-semibold text-[18px] leading-snug mb-2 ${p.published ? "text-[#0b1533]" : "text-[#8a95b4]"}`}>
                  {p.title}
                </h3>
                <p className={`font-jakarta text-[13.5px] leading-[1.55] flex-1 ${p.published ? "text-[#3a4468]" : "text-[#a9b2ca]"}`}>
                  {p.excerpt}
                </p>
                {p.published && (
                  <span className="font-outfit font-semibold text-[13px] text-primary mt-4">Read →</span>
                )}
              </div>
            );
            return (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                {p.published ? <Link to={`/blog/${p.slug}`}>{card}</Link> : card}
              </Reveal>
            );
          })}
        </div>
      </Section>

      <PageCta
        title="See the platform the articles describe."
        sub="A 30-minute walkthrough of the employee experience and the HR dashboard."
        secondary={{ to: "/platform", label: "See the platform" }}
      />
    </PageShell>
  );
}
