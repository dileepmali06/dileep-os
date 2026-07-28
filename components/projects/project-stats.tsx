"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Star,
  CheckCircle2,
  Clock,
  Archive,
  User,
  Briefcase,
  Code2,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { ProjectStats as ProjectStatsType, colorForIndex } from "./project-meta";

interface ProjectStatsProps {
  stats: ProjectStatsType;
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  const items = [
    { label: "Total", value: stats.totalProjects, icon: LayoutGrid },
    { label: "Featured", value: stats.featuredProjects, icon: Star },
    { label: "Completed", value: stats.completedProjects, icon: CheckCircle2 },
    { label: "In progress", value: stats.inProgressProjects, icon: Clock },
    { label: "Archived", value: stats.archivedProjects, icon: Archive },
    { label: "Personal", value: stats.personalProjects, icon: User },
    { label: "Client", value: stats.clientProjects, icon: Briefcase },
    { label: "Technologies", value: stats.totalTechnologies, icon: Code2 },
  ];

  return (
    <section className="section-padding pb-0 pt-8">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-neutral-400"
        >
          Fig. 02 — Project statistics
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative rounded-2xl border-[3px] border-black bg-white p-7 shadow-[8px_8px_0px_#000] sm:p-9"
        >

          <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-baseline gap-3">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[2px] border-black"
                    style={{ background: colorForIndex(i) }}
                  >
                    <Icon size={12} strokeWidth={2.5} />
                  </div>

                  <span className="shrink-0 font-mono text-xs font-bold uppercase tracking-wide text-neutral-400">
                    {item.label}
                  </span>

                  <span className="flex-1 translate-y-[-4px] border-b border-dotted border-black/25" />

                  <span className="shrink-0 font-heading text-2xl font-black">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}