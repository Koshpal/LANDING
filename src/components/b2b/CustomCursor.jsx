import React, { useEffect, useRef } from "react";

/**
 * Koshpal-logo cursor. Mounted once at the app root so it covers every page.
 * - Only runs on devices with a fine pointer + hover (desktop). Touch keeps the
 *   native behaviour and this renders nothing.
 * - The logo eases toward the pointer; over links/buttons/inputs it grows and a
 *   brand ring blooms (`.is-active`).
 * - Respects prefers-reduced-motion (snaps instead of trailing).
 */
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary, .cursor-pointer, [data-cursor="link"]';

export default function CustomCursor() {
  const elRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const el = elRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("has-koshpal-cursor");

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (el.classList.contains("is-hidden")) el.classList.remove("is-hidden");
      const overInteractive = e.target instanceof Element && e.target.closest(INTERACTIVE);
      el.classList.toggle("is-active", !!overInteractive);
    };
    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");
    const onLeave = () => el.classList.add("is-hidden");
    const onEnter = () => el.classList.remove("is-hidden");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf;
    const loop = () => {
      const ease = reduce ? 1 : 0.2;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-koshpal-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div ref={elRef} className="b2b-cursor is-hidden" aria-hidden="true">
      <span className="b2b-cursor__ring" />
      <span className="b2b-cursor__mark" />
    </div>
  );
}
