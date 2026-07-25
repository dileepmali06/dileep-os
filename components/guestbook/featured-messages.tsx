"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Container } from "../ui/container";
import GuestbookCard from "./guestbook-card";

type FeaturedMessage = {
  _id: string;
  name: string;
  profession?: string;
  company?: string;
  country?: string;
  avatar?: string;
  message: string;
  rating?: number;
  reply?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  createdAt?: string;
};

type FeaturedMessagesProps = {
  messages: FeaturedMessage[];
};

export default function FeaturedMessages({ messages }: FeaturedMessagesProps) {
  if (!messages?.length) return null;

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-7 flex items-center gap-2.5">
          <Sparkles size={15} />
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Editor&apos;s picks
          </p>
        </div>
        <h2 className="-mt-1 mb-6 text-2xl font-black sm:text-3xl">Featured Messages</h2>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {messages.map((entry, index) => (
            <motion.div
              key={entry._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="w-[280px] shrink-0 snap-start"
            >
              <GuestbookCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}