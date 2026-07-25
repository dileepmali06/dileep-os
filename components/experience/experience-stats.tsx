"use client";

import { motion } from "framer-motion";
import { Briefcase, Star, Radio, Home } from "lucide-react";

import { Container } from "../ui/container";

type ExperienceStatsProps = {
  stats: {
    totalExperiences: number;
    featuredExperiences: number;
    currentExperiences: number;
    remoteExperiences: number;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ExperienceStats({ stats }: ExperienceStatsProps) {
  const items = [
    { icon: Briefcase, label: "Roles logged", value: stats?.totalExperiences ?? 0, color: "var(--blue)" },
    { icon: Star, label: "Featured", value: stats?.featuredExperiences ?? 0, color: "var(--yellow)" },
    { icon: Radio, label: "Currently active", value: stats?.currentExperiences ?? 0, color: "var(--green)" },
    { icon: Home, label: "Remote roles", value: stats?.remoteExperiences ?? 0, color: "var(--pink)" },
  ];

  return (
    <section className="pb-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-lg border-[2px] border-black bg-[#fbf8f0] shadow-[8px_8px_0px_#000]">
            {/* punch holes along the top */}
            <div className="flex items-center justify-evenly border-b-[2px] border-dashed border-black/25 bg-neutral-900 px-4 py-2.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-[#fbf8f0]" />
              ))}
            </div>

            <div className="flex items-center justify-between px-6 pt-4 sm:px-8">
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                Time card
              </p>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Career summary
              </p>
            </div>

            {/* punched entry rows */}
            <div className="grid divide-y-[1.5px] divide-dashed divide-black/15 px-6 py-2 sm:grid-cols-2 sm:divide-x-[1.5px] sm:divide-y-0 sm:px-8 lg:grid-cols-4">
              {items.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-3.5 py-4 sm:px-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[2px] border-black"
                    style={{ background: item.color }}
                  >
                    <item.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-xl font-black">{item.value}</p>
                    <p className="mt-0.5 truncate text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t-[2px] border-dashed border-black/20 px-6 py-3 text-center sm:px-8">
              <p className="font-mono text-[10px] text-neutral-400">— clocked in since day one —</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}