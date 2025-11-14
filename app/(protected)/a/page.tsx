'use client';

import React, { useState, useEffect, useCallback } from 'react';

// --- The Romantic Component ---
export default function Page() {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Romantic "Developer" Quotes
  const messages = [
    "You are the CSS to my HTML",
    "My love for you is an infinite loop",
    "You just committed to my heart",
    "No merge conflicts, just pure love",
    "You are my favorite deployment",
    "Running on 100% uptime with you",
    "Sudo make me yours",
    "Console.log('I love you')",
  ];

  // Create a floating heart particle
  const spawnHeart = useCallback((e: React.MouseEvent<HTMLButtonElement> | MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    // If triggered by click, use click coords, else center
    const x = 'clientX' in e ? e.clientX : rect.left + rect.width / 2;
    const y = 'clientY' in e ? e.clientY : rect.top + rect.height / 2;

    const newHeart = {
      id: Date.now(),
      x: x,
      y: y,
      size: Math.random() * 20 + 10, // Random size between 10-30px
    };

    setHearts((prev) => [...prev, newHeart]);
    setMessageIndex((prev) => (prev + 1) % messages.length);

    // Cleanup heart after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative selection:bg-pink-500 selection:text-white">
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/20 blur-[120px] rounded-full transition-all duration-1000 ${isHovered ? 'scale-150 bg-red-600/30' : 'scale-100'}`} />
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-8">
        
        {/* The Heart Button */}
        <button
          onClick={spawnHeart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative transition-transform duration-300 active:scale-90 focus:outline-none"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        >
          {/* SVG Heart */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-32 h-32 text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-500 ${isHovered ? 'text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]' : 'animate-pulse-slow'}`}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          
          {/* Click instruction tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Click me
          </span>
        </button>

        {/* Dynamic Message */}
        <div className="h-12 flex items-center justify-center">
          <h1 
            key={messageIndex} // Key change forces re-animation
            className="text-2xl md:text-3xl font-bold bg-linear-to-r from-pink-400 to-red-400 bg-clip-text text-transparent animate-fade-in-up text-center px-4"
          >
            {messages[messageIndex]}
          </h1>
        </div>
      </div>

      {/* Floating Particles Container */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none text-pink-500 animate-float-up"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: heart.size,
            '--tx': `${Math.random() * 200 - 100}px`, // Random horizontal drift
          } as React.CSSProperties}
        >
          ❤️
        </div>
      ))}

      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes float-up {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--tx)), -200px) scale(0); opacity: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.95); opacity: 0.8; }
        }
        .animate-float-up {
          animation: float-up 1.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}