import React from "react";

/**
 * On-brand image placeholder. Self-contained (inline SVG/CSS — no asset files,
 * no network). Clearly labelled so it's never mistaken for real data.
 * Swap for a real screenshot / illustration by replacing the component with
 * an <img> at the same call site.
 *
 * props:
 *   label   - what this image will show ("Employee app", "HR dashboard", …)
 *   variant - "browser" | "phone" | "plain"
 *   ratio   - aspect ratio, e.g. "16/10", "4/3", "9/16"
 *   tone    - "light" (default) | "brand"
 */
export default function Placeholder({
  label = "Product screenshot",
  variant = "browser",
  ratio = "16/10",
  tone = "light",
  className = "",
}) {
  const brand = tone === "brand";
  const frame = brand
    ? "border-[#ffffff24] bg-[#0f1d4a]"
    : "border-[#e3e7f1] bg-[#f6f7fb]";
  const bar = brand ? "bg-[#ffffff1a] border-[#ffffff14]" : "bg-[#eef1f8] border-[#e3e7f1]";
  const dot = brand ? "bg-[#ffffff40]" : "bg-[#c9d2e6]";
  const text = brand ? "text-[#c3cdec]" : "text-[#8a95b4]";
  const sub = brand ? "text-[#8fa0cf]" : "text-[#a9b2ca]";

  const Body = (
    <div className="relative w-full h-full grid place-items-center overflow-hidden">
      {/* soft brand wash + dot grid */}
      <div
        className="absolute inset-0"
        style={{
          background: brand
            ? "radial-gradient(120% 120% at 20% 0%, rgba(51,78,172,.55), transparent 60%)"
            : "radial-gradient(120% 120% at 20% 0%, rgba(51,78,172,.08), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
          color: brand ? "rgba(255,255,255,.10)" : "rgba(51,78,172,.10)",
        }}
      />
      <div className={`relative text-center px-6 ${text}`}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 opacity-70">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m3 14 4-4 3 3 4-5 7 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="9" r="1.4" fill="currentColor" />
        </svg>
        <div className="font-outfit font-semibold text-[13.5px] tracking-[0.02em]">{label}</div>
        <div className={`font-outfit text-[11px] mt-0.5 ${sub}`}>Placeholder — swap for a real image</div>
      </div>
    </div>
  );

  if (variant === "phone") {
    return (
      <div className={`mx-auto w-[248px] max-w-full ${className}`}>
        <div className={`rounded-[34px] border-[6px] ${frame} border-solid p-1.5 shadow-[0_30px_60px_rgba(14,26,60,0.16)]`}>
          <div className="rounded-[24px] overflow-hidden" style={{ aspectRatio: "9/19" }}>
            {Body}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "plain") {
    return (
      <div
        className={`rounded-[16px] border ${frame} overflow-hidden ${className}`}
        style={{ aspectRatio: ratio }}
      >
        {Body}
      </div>
    );
  }

  // browser
  return (
    <div className={`rounded-[16px] border ${frame} overflow-hidden shadow-[0_24px_60px_rgba(14,26,60,0.14)] ${className}`}>
      <div className={`flex items-center gap-1.5 px-3.5 py-2.5 border-b ${bar}`}>
        <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
        <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
        <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
      </div>
      <div style={{ aspectRatio: ratio }}>{Body}</div>
    </div>
  );
}
