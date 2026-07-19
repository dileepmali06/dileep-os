"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Clock3,
  Database,
  Layers3,
  CheckCircle2,
} from "lucide-react";

type DSAProblem = {
  timeComplexity: string;
  spaceComplexity: string;
  attempts: number;
  status: string;
  keyLearning: string;
};

type ProblemInfoProps = {
  problem: DSAProblem;
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

function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string | number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        rounded-2xl
        border-2
        border-black
        bg-white
        p-6
      "
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />

        <span className="font-semibold text-neutral-500">
          {title}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-black">
        {value}
      </h3>
    </motion.div>
  );
}

export default function ProblemInfo({
  problem,
}: ProblemInfoProps) {
  return (
    <section className="pb-20">

      <div className="container mx-auto max-w-7xl px-4">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          transition={{
            staggerChildren: 0.08,
          }}
        >

          {/* Heading */}

          <motion.div
            variants={fadeUp}
            className="mb-12"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border-2
                border-black
                bg-yellow-300
                px-5
                py-2
                font-bold
              "
            >
              <BookOpen className="h-5 w-5" />
              Problem Overview
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Understanding The Problem
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              Before jumping into the implementation, its
              important to understand the thinking process,
              approaches, and complexity behind the solution.
            </p>
          </motion.div>

          {/* Stats */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <InfoCard
              icon={Target}
              title="Attempts"
              value={problem.attempts}
            />

            <InfoCard
              icon={Clock3}
              title="Time Complexity"
              value={problem.timeComplexity}
            />

            <InfoCard
              icon={Database}
              title="Space Complexity"
              value={problem.spaceComplexity}
            />

            <InfoCard
              icon={CheckCircle2}
              title="Status"
              value={problem.status}
            />

          </div>

          {/* Key Learning */}

          <motion.div
            variants={fadeUp}
            className="
              mt-10
              rounded-3xl
              border-4
              border-black
              bg-[var(--yellow)]
              p-8
              shadow-[8px_8px_0px_#000]
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border-2
                  border-black
                  bg-white
                "
              >
                <Layers3 className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-black">
                Key Learning
              </h3>

            </div>

            <p className="mt-6 whitespace-pre-line text-lg leading-8">
              {problem.keyLearning || "No key learning added yet."}
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}