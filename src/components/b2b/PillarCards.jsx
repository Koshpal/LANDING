import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, LineChart, MessagesSquare, Sprout } from "lucide-react";
import { Reveal } from "./primitives";

export const PILLARS = [
  {
    id: "learn",
    Icon: BookOpen,
    h: "Learn",
    p: "Financial education that fits their stage of life. Practical, relevant and ready to use.",
  },
  {
    id: "understand",
    Icon: LineChart,
    h: "Understand",
    p: "AI-powered insight into their own habits, so the patterns behind their money become visible.",
  },
  {
    id: "connect",
    Icon: MessagesSquare,
    h: "Connect",
    p: "One-on-one conversations with certified financial experts. About goals and questions, never about selling products.",
  },
  {
    id: "grow",
    Icon: Sprout,
    h: "Grow",
    p: "Continuous support from the first salary to major life milestones.",
  },
];

/** Four pillar cards. Each links to its block on /platform. */
export default function PillarCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
      {PILLARS.map(({ id, Icon, h, p }, i) => (
        <Reveal key={id} delay={i * 0.06} className="h-full">
          <Link
            to={`/platform#${id}`}
            className="group b2b-card b2b-card-hover bg-[#f7f8fd] p-6 h-full flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span
              className="w-11 h-11 rounded-[12px] border border-[#e5e9fb] grid place-items-center text-primary"
              style={{ background: "linear-gradient(135deg,#eef1ff,#e6faf7)" }}
            >
              <Icon size={20} strokeWidth={2} />
            </span>
            <h3 className="font-outfit font-bold text-[20px] text-[#0b1533] mt-4">{h}</h3>
            <p className="font-jakarta text-[14.5px] leading-[1.6] text-[#3a4468] mt-1.5 flex-1">{p}</p>
            <span className="mt-4 font-outfit font-semibold text-[13.5px] text-primary group-hover:underline">
              Learn more
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
