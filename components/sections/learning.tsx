"use client";

import { CheckCircle2, Lock, Sparkles, Plane } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";

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

const statusMeta: Record<Status, { stamp: string; icon: typeof CheckCircle2 }> = {
  done: { stamp: "Boarded", icon: CheckCircle2 },
  current: { stamp: "Boarding", icon: Sparkles },
  locked: { stamp: "Gate closed", icon: Lock },
};

const categoryMeta: Record<string, { label: string; color: string }> = {
  frontend: { label: "Frontend", color: "var(--yellow)" },
  backend: { label: "Backend", color: "var(--blue)" },
  java: { label: "Java", color: "var(--green)" },
};

const zoneLabel: Record<LearningLog["difficulty"], string> = {
  easy: "Zone 1",
  medium: "Zone 2",
  hard: "Zone 3",
};

const tilt = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]"];

function Barcode({ seed }: { seed: number }) {
  const bars = Array.from({ length: 14 }, (_, i) => ((seed + i * 7) % 5) + 2);
  return (
    <div className="flex items-end gap-[2px]">
      {bars.map((h, i) => (
        <span key={i} className="w-[2px] bg-black" style={{ height: `${h * 2}px` }} />
      ))}
    </div>
  );
}

export function LearningJourney({ data }: { data: LearningLog[] }) {
  const entries = [
    ...data.map((item, i) => {
      const category = categoryMeta[item.category] ?? {
        label: item.category || "General",
        color: "var(--pink)",
      };

      return {
        id: item._id,
        seed: i + 1,
        year: new Date(item.date).getFullYear().toString(),
        title: item.title,
        description: item.summary,
        takeaways: item.keyTakeaways,
        difficulty: item.difficulty as LearningLog["difficulty"] | undefined,
        categoryLabel: category.label as string | undefined,
        color: category.color,
        status: (item.favorite ? "current" : "done") as Status,
      };
    }),
    {
      id: "future",
      seed: data.length + 1,
      year: "Future",
      title: "Scalable Systems",
      description:
        "Building expertise in distributed systems, cloud architecture, microservices and high-scale backend systems.",
      takeaways: ["Microservices", "Cloud", "Distributed systems", "Kubernetes"],
      difficulty: undefined as LearningLog["difficulty"] | undefined,
      categoryLabel: undefined as string | undefined,
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

        <div className="mx-auto mt-14 max-w-2xl rounded-[2rem] border-[3px] border-dashed border-black/30 bg-[#FFFCF5] p-4 sm:p-8">
          {/* Route strip */}
          <div className="flex items-center justify-between gap-2 rounded-full border-[3px] border-black bg-white px-4 py-2.5 shadow-[4px_4px_0px_#000] sm:px-6">
            <span className="font-heading text-xs font-black uppercase tracking-wide sm:text-sm">
              Curiosity
            </span>
            <span className="h-0 flex-1 border-t-2 border-dashed border-black/30" />
            <Plane size={16} className="shrink-0 rotate-90" />
            <span className="h-0 flex-1 border-t-2 border-dashed border-black/30" />
            <span className="font-heading text-xs font-black uppercase tracking-wide sm:text-sm">
              Engineering
            </span>
          </div>

          {/* Tickets */}
          <div className="mt-10 space-y-6">
            {entries.map((item, index) => {
              const meta = statusMeta[item.status];
              const StatusIcon = meta.icon;
              const isLocked = item.status === "locked";
              const isCurrent = item.status === "current";
              const legTraveled = entries[index - 1]?.status === "done";

              return (
                <div key={item.id}>
                  {index > 0 && (
                    <div className="mx-auto flex h-10 w-8 flex-col items-center justify-center gap-1">
                      <span
                        className={`h-full w-0 border-l-2 ${
                          legTraveled ? "border-black" : "border-dashed border-black/25"
                        }`}
                      />
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className={`relative overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0px_#000] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] ${
                      isLocked ? "opacity-70" : ""
                    } ${tilt[index % tilt.length]}`}
                  >
                    <div className="h-2 w-full" style={{ background: item.color }} />

                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold tracking-wide text-neutral-400">
                          LJ · {item.year}
                        </span>

                        <span
                          className={`inline-flex -rotate-3 items-center gap-1 rounded-md border-2 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest ${
                            item.status === "done"
                              ? "border-[var(--green)] text-black"
                              : item.status === "current"
                                ? "border-black bg-[var(--yellow)] text-black"
                                : "border-dashed border-black/30 text-neutral-400"
                          }`}
                        >
                          <StatusIcon size={11} />
                          {meta.stamp}
                        </span>
                      </div>

                      <h3 className="mt-3 font-heading text-xl font-black sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {item.description}
                      </p>

                      {item.takeaways?.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                          {item.takeaways.map((takeaway, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs leading-relaxed text-neutral-600 sm:text-sm"
                            >
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: item.color }}
                              />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Perforation */}
                    <div className="relative border-t-2 border-dashed border-black/25">
                      <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full border-[3px] border-black bg-[#FFFCF5]" />
                      <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full border-[3px] border-black bg-[#FFFCF5]" />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6">
                      <div className="flex flex-wrap items-center gap-3">
                        {item.categoryLabel && (
                          <span className="text-[11px] font-bold uppercase tracking-wide text-neutral-500">
                            {item.categoryLabel}
                          </span>
                        )}
                        {item.difficulty && (
                          <span className="text-[11px] font-bold uppercase tracking-wide text-neutral-500">
                            {zoneLabel[item.difficulty]}
                          </span>
                        )}
                      </div>

                      <Barcode seed={item.seed} />
                    </div>

                    {isCurrent && (
                      <span
                        className="absolute -right-2 -top-2 h-5 w-5 animate-ping rounded-full"
                        style={{ background: item.color, opacity: 0.6 }}
                      />
                    )}
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