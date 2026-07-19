"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Coffee, AlignLeft, Hash, Type } from "lucide-react";

import CodeBlock from "@/components/common/code-block";

type ProblemSolutionProps = {
  javaSolution?: string | null;
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function ProblemSolution({
  javaSolution,
}: ProblemSolutionProps) {
  const code = javaSolution ?? "";

  const codeStats = useMemo(() => {
    const lines = code.split("\n");
    const nonEmptyLines = lines.filter(
      (line) => line.trim().length > 0
    );

    return {
      totalLines: lines.length,
      codeLines: nonEmptyLines.length,
      characters: code.length,
    };
  }, [code]);

  const stats = [
    {
      icon: AlignLeft,
      label: "Lines",
      value: codeStats.totalLines,
    },
    {
      icon: Hash,
      label: "Code Lines",
      value: codeStats.codeLines,
    },
    {
      icon: Type,
      label: "Characters",
      value: codeStats.characters,
    },
  ];

  return (
    <section className="pb-16 sm:pb-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border-[2px]
                border-black
                bg-[var(--green)]
                px-3.5
                py-1.5
                text-xs
                font-bold
                sm:text-sm
              "
            >
              <Coffee className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Java Implementation
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-black sm:text-3xl lg:text-4xl">
            Complete Java Solution
          </h2>

          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            The optimized implementation, ready for interview preparation and
            quick revision.
          </p>

          {/* Stats */}

          <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border-[2px]
                  border-black
                  bg-white
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  shadow-[2px_2px_0px_#000]
                  sm:text-sm
                "
              >
                <stat.icon className="h-3.5 w-3.5 text-neutral-500" />

                {stat.value}

                <span className="font-medium text-neutral-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Code */}

          <div className="mt-6 sm:mt-7">
            {code.trim().length > 0 ? (
              <CodeBlock
                language="Java"
                filename="Solution.java"
                code={code}
              />
            ) : (
              <div
                className="
                  flex
                  min-h-56
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-dashed
                  border-black
                  bg-neutral-100
                  p-8
                  text-center
                "
              >
                <p className="text-neutral-600">
                  Java solution is not available yet.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}