import React from "react";

export default function HowKoshpalWorks() {
  return (
    <section className="w-full bg-[#fff] flex flex-col items-center py-12 md:py-16 lg:py-[90px] px-4 sm:px-6 md:px-12 lg:px-[120px] text-center">
      <div className="w-full max-w-[1200px]">
        {/* Top Badge and Heading */}
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Let's Talk Badge */}

          {/* Title */}
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[1.2] lg:leading-[72px] font-semibold px-4">
            <span className="bg-gradient-to-r from-[#101828] to-[#3A558E] bg-clip-text text-transparent">
              How{" "}
            </span>
            <span className="bg-gradient-to-r from-[#334EAC] to-[#17A2B8] bg-clip-text text-transparent">
              Koshpal
            </span>
            <span className="text-[#101828]"> works?</span>
          </h1>

          {/* Description */}
          <div className="flex items-center justify-center px-4 md:px-7">
            <p className="font-jakarta text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold text-[#4A5565] max-w-[1200px]">
              Manage your entire experience - from seamless integration to
              lasting impact - all in one platform.
            </p>
          </div>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col items-start gap-8 md:gap-12 text-left">
          {/* Divider */}
          <div className="w-full h-[1px] bg-black/10" />

          {/* Step 1: Set Up Instantly */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-24 xl:gap-32">
            <div className="w-full lg:w-[576px] flex flex-col items-start gap-4 md:gap-5 lg:gap-6">
              <div className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-black">
                Step 1
              </div>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#334EAC] leading-tight lg:whitespace-nowrap">
                Set Up Instantly
              </h2>
              <p className="font-outfit text-sm sm:text-base md:text-lg lg:text-[20px] text-black">
                Go live in just one week. Import employee data, connect
                payroll/SMS feeds, invite teams, and set smart financial
                wellness budgets effortlessly.
              </p>
            </div>
            <div className="w-full lg:flex-1 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-[100px] sm:rounded-[200px] md:rounded-[300px] lg:rounded-[384px] overflow-hidden">
              <img
                src="/work1.png"
                alt="Create step"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black/10" />

          {/* Step 2: Engage Every Employee */}
          <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-24 xl:gap-32">
            <div className="w-full lg:w-[576px] flex flex-col items-start gap-4 md:gap-5 lg:gap-6">
              <div className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-black">
                Step 2
              </div>
              <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-semibold text-[#334EAC] leading-tight lg:whitespace-nowrap">
                Engage Every Employee
              </h2>
              <p className="font-outfit text-sm sm:text-base md:text-lg lg:text-[20px] text-black">
                Employees can instantly book confidential 1-on-1 coaching or
                participate in interactive group workshops, all within the app -
                ensuring practical learning and support.
              </p>
            </div>
            <div className="w-full lg:flex-1 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-[100px] sm:rounded-[200px] md:rounded-[300px] lg:rounded-[384px] overflow-hidden">
              <img
                src="/work2.png"
                alt="Engage step"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black/10" />

          {/* Step 3: Drive Measurable Impact */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-24 xl:gap-32">
            <div className="w-full lg:w-[576px] flex flex-col items-start gap-4 md:gap-5 lg:gap-6">
              <div className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-black">
                Step 3
              </div>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#334EAC] leading-tight lg:whitespace-nowrap">
                Drive Measurable Impact
              </h2>
              <p className="font-outfit text-sm sm:text-base md:text-lg lg:text-[20px] text-black">
                Track anonymous, real-time analytics: See monthly improvements
                in stress reduction, financial confidence, and employee
                productivity - while protecting privacy at every step.
              </p>
            </div>
            <div className="w-full lg:flex-1 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-[100px] sm:rounded-[200px] md:rounded-[300px] lg:rounded-[384px] overflow-hidden">
              <img
                src="/work3.png"
                alt="Analyze step"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
