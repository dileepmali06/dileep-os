"use client";

import {
  BadgeCheck,
  CalendarDays,
  RefreshCw,
  Star,
  Tags,
} from "lucide-react";

import { Container } from "../ui/container";

type JavaSnippetInfoProps = {
  snippet: {
    featured?: boolean;
    tags?: string[];
    createdAt?: string;
    updatedAt?: string;
  };
};

export default function JavaSnippetInfo({
  snippet,
}: JavaSnippetInfoProps) {
  return (
    <section className="pb-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Status */}

          <div className="rounded-[24px] border-[3px] border-black bg-[var(--yellow)] p-6 shadow-[6px_6px_0px_#000]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
              {snippet.featured ? (
                <Star
                  size={24}
                  fill="black"
                />
              ) : (
                <BadgeCheck size={24} />
              )}
            </div>

            <p className="text-sm font-black uppercase tracking-widest">
              Status
            </p>

            <h3 className="mt-2 text-2xl font-black">
              {snippet.featured ? "Featured" : "Standard"}
            </h3>
          </div>

          {/* Tags */}

          <div className="rounded-[24px] border-[3px] border-black bg-[var(--green)] p-6 shadow-[6px_6px_0px_#000]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
              <Tags size={24} />
            </div>

            <p className="text-sm font-black uppercase tracking-widest">
              Tags
            </p>

            <h3 className="mt-2 text-2xl font-black">
              {snippet.tags?.length ?? 0}
            </h3>

            <p className="mt-1 text-sm text-neutral-700">
              Related Concepts
            </p>
          </div>

          {/* Published */}

          <div className="rounded-[24px] border-[3px] border-black bg-[var(--orange)] p-6 shadow-[6px_6px_0px_#000]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
              <CalendarDays size={24} />
            </div>

            <p className="text-sm font-black uppercase tracking-widest">
              Published
            </p>

            <h3 className="mt-2 text-lg font-black leading-snug">
              {snippet.createdAt
                ? new Date(snippet.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Not Available"}
            </h3>
          </div>

          {/* Updated */}

          <div className="rounded-[24px] border-[3px] border-black bg-[var(--blue)] p-6 shadow-[6px_6px_0px_#000]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
              <RefreshCw size={24} />
            </div>

            <p className="text-sm font-black uppercase tracking-widest">
              Last Updated
            </p>

            <h3 className="mt-2 text-lg font-black leading-snug">
              {snippet.updatedAt
                ? new Date(snippet.updatedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Not Updated"}
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}