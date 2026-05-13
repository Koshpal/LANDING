import React, { useEffect, useRef, useState } from "react";

// Helper component for the decorative background shapes
const CardShape = ({ shape, position, size, color, opacity }) => {
  const shapes = {
    circle: (
      <div
        className={`absolute ${position} ${size} ${color} ${opacity} rounded-full`}
      />
    ),
    sparkle: (
      <svg
        className={`absolute ${position} ${size} ${color} ${opacity}`}
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44 0L49.5113 38.4887L88 44L49.5113 49.5113L44 88L38.4887 49.5113L0 44L38.4887 38.4887L44 0Z"
          fill="currentColor"
        />
      </svg>
    ),
    wave: (
      <svg
        className={`absolute ${position} ${size} ${color} ${opacity}`}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50V100H0V50Z"
          fill="currentColor"
        />
      </svg>
    ),
    bar: (
      <div
        className={`absolute ${position} ${size} ${color} ${opacity} rounded-full`}
      />
    ),
  };
  return shapes[shape] || null;
};

export default function TrustedExperts() {
  const scrollRef = useRef(null);
  const [flippedCards, setFlippedCards] = useState({});
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if it's a touch device
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const experts = [
    {
      name: "CA Prajvi Nahata",
      title: "Ex–EY | Proprietor | 4 yrs",
      image: "/ex1.png",
      bgColor: "bg-[#FDEBEA]",
      badgeColor: "bg-[#F27A7A]",
      textColor: "text-[#D95B5B]",
      experience: "4 years",
      specialization: "Personal & Corporate Financial Planning",
      bio: "Expert in personal and corporate financial planning, helping clients track, save, and allocate money effectively.",
      shapes: [
        {
          shape: "circle",
          position: "bottom-0 right-0",
          size: "w-24 h-24",
          color: "bg-[#F27A7A]",
          opacity: "opacity-50",
        },
        {
          shape: "sparkle",
          position: "top-1/3 left-4",
          size: "w-8 h-8",
          color: "text-[#F27A7A]",
          opacity: "opacity-70",
        },
      ],
    },
    {
      name: "CA Pranat Jayaswal",
      title: "Ex–EY | Grant Thornton | 4 yrs",
      image: "/ex2.png",
      bgColor: "bg-[#EAF6F0]",
      badgeColor: "bg-[#6CC19A]",
      textColor: "text-[#4A9D7C]",
      experience: "4 years",
      specialization: "Budgeting & Long-term Money Management",
      bio: "Guides clients with clear, actionable financial advice, focusing on smarter budgeting and long-term money management.",
      shapes: [
        {
          shape: "wave",
          position: "bottom-0 left-0",
          size: "w-32 h-16",
          color: "text-[#6CC19A]",
          opacity: "opacity-40",
        },
        {
          shape: "sparkle",
          position: "top-1/2 right-4",
          size: "w-6 h-6",
          color: "text-[#6CC19A]",
          opacity: "opacity-80",
        },
      ],
    },
    {
      name: "CA Abhineet Modh",
      title: "BDO | Assistant Manager | 4 yrs",
      image: "/ex3.png",
      bgColor: "bg-[#FFF3E5]",
      badgeColor: "bg-[#F5A623]",
      textColor: "text-[#D98200]",
      experience: "4 years",
      specialization: "Financial Planning & Budgeting Strategies",
      bio: "Specializes in financial planning and budgeting strategies to help individuals and businesses manage money efficiently.",
      shapes: [
        {
          shape: "circle",
          position: "bottom-4 -right-8",
          size: "w-32 h-32",
          color: "bg-[#F5A623]",
          opacity: "opacity-40",
        },
        {
          shape: "circle",
          position: "top-1/4 left-0",
          size: "w-20 h-20",
          color: "bg-[#F5A623]",
          opacity: "opacity-30",
        },
      ],
    },
    {
      name: "CA Pankaj Jhajhuka",
      title: "EY | Assistant Manager | 4 yrs",
      image: "/ex4.png",
      bgColor: "bg-[#E9EFFF]",
      badgeColor: "bg-[#4A72FF]",
      textColor: "text-[#3B5AD9]",
      experience: "4 years",
      specialization: "Financial Structure & Budget Optimization",
      bio: "Helps structure finances and optimize budgets for both individuals and businesses, ensuring sustainable financial growth.",
      shapes: [
        {
          shape: "bar",
          position: "bottom-1/4 right-4",
          size: "w-8 h-16",
          color: "bg-[#4A72FF]",
          opacity: "opacity-30",
        },
        {
          shape: "bar",
          position: "top-1/3 left-4",
          size: "w-8 h-24",
          color: "bg-[#4A72FF]",
          opacity: "opacity-20",
        },
      ],
    },
  ];

  const toggleFlip = (expertName) => {
    setFlippedCards((prev) => ({
      ...prev,
      [expertName]: !prev[expertName],
    }));
  };

  const handleMouseEnter = (expertName) => {
    if (!isTouchDevice) {
      setFlippedCards((prev) => ({
        ...prev,
        [expertName]: true,
      }));
    }
  };

  const handleMouseLeave = (expertName) => {
    if (!isTouchDevice) {
      setFlippedCards((prev) => ({
        ...prev,
        [expertName]: false,
      }));
    }
  };

  const handleClick = (expertName) => {
    if (isTouchDevice) {
      toggleFlip(expertName);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted Finance Experts
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
            Meet Koshpal's Certified Advisors. Your Partners in Financial
            Wellness
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory lg:flex-wrap lg:justify-center gap-6 md:gap-8 pb-4 lg:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0"
        >
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="flex-shrink-0 w-[80vw] sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-1rem)] lg:w-[240px] h-[480px] sm:h-[450px] lg:h-[500px] snap-center transition-transform duration-300 ease-out lg:hover:scale-105"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => handleMouseEnter(expert.name)}
              onMouseLeave={() => handleMouseLeave(expert.name)}
              onClick={() => handleClick(expert.name)}
            >
              <div
                className={`relative w-full h-full ${
                  isTouchDevice ? "cursor-pointer" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[expert.name]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                  transition: "transform 0.6s ease-in-out",
                  willChange: "transform",
                }}
              >
                {/* Front of Card */}
                <div
                  className={`${expert.bgColor} rounded-3xl text-center flex flex-col overflow-hidden w-full h-full absolute`}
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Decorative Shapes */}
                  {expert.shapes.map((s, i) => (
                    <CardShape key={i} {...s} />
                  ))}

                  {/* Text content positioned absolutely at top */}
                  <div className="absolute top-0 left-0 right-0 z-10 pt-4 sm:pt-5 lg:pt-6 px-4 sm:px-5 lg:px-6">
                    <div className="flex-shrink-0">
                      <h3 className="p-1 font-bold text-lg sm:text-xl lg:text-2xl text-slate-800">
                        {expert.name}
                      </h3>
                      <div
                        className={`mt-2 sm:mt-2.5 lg:mt-3 inline-block ${expert.badgeColor} rounded-full px-3 sm:px-3.5 lg:px-4 py-1`}
                      >
                        <p className="text-xs sm:text-xs lg:text-sm font-semibold text-white">
                          {expert.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image fills the card from bottom */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 z-0 flex items-end justify-center ${
                      expert.image === "/ex1.png"
                        ? "top-[50px] sm:top-[60px] lg:top-[55px]"
                        : "top-[95px] sm:top-[105px] lg:top-[100px]"
                    }`}
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>

                  {/* Hint - only show on touch devices */}
                  {isTouchDevice && (
                    <div className="absolute bottom-4 right-4 z-20 bg-white/80 rounded-full p-2 shadow-md">
                      <svg
                        className="w-5 h-5 text-slate-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Back of Card */}
                <div
                  className={`${expert.bgColor} rounded-3xl p-6 text-center flex flex-col justify-center overflow-hidden w-full h-full absolute`}
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Decorative Shapes */}
                  {expert.shapes.map((s, i) => (
                    <CardShape key={i} {...s} />
                  ))}

                  <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 px-2">
                    <h3 className="font-bold text-2xl text-slate-800">
                      {expert.name}
                    </h3>

                    <div className="space-y-3 text-left w-full">
                      <div>
                        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                          Experience
                        </p>
                        <p className={`text-sm font-bold ${expert.textColor}`}>
                          {expert.experience}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                          Specialization
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
                          {expert.specialization}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                          About
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {expert.bio}
                        </p>
                      </div>
                    </div>

                    {/* Flip back hint - only show on touch devices */}
                    {isTouchDevice && (
                      <div className="absolute bottom-4 right-4 z-20 bg-white/80 rounded-full p-2 shadow-md">
                        <svg
                          className="w-5 h-5 text-slate-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show on mobile/tablet where carousel exists */}
        <div className="flex lg:hidden justify-center items-center gap-4 mt-8">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full bg-white text-[#334EAC] flex items-center justify-center hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 border border-gray-200"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-white text-[#334EAC] flex items-center justify-center hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 border border-gray-200"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
