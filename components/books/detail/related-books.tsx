import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Container } from "../../ui/container";
import { getStatusMeta } from "../book-meta";

type RelatedBook = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  rating?: number;
  status?: string;
  genres?: string[];
  coverImage?: string;
};

type RelatedBooksProps = {
  books: RelatedBook[];
};

function starString(rating?: number) {
  if (typeof rating !== "number") return null;
  return "★".repeat(rating) + "☆".repeat(Math.max(0, 5 - rating));
}

export default function RelatedBooks({ books }: RelatedBooksProps) {
  if (!books?.length) return null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-md">
          <div className="flex items-center justify-center gap-2.5">
            <Sparkles size={15} />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              More like this
            </h2>
          </div>

          {/* receipt slip */}
          <div
            className="relative mt-5 bg-[#fdfdfa] px-6 pb-6 pt-6 font-mono shadow-[0_2px_10px_rgba(0,0,0,0.12)]"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 97%, 96% 100%, 92% 97%, 88% 100%, 84% 97%, 80% 100%, 76% 97%, 72% 100%, 68% 97%, 64% 100%, 60% 97%, 56% 100%, 52% 97%, 48% 100%, 44% 97%, 40% 100%, 36% 97%, 32% 100%, 28% 97%, 24% 100%, 20% 97%, 16% 100%, 12% 97%, 8% 100%, 4% 97%, 0% 100%)",
            }}
          >
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-widest">Checkout Slip</p>
              <p className="mt-0.5 text-[10px] text-neutral-400">recommended titles</p>
            </div>

            <div className="mt-4 border-t border-dashed border-black/30" />

            <div className="mt-4 space-y-4">
              {books.map((book, index) => {
                const status = getStatusMeta(book.status);
                const stars = starString(book.rating);

                return (
                  <Link
                    key={book._id}
                    href={`/books/${book.slug}`}
                    className="group block"
                  >
                    <div className="flex items-baseline gap-2 text-xs">
                      <span className="shrink-0 text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-1 shrink-0 font-bold group-hover:underline">
                        {book.title}
                      </span>
                      <span className="flex-1 translate-y-[-2px] border-b border-dotted border-black/25" />
                      <span
                        className="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase"
                        style={{ background: status.color }}
                      >
                        {status.label}
                      </span>
                    </div>

                    <div className="mt-0.5 flex items-center justify-between pl-6 text-[10px] text-neutral-400">
                      <span className="truncate">by {book.author}</span>
                      {stars && <span className="shrink-0 tracking-tight text-black/70">{stars}</span>}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 border-t border-dashed border-black/30 pt-4 text-center">
              <p className="text-[10px] text-neutral-400">— thank you for reading —</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}