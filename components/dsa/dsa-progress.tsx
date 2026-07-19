"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  CircleCheckBig,
  CircleDashed,
  CircleAlert,
  Target,
} from "lucide-react";

type DSAProgressProps = {
  stats: {
    totalProblems: number;
    easy: number;
    medium: number;
    hard: number;
    solved: number;
    revising: number;
    needPractice: number;
  };
};

const RING_SIZE = 200;
const STROKE = 16;
const RADIUS = (RING_SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const difficultyRows = [
  { key: "easy" as const, label: "Easy", color: "var(--green)" },
  { key: "medium" as const, label: "Medium", color: "var(--yellow)" },
  { key: "hard" as const, label: "Hard", color: "var(--pink)" },
];

const statusRows = [
  { key: "solved" as const, label: "Solved", color: "var(--green)", icon: CircleCheckBig },
  { key: "revising" as const, label: "Revising", color: "var(--yellow)", icon: CircleDashed },
  { key: "needPractice" as const, label: "Need practice", color: "var(--pink)", icon: CircleAlert },
];

function CountUp({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <>{display}</>;
}

function MiniBar({
  label,
  value,
  total,
  color,
  inView,
  delay,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
  inView: boolean;
  delay: number;
}) {
  const percentage = total === 0 ? 0 : Math.min(Math.round((value / total) * 100), 100);

  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-bold">{label}</span>
        <span className="text-neutral-500">
          {value} <span className="text-neutral-300">·</span> {percentage}%
        </span>
      </div>
      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full border-[1.5px] border-black bg-neutral-100">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
          className="h-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function DSAProgress({ stats }: DSAProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const solvedPercentage =
    stats.totalProblems === 0
      ? 0
      : Math.min(Math.round((stats.solved / stats.totalProblems) * 100), 100);

  const dashOffset = CIRCUMFERENCE - (CIRCUMFERENCE * solvedPercentage) / 100;

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--yellow)] px-4 py-1.5 text-sm font-bold">
            <Target size={16} />
            Progress overview
          </span>

          <h2 className="mt-6 text-4xl font-black lg:text-5xl">Track your learning journey</h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[32px] border-[3px] border-black bg-white p-7 shadow-[10px_10px_0px_#000] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
            {/* radial ring */}
            <div className="mx-auto flex flex-col items-center">
              <div className="relative" style={{ width: RING_SIZE, height: RING_SIZE }}>
                <svg width={RING_SIZE} height={RING_SIZE} className="-rotate-90">
                  <circle
                    cx={RING_SIZE / 2}
                    cy={RING_SIZE / 2}
                    r={RADIUS}
                    fill="none"
                    className="stroke-neutral-200"
                    strokeWidth={STROKE}
                  />
                  <motion.circle
                    cx={RING_SIZE / 2}
                    cy={RING_SIZE / 2}
                    r={RADIUS}
                    fill="none"
                    stroke="var(--green)"
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    animate={isInView ? { strokeDashoffset: dashOffset } : {}}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-heading text-5xl font-black">
                    <CountUp value={stats.totalProblems} inView={isInView} />
                  </span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wide text-neutral-400">
                    Total problems
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-full border-[2px] border-black bg-[var(--green)] px-4 py-1 text-sm font-bold">
                {solvedPercentage}% solved
              </div>
            </div>

            {/* breakdown */}
            <div className="space-y-8">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-neutral-400">
                  By difficulty
                </p>
                <div className="space-y-4">
                  {difficultyRows.map((row, index) => (
                    <MiniBar
                      key={row.key}
                      label={row.label}
                      value={stats[row.key]}
                      total={stats.totalProblems}
                      color={row.color}
                      inView={isInView}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-neutral-400">
                  By status
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {statusRows.map((row) => (
                    <div
                      key={row.key}
                      className="rounded-xl border-[2px] border-black px-4 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <row.icon size={15} style={{ color: row.color }} />
                        <span className="text-xs font-bold text-neutral-500">{row.label}</span>
                      </div>
                      <p className="mt-1.5 text-2xl font-black">{stats[row.key]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}