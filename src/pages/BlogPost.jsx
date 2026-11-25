import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Seo, { faqSchema } from "../components/b2b/Seo";
import { DummyBadge } from "../components/b2b/Dummy";
import { CtaBand, ORANGE } from "../components/site/PageParts";
import { getPost, POSTS } from "../content/posts";
import { PILLAR_SLUG, seoOf } from "../content/postSeo";
import { fmtDate, postImage } from "./Blog";

/** Plain text with [label](/path) links turned into router links, so articles can link to each other and to key pages. */
function Inline({ text }) {
  const parts = String(text).split(/(\[[^\]]+\]\(\/[^)]*\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
    return m ? <Link key={i} to={m[2]} className="underline decoration-[#3b3fbc] underline-offset-4 hover:text-[#3b3fbc]">{m[1]}</Link> : part;
  });
}

/* Figma "Blog post": orange nav strip, back button, category + date, big title, banner,
   sticky contents list on the left and the article on the right. */
export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  const faqId = post ? post.body.length : 0; // the FAQ section's contents-list id, after the last body block
  const heads = useMemo(() => {
    if (!post) return [];
    const hs = post.body.map((b, i) => ({ b, i })).filter(({ b }) => b.t === "h");
    return post.faq?.length ? [...hs, { b: { c: "FAQ" }, i: faqId }] : hs;
  }, [post, faqId]);
  const [active, setActive] = useState(heads[0]?.i);

  useEffect(() => {
    if (!heads.length || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(Number(hit.target.dataset.i));
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    heads.forEach(({ i }) => {
      const el = document.getElementById(`s-${i}`);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [heads]);

  if (!post) return <Navigate to="/blog" replace />;

  const seo = seoOf(post);
  const image = `https://koshpal.com${postImage(POSTS.indexOf(post))}`;
  // Keep reading: the pillar article first (so every post links to the main topic page), then the newest others.
  const related = [
    ...POSTS.filter((x) => x.published && x.slug === PILLAR_SLUG && x.slug !== post.slug),
    ...POSTS.filter((x) => x.published && x.slug !== PILLAR_SLUG && x.slug !== post.slug).sort((a, b) => (a.date < b.date ? 1 : -1)),
  ].slice(0, 3);

  let seenH = false;
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        title={seo.title}
        crumbs={[["Blog", "/blog"], [post.title, `/blog/${post.slug}`]]}
        path={`/blog/${post.slug}`}
        description={seo.description}
        image={image}
        article={{ published: seo.published, modified: seo.modified, section: post.category }}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: seo.description,
            image,
            datePublished: seo.published,
            dateModified: seo.modified,
            articleSection: post.category,
            inLanguage: "en-IN",
            keywords: "employee financial wellness",
            author: { "@type": "Organization", name: "Koshpal", url: "https://koshpal.com" },
            publisher: { "@type": "Organization", name: "Koshpal", logo: { "@type": "ImageObject", url: "https://koshpal.com/assets/logo.png" } },
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://koshpal.com/blog/${post.slug}` },
          },
          ...(post.faq?.length ? [faqSchema(post.faq)] : []),
        ]}
      />
      <div className="relative h-[72px] md:h-[84px]" style={{ backgroundImage: ORANGE.replace("#f5c27a 0%", "#f5b56a 0%") }}>
        <Navbar glass />
      </div>

      <main id="main" className="mx-auto max-w-[1360px] px-5 pb-16 pt-10 md:px-10 md:pb-[100px] md:pt-[100px]">
        <Link to="/blog" aria-label="Back to the blog" className="flex size-12 items-center justify-center rounded-full bg-black text-white transition-transform hover:-translate-x-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b3fbc]">
          <ArrowLeft size={22} aria-hidden="true" />
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="rounded-[8px] bg-[#ebebeb] px-[8px] py-[3px] text-[14px] leading-[22px] text-[#555]">{post.category}</span>
          <span className="text-[16px] text-[#333]">{fmtDate(post.date)}</span>
          <span className="text-[14px] text-[#777]">· {post.readMins} min read</span>
          {post.dummy && <DummyBadge>Dummy article</DummyBadge>}
        </div>
        <h1 className="mt-6 max-w-[1280px] font-figtree text-[clamp(30px,4.17vw,60px)] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{post.title}</h1>

        <img src={postImage(POSTS.indexOf(post))} alt={`Illustration for ${post.title}`} width="1280" height="478" className="mt-10 aspect-[1280/478] w-full rounded-[28px] object-cover [object-position:50%_35%] md:mt-[47px] md:rounded-[40px]" />

        <div className="mt-10 grid gap-8 lg:mt-[41px] lg:grid-cols-[220px_minmax(0,980px)] lg:gap-[79px]">
          <nav aria-label="Contents" className="hidden lg:block">
            <ol className="sticky top-28 flex flex-col gap-2 font-stack text-[14px] leading-[18px]">
              {heads.map(({ b, i }) => (
                <li key={i}>
                  <a href={`#s-${i}`} aria-current={active === i ? "true" : undefined} className={`block transition-colors hover:text-black ${active === i ? "font-semibold text-black" : "text-[#888]"}`}>
                    {b.c}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="font-stack text-[17px] leading-[1.5] text-[#111] md:text-[18px] md:leading-[27px]">
            {post.body.map((b, i) => {
              if (b.t === "h") {
                const first = !seenH;
                seenH = true;
                return (
                  <h2 key={i} id={`s-${i}`} data-i={i} className={`scroll-mt-28 font-figtree text-[clamp(28px,3.33vw,48px)] font-medium leading-[1.1] tracking-[-0.03em] text-black ${first ? "mt-12 md:mt-[84px]" : "mt-10 md:mt-[46px]"} mb-4 md:mb-5`}>
                    {b.c}
                  </h2>
                );
              }
              if (b.t === "h3")
                return <h3 key={i} className="mt-8 font-figtree text-[22px] font-medium leading-[1.25] tracking-[-0.01em] text-black md:text-[26px]">{b.c}</h3>;
              if (b.t === "quote")
                return <blockquote key={i} className="my-6 border-l-4 border-[#3b3fbc] pl-5 font-figtree text-[20px] leading-[1.4] text-black md:text-[24px]">“{b.c}”</blockquote>;
              if (b.t === "table")
                return (
                  <div key={i} className="my-6 overflow-x-auto">
                    <table className="w-full min-w-[420px] border-collapse text-left font-figtree text-[16px] md:text-[18px]">
                      <thead>
                        <tr>{b.head.map((h) => <th key={h} scope="col" className="border-b-2 border-black px-4 py-3 font-medium">{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {b.rows.map((r) => (
                          <tr key={r[0]} className="border-b border-[#dcdcdc]">
                            {r.map((c, k) => (k ? <td key={k} className="px-4 py-3">{c}</td> : <th key={k} scope="row" className="px-4 py-3 font-normal">{c}</th>))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              if (b.t === "list")
                return (
                  <ul key={i} className="my-3 flex flex-col gap-2">
                    {b.c.map((li) => {
                      const [lead, text] = Array.isArray(li) ? li : [null, li];
                      return (
                        <li key={lead || li} className="flex gap-3">
                          <span aria-hidden="true">•</span>
                          <span>{lead && <b className="font-semibold">{lead}: </b>}<Inline text={text} /></span>
                        </li>
                      );
                    })}
                  </ul>
                );
              return <p key={i} className="mt-3 first:mt-0">{b.b && <b className="font-semibold">{b.b} </b>}<Inline text={b.c} /></p>;
            })}
            {post.faq?.length > 0 && (
              <section aria-labelledby={`s-${faqId}`}>
                <h2 id={`s-${faqId}`} data-i={faqId} className="mb-4 mt-10 scroll-mt-28 font-figtree text-[clamp(28px,3.33vw,48px)] font-medium leading-[1.1] tracking-[-0.03em] text-black md:mb-5 md:mt-[46px]">FAQ</h2>
                {post.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="mt-6 font-figtree text-[20px] font-medium leading-[1.3] text-black md:text-[22px]">{f.q}</h3>
                    <p className="mt-2">{f.a}</p>
                  </div>
                ))}
              </section>
            )}
          </article>
        </div>

        <aside aria-labelledby="keep-reading" className="mt-16 border-t border-[#dcdcdc] pt-10 md:mt-[100px]">
          <h2 id="keep-reading" className="font-figtree text-[clamp(26px,2.8vw,40px)] font-medium leading-[1.1] tracking-[-0.03em] text-black">Keep reading on employee financial wellness</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to={`/blog/${r.slug}`} className="group block rounded-[20px] bg-[#f3f3f3] p-6 transition-colors hover:bg-[#ebebeb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b3fbc]">
                  <span className="font-figtree text-[14px] text-[#666]">{r.category} · {r.readMins} min read</span>
                  <span className="mt-2 block font-figtree text-[19px] font-medium leading-[1.25] text-black">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-figtree text-[16px] leading-[1.6] text-[#333]">
            Learn how Koshpal’s <Link to="/for-hr" className="underline underline-offset-4">financial wellness program for employees</Link> works for HR, what <Link to="/for-employees" className="underline underline-offset-4">financial coaching for employees</Link> looks like day to day, or see <Link to="/pricing" className="underline underline-offset-4">pricing per employee</Link>.
          </p>
        </aside>
      </main>

      <CtaBand cta="Book a demo" py={110}>Bring wellbeing to your workplace</CtaBand>
      <Footer />
    </div>
  );
}
