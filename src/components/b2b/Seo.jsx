import React from "react";
import { Helmet } from "react-helmet";

const SITE = "https://koshpal.com";
const OG_IMAGE = `${SITE}/assets/logo.png`;

/**
 * Per-page SEO. Renders title, description, canonical and Open Graph / Twitter
 * tags. Pass `path` (e.g. "/platform") for the canonical + og:url.
 */
export default function Seo({ title, description, path = "/", image = OG_IMAGE, noindex = false }) {
  const fullTitle = title
    ? `${title} · Koshpal`
    : "Koshpal — Employee Financial Wellness for Workplaces";
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
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
    </Helmet>
  );
}
