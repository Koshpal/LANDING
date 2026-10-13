import React from "react";
import { Link } from "react-router-dom";
import { PageShell, PageHero, CtaBand } from "../components/b2b/PageShell";
import { Section, SectionHead, Reveal } from "../components/b2b/primitives";
import EmailCapture from "../components/b2b/EmailCapture";
import Needs from "../components/b2b/Needs";
import { POSTS } from "../content/posts";

const fmt = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function Resources() {
  const posts = POSTS.filter((p) => p.published);
  return (
    <PageShell
      seo={{
        title: "Resources",
        path: "/resources",
        description:
          "Articles and guides on employee financial wellness for HR and People teams: what it means, how to evaluate a provider, and privacy.",
      }}
    >
      <PageHero
        eyebrow="Resources"
        title="Plain-spoken guides for People teams."
        sub="What financial wellness means, how to evaluate a provider, and what employers should and shouldn't see."
        primary={{ to: "/demo", label: "Book a demo" }}
        secondary={{ to: "#guide", label: "Get the employer guide" }}
      />

      <Section tone="white" id="articles">
        <SectionHead eyebrow="Articles" title="Start here." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.05} className="h-full">
              <Link
                to={`/blog/${p.slug}`}
                className="b2b-card b2b-card-hover bg-[#f7f8fd] p-6 h-full flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="font-outfit font-semibold text-[12px] tracking-[0.1em] uppercase text-primary">{p.category}</span>
                <h3 className="font-outfit font-semibold text-[18px] leading-[1.3] text-[#0b1533] mt-2">{p.title}</h3>
                <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468] mt-2 flex-1">{p.excerpt}</p>
                <span className="font-jakarta text-[12.5px] text-[#6b7597] mt-4">{fmt(p.date)} · {p.readMins} min read</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint" id="guide">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHead eyebrow="Employer guide" title="Offering financial wellness: a guide for HR." lede="Not ready to talk? Leave your work email and we'll send the guide as soon as it's ready." />
            <Needs kind="PROOF" note="the gated employer guide (PDF) and its approved contents" />
          </div>
          <EmailCapture label="Work email" cta="Notify me" resource="Employer guide" />
        </div>
      </Section>

      <CtaBand title="Prefer to talk it through?" sub="We'll show you the employee experience and the HR view." secondary={{ to: "/pricing", label: "See pricing" }} />
    </PageShell>
  );
}
