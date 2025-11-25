"use client";

import React, { useState, useEffect } from "react";

const trailLength = 25;
const updateRate = 25; // ms

export function CursorTrail() {
  const [points, setPoints] = useState(
    Array(trailLength).fill({ x: -100, y: -100 })
  );

  useEffect(() => {
    let lastUpdateTime = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = performance.now();
      if (currentTime - lastUpdateTime < updateRate) {
        return;
      }
      lastUpdateTime = currentTime;

      setPoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints.unshift({ x: e.clientX, y: e.clientY });
        return newPoints.slice(0, trailLength);
      });
    };

    const animateTrail = () => {
      setPoints((prevPoints) => {
        const newPoints = prevPoints.map((point, index, arr) => {
          if (index === 0) return point;
          const prevPoint = arr[index - 1];
          return {
            x: point.x + (prevPoint.x - point.x) * 0.5,
            y: point.y + (prevPoint.y - point.y) * 0.5,
          };
        });
        return newPoints;
      });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {points.map((point, index) => {
        const opacity = 1 - index / trailLength;
        const scale = 1 - index / trailLength;
        return (
          <div
            key={index}
            className="pointer-events-none absolute h-6 w-6 rounded-full bg-accent/50 backdrop-blur-sm"
            style={{
              left: `${point.x - 12}px`,
              top: `${point.y - 12}px`,
              opacity: opacity,
              transform: `scale(${scale})`,
              transition: "transform 0.1s, opacity 0.1s",
              zIndex: 9999,
            }}
          />
        );
      })}
    </>
  );
}
