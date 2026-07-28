"use client";

import { motion } from "framer-motion";
import { FolderKanban, Rocket, Layers, Star } from "lucide-react";

import { Container } from "@/components/ui/container";

type ProjectHeroProps = {
  totalProjects?: number;
  liveProjects?: number;
  featuredProjects?: number;
  totalTechnologies?: number;
};

export function ProjectHero({
  totalProjects = 0,
  featuredProjects = 0,
  totalTechnologies = 0,
}: ProjectHeroProps) {
  const stats = [
    { icon: Rocket, label: "Total", value: totalProjects },
    { icon: Star, label: "Featured", value: featuredProjects },
    { icon: Layers, label: "Tech used", value: totalTechnologies },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32">
      {/* faint blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* rotary compass badge with count engraved */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto flex h-28 w-28 items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border-[3px] border-black" />
            <div className="absolute inset-2 rounded-full border-[1.5px] border-dashed border-black/40" />
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-2.5 w-[1.5px] -translate-x-1/2 bg-black/50"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-50px)`,
                }}
              />
            ))}
            <div className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full border-[2px] border-black bg-[var(--yellow)]">
              <span className="font-heading text-2xl font-black leading-none">{totalProjects}</span>
              <span className="text-[8px] font-bold uppercase tracking-wide">Builds</span>
            </div>
            <FolderKanban size={13} className="absolute -right-1 -top-1 text-black/60" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.3em] text-neutral-400"
          >
            Fig. 01 — Project index
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-3 font-heading text-4xl font-black leading-[1.05] sm:text-6xl"
          >
            Things I&apos;ve built
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mx-auto mt-4 max-w-xl text-base text-neutral-600 sm:text-lg"
          >
            A running log of client work, personal experiments, and open-source
            projects — filter by category, type, or status below.
          </motion.p>
        </div>

        {/* measurement ruler stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="relative mx-auto mt-14 max-w-2xl"
        >
          <div className="flex justify-between border-t-[2px] border-black/70 px-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className={`w-[1.5px] bg-black/30 ${i % 4 === 0 ? "h-3 bg-black/60" : "h-1.5"}`}
              />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 rounded-xl border-[2px] border-black bg-white px-4 py-4 shadow-[3px_3px_0px_#000]"
              >
                <stat.icon size={16} className="text-neutral-500" />
                <span className="font-heading text-xl font-black leading-none">{stat.value}</span>
                <span className="text-[9px] font-bold uppercase tracking-wide text-neutral-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}