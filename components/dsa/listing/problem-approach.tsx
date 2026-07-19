"use client";

import { motion } from "framer-motion";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Brain, Zap, Lightbulb } from "lucide-react";

type ProblemApproachProps = {
  bruteForceApproach: PortableTextBlock[];
  optimalApproach: PortableTextBlock[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="leading-relaxed text-neutral-700">{children}</p>
    ),
    h3: ({ children }) => (
      <h4 className="mt-4 text-base font-black first:mt-0">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-neutral-700">{children}</ol>
    ),
  },
  marks: {
    code: ({ children }) => (
      <code className="rounded-md border border-black/15 bg-white px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    strong: ({ children }) => <strong className="font-bold text-neutral-900">{children}</strong>,
  },
};

export default function ProblemApproach({
  bruteForceApproach,
  optimalApproach,
}: ProblemApproachProps) {
  return (
    <section className="pb-20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* heading */}
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--blue)] px-4 py-1.5 text-sm font-bold">
              <Lightbulb className="h-4 w-4" />
              Solution strategy
            </span>

            <h2 className="mt-6 text-3xl font-black lg:text-4xl">From brute force to optimal</h2>
          </motion.div>

          {/* diff compare */}
          <motion.div
            variants={fadeUp}
            className="relative grid gap-6 lg:grid-cols-2 lg:gap-0"
          >
            {/* brute force */}
            <div className="rounded-[24px] border-[3px] border-black bg-[#fdf1ef] p-6 shadow-[6px_6px_0px_#000] sm:p-7 lg:rounded-r-none">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black bg-[var(--pink)]">
                  <Brain size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-500">
                    Before
                  </p>
                  <h3 className="text-lg font-black">Brute force</h3>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {bruteForceApproach?.length ? (
                  <PortableText value={bruteForceApproach} components={portableTextComponents} />
                ) : (
                  <p className="text-sm text-neutral-400">No notes added yet.</p>
                )}
              </div>
            </div>

            {/* vs badge */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-black bg-white font-heading text-sm font-black shadow-[3px_3px_0px_#000]">
                VS
              </div>
            </div>

            {/* optimal */}
            <div className="rounded-[24px] border-[3px] border-black bg-[#eef8ec] p-6 shadow-[6px_6px_0px_#000] sm:p-7 lg:rounded-l-none lg:border-l-0">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black bg-[var(--green)]">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-500">
                    After
                  </p>
                  <h3 className="text-lg font-black">Optimal</h3>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {optimalApproach?.length ? (
                  <PortableText value={optimalApproach} components={portableTextComponents} />
                ) : (
                  <p className="text-sm text-neutral-400">No notes added yet.</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}