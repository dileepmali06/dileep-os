"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Lock,
  ChevronDown,
  ArrowRight,
  GitBranch,
} from "lucide-react";

type DSAStage = {
  title: string;
  description: string;
  completed: boolean;
  topics: string[];
};

const roadmap: DSAStage[] = [
  {
    title: "Fundamentals",
    description: "Build a strong foundation with basic data structures and problem-solving patterns.",
    completed: true,
    topics: ["Arrays", "Strings", "Math", "Recursion", "Hashing"],
  },
  {
    title: "Intermediate",
    description: "Master common interview patterns and improve logical thinking.",
    completed: true,
    topics: ["Stack", "Queue", "Linked List", "Binary Search", "Sliding Window"],
  },
  {
    title: "Advanced",
    description: "Learn advanced data structures and optimization techniques.",
    completed: false,
    topics: ["Trees", "Heap", "Trie", "Graph", "Backtracking"],
  },
  {
    title: "Expert",
    description: "Solve complex interview problems and competitive programming questions.",
    completed: false,
    topics: ["Dynamic Programming", "Greedy", "Bit Manipulation", "Segment Tree", "Disjoint Set"],
  },
  {
    title: "System Thinking",
    description: "Apply DSA knowledge to build scalable software and real-world systems.",
    completed: false,
    topics: ["Patterns", "Optimization", "Complexity", "Design Thinking", "Interview Prep"],
  },
];

const colors = ["var(--yellow)", "var(--green)", "var(--blue)", "var(--pink)", "var(--yellow)"];

export default function DSARoadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    roadmap.findIndex((stage) => !stage.completed)
  );

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--green)] px-5 py-2 font-bold">
            <GitBranch className="h-5 w-5" />
            Learning roadmap
          </span>

          <h2 className="mt-6 text-4xl font-black lg:text-5xl">My DSA learning journey</h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-neutral-600">
            A structured path from fundamentals to advanced interview and
            competitive programming problems.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
          {roadmap.map((stage, index) => {
            const isOpen = openIndex === index;
            const isLocked = !stage.completed && index !== roadmap.findIndex((s) => !s.completed);
            const color = colors[index % colors.length];

            return (
              <div
                key={stage.title}
                className={index !== 0 ? "border-t-[3px] border-black" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-neutral-50 sm:px-7"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2.5px] border-black font-heading text-lg font-black"
                    style={{ background: stage.completed ? color : "white" }}
                  >
                    {stage.completed ? <CheckCircle2 size={20} /> : index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-black sm:text-xl">{stage.title}</h3>
                      {isLocked && <Lock size={14} className="text-neutral-400" />}
                    </div>
                    <p className="mt-0.5 text-sm text-neutral-500">
                      {stage.topics.length} topics
                      {stage.completed ? " · completed" : ""}
                    </p>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pl-[76px] pr-5 sm:px-7 sm:pl-[92px]">
                        <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                          {stage.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {stage.topics.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-lg border-[1.5px] border-black px-3 py-1.5 text-xs font-bold"
                              style={{ background: color }}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                        <button
                          disabled={isLocked}
                          className="mt-5 inline-flex items-center gap-2 rounded-xl border-[2px] border-black bg-black px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:border-black/20 disabled:bg-neutral-200 disabled:text-neutral-400"
                        >
                          Explore topics
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}