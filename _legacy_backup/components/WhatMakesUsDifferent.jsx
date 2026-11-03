import React from "react";

export default function WhatMakesUsDifferent() {
  const differentiators = [
    {
      title: "Privacy-First Technology",
      description:
        "Your financial data stays yours. We use SMS parsing instead of bank login credentials.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Real-time Insights",
      description:
        "Auto-capture UPI transaction SMS so you never miss a payment log.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Expert Guidance",
      description: "Human coaching plus smart tools in one subscription.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "ROI Tracking",
      description: "Employer dashboard proves ROI on productivity & retention.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[1.2] lg:leading-[72px] font-semibold">
            <span className="bg-gradient-to-r from-[#101828] to-[#3A558E] bg-clip-text text-transparent">
              What Makes Us{" "}
            </span>
            <span className="bg-gradient-to-r from-[#334EAC] to-[#17A2B8] bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="font-jakarta text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold text-[#4A5565] mt-4 max-w-2xl mx-auto">
            We combine cutting-edge technology with human expertise to deliver
            financial wellness that works
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div
                className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center ${item.iconColor} mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
