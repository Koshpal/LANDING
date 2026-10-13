import React, { useRef } from "react";
import { useSectionView } from "../../lib/analytics";

/** Wraps a page section and reports a one-time `section_view` event. */
export default function SectionTrack({ name, children }) {
  const ref = useRef(null);
  useSectionView(ref, name);
  return <div ref={ref}>{children}</div>;
}
