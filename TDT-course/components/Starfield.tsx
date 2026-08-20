"use client";

import { useEffect, useState } from "react";

interface Star {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 680 ? 26 : 48;
    const next: Star[] = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 2,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 4,
    }));
    // Randomized positions must be generated client-side only (SSR has no
    // window), and once on mount — this is the standard escape hatch for
    // that, not a synchronization loop.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(next);
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s, i) => (
        <i
          key={i}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
