"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Tag, Sparkles } from "lucide-react";

type RelatedProblem = {
  _id: string;
  slug: string;
  title: string;
  platform: string;
  difficulty: "easy" | "medium" | "hard";
  topics: string[];
  solvedAt: string;
};

type RelatedProblemsProps = {
  problems: RelatedProblem[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const difficultyMeta: Record<string, { color: string; label: string }> = {
  easy: { color: "var(--green)", label: "Easy" },
  medium: { color: "var(--yellow)", label: "Medium" },
  hard: { color: "var(--pink)", label: "Hard" },
};

export default function RelatedProblems({ problems }: RelatedProblemsProps) {
  return (
    <section className="pb-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* heading */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--pink)] px-5 py-2 font-bold">
              <Sparkles className="h-5 w-5" />
              Keep practicing
            </span>

            <h2 className="mt-6 text-4xl font-black lg:text-5xl">Related problems</h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              Practice similar problems to strengthen your understanding of
              the underlying algorithm and improve pattern recognition.
            </p>
          </motion.div>

          {/* cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem) => {
              const difficultyStyle = difficultyMeta[problem.difficulty] ?? difficultyMeta.easy;
              const visibleTopics = problem.topics?.slice(0, 2) ?? [];

              return (
                <motion.div key={problem._id} variants={fadeUp}>
                  <Link
                    href={`/dsa/${problem.slug}`}
                    className="group block rounded-3xl border-4 border-black bg-white p-7 shadow-[8px_8px_0px_#000] transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="rounded-full border-2 border-black px-4 py-1 text-sm font-black"
                        style={{ background: difficultyStyle.color }}
                      >
                        {difficultyStyle.label}
                      </span>

                      <Code2 className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-2xl font-black leading-tight">{problem.title}</h3>

                    {visibleTopics.length > 0 && (
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <Tag className="h-4 w-4 shrink-0" />
                        {visibleTopics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-full border-2 border-black bg-[var(--yellow)] px-3 py-1 text-sm font-bold"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 flex items-center justify-between">
                      <span className="font-bold">Solve now</span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-[var(--blue)] transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {problems.length === 0 && (
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border-4 border-dashed border-black bg-neutral-100 p-12 text-center"
            >
              <Code2 className="mx-auto h-12 w-12" />
              <h3 className="mt-6 text-2xl font-black">No related problems</h3>
              <p className="mt-4 text-neutral-600">
                More practice problems will be added soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}