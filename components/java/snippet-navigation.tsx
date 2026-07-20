"use client";

import Link from "next/link";

import { ArrowLeft, ArrowRight, Library } from "lucide-react";

import { Container } from "../ui/container";

type NavigationItem = {
  title: string;
  slug: string;
} | null;

type JavaNavigationProps = {
  previous: NavigationItem;
  next: NavigationItem;
};

export default function SnippetNavigation({
  previous,
  next,
}: JavaNavigationProps) {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Previous */}

          <div>
            {previous ? (
              <Link
                href={`/java/${previous.slug}`}
                className="group flex h-full rounded-[24px] border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000] transition hover:-translate-y-1"
              >
                <div>
                  <ArrowLeft className="mb-4" />

                  <p className="text-sm text-neutral-500">
                    Previous Snippet
                  </p>

                  <h3 className="mt-2 font-black">
                    {previous.title}
                  </h3>
                </div>
              </Link>
            ) : (
              <div className="h-full rounded-[24px] border-[3px] border-dashed border-black p-6 opacity-50">
                <p>No Previous Snippet</p>
              </div>
            )}
          </div>

          {/* Library */}

          <Link
            href="/java"
            className="flex flex-col items-center justify-center rounded-[24px] border-[3px] border-black bg-[var(--orange)] p-6 text-center shadow-[6px_6px_0px_#000]"
          >
            <Library size={34} />

            <h3 className="mt-4 text-xl font-black">
              Java Library
            </h3>

            <p className="mt-2 text-sm">
              Browse All Java Snippets
            </p>
          </Link>

          {/* Next */}

          <div>
            {next ? (
              <Link
                href={`/java/${next.slug}`}
                className="group flex h-full justify-end rounded-[24px] border-[3px] border-black bg-white p-6 text-right shadow-[6px_6px_0px_#000] transition hover:-translate-y-1"
              >
                <div>
                  <ArrowRight className="ml-auto mb-4" />

                  <p className="text-sm text-neutral-500">
                    Next Snippet
                  </p>

                  <h3 className="mt-2 font-black">
                    {next.title}
                  </h3>
                </div>
              </Link>
            ) : (
              <div className="h-full rounded-[24px] border-[3px] border-dashed border-black p-6 text-right opacity-50">
                <p>No Next Snippet</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}