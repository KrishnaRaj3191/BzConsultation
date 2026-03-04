"use client"
import React, { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

/* Smooth mouse position */
function useSmoothMousePosition() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const target = useRef<Position>({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (target.current.x - prev.x) * 0.15,
        y: prev.y + (target.current.y - prev.y) * 0.15,
      }));
      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return position;
}

const CustomCursor: React.FC = () => {
  const position = useSmoothMousePosition();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 1000); // 1s collapse
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{ top: position.y, left: position.x }}
        className="fixed opacity-70 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 w-2.5 h-2.5 rounded-full bg-primary"
      />

      {/* Outer Ring */}
      <div
        style={{ top: position.y, left: position.x }}
        className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 w-5.5 h-5.5 rounded-full border border-primary"
      >
        <div
          className={`w-6 h-6 rounded-full border border-primary ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          } transition-all duration-1000`}
        />
      </div>
    </>
  );
};

export default CustomCursor;