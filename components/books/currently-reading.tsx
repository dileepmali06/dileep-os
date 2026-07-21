"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

import { Container } from "../ui/container";
import ReadingProgress from "./reading-progress";

type CurrentBook = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  progress?: number;
  startedAt?: string;
  genres?: string[];
  coverImage?: string;
};

type CurrentlyReadingProps = {
  books: CurrentBook[];
};

export default function CurrentlyReading({ books }: CurrentlyReadingProps) {
  if (!books?.length) return null;

  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[28px] border-[3px] border-black bg-white p-6 shadow-[10px_10px_0px_#000] sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--blue)]">
              <BookOpen size={18} />
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                On the Nightstand
              </p>
              <h2 className="text-2xl font-black sm:text-3xl">Currently Reading</h2>
            </div>
          </div>

          <div className="mt-7 space-y-5">
            {books.map((book, index) => (
              <motion.div
                key={book._id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Link
                  href={`/books/${book.slug}`}
                  className="flex items-center gap-4 rounded-2xl border-[2px] border-black p-3 transition-colors hover:bg-neutral-50 sm:gap-5 sm:p-4"
                >
                  <div className="relative h-20 w-14 shrink-0 overflow-hidden rounded-md border-[2px] border-black bg-neutral-100 sm:h-24 sm:w-16">
                    {book.coverImage ? (
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-neutral-300">
                        <BookOpen size={20} />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-heading text-lg font-black">{book.title}</h3>
                    <p className="truncate text-sm text-neutral-500">{book.author}</p>
                    <div className="mt-2.5">
                      <ReadingProgress progress={book.progress} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}