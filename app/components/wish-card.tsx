import { Avatar } from "./avatar";
import { SpeechBubble } from "./speech-bubble";
import type { Wish } from "../data/wishes";

export function WishCard({ wish }: { wish: Wish }) {
  return (
    <div className="flex flex-col items-center animate-[fade-in-up_1.2s_ease-out_1.6s_both]">
      <SpeechBubble>{wish.wish}</SpeechBubble>
      <Avatar src={wish.avatar} name={wish.name} />
    </div>
  );
}
