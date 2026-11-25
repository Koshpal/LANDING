import React from "react";
import { Helmet } from "react-helmet";

const SITE = "https://koshpal.com";
const OG_IMAGE = `${SITE}/og-card.png`;
const DEFAULT_TITLE = "Employee Financial Wellness Program in India | Koshpal";

/**
 * Per-page SEO. Renders title, description, canonical and Open Graph / Twitter
 * tags. `title` is the full <title> (already ending in "| Koshpal"); `path` is
 * the canonical path. `schema` is one JSON-LD object or an array of them.
 * Inner pages get a BreadcrumbList from `crumbs` ([[name, path], ...]).
 * `article` ({ published, modified, section }) marks a blog post for Open Graph.
 */
export default function Seo({ title, description, path = "/", image = OG_IMAGE, schema, crumbs, article }) {
  const fullTitle = title || DEFAULT_TITLE;
  const url = `${SITE}${path}`;
  const graph = [
    ...(crumbs
      ? [{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [["Home", "/"], ...crumbs].map(([name, p], i) => ({
            "@type": "ListItem",
            position: i + 1,
            name,
            item: `${SITE}${p}`,
          })),
        }]
      : []),
    ...(schema ? [].concat(schema) : []),
  ];
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={article ? "article" : "website"} />
      {article?.published && <meta property="article:published_time" content={article.published} />}
      {article?.modified && <meta property="article:modified_time" content={article.modified} />}
      {article?.section && <meta property="article:section" content={article.section} />}
      <meta property="og:site_name" content="Koshpal" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {graph.map((g, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(g)}</script>
      ))}
    </Helmet>
  );
}

/** FAQPage JSON-LD from [{ q, a }]. */
export const faqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});
