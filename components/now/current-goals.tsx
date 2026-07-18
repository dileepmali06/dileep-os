"use client";

import { Target } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CurrentGoalsProps {
  data: {
    currentGoals?: string[];
  };
}

const colors = ["var(--yellow)", "var(--blue)", "var(--pink)", "var(--green)"];

export function CurrentGoals({ data }: CurrentGoalsProps) {
  if (!data.currentGoals?.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Goals"
          title="Current Goals"
          description="The objectives currently guiding my decisions and daily work."
          align="center"
        />

        <div className="mt-20 overflow-x-auto pb-4">
          <div className="mx-auto flex w-max items-end gap-5 border-b-[4px] border-black px-6 sm:gap-8 sm:px-10">
            {data.currentGoals.map((goal, index) => {
              const color = colors[index % colors.length];
              const height = 150 + index * 42;

              return (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                  style={{ height, background: color }}
                  className="flex w-[150px] shrink-0 flex-col items-center justify-between rounded-t-2xl border-[4px] border-b-0 border-black p-4 shadow-[6px_0px_0px_#000] sm:w-[180px]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-white font-heading text-lg font-black">
                    {index + 1}
                  </div>

                  <div className="text-center">
                    <p className="font-heading text-base font-black leading-tight sm:text-lg">
                      {goal}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-white">
                    <Target size={18} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="mt-3 text-center font-mono text-xs text-neutral-400 sm:hidden">
          swipe to see the climb →
        </p>
      </Container>
    </section>
  );
}