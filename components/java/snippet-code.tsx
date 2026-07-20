"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  AlignLeft,
  Hash,
  Type,
  FolderTree,
  Clock3,
} from "lucide-react";

import CodeBlock from "@/components/common/code-block";

type SnippetCodeProps = {
  snippet: {
    title: string;
    code: string;
    category: string;
    complexity: string;
  };
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

export default function SnippetCode({
  snippet,
}: SnippetCodeProps) {
  const code = snippet.code ?? "";

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
    {
      icon: FolderTree,
      label: "Category",
      value: snippet.category,
    },
    {
      icon: Clock3,
      label: "Complexity",
      value: snippet.complexity,
    },
  ];

  return (
    <section className="pb-16 sm:pb-20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border-[2px]
                border-black
                bg-[var(--orange)]
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

          {/* Heading */}

          <h2 className="mt-4 text-2xl font-black sm:text-3xl lg:text-4xl">
            Complete Java Solution
          </h2>

          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Production-ready Java implementation for quick revision,
            interview preparation, and real-world development.
          </p>

          {/* Stats */}

          <div className="mt-6 flex flex-wrap gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border-[2px]
                  border-black
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-bold
                  shadow-[2px_2px_0px_#000]
                "
              >
                <stat.icon className="h-4 w-4 text-neutral-600" />

                <span>{stat.value}</span>

                <span className="text-neutral-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Code */}

          <div className="mt-8">
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
                  Java code is not available yet.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}