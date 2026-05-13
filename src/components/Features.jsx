import React from "react";

const features = [
  {
    title: "Privacy-First Approach",
    desc: "No bank-login required - privacy preserved by SMS parsing",
    iconBg: "bg-blue-100",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="text-blue-600"
      >
        <path
          d="M12 2l4 4v6a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6l4-4z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Real-time Insights",
    desc: "Auto-capture UPI transaction SMS so you never miss a payment log",
    iconBg: "bg-green-100",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="text-green-600"
      >
        <path
          d="M3 12h3l3 8 4-16 3 8h4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Expert Guidance",
    desc: "Human coaching plus smart tools in one subscription",
    iconBg: "bg-purple-100",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="text-purple-600"
      >
        <path
          d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM2 22c0-3.5 4-6 10-6s10 2.5 10 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "ROI Tracking",
    desc: "Employer dashboard proves ROI on productivity & retention",
    iconBg: "bg-orange-100",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="text-orange-600"
      >
        <path
          d="M3 17h18M6 12l4 4 8-8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          What Makes Us Different?
        </h2>
        <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
          We turn your spending into smarter financial decisions with
          privacy-first technology and expert human guidance.
        </p>

        {/* feature cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-transform duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-md flex items-center justify-center ${f.iconBg}`}
                >
                  {f.icon}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* split image block */}
        <div className="mt-12">
          <div className="rounded-[18px] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 shadow-lg">
            <div className="bg-[color:var(--left-bg,#e9f3ea)]">
              <img
                src="/assets/feature-left.jpg"
                alt="left"
                className="w-full h-full object-cover block"
                style={{ minHeight: 320 }}
              />
            </div>
            <div className="bg-[color:var(--right-bg,#e8f0fb)]">
              <img
                src="/assets/feature-right.jpg"
                alt="right"
                className="w-full h-full object-cover block"
                style={{ minHeight: 320 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
