export function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center mt-5">
      <img
        src={src}
        alt={name}
        className="w-[120px] h-[120px] rounded-full object-cover border-[3px] border-[#a78bfa] shadow-[0_0_24px_rgba(167,139,250,0.5)]"
      />
      <span className="mt-2 text-[#c4b5fd] text-base tracking-[0.1em] uppercase">
        {name}
      </span>
    </div>
  );
}
