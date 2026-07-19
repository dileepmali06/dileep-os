import Link from "next/link";
import { SearchX, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="w-full max-w-xl text-center">
        <p className="mx-auto inline-block rounded-full border-[3px] border-black bg-[var(--pink)] px-5 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_#000]">
          404
        </p>

        <div className="mt-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
            <SearchX size={28} />
          </div>
        </div>

        <h1 className="mt-6 font-heading text-4xl font-black leading-tight sm:text-5xl">
          Problem Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-neutral-600">
          The DSA problem you&apos;re looking for doesn&apos;t exist, may
          have been removed, or the URL is incorrect.
        </p>

        {/* search log — kept the playful detail, just bright now */}
        <div className="mx-auto mt-8 max-w-md rounded-2xl border-[3px] border-black bg-white p-5 text-left shadow-[6px_6px_0px_#000]">
          <div className="flex items-start gap-2 font-mono text-xs leading-relaxed text-neutral-500">
            <span className="shrink-0">$</span>
            <span>grep --recursive &quot;problem&quot; ./dsa</span>
          </div>
          <div className="mt-1.5 flex items-start gap-2 font-mono text-xs leading-relaxed">
            <span className="shrink-0 font-bold text-red-500">✗</span>
            <span className="text-neutral-400">no matches found</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/dsa"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-[3px] border-black bg-[var(--yellow)] px-6 py-3.5 font-black shadow-[5px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <ArrowLeft className="h-4 w-4" />
            All problems
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-[3px] border-black bg-white px-6 py-3.5 font-black shadow-[5px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <Home className="h-4 w-4" />
            Back home
          </Link>
        </div>

        <p className="mx-auto mt-8 max-w-md text-xs leading-relaxed text-neutral-400">
          Explore all solved DSA problems, revise important concepts, and
          continue improving your problem-solving skills with structured
          practice.
        </p>
      </div>
    </main>
  );
}