"use client";

import { useEffect, useState } from "react";

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
  borderRadius: string;
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
      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
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
    <div className="scene">
      {/* Background glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Falling confetti */}
      <Confetti />

      {/* Main message */}
      <div className="hero">
        <p className="greeting">Van harte</p>
        <h1 className="name">Gefeliciteerd</h1>
        <p className="tagline">lieve Tessa&nbsp;🎂</p>
        <span className="emoji-row">🎉&nbsp;🎈&nbsp;✨</span>
      </div>
    </div>
  );
}
