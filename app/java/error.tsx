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
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
          {/* header */}
          <div className="flex items-center gap-3.5 border-b-[3px] border-black bg-[var(--pink)] px-6 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[2px] border-black bg-white">
              <Bug size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/60">
                Runtime exception
              </p>
              <h1 className="text-lg font-black">Couldn&apos;t load the library</h1>
            </div>
          </div>

          {/* body */}
          <div className="p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-neutral-600">
              Something went wrong while fetching the Java snippet library.
            </p>

            {/* mock stack trace */}
            <div className="mt-5 rounded-lg border-[2px] border-black bg-neutral-950 p-4">
              <p className="font-mono text-xs leading-relaxed text-red-400">
                {error.message || "Exception: unable to load snippet library"}
              </p>
              <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-neutral-500">
                <p>at java.snippet.Library.fetchAll(Library.java)</p>
                <p>at java.snippet.ListingPage.render(ListingPage.java)</p>
              </div>
              {error.digest && (
                <p className="mt-2 font-mono text-[10px] text-neutral-600">
                  digest: {error.digest}
                </p>
              )}
            </div>

            <button
              onClick={reset}
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl border-[2px] border-black bg-[var(--orange)] px-6 py-3 font-black shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-0.5"
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