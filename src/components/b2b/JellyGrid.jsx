import React, { useEffect, useRef } from "react";

/**
 * Interactive "jelly" grid — the same mouse-reactive canvas used on the
 * current koshpal.com hero/footer, extracted so any section can use it.
 * Renders absolutely inside a `position: relative` parent.
 *
 * props:
 *   color   - rgb triplet string for the grid lines, e.g. "255, 255, 255"
 *   opacity - base line opacity at rest (default 0.22)
 *   gridSize- spacing in px (default 60)
 *   className / maskEdges - visual tweaks
 */
export default function JellyGrid({
  color = "255, 255, 255",
  opacity = 0.22,
  gridSize = 60,
  className = "",
  maskEdges = true,
  mask,
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let particles = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = [];
      for (let x = 0; x <= w + gridSize; x += gridSize) {
        for (let y = 0; y <= h + gridSize; y += gridSize) {
          particles.push({
            baseX: x,
            baseY: y,
            opacity,
            targetOpacity: opacity,
            offsetX: 0,
            offsetY: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
          });
        }
      }
    };
    build();

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      build();
    };
    const onMove = (e) => {
      const r = parent.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    parent.addEventListener("mouseleave", onLeave);

    const maxDistance = 350;
    let raf;
    const tick = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my } = mouse.current;

      for (const p of particles) {
        const dx = mx - p.baseX;
        const dy = my - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (!reduce && dist < maxDistance) {
          const intensity = 1 - dist / maxDistance;
          p.targetOpacity = Math.max(0, opacity * (dist / maxDistance));
          const strength = intensity * 42;
          p.targetOffsetX = (Math.random() - 0.5) * strength;
          p.targetOffsetY = (Math.random() - 0.5) * strength;
        } else {
          p.targetOpacity = opacity;
          p.targetOffsetX = 0;
          p.targetOffsetY = 0;
        }

        p.opacity += (p.targetOpacity - p.opacity) * 0.08;
        p.offsetX += (p.targetOffsetX - p.offsetX) * 0.12;
        p.offsetY += (p.targetOffsetY - p.offsetY) * 0.12;

        const drawX = p.baseX + p.offsetX;
        const drawY = p.baseY + p.offsetY;

        ctx.strokeStyle = `rgba(${color}, ${p.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX + gridSize, drawY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX, drawY + gridSize);
        ctx.stroke();

        if (!reduce && dist < maxDistance) {
          const dotSize = (1 - dist / maxDistance) * 2.6;
          ctx.fillStyle = `rgba(${color}, ${p.opacity * 1.6})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [color, opacity, gridSize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`b2b-jelly-grid absolute inset-0 pointer-events-none ${className}`}
      style={(() => {
        const m =
          mask ||
          (maskEdges
            ? "radial-gradient(120% 100% at 50% 0%, #000 0%, #000 55%, transparent 90%)"
            : null);
        return m ? { WebkitMaskImage: m, maskImage: m } : undefined;
      })()}
    />
  );
}
