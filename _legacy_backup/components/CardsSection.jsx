import React from "react";

export default function CardsSection() {
  return (
    <section
      className="py-20 px-6 md:px-12"
      style={{ background: "linear-gradient(180deg, #fff 0%, #334EAC 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-bold text-black-light mb-6">
            Build your <span className="text-primary">Financial</span> clarity
          </h1>
          <p className="font-jakarta text-grey-dark text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Simplify how you track, plan, and manage your money, all-in-one app.
            <br />
            Your money deserves better control. Let's start today.
          </p>
        </div>

        {/* Cards Grid - All 5 cards in one grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {/* Card 1: Track your finances (Pink) - Top Left */}
          <div className="bg-pink-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col gap-3.5">
            <div className="w-16 h-16 bg-red-400 rounded-[20px] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-2xl font-medium text-black">
              Track your finances
            </h3>
            <p className="font-jakarta text-[#141414] text-lg leading-relaxed">
              We auto-capture UPI transaction SMS so you never miss a payment
              log. Just tag the category, no typing needed.
            </p>
          </div>

          {/* Card 2: iOS & Android App (Teal with Phone) - Center, spans 2 rows */}
          <div className="md:row-span-2 rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <img
              src="/assets/Frame 2147207729.png"
              alt="iOS & Android App - Track, budget, and understand your money"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3: Smart Budgeting (Yellow) - Top Right */}
          <div
            className="rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col gap-3.5"
            style={{ backgroundColor: "#fedfb9" }}
          >
            <div className="w-16 h-16 rounded-[20px] bg-orange-400 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-2xl font-medium text-black">
              Smart Budgeting
            </h3>
            <p className="font-jakarta text-[#141414] text-lg leading-relaxed">
              Set budgets easily and track spending in real time as Koshpal
              updates your limits automatically, helping you stay financially
              disciplined every day.
            </p>
          </div>

          {/* Card 4: Visual insights (Cream/Beige) - Bottom Left */}
          <div
            className="rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col gap-3.5"
            style={{ backgroundColor: "#E8EBCC" }}
          >
            <div
              className="w-16 h-16 rounded-[20px] flex items-center justify-center"
              style={{ backgroundColor: "#9DB0A0" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  d="M3 3v18h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 16v-4M12 16v-8M17 16v-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-2xl font-medium text-black">
              Visual insights
            </h3>
            <p className="font-jakarta text-[#141414] text-lg leading-relaxed">
              See your money, clearly. We turn your spending into beautiful
              charts and smart summaries
            </p>
          </div>

          {/* Card 5: Real-time updates (Purple) - Bottom Right */}
          <div className="bg-indigo-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col gap-3.5">
            <div className="w-16 h-16 bg-indigo-500 rounded-[20px] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-2xl font-medium text-black">
              Real-time updates
            </h3>
            <p className="font-jakarta text-[#141414] text-lg leading-relaxed">
              Stay on track, instantly. Koshpal notifies you in real time, so
              your goals stay intact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
