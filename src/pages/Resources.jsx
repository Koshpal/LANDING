import React from "react";
import { Link } from "react-router-dom";
import { PageShell, PageHero, PageCta } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal, CTA } from "../components/b2b/primitives";
import { POSTS } from "../content/posts";

const HUB = [
  ["Reports & research", "Data on workplace financial stress, adoption and outcomes.", "/resources/reports"],
  ["HR guides", "Practical playbooks: evaluate providers, launch a program, measure ROI.", "/resources/guides"],
  ["Blog", "Short, useful writing on employee financial wellness.", "/blog"],
  ["Impact calculator", "Estimate the cost of financial stress for a workforce your size.", "/calculator"],
];

export default function Resources() {
  const latest = POSTS.filter((p) => p.published).slice(0, 3);
  return (
    <PageShell
      seo={{
        title: "Financial Wellness Resource Hub",
        path: "/resources",
        description:
          "Reports, HR guides, articles and tools on employee financial wellness — everything a People team needs before, during and after choosing a program.",
      }}
    >
      <PageHero
        eyebrow="Resources"
        title="The financial wellness resource hub for People teams."
        sub="Reports, guides, articles and tools — built to answer the questions HR buyers actually have before, during and after choosing a program."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "/financial-wellness", label: "Start with the basics" }}
      />

      <Section tone="white">
        <SectionHead eyebrow="Browse" title="Four places to start." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
          {HUB.map(([h, p, to], i) => (
            <Reveal key={h} delay={(i % 2) * 0.05} className="b2b-card-hover bg-[#f7f8fd] border border-[#e9ecf7] rounded-[20px] p-6 b2b-shadow flex flex-col">
              <h3 className="font-outfit font-semibold text-[19px] text-[#0b1533] mb-1.5">{h}</h3>
              <p className="font-jakarta text-[14px] leading-[1.55] text-[#3a4468] mb-4 flex-1">{p}</p>
              <CTA to={to} variant="ghost">Open</CTA>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface2">
        <SectionHead eyebrow="From the blog" title="Latest writing." />
        <div className="grid md:grid-cols-3 gap-[18px]">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={`/blog/${p.slug}`}
                className="b2b-card-hover block rounded-[20px] border border-[#e9ecf7] bg-[#fff] p-6 h-full hover:bg-[#f7f8fd] transition"
              >
                <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase text-secondary-darkest">
                  {p.category}
                </span>
                <h3 className="font-outfit font-semibold text-[16px] text-[#0b1533] mt-2 mb-1.5 leading-snug">{p.title}</h3>
                <p className="font-jakarta text-[13px] leading-[1.5] text-[#3a4468]">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <CTA to="/blog" variant="ghost">All articles</CTA>
        </div>
      </Section>

      <PageCta
        title="Done reading? See it working."
        sub="A 30-minute walkthrough of the employee experience and the HR dashboard."
        secondary={{ to: "/platform", label: "See the platform" }}
      />
    </PageShell>
  );
}
