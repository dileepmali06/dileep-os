"use client";

import { Rocket, CalendarDays, Target, Check, Flame } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Goal {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  targetDate?: string;
  status?: string;
  priority?: number;
}

interface FutureRoadmapProps {
  goals: Goal[];
}

const statusMeta: Record<string, { color: string; label: string }> = {
  planned: { color: "var(--yellow)", label: "Planned" },
  progress: { color: "var(--blue)", label: "In progress" },
  completed: { color: "var(--green)", label: "Completed" },
};

function spanClasses(priority: number) {
  if (priority >= 3) {
    return "sm:col-span-2 sm:row-span-2";
  }
  if (priority === 2) {
    return "sm:col-span-2";
  }
  return "";
}

export function FutureRoadmap({ goals }: FutureRoadmapProps) {
  if (!goals.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Future"
          title="Where I'm Heading"
          description="The milestones and ambitions currently shaping my long-term direction."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-5xl auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 sm:grid-cols-4">
          {goals.map((goal, index) => {
            const status = statusMeta[goal.status ?? ""] ?? statusMeta.planned;
            const isCompleted = goal.status === "completed";
            const isProgress = goal.status === "progress";
            const priority = Math.min(Math.max(goal.priority ?? 1, 1), 3);
            const isBig = priority >= 3;
            const year = goal.targetDate ? new Date(goal.targetDate).getFullYear() : null;

            return (
              <motion.div
                key={goal._id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000] transition-transform duration-200 hover:-translate-y-1 sm:p-7 ${spanClasses(
                  priority
                )}`}
              >
                {/* corner status tag */}
                <div
                  className="absolute -right-9 top-4 w-32 rotate-45 border-y-[2px] border-black py-1 text-center text-[10px] font-bold uppercase tracking-wide"
                  style={{ background: status.color }}
                >
                  {status.label}
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                    style={{ background: isCompleted ? status.color : "white" }}
                  >
                    {isCompleted ? (
                      <Check size={18} strokeWidth={3} />
                    ) : isProgress ? (
                      <Flame size={17} />
                    ) : (
                      <Rocket size={17} />
                    )}
                  </div>

                  {goal.category && (
                    <span className="rounded-full border-[2px] border-black px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-neutral-500">
                      {goal.category}
                    </span>
                  )}
                </div>

                <h3
                  className={`mt-4 font-heading font-black leading-tight ${
                    isBig ? "text-3xl" : "text-lg"
                  }`}
                >
                  {goal.title}
                </h3>

                {goal.description && (
                  <p
                    className={`mt-3 leading-relaxed text-neutral-600 ${
                      isBig ? "text-sm sm:text-base" : "text-sm"
                    } ${!isBig ? "line-clamp-2" : ""}`}
                  >
                    {goal.description}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-5 text-xs font-semibold text-neutral-500">
                  {year && (
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {year}
                    </span>
                  )}

                  <span className="flex items-center gap-1" title={`Priority ${priority}/3`}>
                    <Target size={13} />
                    {[1, 2, 3].map((level) => (
                      <span
                        key={level}
                        className={`h-1.5 w-1.5 rounded-full border-[1.5px] border-black ${
                          level <= priority ? "bg-black" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}