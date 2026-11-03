import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      ref={ref}
    >
      {/* Left side: Scrolling text sections */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="space-y-4"
              >
                <div className="inline-block bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-jakarta mb-4">
                  {item.badge}
                </div>
                <h2 className="font-outfit text-white text-2xl md:text-3xl font-bold leading-tight">
                  {item.title}
                </h2>
                <p className="font-jakarta text-white/85 text-base mt-4 max-w-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right side: Sticky card that changes */}
      <div
        className={`sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block ${contentClassName || ''}`}
      >
        <img
          src={content[activeCard].image}
          alt={content[activeCard].title}
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};
