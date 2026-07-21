"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Container } from "../ui/container";
import BookCard from "./book-card";

type FeaturedBook = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  status?: string;
  rating?: number;
  favorite?: boolean;
  genres?: string[];
  coverImage?: string;
};

type FeaturedBooksProps = {
  books: FeaturedBook[];
};

export default function FeaturedBooks({ books }: FeaturedBooksProps) {
  if (!books?.length) return null;

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--yellow)]">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
              Recommended
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">Worth Picking Up</h2>
          </div>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-7 overflow-x-auto px-4 py-3 sm:mx-0 sm:px-0">
          {books.map((book, index) => (
            <motion.div
              key={book._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="w-[190px] shrink-0 snap-start sm:w-[210px]"
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}