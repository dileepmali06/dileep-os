"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Star } from "lucide-react";

import { Container } from "../ui/container";
import { avatarColorFor, formatCreatedAt } from "./guestbook-meta";

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

const tilts = [-3, 2, -2, 3, -4, 1.5];

export default function PinnedMessages({ messages }: PinnedMessagesProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!messages?.length) return null;

  const openMessage = messages.find((m) => m._id === openId) ?? null;

  return (
    <section className="pb-24">
      <Container>
        <div className="mb-8 flex items-center gap-2.5">
          <Mail size={15} className="text-black/70" />
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Mail worth keeping
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-7 gap-y-10">
          {messages.map((entry, index) => {
            const seal = avatarColorFor(entry._id);
            const tilt = tilts[index % tilts.length];

            return (
              <motion.button
                key={entry._id}
                type="button"
                onClick={() => setOpenId(entry._id)}
                initial={{ opacity: 0, y: 16, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: tilt }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
                className="group relative w-[210px] text-left"
                style={{ transformOrigin: "center" }}
              >
                {/* envelope body */}
                <div className="relative overflow-hidden rounded-md border-[2px] border-black bg-[#fbf8f0] shadow-[5px_6px_0px_rgba(0,0,0,0.2)] transition-shadow group-hover:shadow-[7px_9px_0px_rgba(0,0,0,0.25)]">
                  {/* flap */}
                  <div className="relative h-16 border-b-[2px] border-black">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "#f3e6dc",
                        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      }}
                    />
                    {/* postmark */}
                    <div className="absolute right-2.5 top-2 flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-black/50 text-center">
                      <span className="rotate-[-8deg] font-mono text-[7px] font-bold leading-tight text-black/50">
                        {formatCreatedAt(entry.createdAt)}
                      </span>
                    </div>
                  </div>

                  {/* wax seal at flap point */}
                  <div
                    className="absolute left-1/2 top-16 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-black font-heading text-sm font-black shadow-[1px_2px_2px_rgba(0,0,0,0.3)]"
                    style={{ background: seal }}
                  >
                    {entry.name?.[0]?.toUpperCase()}
                  </div>

                  {/* body */}
                  <div className="px-4 pb-4 pt-6 text-center">
                    <p className="truncate font-heading text-sm font-black">{entry.name}</p>
                    {entry.country && (
                      <p className="mt-0.5 text-[10px] font-semibold text-neutral-400">{entry.country}</p>
                    )}

                    {typeof entry.rating === "number" && (
                      <div className="mt-2 flex justify-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            className={i < entry.rating! ? "fill-[var(--yellow)] text-black" : "text-neutral-200"}
                          />
                        ))}
                      </div>
                    )}

                    <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
                      Tap to read
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* opened letter modal */}
        <AnimatePresence>
          {openMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setOpenId(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-2xl border-[3px] border-black bg-[#fbf8f0] p-7 shadow-[10px_12px_0px_#000] sm:p-8"
              >
                <button
                  onClick={() => setOpenId(null)}
                  aria-label="Close letter"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-black bg-white"
                >
                  <X size={14} />
                </button>

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-black font-heading font-black"
                    style={{ background: avatarColorFor(openMessage._id) }}
                  >
                    {openMessage.name?.[0]?.toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-base font-black">{openMessage.name}</p>
                    <p className="truncate text-xs text-neutral-500">
                      {[openMessage.profession, openMessage.company, openMessage.country]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                </div>

                {typeof openMessage.rating === "number" && (
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={i < openMessage.rating! ? "fill-[var(--yellow)] text-black" : "text-neutral-200"}
                      />
                    ))}
                  </div>
                )}

                <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">{openMessage.message}</p>

                {openMessage.reply && (
                  <div className="mt-4 rounded-xl border-[2px] border-black/15 bg-white p-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">Reply</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{openMessage.reply}</p>
                  </div>
                )}

                <p className="mt-4 font-mono text-[11px] text-neutral-400">
                  {formatCreatedAt(openMessage.createdAt)}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}