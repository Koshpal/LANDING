import React from "react";

/**
 * Marks content the Koshpal team still has to supply or confirm
 * (see CONTENT_NEEDED.md). Visible in dev and preview builds so gaps are
 * obvious in review; renders nothing in production, so an unfinished claim
 * can never ship as a visible placeholder.
 *
 *   <Needs kind="PROOF" note="partner logos with permission" />
 *   <Needs kind="VERIFY" note="'unlimited' is deliverable" />
 */
const SHOW = import.meta.env.DEV || import.meta.env.VITE_SHOW_NEEDS === "true";

export default function Needs({ kind = "PROOF", note }) {
  if (!SHOW) return null;
  const tone =
    kind === "VERIFY"
      ? "bg-[#fff4d6] text-[#7a5200] border-[#f0d58a]"
      : "bg-[#fde8e6] text-[#8a1c14] border-[#f3b6b1]";
  return (
    <span
      role="note"
      className={`inline-block my-1 px-2 py-[3px] rounded-md border border-dashed font-outfit font-semibold text-[11px] ${tone}`}
    >
      {`{{${kind}: ${note}}}`}
    </span>
  );
}
