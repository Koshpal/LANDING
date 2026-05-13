import React from "react";

export default function ExpertsGrid() {
  const advisors = [
    {
      name: "Mark Adam",
      title: "Chartered Accountant",
      img: "/assets/Adam.png", // replace with actual path
      bg: "bg-[#FEEBE5]",
      badgeColor: "bg-[#F25B43]",
    },
    {
      name: "Ms. Smitha",
      title: "Financial Planner",
      img: "/assets/Smitha.png",
      bg: "bg-[#E6F6EC]",
      badgeColor: "bg-[#3DAA72]",
    },
    {
      name: "Dr. Einstein",
      title: "Financial Coach",
      img: "/assets/Einstein.png",
      bg: "bg-[#FFEBC9]",
      badgeColor: "bg-[#F59E0B]",
    },
    {
      name: "Priya Sharma",
      title: "Chartered Accountant",
      img: "/assets/Priya.png",
      bg: "bg-[#E4E7FB]",
      badgeColor: "bg-[#2743A8]",
    },
  ];

  return (
    <section id="experts" className="py-2 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Trusted Finance Experts
        </h2>
        <p className="text-slate-500 mt-2 text-lg">
          Meet Koshpal’s Certified Advisors. Your Partners in Financial Wellness.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {advisors.map((adv, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-end ${adv.bg} rounded-[32px] overflow-hidden shadow-sm transition-transform hover:-translate-y-2`}
            >
              <div className="w-full flex-1 flex items-end justify-center">
                <img
                  src={adv.img}
                  alt={adv.name}
                  className="w-full h-[400px] object-cover object-top"
                />
              </div>
              <div className="p-4 text-center w-full">
                <h3 className="font-semibold text-slate-900 text-lg"></h3>
                <div
                  className={`mt-2 inline-block text-sm text-white ${adv.badgeColor} px-4 py-1 rounded-full`}
                >
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-8 py-3 text-white bg-[#2743A8] hover:bg-[#1e3482] font-semibold rounded-full shadow-md transition" style={{ color: '#FFFFFF' }}>
            View our Advisors
          </button>
        </div>
      </div>
    </section>
  );
}
