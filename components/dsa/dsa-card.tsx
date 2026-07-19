"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDashed,
  CircleAlert,
  ExternalLink,
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

type DSAProblemCardProps = {
  problem: DSAProblem;
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

const statusConfig: Record<string, { icon: typeof CheckCircle2; label: string }> = {
  solved: { icon: CheckCircle2, label: "Solved" },
  revising: { icon: CircleDashed, label: "Revising" },
  "need-practice": { icon: CircleAlert, label: "Needs practice" },
};

export default function DSAProblemCard({ problem }: DSAProblemCardProps) {
  const difficultyStyle = difficultyMeta[problem.difficulty] ?? difficultyMeta.easy;
  const status = statusConfig[problem.status] ?? statusConfig.solved;
  const StatusIcon = status.icon;
  const visibleTopics = problem.topics?.slice(0, 2) ?? [];
  const extraTopics = (problem.topics?.length ?? 0) - visibleTopics.length;

  return (
    <Link
      href={`/dsa/${problem.slug.current}`}
      className="grid grid-cols-[44px_1fr_auto] items-center gap-3 border-b-[2px] border-black/10 px-4 py-3.5 transition-colors last:border-b-0 hover:bg-neutral-50 sm:grid-cols-[44px_1fr_110px_140px_90px_70px] sm:gap-4 sm:px-5"
    >
      {/* status icon */}
      <span title={status.label} className="text-neutral-400">
        <StatusIcon
          size={19}
          className={problem.status === "solved" ? "text-[var(--green)]" : ""}
          style={
            problem.status === "solved"
              ? { color: "var(--green)" }
              : problem.status === "revising"
                ? { color: "var(--yellow)" }
                : undefined
          }
        />
      </span>

      {/* title + mobile meta */}
      <div className="min-w-0">
        <p className="truncate text-sm font-bold sm:text-[15px]">{problem.title}</p>
        <div className="mt-1 flex flex-wrap items-center gap-1.5 sm:hidden">
          <span
            className="rounded-full border-[1.5px] border-black px-2 py-0.5 text-[10px] font-bold"
            style={{ background: difficultyStyle.color }}
          >
            {difficultyStyle.label}
          </span>
          <span className="text-[11px] text-neutral-400">
            {platformLabels[problem.platform] ?? problem.platform}
          </span>
        </div>
      </div>

      {/* difficulty - desktop */}
      <span
        className="hidden w-fit rounded-full border-[1.5px] border-black px-2.5 py-0.5 text-[11px] font-bold sm:inline-block"
        style={{ background: difficultyStyle.color }}
      >
        {difficultyStyle.label}
      </span>

      {/* topics - desktop */}
      <div className="hidden items-center gap-1.5 overflow-hidden sm:flex">
        {visibleTopics.map((topic) => (
          <span
            key={topic}
            className="whitespace-nowrap rounded-md border border-black/15 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-600"
          >
            {topic}
          </span>
        ))}
        {extraTopics > 0 && (
          <span className="text-[11px] text-neutral-400">+{extraTopics}</span>
        )}
      </div>

      {/* platform - desktop */}
      <span className="hidden truncate font-mono text-xs text-neutral-400 sm:block">
        {platformLabels[problem.platform] ?? problem.platform}
      </span>

      {/* tries + external link */}
      <div className="flex shrink-0 items-center justify-end gap-2">
        <span className="hidden font-mono text-xs text-neutral-400 sm:block">
          {problem.attempts ?? 0}x
        </span>

        <a href={problem.problemUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label="Open original problem"
          className="flex h-7 w-7 items-center justify-center rounded-lg border-[1.5px] border-black/20 text-neutral-400 hover:border-black hover:text-black"
        >
          <ExternalLink size={13} />
        </a>
        <ArrowUpRight size={16} className="hidden text-neutral-300 sm:block" />
      </div>
    </Link>
  );
}