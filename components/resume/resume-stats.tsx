"use client";

import { motion } from "framer-motion";
import { FileText, Star, ShieldCheck, Award } from "lucide-react";

import { Container } from "../ui/container";

type ResumeStatsProps = {
  stats: {
    totalResumes: number;
    featuredResumes: number;
    atsFriendlyResumes: number;
    primaryResumes: number;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ResumeStats({ stats }: ResumeStatsProps) {
  const overview = [
    { title: "Total Versions", value: stats.totalResumes ?? 0, icon: FileText, color: "var(--blue)" },
    { title: "Featured", value: stats.featuredResumes ?? 0, icon: Star, color: "var(--yellow)" },
    { title: "ATS Friendly", value: stats.atsFriendlyResumes ?? 0, icon: ShieldCheck, color: "var(--green)" },
    { title: "Primary", value: stats.primaryResumes ?? 0, icon: Award, color: "var(--pink)" },
  ];

  return (
    <section className="pb-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-lg border-[2px] border-black bg-[#fbf8f0] px-6 py-5 shadow-[6px_6px_0px_#000]">
            <div className="absolute left-6 top-6 h-3 w-3 rounded-full border border-black/30 bg-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />

            <p className="pl-8 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Document summary
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 pl-8 sm:grid-cols-4">
              {overview.map((item) => (
                <div key={item.title} className="flex items-center gap-2.5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[2px] border-black"
                    style={{ background: item.color }}
                  >
                    <item.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-xl font-black leading-none">{item.value}</p>
                    <p className="mt-0.5 truncate text-[10px] font-semibold text-neutral-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}