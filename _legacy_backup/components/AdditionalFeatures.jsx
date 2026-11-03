import React from "react";

/*
  AdditionalFeatures component
  - Layout: 3 stacked sections (top heading/hero, center cards + text, bottom split)
  - Uses Tailwind utility classes. Minimal inline styles for a couple of decorative items.
  - Replace asset paths in /public/assets/ with your images (see list below).
*/

function FloatingCard({ children, className = "", style = {} }) {
  return (
    <div
      className={
        "bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 text-sm text-slate-800 " +
        className
      }
      style={style}
    >
      {children}
    </div>
  );
}

export default function AdditionalFeatures() {
  return (
    <section className="relative">
      {/* Top big headline + central graph */}
      <div className="hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left copy */}
            <div className="space-y-6">
              <div className="inline-block bg-light-blue/10 text-black/90 rounded-full px-4 py-1 text-sm">
                How to make your money smarter
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                We turn your spending into smarter financial decisions.
              </h2>

              <p className="mt-4 max-w-xl text-lg text-white/80">
                Koshpal helps you track, budget, and grow your money with real-time insights and a privacy-first approach.
              </p>
            </div>

            {/* Right illustration + graph card */}
            <div className="relative flex justify-center md:justify-end">
              {/* decorative faint icon background (uses CSS background-image) */}
              <div className="w-full max-w-xs md:max-w-sm relative">
                {/* main graph floating card */}
                <div className="absolute -right-6 -top-6">
                  <FloatingCard style={{ width: 300 }}>
                    <img src="/assets/Div [framer-8m8guz].png" alt="graph" className="w-full h-auto" />
                  </FloatingCard>
                </div>

                {/* faint vector background (pure CSS) */}
                <div className="pointer-events-none w-full h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src="/assets/Div [framer-11vr34j].png" alt="feature image" />

            {/* Right text (headline + paragraph) */}
            <div className="pt-4">
              <div className="inline-block bg-slate-200 text-slate-700 rounded-full px-3 py-1 text-sm">
                Your money, Your rules
              </div>

              <h3 className="mt-6 text-3xl font-extrabold text-slate-900">
                Track what matters, ignore what doesn't.
              </h3>

              <p className="mt-4 text-slate-600 max-w-xl">
                Dashboards surface the 10% of expenses that drive 90% of leaks - so teams can act on what matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom split: left headline + right mini UI images */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* left text */}
            <div>
              <div className="inline-block bg-slate-200 text-slate-700 rounded-full px-3 py-1 text-sm">
                Your personalized money tracker
              </div>

              <h4 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900">
                Koshpal learns your habits and adjusts in real time.
              </h4>

              <p className="mt-4 text-slate-600">
                Personalized nudges help teams stay on-budget without micro-management.
              </p>
            </div>

            {/* right UI composition */}
            <div className="flex justify-end">
              <div className="w-full max-w-md relative">
                

                

                <div className="relative pt-8">
                  <img src="/assets/Div [framer-13lcudn].png" alt="mini ui" className="w-full rounded-xl shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
}
