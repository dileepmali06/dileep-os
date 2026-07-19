"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Database,
  Gauge,
  TrendingUp,
  Zap,
  Activity,
} from "lucide-react";

type ComplexityCardProps = {
  timeComplexity: string;
  spaceComplexity: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const caseItems = (timeComplexity: string) => [
  { icon: Zap, label: "Best case", value: timeComplexity, color: "var(--green)" },
  { icon: Gauge, label: "Average case", value: timeComplexity, color: "var(--yellow)" },
  { icon: TrendingUp, label: "Worst case", value: timeComplexity, color: "var(--pink)" },
];

export default function ComplexityCard({
  timeComplexity,
  spaceComplexity,
}: ComplexityCardProps) {
  const cases = caseItems(timeComplexity);

  return (
    <section className="pb-20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* heading */}
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--pink)] px-5 py-2 font-bold">
              <Activity className="h-5 w-5" />
              Complexity analysis
            </span>

            <h2 className="mt-6 text-3xl font-black lg:text-4xl">Performance breakdown</h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
              Analyze the efficiency of the algorithm by understanding its
              time and space complexity across different execution
              scenarios.
            </p>
          </motion.div>

          {/* unified panel */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[28px] border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]"
          >
            {/* primary metrics */}
            <div className="grid divide-y-[3px] divide-black border-b-[3px] border-black sm:grid-cols-2 sm:divide-x-[3px] sm:divide-y-0">
              <div className="flex items-center gap-4 p-6 sm:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[2px] border-black bg-[var(--yellow)]">
                  <Clock3 className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-500">Time complexity</p>
                  <h3 className="mt-1 font-heading text-3xl font-black">{timeComplexity}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 sm:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[2px] border-black bg-[var(--green)]">
                  <Database className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-500">Space complexity</p>
                  <h3 className="mt-1 font-heading text-3xl font-black">{spaceComplexity}</h3>
                </div>
              </div>
            </div>

            {/* case breakdown */}
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                By execution case
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {cases.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border-[2px] border-black px-4 py-3.5"
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[2px] border-black"
                      style={{ background: item.color }}
                    >
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-neutral-500">{item.label}</p>
                      <p className="truncate text-base font-black">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* summary */}
            <div className="border-t-[3px] border-black bg-neutral-50 p-6 sm:p-8">
              <h3 className="text-lg font-black">Complexity summary</h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-700">
                This solution achieves a <span className="font-black">{timeComplexity}</span>{" "}
                time complexity while using <span className="font-black">{spaceComplexity}</span>{" "}
                extra memory. It is considered the optimal approach for this
                problem and is suitable for coding interviews as well as
                competitive programming.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}