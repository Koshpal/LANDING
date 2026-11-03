import React from "react";
import { motion } from "framer-motion";

export default function EmployeeFinancialHealth() {
	const stats = [
		{
			text: "66% of employees say financial stress negatively affects their work and personal lives",
			source: "Morgan Stanley, 2025",
		},
		{
			text: "56% of workers report that financial stress has negatively affected their productivity at work",
			source: "HR Dive, 2025",
		},
		{
			text: "78% of employees with high financial stress say it impacts their work performance",
			source: "Financial Health Network, 2025",
		},
		{
			text: "Financially stressed employees are about 5x more likely to be disengaged on the job",
			source: "Origin, 2025",
		},
	];

	return (
		<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#5484D6] from-30% to-[#334EAC] w-full">
			<div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
				>
					<h2 className="font-outfit text-white text-3xl sm:text-4xl md:text-[42px] lg:text-5xl font-semibold leading-tight mb-4 sm:mb-5 md:mb-6" style={{ color: '#ffffff' }}>
						Why prioritizing employee
						<br />
						financial health matters
					</h2>
					<p className="font-jakarta font-semibold text-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
						We turn your spending into smarter financial decisions with privacy-first
						technology and expert human guidance.
					</p>
				</motion.div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
							whileHover={{ y: -5, transition: { duration: 0.3 } }}
							className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40"
							style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
						>
							{/* Decorative Donut Chart Icon */}
							<div className="absolute top-6 sm:top-7 md:top-8 lg:top-10 right-6 sm:right-7 md:right-8 lg:right-10">
								<svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 100 100">
									{/* Background circle (white center) */}
									<circle cx="50" cy="50" r="50" fill="white" />

									{/* Teal segment (left half) */}
									<path
										d="M 50 50 L 50 0 A 50 50 0 0 1 50 100 Z"
										fill="#17A2B8"
										transform="rotate(90 50 50)"
									/>

									{/* Blue segment (right half) */}
									<path
										d="M 50 50 L 50 0 A 50 50 0 0 1 50 100 Z"
										fill="#334EAC"
										transform="rotate(-90 50 50)"
									/>

									{/* White center hole to create donut effect */}
									<circle cx="50" cy="50" r="30" fill="white" />
								</svg>
							</div>

							{/* Stat Text */}
							<div className="pr-16 sm:pr-20 md:pr-24">
								<p className="font-outfit text-[#1A1A1A] text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium leading-snug mb-3 sm:mb-4">
									{stat.text}
								</p>
								<p className="font-jakarta text-[#3B9FB5] text-sm sm:text-base font-semibold">
									{stat.source}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
