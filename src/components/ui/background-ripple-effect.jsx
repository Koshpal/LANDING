import React, { useEffect, useRef, useState } from "react";

export function BackgroundRippleEffect() {
  const canvasRef = useRef(null);
  const [boxes, setBoxes] = useState([]);
  const animationFrameRef = useRef(null);
  const boxSize = 32;
  const gap = 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeBoxes();
    };

    const initializeBoxes = () => {
      const cols = Math.ceil(canvas.width / (boxSize + gap));
      const rows = Math.ceil(canvas.height / (boxSize + gap));
      const newBoxes = [];

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          newBoxes.push({
            x: j * (boxSize + gap),
            y: i * (boxSize + gap),
            scale: 0,
            opacity: 0.1,
            targetScale: 0,
            targetOpacity: 0.2,
          });
        }
      }
      setBoxes(newBoxes);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || boxes.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      boxes.forEach((box) => {
        // Smooth transition
        box.scale += (box.targetScale - box.scale) * 0.1;
        box.opacity += (box.targetOpacity - box.opacity) * 0.1;

        ctx.save();
        ctx.translate(box.x + boxSize / 2, box.y + boxSize / 2);
        ctx.scale(1 + box.scale, 1 + box.scale);
        ctx.translate(-(box.x + boxSize / 2), -(box.y + boxSize / 2));

        ctx.fillStyle = `rgba(255, 255, 255, ${box.opacity})`;
        ctx.fillRect(box.x, box.y, boxSize, boxSize);

        ctx.restore();

        // Decay
        if (box.targetScale > 0) {
          box.targetScale *= 0.95;
          box.targetOpacity *= 0.95;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [boxes]);

  const handleInteraction = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    boxes.forEach((box) => {
      const distance = Math.sqrt(
        Math.pow(x - (box.x + boxSize / 2), 2) +
        Math.pow(y - (box.y + boxSize / 2), 2)
      );

      const maxDistance = 200;
      if (distance < maxDistance) {
        const intensity = 1 - distance / maxDistance;
        box.targetScale = intensity * 0.3;
        box.targetOpacity = 0.1 + intensity * 0.4;
      }
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      onMouseMove={handleInteraction}
      onClick={handleInteraction}
      style={{ cursor: "pointer" }}
    />
  );
}
