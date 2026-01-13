"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate confetti particles
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE"];
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
    }));
    setConfetti(particles);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900">
      {/* Animated Background Confetti */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute h-3 w-3 rounded-full opacity-80 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            animationDuration: `${3 + Math.random() * 2}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Birthday Cake Emoji */}
        <div className="mb-8 animate-bounce text-8xl">🎂</div>

        {/* Main Heading */}
        <h1 className="mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-6xl font-bold text-transparent animate-pulse sm:text-7xl md:text-8xl">
          Happy Birthday
        </h1>

        {/* Name */}
        <h2 className="mb-8 text-5xl font-extrabold text-purple-800 dark:text-purple-300 sm:text-6xl md:text-7xl">
          Harirat! 🎉
        </h2>

        {/* Birthday Message */}
        <div className="mb-8 max-w-2xl space-y-4 rounded-2xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:bg-black/60">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-2xl">
            Wishing you a day filled with joy, laughter, and wonderful memories!
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            May this new year bring you endless happiness, success, and all the amazing things you deserve! 🎈
          </p>
        </div>

        {/* Celebration Emojis */}
        <div className="flex flex-wrap justify-center gap-4 text-4xl">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>
            🎊
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            🎁
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            🎈
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
            🎉
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.8s" }}>
            🍰
          </span>
          <span className="animate-bounce" style={{ animationDelay: "1s" }}>
            ⭐
          </span>
        </div>
      </main>

    </div>
  );
}
