import React from "react";
import { motion } from "framer-motion";

export default function FinancialWellness() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[450px]">
              <motion.img
                src="/0420da8ab5c8cb08a88371beeeec5ac5 1.png"
                alt="Professional woman representing financial wellness"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2"
          >
            {/* Small heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-outfit text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide"
            >
              Complete Financial Wellness
            </motion.h3>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-outfit text-gray-900 text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-medium leading-tight tracking-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Empower your people to tackle every money challenge and thrive, financially and professionally.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-outfit text-gray-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl"
            >
              Personalized support and tiny daily habits that improve wellbeing and focus.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
