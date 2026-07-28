"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Check } from "lucide-react";

import { Container } from "@/components/ui/container";

export function ProjectNavigation() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ url: window.location.href });
      } catch {
        // user cancelled — no-op
      }
      return;
    }

    if (typeof navigator !== "undefined") {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 border-t-[2px] border-dashed border-black/15" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-300">
              — end of file —
            </span>
            <span className="h-px flex-1 border-t-[2px] border-dashed border-black/15" />
          </div>

          <div className="mt-6 flex overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0px_#000]">
            <Link
              href="/projects"
              className="flex flex-1 items-center justify-center gap-2 px-5 py-4 text-sm font-bold transition-colors hover:bg-neutral-50"
            >
              <ArrowLeft size={15} /> All projects
            </Link>

            <span className="w-[2px] border-l-[2px] border-dashed border-black/15" />

            <button
              onClick={handleShare}
              className="flex flex-1 items-center justify-center gap-2 px-5 py-4 text-sm font-bold transition-colors hover:bg-neutral-50"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-green-600" /> Copied
                </>
              ) : (
                <>
                  <Share2 size={15} /> Share project
                </>
              )}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}