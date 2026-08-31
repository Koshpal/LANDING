import React from 'react';

export default function KnowYourMoney() {
  return (
    <section className="py-4 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Hero Banner Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/assets/Screen.png"
            alt="Know Your Money, Grow Your Money"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
