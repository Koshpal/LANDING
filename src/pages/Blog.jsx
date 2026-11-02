import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Seo from "../components/b2b/Seo";
import { MagentaHero, CtaBand, ORANGE } from "../components/site/PageParts";
import { POSTS as ALL_POSTS } from "../content/posts";
import { SHOW_DUMMY } from "../lib/dummy";

/* Figma "Blog" (orange hero, featured post, 3-column grid). Posts come from content/posts.js;
   thumbnails are the design's illustrations, cycled across posts. */
const POSTS = ALL_POSTS.filter((p) => SHOW_DUMMY || !p.dummy);
const IMG = ["carabiner", "binders", "piggy", "coin-card"].map((n) => `/img/pages/blog/${n}.png`);
export const postImage = (i) => IMG[i % IMG.length];

export const fmtDate = (d) => (d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "");

function Card({ p, i }) {
  const body = (
    <>
      <img src={postImage(i)} alt="" width="410" height="307" loading="lazy" className="aspect-[410/307] w-full rounded-[24px] object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
      <p className="mt-3 font-figtree text-[14px] leading-5 text-[#666]">
        {p.category} <span aria-hidden="true">•</span> {p.readMins} min read
      </p>
      <h3 className={`mt-1 font-figtree text-[16px] leading-[22px] md:text-[17px] ${p.published ? "text-[#0b0b0c]" : "text-[#8a8a8a]"}`}>{p.title}</h3>
    </>
  );
  return p.published ? (
    <Link to={`/blog/${p.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b3fbc]">{body}</Link>
  ) : (
    <div className="block">{body}</div>
  );
}

export default function Blog() {
  const featured = POSTS.find((p) => p.published);
  const rest = POSTS.filter((p) => p !== featured);

  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo
        path="/blog"
        title="Employee Financial Wellness Blog | Koshpal"
        description="Practical writing on employee financial wellness for HR teams and money questions for salaried employees in India: tax, EMIs, savings and benefits."
        crumbs={[["Blog", "/blog"]]}
      />
      <main id="main">
        <MagentaHero
          gradient={ORANGE}
          small
          padBottom={149}
          tag="Blog"
          title="Ideas on workplace money."
          lead="Perspectives, research and practical thinking on employee financial wellbeing, for the leadership teams building workplaces where people feel financially confident."
        />

        <section className="bg-white px-5 pb-16 pt-10 md:px-8 md:pb-[100px] md:pt-[100px]">
          <div className="mx-auto max-w-[1276px]">
            {featured && (
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-[28px] bg-[#efefef] p-2 md:grid-cols-[minmax(0,1fr)_450px] md:rounded-[40px] lg:min-h-[457px]"
              >
                <div className="flex flex-col px-5 pb-6 pt-6 md:px-[56px] md:pb-[59px] md:pt-[57px]">
                  <span className="self-start rounded-[8px] bg-[#dcdcdc] px-[8px] py-[3px] font-figtree text-[14px] leading-[22px] text-[#555]">{featured.category}</span>
                  <h2 className="mt-[17px] max-w-[700px] font-figtree text-[clamp(30px,3.33vw,48px)] font-medium leading-[1] tracking-[-0.03em] [text-wrap:wrap]">{featured.title}</h2>
                  <p className="mt-5 font-figtree text-[16px] text-[#333]">{fmtDate(featured.date)}</p>
                  <span className="mt-8 inline-flex h-[46px] items-center self-start rounded-full bg-white px-6 font-figtree text-[16px] shadow-[0_3px_6px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:-translate-y-0.5 md:mt-auto">Read more</span>
                </div>
                <img src="/img/pages/blog/coin-card.png" alt="" width="450" height="441" className="aspect-[450/441] w-full rounded-[24px] object-cover md:rounded-[32px] lg:h-full lg:rounded-[32px]" />
              </Link>
            )}

            <ul className="mt-12 grid gap-x-[22px] gap-y-12 sm:grid-cols-2 lg:mt-[100px] lg:grid-cols-3 lg:gap-y-[80px]">
              {rest.map((p, i) => (
                <li key={p.slug}><Card p={p} i={i} /></li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand cta="Book a demo" py={110}>Bring wellbeing to your workplace</CtaBand>
      </main>
      <Footer />
    </div>
  );
}
