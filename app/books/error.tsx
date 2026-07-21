"use client";

import { useEffect } from "react";
import { RefreshCcw, Bug } from "lucide-react";

import { Container } from "@/components/ui/container";

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="section-padding">
      <Container>
        <div className="mx-auto max-w-md">
          <div className="relative overflow-hidden rounded-lg border-[2px] border-dashed border-black/40 bg-[#fbf8f0] px-6 py-8 text-center">
            <div className="mx-auto flex h-16 w-16 -rotate-6 items-center justify-center rounded-full border-[3px] border-black/70">
              <Bug size={22} className="text-black/70" />
            </div>

            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
              Catalog error
            </p>

            <p className="mt-1.5 font-heading text-lg font-black">
              Couldn&apos;t load the library
            </p>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
              Something went wrong while fetching your books.
            </p>

            {/* mock stack trace */}
            <div className="mt-5 rounded-lg border-[2px] border-black bg-neutral-950 p-4 text-left">
              <p className="font-mono text-xs leading-relaxed text-red-400">
                {error.message || "Exception: unable to load books"}
              </p>
              <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-neutral-500">
                <p>at books.Library.fetchAll(Library.java)</p>
                <p>at books.ListingPage.render(ListingPage.java)</p>
              </div>
              {error.digest && (
                <p className="mt-2 font-mono text-[10px] text-neutral-600">
                  digest: {error.digest}
                </p>
              )}
            </div>

            <button
              onClick={reset}
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl border-[2px] border-black bg-[var(--yellow)] px-6 py-3 font-black shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-0.5"
            >
              <RefreshCcw size={17} />
              Try again
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}