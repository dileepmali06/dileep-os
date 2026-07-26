"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Pin, Globe, Quote } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { avatarColorFor, formatCreatedAt } from "./guestbook-meta";

type GuestbookMessage = {
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
  featured?: boolean;
  pinned?: boolean;
  createdAt?: string;
};

type GuestbookCardProps = {
  entry: GuestbookMessage;
};

export default function GuestbookCard({ entry }: GuestbookCardProps) {
  const avatarColor = avatarColorFor(entry._id);

  const metaLine = [entry.profession, entry.company, entry.country].filter(Boolean).join(" · ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="relative flex h-full flex-col overflow-hidden rounded-xl border-[2px] border-black bg-[#fbf8f0] shadow-[4px_5px_0px_#000]"
    >
      {/* washi-tape accent */}
      <span
        className="absolute -top-1 left-6 h-4 w-12 -rotate-2 border-[1.5px] border-black/70"
        style={{ background: avatarColor, opacity: 0.85 }}
      />

      {entry.pinned && (
        <span className="absolute -right-[-2px] -top-[-4px] z-10 flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-black bg-[var(--yellow)]">
          <Pin size={12} className="rotate-45" />
        </span>
      )}

      <div className="flex flex-1 flex-col p-5 pt-6">
        <div className="flex items-start gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-[2px] border-black">
            {entry.avatar ? (
              <Image src={entry.avatar} alt={entry.name} fill sizes="40px" className="object-cover" />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center font-heading text-sm font-black"
                style={{ background: avatarColor }}
              >
                {entry.name?.[0]?.toUpperCase()}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="truncate font-heading text-sm font-black">{entry.name}</h3>
              {entry.featured && <Star size={12} className="shrink-0 fill-[var(--yellow)] text-black" />}
            </div>
            {metaLine && <p className="truncate text-[11px] text-neutral-500">{metaLine}</p>}
          </div>
        </div>

        {typeof entry.rating === "number" && (
          <div className="mt-2.5 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < entry.rating! ? "fill-[var(--yellow)] text-black" : "text-neutral-200"}
              />
            ))}
          </div>
        )}

        <div className="mt-3 flex-1">
          <Quote size={14} className="mb-1 text-black/15" />
          <p className="text-sm leading-relaxed text-neutral-700">{entry.message}</p>
        </div>

        {entry.reply && (
          <div className="mt-3.5 rounded-lg border-[1.5px] border-black/15 bg-white/70 p-3">
            <p className="text-[9px] font-bold uppercase tracking-wide text-neutral-400">Reply</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-600">{entry.reply}</p>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between border-t-[1.5px] border-dashed border-black/15 pt-3">
          <span className="font-mono text-[10px] text-neutral-400">{formatCreatedAt(entry.createdAt)}</span>

          <div className="flex items-center gap-2">
            {entry.website && (
              <a href={entry.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                <Globe size={13} className="text-neutral-400 transition-colors hover:text-black" />
              </a>
            )}
            {entry.github && (
              <a href={entry.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={13} className="text-neutral-400 transition-colors hover:text-black" />
              </a>
            )}
            {entry.linkedin && (
              <a href={entry.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-[13px] w-[13px] text-neutral-400 transition-colors hover:text-black" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}