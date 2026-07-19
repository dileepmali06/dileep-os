"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";

type NavigationCardProps = {
  previousProblem?: {
    slug: string;
    title: string;
  } | null;

  nextProblem?: {
    slug: string;
    title: string;
  } | null;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function NavigationCard({ previousProblem, nextProblem }: NavigationCardProps) {
  return (
    <section className="pb-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black sm:text-3xl">Continue learning</h2>
            <p className="mt-2 text-sm text-neutral-600 sm:text-base">
              Practice consistently and move through the roadmap one problem
              at a time.
            </p>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-[24px] border-[3px] border-black bg-white shadow-[7px_7px_0px_#000] sm:flex-row">
            {/* previous */}
            {previousProblem ? (
              <Link
                href={`/dsa/${previousProblem.slug}`}
                className="group flex flex-1 items-center gap-3 border-b-[3px] border-black p-5 transition-colors hover:bg-neutral-50 sm:border-b-0 sm:border-r-[3px] sm:p-6"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] border-black transition-transform group-hover:-translate-x-1">
                  <ArrowLeft size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                    Previous
                  </p>
                  <p className="truncate text-sm font-black sm:text-base">
                    {previousProblem.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex-1 border-b-[3px] border-black p-5 text-sm text-neutral-300 sm:border-b-0 sm:border-r-[3px] sm:p-6">
                No previous problem
              </div>
            )}

            {/* next */}
            {nextProblem ? (
              <Link
                href={`/dsa/${nextProblem.slug}`}
                className="group flex flex-1 items-center justify-end gap-3 p-5 text-right transition-colors hover:bg-neutral-50 sm:p-6"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                    Next
                  </p>
                  <p className="truncate text-sm font-black sm:text-base">{nextProblem.title}</p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] border-black transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ) : (
              <div className="flex-1 p-5 text-right text-sm text-neutral-300 sm:p-6">
                No next problem
              </div>
            )}

            {/* all problems - floating center button */}
            <Link
              href="/dsa"
              aria-label="All problems"
              className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-black bg-[var(--green)] shadow-[3px_3px_0px_#000] transition-transform hover:scale-105 sm:flex"
            >
              <Grid2X2 size={18} />
            </Link>
          </div>

          {/* mobile all-problems link */}
          <Link
            href="/dsa"
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl border-[2px] border-black bg-[var(--green)] px-5 py-3 text-sm font-bold sm:hidden"
          >
            <Grid2X2 size={16} />
            All problems
          </Link>
        </motion.div>
      </div>
    </section>
  );
}