import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell, PageCta } from "../components/b2b/PageShell";
import { Section } from "../components/b2b/primitives";
import Seo from "../components/b2b/Seo";
import { POSTS, getPost } from "../content/posts";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

function Block({ block }) {
  if (block.t === "h")
    return <h2 className="font-outfit font-bold text-[22px] sm:text-[26px] text-[#0b1533] mt-10 mb-3 tracking-[-0.01em]">{block.c}</h2>;
  if (block.t === "list")
    return (
      <ul className="grid gap-2 my-4 font-jakarta text-[16px] leading-[1.7] text-[#3a4468]">
        {block.c.map((li) => (
          <li key={li} className="b2b-row flex gap-3">
            <span className="text-primary font-bold mt-0.5">·</span>
            {li}
          </li>
        ))}
      </ul>
    );
  return <p className="font-jakarta text-[16px] leading-[1.75] text-[#3a4468] my-4">{block.c}</p>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const more = POSTS.filter((p) => p.published && p.slug !== slug).slice(0, 2);

  return (
    <PageShell>
      <Seo title={post.title} path={`/blog/${post.slug}`} description={post.excerpt} />

      <article className="pt-32 sm:pt-36 lg:pt-40 pb-6 bg-[#fff]">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          <Link to="/blog" className="font-outfit font-semibold text-[13px] text-primary hover:underline">
            ← Blog
          </Link>
          <div className="mt-6 flex items-center gap-2 font-outfit font-semibold text-[12px] tracking-[0.08em] uppercase text-secondary-darkest">
            {post.category}
            <span className="text-[#8a95b4] normal-case tracking-normal font-jakarta font-normal">
              · {fmtDate(post.date)} · {post.readMins} min read
            </span>
          </div>
          <h1 className="font-outfit font-bold text-[30px] sm:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#0b1533] mt-3">
            {post.title}
          </h1>
          <p className="font-jakarta text-[18px] leading-[1.6] text-[#6b7597] mt-4">{post.excerpt}</p>
        </div>
      </article>

      <Section tone="white" className="!pt-6">
        <div className="max-w-[720px] mx-auto">
          {post.body.map((b, i) => (
            <Block key={i} block={b} />
          ))}

          <div className="b2b-card-hover mt-12 rounded-[16px] border border-[#e9ecf7] bg-[#f7f8fd] p-6">
            <p className="font-outfit font-semibold text-[15px] text-[#0b1533]">
              Koshpal delivers each part of this in one platform.
            </p>
            <p className="font-jakarta text-[14px] text-[#3a4468] mt-1 mb-3">
              Tracking, education and coaching for employees; adoption and outcomes for HR.
            </p>
            <Link
              to="/demo"
              className="inline-flex font-outfit font-semibold text-[14px] bg-primary text-[#fff] rounded-full px-5 py-2.5 hover:bg-primary-darkest transition"
              style={{ color: "#fff" }}
            >
              Book a demo
            </Link>
          </div>

          {more.length > 0 && (
            <div className="mt-12">
              <p className="font-outfit font-semibold text-[12px] tracking-[0.14em] uppercase text-[#6b7597] mb-4">
                Keep reading
              </p>
              <div className="grid sm:grid-cols-2 gap-[18px]">
                {more.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="b2b-card-hover rounded-[16px] border border-[#e9ecf7] bg-[#f7f8fd] p-5 hover:-translate-y-0.5 transition"
                  >
                    <span className="font-outfit font-semibold text-[11px] tracking-[0.1em] uppercase text-secondary-darkest">
                      {p.category}
                    </span>
                    <h3 className="font-outfit font-semibold text-[15px] text-[#0b1533] mt-1.5 leading-snug">{p.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      <PageCta
        title="See the platform the article describes."
        sub="A 30-minute walkthrough of the employee experience and the HR dashboard."
        secondary={{ to: "/platform", label: "See the platform" }}
      />
    </PageShell>
  );
}
