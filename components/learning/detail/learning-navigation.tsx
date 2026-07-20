import Link from "next/link";
import { ArrowLeft, ArrowRight, NotebookPen } from "lucide-react";

import { Container } from "../../ui/container";

type LearningNavigationProps = {
  previousLog?: {
    title: string;
    slug: string;
  } | null;
  nextLog?: {
    title: string;
    slug: string;
  } | null;
};

export default function LearningNavigation({
  previousLog,
  nextLog,
}: LearningNavigationProps) {
  return (
    <section className="pb-4">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="relative flex flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[7px_7px_0px_#000] sm:flex-row">
            {previousLog ? (
              <Link
                href={`/learning/${previousLog.slug}`}
                className="group flex flex-1 items-center gap-3 border-b-[3px] border-black p-5 transition-colors hover:bg-neutral-50 sm:border-b-0 sm:border-r-[3px]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] border-black transition-transform group-hover:-translate-x-1">
                  <ArrowLeft size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                    Previous entry
                  </p>
                  <p className="truncate text-sm font-black">{previousLog.title}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1 border-b-[3px] border-black p-5 text-sm text-neutral-300 sm:border-b-0 sm:border-r-[3px]">
                No earlier entry
              </div>
            )}

            {nextLog ? (
              <Link
                href={`/learning/${nextLog.slug}`}
                className="group flex flex-1 items-center justify-end gap-3 p-5 text-right transition-colors hover:bg-neutral-50"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                    Next entry
                  </p>
                  <p className="truncate text-sm font-black">{nextLog.title}</p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] border-black transition-transform group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </div>
              </Link>
            ) : (
              <div className="flex-1 p-5 text-right text-sm text-neutral-300">
                No later entry
              </div>
            )}

            {/* center badge */}
            <Link
              href="/learning"
              aria-label="All entries"
              className="absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-black bg-[var(--blue)] shadow-[3px_3px_0px_#000] transition-transform hover:scale-105 sm:flex"
            >
              <NotebookPen size={16} />
            </Link>
          </div>

          {/* mobile all-entries link */}
          <Link
            href="/learning"
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl border-[2px] border-black bg-[var(--blue)] px-5 py-3 text-sm font-bold sm:hidden"
          >
            <NotebookPen size={16} />
            All entries
          </Link>
        </div>
      </Container>
    </section>
  );
}