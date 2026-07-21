import Link from "next/link";
import { BookX, ArrowLeft, Home } from "lucide-react";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="section-padding">
      <Container>
        <div className="mx-auto max-w-md">
          <div className="relative overflow-hidden rounded-lg border-[2px] border-dashed border-black/40 bg-[#fbf8f0] px-6 py-8 text-center">
            <div className="mx-auto flex h-16 w-16 -rotate-6 items-center justify-center rounded-full border-[3px] border-black/70">
              <BookX size={22} className="text-black/70" />
            </div>

            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
              404 — not on the shelf
            </p>

            <p className="mt-1.5 font-heading text-lg font-black">This book isn&apos;t here</p>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
              It may have been removed from the catalog, or the link is
              incorrect.
            </p>

            <div className="mt-5 rounded-lg border-[2px] border-black bg-neutral-950 p-4 text-left">
              <p className="font-mono text-xs leading-relaxed text-[var(--yellow)]">
                BookNotFoundException: Catalog
              </p>
              <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-neutral-500">
                <p>at books.Catalog.lookup(Catalog.java)</p>
                <p>at books.DetailPage.render(DetailPage.java)</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/books"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-[2px] border-black bg-[var(--yellow)] px-5 py-3 font-black shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft size={16} />
                Back to shelf
              </Link>

              <Link
                href="/"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-[2px] border-black bg-white px-5 py-3 font-black shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-0.5"
              >
                <Home size={16} />
                Home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}