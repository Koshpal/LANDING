import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const spans = textRef.current.querySelectorAll(".scroll-animate");

    gsap.set(spans, {
      backgroundPositionX: "100%",
    });

    gsap.to(spans, {
      backgroundPositionX: "0%",
      stagger: 0.3,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
