"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  TriangleAlert,
  Target,
  Lightbulb,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

type KeyLearningProps = {
  keyLearning: string;
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function KeyLearning({
  keyLearning,
}: KeyLearningProps) {
  return (
    <section className="pb-20">

      <div className="container mx-auto max-w-7xl px-4">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Heading */}

          <motion.div
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border-2
                border-black
                bg-purple-300
                px-5
                py-2
                font-bold
              "
            >
              <Brain className="h-5 w-5" />
              Key Learning
            </span>

            <h2 className="mt-6 text-4xl font-black lg:text-5xl">
              What You Should Remember
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-neutral-600
              "
            >
              Every coding problem teaches a pattern. Focus on the
              concepts, avoid common mistakes, and remember the
              interview-worthy takeaways instead of memorizing code.
            </p>

          </motion.div>

          {/* Main Learning Card */}

          <motion.div
            variants={fadeUp}
            className="
              rounded-3xl
              border-4
              border-black
              bg-yellow-300
              p-8
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-black
                  bg-white
                "
              >
                <BookOpen className="h-7 w-7" />
              </div>

              <div>

                <h3 className="text-2xl font-black">
                  Core Learning
                </h3>

                <p className="text-neutral-700">
                  The biggest takeaway from this problem.
                </p>

              </div>

            </div>

            <div
              className="
                mt-8
                rounded-2xl
                border-2
                border-black
                bg-white
                p-6
              "
            >
              <p className="text-lg leading-8 font-medium">
                {keyLearning}
              </p>
            </div>

          </motion.div>

          {/* Revision Cards */}

          <div className="mt-10 grid gap-6 lg:grid-cols-3">

            <motion.div
              variants={fadeUp}
              className="
                rounded-2xl
                border-2
                border-black
                bg-green-300
                p-6
              "
            >
              <Target className="h-7 w-7" />

              <h3 className="mt-5 text-xl font-black">
                Interview Tip
              </h3>

              <p className="mt-4 leading-7">
                Explain why the optimized solution works before writing
                the final code. Interviewers care about your thinking
                process as much as your implementation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                rounded-2xl
                border-2
                border-black
                bg-red-300
                p-6
              "
            >
              <TriangleAlert className="h-7 w-7" />

              <h3 className="mt-5 text-xl font-black">
                Common Mistake
              </h3>

              <p className="mt-4 leading-7">
                Avoid jumping directly to coding. Always analyze edge
                cases, constraints, and the optimal approach before
                implementation.
              </p>
            </motion.div>
                        <motion.div
              variants={fadeUp}
              className="
                rounded-2xl
                border-2
                border-black
                bg-[var(--blue)]
                p-6
              "
            >
              <Lightbulb className="h-7 w-7" />

              <h3 className="mt-5 text-xl font-black">
                Revision Note
              </h3>

              <p className="mt-4 leading-7">
                Focus on understanding the algorithm&apos;s pattern instead
                of memorizing the code. Once the logic becomes clear,
                implementing the solution in any programming language
                becomes much easier.
              </p>
            </motion.div>

          </div>

          {/* Final Summary */}

          <motion.div
            variants={fadeUp}
            className="
              mt-10
              rounded-3xl
              border-4
              border-black
              bg-white
              p-8
              shadow-[8px_8px_0px_#000]
            "
          >
            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-black
                  bg-yellow-300
                "
              >
                <Sparkles className="h-7 w-7" />
              </div>

              <div>

                <h3 className="text-2xl font-black">
                  Final Takeaway
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Every DSA problem introduces a reusable pattern.
                  Instead of remembering the exact solution, remember
                  the thought process that led to it. Over time, these
                  patterns will help you solve new problems much faster
                  and perform better in coding interviews.
                </p>

                <div className="mt-6 flex items-center gap-3 font-semibold">

                  <CheckCircle2 className="h-5 w-5 text-green-600" />

                  <span>
                    Learn the pattern, not the code.
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}