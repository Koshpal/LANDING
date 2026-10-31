import React from "react";

/* Shared section headline (Figtree Medium 82/86, -1.04px) and lead paragraph
   (Stack Sans 24/32). Sized fluidly so the 1440px design scales down. */
export function H2({ children, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={`text-balance font-figtree font-medium text-[clamp(36px,5.69vw,82px)] leading-[1.05] tracking-[-0.0127em] ${className}`}>
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }) {
  return (
    <p className={`text-balance font-stack text-[clamp(17px,1.67vw,24px)] leading-[1.333] ${className}`}>{children}</p>
  );
}
