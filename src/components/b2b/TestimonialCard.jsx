import React from "react";

/** Real, attributable quotes only. Renders nothing without attribution. */
export default function TestimonialCard({ quote, name, role, org }) {
  if (!quote || !name) return null;
  return (
    <figure className="b2b-card bg-[#f7f8fd] p-6">
      <blockquote className="font-jakarta text-[16px] leading-[1.6] text-[#0b1533]">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-4 font-outfit text-[13.5px] text-[#6b7597]">
        <span className="font-semibold text-[#0b1533]">{name}</span>
        {role ? `, ${role}` : ""}
        {org ? `, ${org}` : ""}
      </figcaption>
    </figure>
  );
}
