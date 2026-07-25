"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Pin,
  Globe,
  MessageCircle,
} from "lucide-react";
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

export default function GuestbookCard({
  entry,
}: GuestbookCardProps) {
  const avatarColor = avatarColorFor(entry._id);

  const metaLine = [
    entry.profession,
    entry.company,
    entry.country,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="relative flex h-full flex-col rounded-2xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_#000]"
    >
      {entry.pinned && (
        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-black bg-[var(--yellow)]">
          <Pin size={14} className="rotate-45" />
        </span>
      )}

      <div className="flex items-start gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-[2px] border-black">
          {entry.avatar ? (
            <Image
              src={entry.avatar}
              alt={entry.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center font-heading font-black"
              style={{ background: avatarColor }}
            >
              {entry.name?.[0]?.toUpperCase()}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="truncate font-heading text-base font-black">
              {entry.name}
            </h3>

            {entry.featured && (
              <Star
                size={13}
                className="shrink-0 fill-[var(--yellow)] text-black"
              />
            )}
          </div>

          {metaLine && (
            <p className="truncate text-xs text-neutral-500">
              {metaLine}
            </p>
          )}
        </div>
      </div>

      {typeof entry.rating === "number" && (() => {
        const rating = entry.rating;

        return (
          <div className="mt-3 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={
                  i < rating
                    ? "fill-[var(--yellow)] text-black"
                    : "text-neutral-200"
                }
              />
            ))}
          </div>
        );
      })()}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
        {entry.message}
      </p>

      {entry.reply && (
        <div className="mt-4 rounded-xl border-[2px] border-black/15 bg-neutral-50 p-3">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-neutral-400">
            <MessageCircle size={11} />
            Reply
          </div>

          <p className="mt-1 text-sm leading-relaxed text-neutral-600">
            {entry.reply}
          </p>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-black/10 pt-3">
        <span className="font-mono text-[11px] text-neutral-400">
          {formatCreatedAt(entry.createdAt)}
        </span>

        <div className="flex items-center gap-2">
          {entry.website && (
            <a
              href={entry.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <Globe
                size={14}
                className="transition-colors text-neutral-400 hover:text-black"
              />
            </a>
          )}

          {entry.github && (
            <a
              href={entry.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub
                size={14}
                className="transition-colors text-neutral-400 hover:text-black"
              />
            </a>
          )}

          {entry.linkedin && (
            <a
              href={entry.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-[14px] w-[14px] transition-colors text-neutral-400 hover:text-black" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}