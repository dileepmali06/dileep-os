"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

import { Container } from "../ui/container";
import BookCard from "./book-card";
import { getStatusMeta } from "./book-meta";

type Book = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  status?: string;
  progress?: number;
  rating?: number;
  favorite?: boolean;
  genres?: string[];
  coverImage?: string;
};

type BookshelfProps = {
  books: Book[];
};

const shelfOrder = ["reading", "completed", "planned", "dropped"];

export default function Bookshelf({ books }: BookshelfProps) {
  if (!books?.length) {
    return (
      <section id="shelf" className="pb-24">
        <Container>
          <div className="rounded-[28px] border-[3px] border-black bg-white p-12 text-center shadow-[10px_10px_0px_#000]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--pink)]">
              <BookOpen size={26} />
            </div>
            <h2 className="mt-6 text-2xl font-black">The Shelf Is Empty</h2>
            <p className="mx-auto mt-3 max-w-md text-neutral-600">
              No books have been added yet. Once entries show up in Sanity
              Studio, they&apos;ll appear here.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const grouped = shelfOrder
    .map((status) => ({
      status,
      meta: getStatusMeta(status),
      books: books.filter((b) => b.status === status),
    }))
    .filter((group) => group.books.length > 0);

  return (
    <section id="shelf" className="pb-24">
      <Container>
        <div className="mb-10">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            The Library
          </p>
          <h2 className="mt-1 text-3xl font-black sm:text-4xl">Full Shelf</h2>
        </div>

        <div className="space-y-16">
          {grouped.map((group) => (
            <motion.div
              key={group.status}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6 flex items-center gap-2.5">
                <group.meta.icon size={18} />
                <h3 className="font-heading text-xl font-black">{group.meta.label}</h3>
                <span className="font-mono text-xs text-neutral-400">{group.books.length}</span>
              </div>

              {/* shelf: books standing on a plank line */}
              <div className="flex flex-wrap items-end gap-x-8 gap-y-10 border-b-[6px] border-black pb-6">
                {group.books.map((book) => (
                  <div key={book._id} className="w-[150px] sm:w-[170px]">
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}