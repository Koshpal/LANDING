// frontend/src/components/CoachesStats.jsx
import React from "react";

export default function CoachesStats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Heading + Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Large heading + paragraph */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Our certified advisors deliver
              <br />
              practical, <span className="text-slate-600">India-specific</span> coaching
              <br />
              - so your people act with confidence, not guesswork.
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Unlock invaluable wisdom personalised for your people in our top-notch
              podcast and coaching experiences - bite-sized insights and actionable
              guidance that employees actually follow.
            </p>
          </div>

          {/* Right: Illustration / composed image */}
          <div className="flex justify-end">
            <div className="relative w-[320px] sm:w-[380px] md:w-[420px]">
              {/* decorative pill shapes */}
              <div className="absolute -left-6 -top-6 w-20 h-32 rounded-[40px] bg-emerald-500/90" />
              <div className="absolute -right-6 top-6 w-16 h-28 rounded-[32px] bg-yellow-400/90" />

              {/* main portrait (use a PNG/SVG with transparent background or regular img) */}
              <div className="relative rounded-[36px] overflow-visible">
                

                {/* small floating label */}
                <div className="absolute left-4 bottom-8 transform -translate-y-2 bg-orange-400 text-white px-3 py-1 rounded-full text-sm shadow">
                  InsightPod
                </div>

                {/* decorative headphone (optional) */}
                <img
                  src="/assets/UI Element.png"
                  alt="UI Element"
                  className="absolute -right-8 -bottom-6 w-50 h-50 object-contain z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* stats columns (spans 9/12 on large screens) */}
          <div className="lg:col-span-9 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl sm:text-6xl font-extrabold text-teal-500">10+</div>
              <div className="mt-2 text-sm text-slate-600">qualified coaches onboard</div>
            </div>

            <div>
              <div className="text-5xl sm:text-6xl font-extrabold text-teal-500">12+</div>
              <div className="mt-2 text-sm text-slate-600">industries consulted</div>
            </div>

            <div>
              <div className="text-5xl sm:text-6xl font-extrabold text-teal-500">236</div>
              <div className="mt-2 text-sm text-slate-600">coaching hours delivered in pilot phase</div>
            </div>
          </div>

          {/* descriptive text (spans 3/12 on large screens) */}
          <div className="lg:col-span-3">
            <div className="text-slate-800 text-base">
              Unlock invaluable wisdom personalized for you in our top-notch podcast.
              Dive into episodes designed to deliver relevant insights that cater to your
              interests and needs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
