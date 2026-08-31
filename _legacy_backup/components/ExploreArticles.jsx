import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExploreArticles() {
  const scrollRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const articles = [
    {
      id: 1,
      tags: ["Budgeting", "Finance", "Planning"],
      title: "How to Budget",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      url: "https://www.nerdwallet.com/article/finance/how-to-budget",
    },
    {
      id: 2,
      tags: ["Anxiety", "Wellness", "India"],
      title: "Indian Financial Anxiety and Its Stress",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      url: "https://timesofindia.indiatimes.com/readersblog/finance-excel/indian-financial-anxiety-and-its-stress-53203/",
    },
    {
      id: 3,
      tags: ["Consumer", "Confidence", "Economy"],
      title: "How Financial Stress Impacts Consumer Confidence",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      url: "https://www.ideasforindia.in/topics/money-finance/how-financial-stress-impacts-consumer-confidence.html",
    },
    {
      id: 4,
      tags: ["Budgeting", "Strategy", "Tips"],
      title: "Popular Budgeting Strategies",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      url: "https://srfs.upenn.edu/financial-wellness/browse-topics/budgeting/popular-budgeting-strategies",
    },
    {
      id: 5,
      tags: ["Technology", "Apps", "Trends"],
      title: "6 Emerging Trends in the Personal Finance App Market",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      url: "https://interexy.com/6-emerging-trends-in-the-personal-finance-app-market",
    },
    {
      id: 6,
      tags: ["Apps", "Anxiety", "Solutions"],
      title: "Financial Anxiety Spurs Demand for Consumer Budgeting Apps",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      url: "https://www.pymnts.com/personal-finance/2025/financial-anxiety-spurs-demand-for-consumer-budgeting-apps/",
    },
  ];

  const displayedArticles = showAll ? articles : articles.slice(0, 3);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full relative bg-[#FAFAFA] flex flex-col items-center py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 gap-8 sm:gap-10 md:gap-12 text-center font-outfit">
      {/* Header Container */}
      <div className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5">
        {/* Small Eyebrow Tag */}
        <div className="shadow-[0px_0px_1px_rgba(44,58,114,0.05),0px_2px_6px_rgba(44,58,114,0.05),0px_10px_18px_rgba(58,76,146,0.1)] rounded-[20px] bg-[#EFF6FF] border border-[#EFF6FF] flex items-center py-2 px-3 gap-2 hover:shadow-lg transition-shadow duration-300">
          {/* Icon placeholder - you can add your icon here */}
          <div className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 relative">
            <svg
              className="w-full h-full text-[#334EAC]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="relative font-medium text-sm sm:text-base md:text-[18px] text-[#334EAC]">
            Insights & Tips
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight sm:leading-tight md:leading-[50px] lg:leading-[60px] xl:leading-[72px] font-semibold px-2 sm:px-4">
          <span className="bg-gradient-to-r from-[#101828] to-[#3A558E] bg-clip-text text-transparent">
            Explore Smart Finance{" "}
          </span>
          <span className="bg-gradient-to-r from-[#334EAC] to-[#17A2B8] bg-clip-text text-transparent">
            Articles
          </span>
        </h2>

        {/* Subtitle */}
        <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <p className="w-full max-w-[616px] relative text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed sm:leading-relaxed md:leading-[26px] lg:leading-[28px] font-semibold text-[#4A5565] font-jakarta">
            Discover practical tips and easy guides to make your money work
            smarter every day.
          </p>
        </div>
      </div>

      {/* Articles Grid Container */}
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-8 sm:gap-10 md:gap-12 text-xs text-[#334EAC]">
        {/* Articles Grid/Carousel - Horizontal scroll on mobile, grid on larger screens */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto sm:overflow-visible scrollbar-hide snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-6 lg:gap-[14px] sm:place-items-center"
        >
          <div className="flex sm:contents gap-4 pb-4 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0">
            <AnimatePresence mode="sync">
              {displayedArticles.map((article) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[85vw] sm:w-full sm:flex-shrink max-w-[380px] sm:h-full snap-center shadow-[0.8px_1.2px_38px_rgba(0,0,0,0.15)] rounded-[20px] md:rounded-[24px] bg-[#EFF1F8] flex flex-col items-start p-4 sm:p-5 md:p-6 lg:p-8 gap-3 sm:gap-4 hover:shadow-[0px_8px_50px_rgba(51,78,172,0.25)] sm:hover:scale-[1.02] sm:hover:-translate-y-1 sm:hover:z-10 transition-all duration-300 ease-out cursor-pointer group relative"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  layout
                >
                  {/* Article Image */}
                  <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] relative rounded-[20px] md:rounded-[24px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Tags Container */}
                  <div className="w-full flex items-start justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 min-h-[2.5rem] sm:min-h-[3rem]">
                    {article.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="rounded-[100px] border border-[#334EAC] flex items-center justify-center py-1 sm:py-1.5 md:py-2 px-2.5 sm:px-3 md:px-4"
                      >
                        <span className="relative text-[10px] sm:text-xs md:text-[12px] text-center">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Article Title */}
                  <h3 className="w-full relative text-lg sm:text-xl md:text-[22px] lg:text-[24px] leading-snug text-[#000] text-center font-normal group-hover:text-[#334EAC] transition-colors duration-300 min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] flex items-center justify-center">
                    {article.title}
                  </h3>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows - Only show on mobile where carousel exists */}
        <div className="flex sm:hidden justify-center items-center gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full bg-white text-[#334EAC] flex items-center justify-center hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl active:scale-95 border border-gray-200"
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
            className="w-12 h-12 rounded-full bg-white text-[#334EAC] flex items-center justify-center hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl active:scale-95 border border-gray-200"
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

        {/* Explore More Button */}
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="shadow-[0px_0px_8px_rgba(51,78,172,0.3)] rounded-[100px] bg-[#334EAC] border-2 border-[#334EAC] flex items-center justify-center py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl lg:text-[24px] text-[#FFFFFF] font-medium active:scale-95 transition-all duration-300"
          whileTap={{ scale: 0.95 }}
          layout
        >
          <motion.span
            key={showAll ? "less" : "more"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {showAll ? "Show Less" : "Explore more"}
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
