"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw, House } from "lucide-react";
import Link from "next/link";

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
    <main className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-2xl border-[3px] border-black bg-[#1a1a1a] shadow-[8px_8px_0px_#000]">
          {/* titlebar */}
          <div className="flex items-center gap-3.5 border-b-[2px] border-white/10 px-5 py-3.5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[var(--pink)]" />
              <span className="h-3 w-3 rounded-full bg-[var(--yellow)]" />
              <span className="h-3 w-3 rounded-full bg-[var(--green)]" />
            </div>
            <span className="font-mono text-xs text-neutral-400">process.crashed</span>
          </div>

          {/* body */}
          <div className="p-7 sm:p-9">
            <div className="flex items-center gap-3.5">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                style={{ background: "var(--pink)" }}
              >
                <AlertTriangle className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Runtime error
                </p>
                <h1 className="text-xl font-black text-white">Something went wrong</h1>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              We couldn&apos;t load this DSA problem. An unexpected error
              occurred while fetching the content.
            </p>

            {/* error log line */}
            <div className="mt-6 rounded-lg border border-white/10 bg-black/40 p-4">
              <div className="flex items-start gap-2 font-mono text-xs leading-relaxed text-neutral-300">
                <span className="shrink-0 text-[var(--pink)]">✗</span>
                <span className="break-words">
                  {error.message || "An unknown error occurred"}
                </span>
              </div>
              {error.digest && (
                <p className="mt-2 font-mono text-[11px] text-neutral-600">
                  digest: {error.digest}
                </p>
              )}
            </div>

            {/* actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={reset}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-[2px] border-black bg-[var(--yellow)] px-6 py-3 font-bold text-black transition-transform hover:-translate-y-0.5"
              >
                <RefreshCcw className="h-4 w-4" />
                Try again
              </button>

              <Link
                href="/dsa"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-[2px] border-white/20 px-6 py-3 font-bold text-white transition-colors hover:bg-white/5"
              >
                <House className="h-4 w-4" />
                Back to problems
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}