"use client";

import { Brain, BookOpen, GraduationCap, Cpu, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: LucideIcon[] = [Brain, BookOpen, GraduationCap, Cpu];
const colors = ["var(--green)", "var(--blue)", "var(--pink)", "var(--yellow)"];

interface CurrentlyLearningProps {
  data: {
    currentlyLearning?: string[];
  };
}

export function CurrentlyLearning({ data }: CurrentlyLearningProps) {
  if (!data.currentlyLearning?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Learning"
          title="Currently Learning"
          description="Technologies, concepts and skills I'm actively investing time into right now."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
          {data.currentlyLearning.map((item, index) => {
            const Icon = icons[index % icons.length];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className={`flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-neutral-50 sm:px-8 ${
                  index !== 0 ? "border-t-[2px] border-black/10" : ""
                }`}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                  style={{ background: color }}
                >
                  <Icon size={18} />
                </div>

                <span className="min-w-0 flex-1 font-heading text-lg font-bold leading-tight sm:text-xl">
                  {item}
                </span>

                <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-bold uppercase text-neutral-500">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                      style={{ background: color }}
                    />
                    <span
                      className="relative inline-flex h-2 w-2 rounded-full"
                      style={{ background: color }}
                    />
                  </span>
                  <span className="hidden sm:inline">In Progress</span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}