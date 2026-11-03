import React, { useState, useEffect, useRef } from "react";

// Counter component with animation
const AnimatedCounter = ({ end, duration = 1200, suffix = "", className, style }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const endValue = parseInt(end);

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * endValue);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className={className} style={style}>
      {count}{suffix}
    </div>
  );
};

export default function TrustStats() {
  return (
    <section className="w-full bg-gradient-to-b from-[#5484D6] from-20% to-[#334EAC] flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 gap-8 md:gap-10 lg:gap-12 text-center">
      {/* Intro paragraph */}
      <div className="w-full max-w-[1200px] text-base sm:text-lg md:text-xl leading-[140%] font-semibold font-jakarta text-white px-2" style={{ color: '#ffffff' }}>
        Help employees take better control of their personal finances with tailored guidance and advice.
        Adding Financial Coaching to your  can go a long way toward building a more confident, productive team.
      </div>

      {/* Main container: Video + Stats */}
      <div className="w-full max-w-[1203px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-5 text-left">
        {/* Left: Video */}
        <div className="w-full lg:w-[827px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[514px] rounded-3xl overflow-hidden">
          <video
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right: Stats column */}
        <div className="w-full lg:w-[301px] flex flex-col items-start gap-4 lg:gap-[13px]">
          {/* Stat 1 */}
          <div className="w-full flex flex-col items-center gap-2">
            <AnimatedCounter
              end="11"
              suffix="+"
              duration={1200}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[94px] leading-[110%] font-extrabold text-white font-outfit"
              style={{ color: '#ffffff' }}
            />
            <div style={{ color: '#ffffff' }} className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-[160%] font-semibold font-jakarta text-white">
              qualified coaches onboard
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"></div>

          {/* Stat 2 */}
          <div className="w-full flex flex-col items-center gap-2">
            <AnimatedCounter
              end="3"
              suffix="+"
              duration={1200}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[94px] leading-[110%] font-extrabold text-white font-outfit"
              style={{ color: '#ffffff' }}
            />
            <div style={{ color: '#ffffff' }} className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-[160%] font-semibold font-jakarta text-white text-center">
              industries consulted
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"></div>

          {/* Stat 3 */}
          <div className="w-full flex flex-col items-center gap-2">
            <AnimatedCounter
              end="150"
              suffix="+"
              duration={1500}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[94px] leading-[110%] font-extrabold text-white font-outfit"
              style={{ color: '#ffffff' }}
            />
            <div style={{ color: '#ffffff' }} className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-[160%] font-semibold font-jakarta text-white text-center">
              <p className="m-0">coaching hours delivered</p>
              <p className="m-0">in pilot phase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
