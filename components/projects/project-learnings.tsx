"use client";

import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

interface Props {
  project: {
    learnings?: string[];
  };
}

export function ProjectLearnings({ project }: Props) {
  if (!project.learnings?.length) return null;

  return (
    <section className="pb-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--green)]">
              <Lightbulb size={18} />
            </div>
            <h2 className="font-heading text-3xl font-black sm:text-4xl">
              Key Learnings
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {project.learnings.map((item: string, index: number) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex items-start gap-4 rounded-xl border-[2px] border-black bg-white p-4 shadow-[4px_4px_0px_#000]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-[var(--green)] text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-0.5 leading-relaxed text-neutral-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}