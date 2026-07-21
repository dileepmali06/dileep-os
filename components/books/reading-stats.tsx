"use client";

import { motion } from "framer-motion";
import { Library, CheckCircle2, BookOpen, Clock3, Star, Layers } from "lucide-react";

import { Container } from "../ui/container";

type ReadingStatsProps = {
  stats: {
    totalBooks: number;
    completedBooks: number;
    currentlyReading: number;
    plannedBooks: number;
    favoriteBooks: number;
    recommendedBooks: number;
    totalGenres: number;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ReadingStats({ stats }: ReadingStatsProps) {
  const overview = [
    { title: "Total Books", value: stats.totalBooks ?? 0, icon: Library, color: "var(--pink)" },
    { title: "Completed", value: stats.completedBooks ?? 0, icon: CheckCircle2, color: "var(--green)" },
    { title: "Reading", value: stats.currentlyReading ?? 0, icon: BookOpen, color: "var(--blue)" },
    { title: "Planned", value: stats.plannedBooks ?? 0, icon: Clock3, color: "var(--cream)" },
    { title: "Favorites", value: stats.favoriteBooks ?? 0, icon: Star, color: "var(--yellow)" },
    { title: "Genres", value: stats.totalGenres ?? 0, icon: Layers, color: "var(--green)" },
  ];

  return (
    <section className="pb-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[28px] border-[3px] border-black bg-white shadow-[10px_10px_0px_#000]"
          >
            <div className="grid divide-y-[3px] divide-black sm:grid-cols-3 sm:divide-x-[3px] sm:divide-y-0 xl:grid-cols-6">
              {overview.map((item) => (
                <div key={item.title} className="flex items-center gap-3 p-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                    style={{ background: item.color }}
                  >
                    <item.icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-xl font-black">{item.value}</p>
                    <p className="mt-0.5 truncate text-[11px] font-semibold text-neutral-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}