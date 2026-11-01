import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Seo from "../components/b2b/Seo";
import { DummyBadge } from "../components/b2b/Dummy";
import { CtaBand, ORANGE } from "../components/site/PageParts";
import { getPost } from "../content/posts";
import { fmtDate } from "./Blog";

/* Figma "Blog post": orange nav strip, back button, category + date, big title, banner,
   sticky contents list on the left and the article on the right. */
export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  const heads = useMemo(() => (post ? post.body.map((b, i) => ({ b, i })).filter(({ b }) => b.t === "h") : []), [post]);
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

  let seenH = false;
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo title={post.title} path={`/blog/${post.slug}`} description={post.excerpt} noindex={!!post.dummy} />
      <div className="relative h-[84px] md:h-[100px]" style={{ backgroundImage: ORANGE.replace("#f5c27a 0%", "#f5b56a 0%") }}>
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

        <img src="/img/pages/blog/coin.png" alt="" width="1280" height="478" className="mt-10 aspect-[1280/478] w-full rounded-[28px] object-cover [object-position:60%_70%] md:mt-[47px] md:rounded-[40px]" />

        <div className="mt-10 grid gap-8 lg:mt-[41px] lg:grid-cols-[220px_minmax(0,980px)] lg:gap-[79px]">
          <nav aria-label="Contents" className="hidden lg:block">
            <ol className="sticky top-8 flex flex-col gap-2 font-stack text-[14px] leading-[18px]">
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
                  <h2 key={i} id={`s-${i}`} data-i={i} className={`scroll-mt-8 font-figtree text-[clamp(28px,3.33vw,48px)] font-medium leading-[1.1] tracking-[-0.03em] text-black ${first ? "mt-12 md:mt-[84px]" : "mt-10 md:mt-[46px]"} mb-4 md:mb-5`}>
                    {b.c}
                  </h2>
                );
              }
              if (b.t === "list")
                return (
                  <ul key={i} className="my-3 flex flex-col gap-1">
                    {b.c.map((li) => (
                      <li key={li} className="flex gap-3">
                        <span aria-hidden="true">•</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                );
              return <p key={i} className="mt-3 first:mt-0">{b.c}</p>;
            })}
          </article>
        </div>
      </main>

      <CtaBand cta="Book a demo" py={110}>Bring wellbeing to your workplace</CtaBand>
      <Footer />
    </div>
  );
}
