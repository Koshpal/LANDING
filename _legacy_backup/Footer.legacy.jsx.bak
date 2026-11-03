import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const smoothScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gridSize = 60;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

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
            targetOffsetY: 0
          });
        }
      }
    };
    initParticles();

    // Animation loop
    let animFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
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
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animFrameId);
    };
  }, [mousePos]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <footer
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16"
      style={{
        // smooth transition from light to mid-blue to dark-blue
        background: 'linear-gradient(180deg, #fafafa 0%, #334EAC 60%, #081F5C 100%)',
      }}
    >
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
        <div 
          className="relative bg-gradient-to-b to-[#334EAC] from-[#32437D] rounded-3xl sm:rounded-[32px] px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Interactive Grid Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <h2 style={{ 'color': "#fff" }} className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-outfit text-center lg:text-left">
              Ready to work with us
            </h2>

            <div className="flex justify-center lg:justify-end">
              <Link to="/demo"
                className='bg-[#334EAC] text-lg px-4 py-2 font-outfit mt-4 rounded-full hover:bg-[#5B7FDB] transition-all duration-300 ease-in-out border-2 border-[#fff]'
                style={{ color: "#fff" }}
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12">
          {/* Brand Section (40%) */}
          <div className="lg:col-span-2 w-full">
            <div className="flex items-center gap-2 mb-4">
              <img
              src="/assets/logo-removebg.png"
              alt="Koshpal"
              className="h-[36px] sm:h-[42px] md:h-[50px] w-auto "
            />
              <h3 style={{'color':'#fff'}} className="text-white text-2xl font-bold font-outfit">Koshpal</h3>
            </div>
            <p style={{'color':'#fff'}} className="text-white/90 text-sm font-jakarta leading-relaxed">
              Koshpal provides an all-in-one financial management platform designed for businesses. From real-time expense tracking and automated budgeting to analytics and seamless integrations, we equip teams with the tools and insights they need to manage finances efficiently and scale with confidence.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 style={{'color':'#fff'}} className="text-white text-lg font-semibold font-outfit mb-4">Navigation</h4>
            <ul  style={{'color':'#fff'}} className="space-y-2.5">
              {[
                { label: 'About', id: 'about' },
                { label: 'What we do', id: 'what-we-do' },
                { label: 'Finance experts', id: 'finance-experts' },
                { label: 'How we work', id: 'how-it-works' },
                { label: 'Contact us', id: 'contact', isPage: true },
              ].map((item) => (
                <li style={{'color':'#fff'}} key={item.label}>
                  {item.isPage ? (
                    <Link to="/contact" className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">
                      Contact us
                    </Link>
                  ) : isHomePage ? (
                    <a style={{'color':'#fff'}} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); smoothScrollTo(item.id); }} className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={`/#${item.id}`} className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Licence */}
          <div className="lg:col-span-1">
            <h4 style={{'color':'#fff'}} className="text-white text-lg font-semibold font-outfit mb-4">Licence</h4>
            <ul style={{'color':'#fff'}} className="space-y-2.5">
              <li>
                <Link to="/privacy-policy" className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">
                  Terms of services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 style={{'color':'#fff'}} className="text-white text-lg font-semibold font-outfit mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <svg style={{'color':'#fff'}}className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919983444740" style={{'color':'#fff'}} className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">+91 9983444740</a>
              </li>
              <li className="flex items-center gap-2">
                <svg style={{'color':'#fff'}} className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:koshpal@koshpal.com" style={{'color':'#fff'}} className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">koshpal@koshpal.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg style={{'color':'#fff'}} className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a href="https://www.linkedin.com/company/koshpal/" target="_blank" rel="noopener noreferrer" style={{'color':'#fff'}} className="text-white/90 text-sm font-jakarta hover:text-white hover:underline transition-all duration-200">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* Copyright */}
        <div className="flex justify-center">
          <p 
            style={{
              color: '#fff',
              fontSize: '16px',
              letterSpacing: '0.02em',
              lineHeight: '30px',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
              display: 'inline-block',
              maxWidth: '1098px'
            }}
          >
            © 2026 Koshpal. All rights reserved.<br/> Cookie Settings · Anti-Spam · Privacy Policy · User Agreement · Legal Notice · Responsible Disclosure
          </p>
        </div>
      </div>
    </footer>
  );
}
