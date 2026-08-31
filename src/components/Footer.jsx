import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { label: "Platform", id: "platform" },
  { label: "How it works", id: "how" },
  { label: "Why Koshpal", id: "why" },
  { label: "Who it's for", id: "who" },
  { label: "Privacy", id: "privacy" },
];

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const gridSize = 60;
    let particles = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const initParticles = () => {
      particles = [];
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          particles.push({ x, y, baseX: x, baseY: y, opacity: 0.2, targetOpacity: 0.2, offsetX: 0, offsetY: 0, targetOffsetX: 0, targetOffsetY: 0 });
        }
      }
    };
    initParticles();

    let animFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        const dx = mousePos.x - particle.baseX;
        const dy = mousePos.y - particle.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 350;
        if (distance < maxDistance) {
          const intensity = 1 - distance / maxDistance;
          particle.targetOpacity = Math.max(0, 0.25 * (distance / maxDistance));
          const distortionStrength = intensity * 45;
          particle.targetOffsetX = (Math.random() - 0.5) * distortionStrength;
          particle.targetOffsetY = (Math.random() - 0.5) * distortionStrength;
        } else {
          particle.targetOpacity = 0.25;
          particle.targetOffsetX = 0;
          particle.targetOffsetY = 0;
        }
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.08;
        particle.offsetX += (particle.targetOffsetX - particle.offsetX) * 0.12;
        particle.offsetY += (particle.targetOffsetY - particle.offsetY) * 0.12;
        const drawX = particle.baseX + particle.offsetX;
        const drawY = particle.baseY + particle.offsetY;
        ctx.strokeStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX + gridSize, drawY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX, drawY + gridSize);
        ctx.stroke();
        if (distance < maxDistance) {
          const dotSize = (1 - distance / maxDistance) * 3;
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 1.5})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      animFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animFrameId);
    };
  }, [mousePos]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const linkCls =
    "text-[#3f4a63] text-sm font-jakarta hover:text-primary hover:underline transition-all duration-200";

  return (
    <footer className="bg-[#fff] border-t border-[#e3e7f1] px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
      {/* CTA block — only off the homepage; Home already ends on <FinalCta /> */}
      {!isHomePage && (
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div
            className="relative bg-gradient-to-b to-[#334EAC] from-[#32437D] rounded-3xl sm:rounded-[32px] px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              <h2 style={{ color: "#fff" }} className="text-[#fff] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold font-outfit text-center lg:text-left leading-tight">
                Support your people beyond the payslip.
              </h2>
              <div className="flex justify-center lg:justify-end">
                <Link
                  to="/demo"
                  className="bg-[#334EAC] text-lg px-6 py-2.5 font-outfit rounded-full hover:bg-[#5B7FDB] transition-all duration-300 ease-in-out border-2 border-[#fff]"
                  style={{ color: "#fff" }}
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* footer content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12">
          {/* brand */}
          <div className="lg:col-span-2 w-full">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/logo-removebg.png" alt="Koshpal" className="h-[28px] sm:h-[32px] md:h-[36px] w-auto" />
              <h3 className="text-[#0e1a3c] text-2xl font-bold font-outfit">Koshpal</h3>
            </div>
            <p className="text-[#3f4a63] text-sm font-jakarta leading-relaxed max-w-[40ch]">
              Employee financial wellness for modern workplaces — automated tracking, personalised
              insights, financial education and expert guidance in one privacy-first platform, with an
              aggregated dashboard for HR.
            </p>
            <div className="flex gap-2.5 mt-5">
              {["App Store", "Google Play"].map((b) => (
                <span
                  key={b}
                  className="h-10 min-w-[130px] grid place-items-center rounded-lg border border-[#d3d9e8] bg-[#f6f7fb] font-outfit text-[11px] font-semibold text-[#6b7590]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* platform / company nav */}
          <div className="lg:col-span-1">
            <h4 className="text-[#0e1a3c] text-lg font-semibold font-outfit mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.id}>
                  {isHomePage ? (
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo(item.id);
                      }}
                      className={linkCls}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link to={`/#${item.id}`} className={linkCls}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link to="/demo" className={linkCls}>
                  Book a demo
                </Link>
              </li>
            </ul>
          </div>

          {/* legal */}
          <div className="lg:col-span-1">
            <h4 className="text-[#0e1a3c] text-lg font-semibold font-outfit mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/contact" className={linkCls}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className={linkCls}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className={linkCls}>
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-1">
            <h4 className="text-[#0e1a3c] text-lg font-semibold font-outfit mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#6b7590] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919983444740" className={linkCls}>
                  +91 9983444740
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#6b7590] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:koshpal@koshpal.com" className={linkCls}>
                  koshpal@koshpal.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#6b7590] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a href="https://www.linkedin.com/company/koshpal/" target="_blank" rel="noopener noreferrer" className={linkCls}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e3e7f1] mb-6" />

        <div className="flex justify-center">
          <p
            style={{
              color: "#6b7590",
              fontSize: "15px",
              letterSpacing: "0.02em",
              lineHeight: "28px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              textAlign: "center",
              maxWidth: "1098px",
            }}
          >
            © 2026 Koshpal. All rights reserved.
            <br />
            Privacy-first employee financial wellness · Privacy Policy · Terms of Service · Responsible Disclosure
          </p>
        </div>
      </div>
    </footer>
  );
}
