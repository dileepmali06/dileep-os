import { BookMarked } from "lucide-react";

import { Container } from "../../ui/container";
import { formatDate } from "../book-meta";

type BookInformationProps = {
  book: {
    pages?: number;
    publisher?: string;
    startedAt?: string;
    completedAt?: string;
    genres?: string[];
  };
};

export default function BookInformation({ book }: BookInformationProps) {
  const rows = [
    { label: "Pages", value: book.pages ? `${book.pages}` : null },
    { label: "Publisher", value: book.publisher },
  ].filter((row) => row.value);

  const dateStamps = [
    { label: "Checked out", value: formatDate(book.startedAt) },
    { label: "Returned", value: formatDate(book.completedAt) },
  ].filter((stamp) => stamp.value);

  if (rows.length === 0 && dateStamps.length === 0 && !book.genres?.length) return null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-lg border-[2px] border-black bg-[#fbf8f0] p-7 shadow-[6px_6px_0px_#000] sm:p-8">
            {/* punch hole */}
            <div className="absolute left-6 top-6 h-3 w-3 rounded-full border border-black/30 bg-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />

            {/* header */}
            <div className="flex items-center gap-2.5 border-b-[2px] border-dashed border-black/20 pb-4 pl-8">
              <BookMarked size={16} />
              <h2 className="font-mono text-xs font-black uppercase tracking-widest text-neutral-500">
                Catalog Card
              </h2>
            </div>

            {/* typewriter rows */}
            {rows.length > 0 && (
              <div className="mt-5 space-y-2.5 pl-8 font-mono text-sm">
                {rows.map((row) => (
                  <div key={row.label} className="flex items-baseline gap-2">
                    <span className="shrink-0 uppercase text-neutral-400">{row.label}</span>
                    <span className="flex-1 translate-y-[-3px] border-b border-dotted border-black/25" />
                    <span className="shrink-0 font-semibold">{row.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* date stamps */}
            {dateStamps.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3 pl-8">
                {dateStamps.map((stamp) => (
                  <div
                    key={stamp.label}
                    className="-rotate-2 rounded border-[2px] border-black/70 px-3 py-1.5 text-center"
                    style={{
                      boxShadow: "0 0 0 2px rgba(0,0,0,0.05)",
                    }}
                  >
                    <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-black/50">
                      {stamp.label}
                    </p>
                    <p className="font-mono text-xs font-black text-black/70">{stamp.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* genres */}
            {book.genres && book.genres.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2 border-t-[2px] border-dashed border-black/20 pt-5 pl-8">
                {book.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border-[1.5px] border-black/30 bg-white px-2.5 py-0.5 text-[11px] font-medium text-neutral-600"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}