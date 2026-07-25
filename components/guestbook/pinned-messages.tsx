import { Pin } from "lucide-react";

import { Container } from "../ui/container";
import GuestbookCard from "./guestbook-card";

type PinnedMessage = {
  _id: string;
  name: string;
  profession?: string;
  company?: string;
  country?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  avatar?: string;
  message: string;
  rating?: number;
  reply?: string;
  createdAt?: string;
};

type PinnedMessagesProps = {
  messages: PinnedMessage[];
};

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function PinnedMessages({ messages }: PinnedMessagesProps) {
  if (!messages?.length) return null;

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-7 flex items-center gap-2.5">
          <Pin size={15} className="rotate-45 text-black/70" />
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Pinned to the board
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 rounded-2xl border-[2px] border-dashed border-black/15 bg-[#f3e6dc] p-8">
          {messages.map((entry, index) => (
            <div key={entry._id} className={`w-[260px] ${tilts[index % tilts.length]}`}>
              <GuestbookCard entry={entry} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}