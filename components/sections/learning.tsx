"use client";

import {
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

type Status = "done" | "current" | "locked";

type LearningLog = {
  _id: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  category: string;
  date: string;
  difficulty: "easy" | "medium" | "hard";
  favorite: boolean;
};

const statusMeta: Record<
  Status,
  {
    label: string;
    icon: typeof CheckCircle2;
  }
> = {
  done: {
    label: "Completed",
    icon: CheckCircle2,
  },

  current: {
    label: "In Progress",
    icon: Sparkles,
  },

  locked: {
    label: "Upcoming",
    icon: Lock,
  },
};

export function LearningJourney({
  data,
}: {
  data: LearningLog[];
}) {
  const learningJourney = [
    ...data.map((item) => ({
      year: new Date(item.date)
        .getFullYear()
        .toString(),

      title: item.title,

      description: item.summary,

      tags: item.keyTakeaways,

      color:
        item.category === "frontend"
          ? "var(--yellow)"
          : item.category === "backend"
            ? "var(--blue)"
            : item.category === "java"
              ? "var(--green)"
              : "var(--pink)",

      status: item.favorite
        ? ("current" as Status)
        : ("done" as Status),
    })),

    {
      year: "Future",

      title: "Scalable Systems",

      description:
        "Building expertise in distributed systems, cloud architecture, microservices and high-scale backend systems.",

      tags: [
        "Microservices",
        "Cloud",
        "Distributed Systems",
        "Kubernetes",
      ],

      color: "var(--pink)",

      status: "locked" as Status,
    },
  ];

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Learning Journey"
          title="From Curiosity To Engineering"
          description="The technologies and concepts shaping my journey as a software engineer."
          align="center"
        />

        <div className="relative mt-24">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-1 md:left-1/2 md:-translate-x-1/2">
            <div className="h-full w-full rounded-full border-2 border-dashed border-black/25" />

            <motion.div
              className="absolute left-0 top-0 w-full origin-top rounded-full bg-black"
              style={{ width: "100%" }}
              initial={{ height: "0%" }}
              whileInView={{ height: "75%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="space-y-14 md:space-y-6">
            {learningJourney.map((item, index) => {
              const isRight =
                index % 2 === 1;

              const meta =
                statusMeta[
                  item.status
                ];

              const StatusIcon =
                meta.icon;

              const isLocked =
                item.status ===
                "locked";

              return (
                <div
                  key={`${item.title}-${index}`}
                  className={`relative flex items-start md:items-center ${
                    isRight
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        index * 0.1,
                    }}
                    className={`absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-black text-xs font-black md:left-1/2 ${
                      isLocked
                        ? "bg-white opacity-60"
                        : ""
                    }`}
                    style={{
                      background:
                        isLocked
                          ? undefined
                          : item.color,
                    }}
                  >
                    {isLocked ? (
                      <Lock size={16} />
                    ) : (
                      <StatusIcon size={18} />
                    )}
                  </motion.div>

                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isRight
                        ? 40
                        : -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.1 +
                        0.1,
                    }}
                    className={`ml-16 w-full md:ml-0 md:w-1/2 ${
                      isRight
                        ? "md:pr-12"
                        : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`relative rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000] transition-all duration-300 ${
                        isLocked
                          ? "border-dashed opacity-70 shadow-none"
                          : "hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm font-bold tracking-tight">
                          {item.year}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1 rounded-full border-[2px] border-black px-2.5 py-0.5 text-[11px] font-semibold ${
                            item.status ===
                            "done"
                              ? "bg-[var(--green)]"
                              : item.status ===
                                  "current"
                                ? "bg-[var(--yellow)]"
                                : "bg-neutral-100"
                          }`}
                        >
                          <StatusIcon size={11} />
                          {meta.label}
                        </span>
                      </div>

                      <h3 className="mt-3 font-heading text-2xl font-black sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-relaxed text-neutral-600">
                        {item.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map(
                          (
                            tag,
                            tagIndex
                          ) => (
                            <Badge
                              key={tag}
                              variant={
                                tagIndex %
                                  4 ===
                                0
                                  ? undefined
                                  : tagIndex %
                                        4 ===
                                      1
                                    ? "secondary"
                                    : tagIndex %
                                          4 ===
                                        2
                                      ? "success"
                                      : "danger"
                              }
                            >
                              {tag}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}