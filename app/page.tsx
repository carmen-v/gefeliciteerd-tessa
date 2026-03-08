"use client";

import { useEffect, useState } from "react";
import { WishCard } from "./components/wish-card";
import { wishes } from "./data/wishes";

const COLORS = [
  "#ff6fd8", "#ffd700", "#a78bfa", "#34d399", "#f87171",
  "#60a5fa", "#fb923c", "#f472b6", "#4ade80", "#facc15",
];

interface Piece {
  id: number;
  left: string;
  color: string;
  width: string;
  height: string;
  duration: string;
  delay: string;
}

function Confetti() {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const generated: Piece[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      width: `${6 + Math.random() * 8}px`,
      height: `${10 + Math.random() * 10}px`,
      duration: `${4 + Math.random() * 6}s`,
      delay: `${Math.random() * 8}s`,
    }));
    setPieces(generated);
  }, []);

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            backgroundColor: p.color,
            width: p.width,
            height: p.height,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}

export default function Page() {
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background glow orbs */}
      <div className="absolute rounded-full blur-[80px] pointer-events-none w-125 h-125 bg-[#7c3aed] -top-37.5 -left-37.5 animate-[orb-glow_6s_ease-in-out_infinite]" />
      <div className="absolute rounded-full blur-[80px] pointer-events-none w-100 h-100 bg-[#ec4899] -bottom-25 -right-25 animate-[orb-glow_6s_ease-in-out_2s_infinite]" />
      <div className="absolute rounded-full blur-[80px] pointer-events-none w-75 h-75 bg-[#f59e0b] bottom-[20%] left-[10%] animate-[orb-glow_6s_ease-in-out_4s_infinite]" />

      {/* Falling confetti */}
      <Confetti />

      {/* Main message */}
      <div className="text-center z-10 pt-16 px-6 animate-[fade-in-up_1.2s_ease-out_both]">
        <p className="block text-[clamp(1.2rem,3vw,2rem)] text-[#c4b5fd] tracking-widest uppercase animate-[fade-in-up_1.2s_ease-out_0.2s_both]">
          Van harte
        </p>
        <h1 className="gradient-text block text-[clamp(4rem,14vw,10rem)] font-black leading-none">
          Gefeliciteerd
        </h1>
        <p className="block text-[clamp(1.2rem,3vw,2rem)] text-[#c4b5fd] mt-4 tracking-widest uppercase animate-[fade-in-up_1.2s_ease-out_0.9s_both]">
          lieve Tessa&nbsp;🎂
        </p>
        <span className="emoji-animate text-[clamp(2rem,6vw,4.5rem)] mt-5">
          🎉&nbsp;🎈&nbsp;✨
        </span>
      </div>

      {/* Wishes from the team */}
      <div className="flex flex-wrap justify-center gap-10 px-6 pb-16 z-10 relative">
        {wishes.map((wish, i) => (
          <WishCard key={i} wish={wish} />
        ))}
      </div>

    </div>
  );
}
