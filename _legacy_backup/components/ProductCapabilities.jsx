import React from "react";
import { motion } from "framer-motion";

const featuresContent = [
  {
    badge: "Set it and Own it",
    title: "We track your money so you don't have to",
    description:
      "Automatic UPI & SMS categorisation eliminates manual spreadsheets.",
    image: "/assets/feature-left1.png",
  },
  {
    badge: "Your money, Your rules",
    title: "Track what matters, ignore what doesn't.",
    description:
      "Dashboards surface the 10% of expenses that drive 90% of leaks.",
    image: "/assets/feature-center1.png",
  },
  {
    badge: "Your personalized money tracker",
    title: "Koshpal learns your habits and adjusts in real-time.",
    description:
      "Personalized nudges help teams stay on-budget without micro-management.",
    image: "/assets/feature-right1.png",
  },
];

export default function ProductCapabilities() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 lg:px-[120px] py-16 md:py-20 lg:py-[90px]"
      style={{
        background: "linear-gradient(180deg, #334eac, #fafafa)",
        gap: "96px",
      }}
    >
      {/* Top Heading Section */}
      <div
        className="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center"
        style={{ gap: "24px" }}
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-2 rounded-[20px] text-[#334eac] font-outfit font-medium shadow-sm border border-[#eff6ff]"
          style={{
            backgroundColor: "#eff6ff",
            fontSize: "18px",
            boxShadow:
              "0px 0px 1px rgba(44, 58, 114, 0.05), 0px 2px 6px rgba(44, 58, 114, 0.05), 0px 10px 18px rgba(58, 76, 146, 0.1)",
          }}
        >
          <span>✨</span>
          <span>How we make your money smarter?</span>
        </div>

        <h1
          className="font-outfit font-semibold leading-tight text-4xl md:text-5xl lg:text-[56px]"
          style={{
            color: "#ffffff",
            lineHeight: "1.3",
          }}
        >
          We turn your spending into smarter financial decisions
        </h1>

        <p
          className="font-outfit font-semibold text-base md:text-xl max-w-2xl"
          style={{
            color: "#d4e0f5",
            fontSize: "20px",
            lineHeight: "28px",
          }}
        >
          Koshpal helps you track, budget, and manage your money with real-time
          insights and a privacy-first approach
        </p>
      </div>

      {/* Alternating Features Section */}
      <div
        className="w-full max-w-[1200px] flex flex-col"
        style={{ gap: "48px" }}
      >
        {featuresContent.map((feature, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 items-center ${
              index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
            }`}
            style={{ gap: "32px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Text Content */}
            <div
              className={`flex flex-col items-start ${
                index % 2 !== 0 ? "lg:col-start-2" : ""
              }`}
              style={{ gap: "18px" }}
            >
              <div className="inline-flex items-center justify-center px-6 py-3 rounded-[16.8px] relative overflow-hidden">
                <div
                  className="absolute inset-0 rounded-[37px] bg-[#1e1e1e] opacity-[0.08]"
                  style={{ backdropFilter: "blur(4.5px)" }}
                />
                <span
                  className="relative z-10 font-outfit font-medium text-[#081f5c]"
                  style={{ fontSize: "24px" }}
                >
                  {feature.badge}
                </span>
              </div>
              <div
                className="flex flex-col items-start"
                style={{ gap: "16px" }}
              >
                <h2
                  className="font-outfit font-medium leading-snug text-3xl md:text-4xl lg:text-[48px]"
                  style={{
                    color: "#000",
                  }}
                >
                  {feature.title}
                </h2>
                <p
                  className="font-outfit font-medium leading-relaxed"
                  style={{
                    fontSize: "20px",
                    color: "#2b2b2b",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-2xl  w-full lg:max-w-[85%] h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
