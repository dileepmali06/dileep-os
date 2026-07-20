import Link from "next/link";
import { FileSearch, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-24">
      <div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
        {/* header - java exception style */}
        <div className="flex items-center gap-3.5 border-b-[3px] border-black bg-[var(--yellow)] px-6 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[2px] border-black bg-white">
            <FileSearch size={18} />
          </div>
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/60">
              404 error
            </p>
            <h1 className="text-lg font-black">Snippet not found</h1>
          </div>
        </div>

        {/* body */}
        <div className="p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-neutral-600">
            The Java snippet you&apos;re looking for doesn&apos;t exist or may
            have been removed.
          </p>

          {/* mock exception block */}
          <div className="mt-5 rounded-lg border-[2px] border-black bg-neutral-950 p-4">
            <p className="font-mono text-xs leading-relaxed text-[var(--yellow)]">
              ClassNotFoundException: JavaSnippet
            </p>
            <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-neutral-500">
              <p>at java.snippet.Registry.lookup(Registry.java)</p>
              <p>at java.snippet.Page.render(Page.java)</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/java"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-[2px] border-black bg-[var(--orange)] px-6 py-3 font-black shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft size={16} />
              Browse snippets
            </Link>

            <Link
              href="/"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-[2px] border-black bg-white px-6 py-3 font-black shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-0.5"
            >
              <Home size={16} />
              Back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}