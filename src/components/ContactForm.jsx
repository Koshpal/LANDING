import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const gridSize = 60;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create grid particles
    const initParticles = () => {
      particles = [];
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            opacity: 0.2,
            targetOpacity: 0.2,
            offsetX: 0,
            offsetY: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
          });
        }
      }
    };
    initParticles();

    // Animation loop
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

          // Heavy fade out effect
          particle.targetOpacity = Math.max(0, 0.25 * (distance / maxDistance));

          // Heavy pixelated/distortion effect
          const distortionStrength = intensity * 45;
          particle.targetOffsetX = (Math.random() - 0.5) * distortionStrength;
          particle.targetOffsetY = (Math.random() - 0.5) * distortionStrength;
        } else {
          particle.targetOpacity = 0.25;
          particle.targetOffsetX = 0;
          particle.targetOffsetY = 0;
        }

        // Slower, smoother transition
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.08;
        particle.offsetX += (particle.targetOffsetX - particle.offsetX) * 0.12;
        particle.offsetY += (particle.targetOffsetY - particle.offsetY) * 0.12;

        // Calculate actual position with offset
        const drawX = particle.baseX + particle.offsetX;
        const drawY = particle.baseY + particle.offsetY;

        // Draw grid lines
        const lineOpacity = particle.opacity;
        ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
        ctx.lineWidth = 1.5;

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX + gridSize, drawY);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX, drawY + gridSize);
        ctx.stroke();

        // Add extra visual effect - draw small dots at intersections
        if (distance < maxDistance) {
          const dotSize = (1 - distance / maxDistance) * 3;
          ctx.fillStyle = `rgba(255, 255, 255, ${lineOpacity * 1.5})`;
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
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-b from-[#5484D6] to-[#334EAC] px-4 py-8"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="mx-auto lg:mx-[81px] flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10">
        {/* left */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-outfit font-bold text-[#fff]">
            Explore endless possibilities with Koshpal
          </h1>
          <p className="text-lg font-jakarta font-normal text-[#fff] mt-4 mb-4">
            Explore what money clarity feels like with Koshpal. Manage bills,
            track shared expenses, and grow smarter with tailored insights and
            advisory tools - built just for you.
          </p>
          <Link
            to="/demo"
            className="bg-[#334EAC] text-white px-4 py-2 font-outfit mt-4 rounded-full hover:bg-[#5B7FDB] transition-all duration-300 ease-in-out border-2 border-[#fff]"
            style={{ color: "#fff", marginTop: "1rem" }}
          >
            Request a Demo
          </Link>
        </div>
        {/* right */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-end justify-end">
          <img
            src="phone20.png"
            alt=""
            className="w-full h-auto object-contain"
            style={{ marginBottom: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}
