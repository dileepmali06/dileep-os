"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Clock3,
  Database,
  Trophy,
  CheckCircle2,
  CircleDashed,
  CircleAlert,
} from "lucide-react";

type DSAProblem = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  platform: string;
  problemUrl: string;
  difficulty: string;
  topics: string[];
  timeComplexity: string;
  spaceComplexity: string;
  keyLearning: string;
  solvedAt: string;
  featured: boolean;
  status: string;
  attempts: number;
};

type ProblemHeroProps = {
  problem: DSAProblem;
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

const platformLabels: Record<string, string> = {
  leetcode: "LeetCode",
  gfg: "GeeksForGeeks",
  hackerrank: "HackerRank",
  codeforces: "Codeforces",
};

const statusConfig: Record<string, { label: string; icon: typeof CheckCircle2; color: string }> = {
  solved: { label: "Solved", icon: CheckCircle2, color: "var(--green)" },
  revising: { label: "Revising", icon: CircleDashed, color: "var(--yellow)" },
  "need-practice": { label: "Needs practice", icon: CircleAlert, color: "var(--pink)" },
};

export default function ProblemHero({ problem }: ProblemHeroProps) {
  const difficultyStyle = difficultyMeta[problem.difficulty] ?? difficultyMeta.easy;
  const status = statusConfig[problem.status] ?? statusConfig.solved;
  const StatusIcon = status.icon;

  const stats = [
    { icon: Calendar, label: "Solved on", value: new Date(problem.solvedAt).toLocaleDateString() },
    { icon: Trophy, label: "Attempts", value: problem.attempts },
    { icon: Clock3, label: "Time complexity", value: problem.timeComplexity },
    { icon: Database, label: "Space complexity", value: problem.spaceComplexity },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* top nav */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-wrap items-center justify-between gap-4"
          >
            <Link
              href="/dsa"
              className="inline-flex items-center gap-2 rounded-xl border-[2px] border-black bg-white px-4 py-2.5 text-sm font-bold shadow-[3px_3px_0px_#000] transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to problems
            </Link>

            <Link
              href={problem.problemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-[2px] border-black bg-[var(--blue)] px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            >
              Solve on {platformLabels[problem.platform] ?? problem.platform}
              <ExternalLink className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-6 rounded-[28px] border-[3px] border-black bg-white p-7 shadow-[8px_8px_0px_#000] sm:p-9 lg:grid-cols-[1fr_260px] lg:gap-10"
          >
            {/* left: title & meta */}
            <div>
              <div className="flex flex-wrap gap-2.5">
                <span
                  className="rounded-full border-[2px] border-black px-3.5 py-1 text-xs font-bold uppercase"
                  style={{ background: difficultyStyle.color }}
                >
                  {difficultyStyle.label}
                </span>

                <span className="rounded-full border-[2px] border-black bg-neutral-100 px-3.5 py-1 text-xs font-bold uppercase text-neutral-600">
                  {platformLabels[problem.platform] ?? problem.platform}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-black px-3.5 py-1 text-xs font-bold">
                  <StatusIcon size={13} style={{ color: status.color }} />
                  {status.label}
                </span>

                {problem.featured && (
                  <span className="rounded-full border-[2px] border-black bg-[var(--pink)] px-3.5 py-1 text-xs font-bold">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="mt-6 font-heading text-3xl font-black leading-tight lg:text-5xl">
                {problem.title}
              </h1>

              {problem.keyLearning && (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
                  {problem.keyLearning}
                </p>
              )}

              {problem.topics?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {problem.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg border-[1.5px] border-black/20 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* right: compact stat panel */}
            <div className="rounded-2xl border-[2px] border-black bg-neutral-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                Problem stats
              </p>

              <div className="mt-4 space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                      <stat.icon size={14} />
                      {stat.label}
                    </span>
                    <span className="text-right text-sm font-black">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}