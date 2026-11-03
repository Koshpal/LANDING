import React from "react";

export default function BuildFinancialClarity() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-outfit text-2xl md:text-3xl font-medium text-white leading-tight mb-6">
              Build Financial Clarity in Just 5 Minutes a Day
            </h2>
            <p className="font-jakarta text-[#FFFFFF] text-lg leading-relaxed mb-8">
              Our bite-sized insights and smart automation help you stay on top
              of your finances without the overwhelm. Track, learn, and grow -
              all in the time it takes to have your morning coffee.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Automated expense tracking via SMS",
                "Daily financial tips and insights",
                "Weekly progress reports",
                "Goal tracking made simple",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-jakarta text-[#FFFFFF] text-lg leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Start Your Free Trial
            </button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">
                      Daily Expenses
                    </span>
                    <span className="text-2xl font-bold">₹2,450</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <div className="bg-white/20 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">Savings Goal</span>
                    <span className="text-2xl font-bold">82%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "82%" }}
                    />
                  </div>
                </div>

                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-center">
                    <p className="text-sm mb-2">Next Coaching Session</p>
                    <p className="text-3xl font-bold">3 Days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
