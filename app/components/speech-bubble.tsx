export function SpeechBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="bubble relative bg-[#2d1b4e] text-[#f0e6ff] rounded-[1.4rem] p-8 max-w-[420px] text-base leading-relaxed shadow-[0_8px_40px_rgba(109,40,217,0.4),0_2px_8px_rgba(0,0,0,0.4)] border border-[rgba(167,139,250,0.25)]">
      {children}
    </div>
  );
}
