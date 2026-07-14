"use client";

import { GitCommit, GitBranchPlus } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";

const timelineItems = [
  {
    hash: "a3f9c21",
    year: "2021",
    title: "Started Coding Journey",
    description:
      "Started exploring programming fundamentals and web development.",
    color: "var(--yellow)",
  },
  {
    hash: "e71bd08",
    year: "2023",
    title: "Entered Full Stack Development",
    description:
      "Learned React, Node.js and started building real-world projects.",
    color: "var(--blue)",
  },
  {
    hash: "c4d82f1",
    year: "2024",
    title: "Built Production Projects",
    description:
      "Worked on client projects and improved full stack engineering skills.",
    color: "var(--green)",
  },
  {
    hash: "f0a67e9",
    year: "2025",
    title: "Java + DSA + System Design",
    description:
      "Currently focusing on backend engineering and scalable systems.",
    color: "var(--pink)",
    current: true,
  },
];

const future = {
  title: "Software Engineer",
  description:
    "Building expertise in distributed systems, architecture and backend engineering.",
};

export function Timeline() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Timeline"
          description="The journey from curiosity to engineering."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[24px] border-[4px] border-black shadow-[10px_10px_0px_#000]">
          {/* terminal title bar */}
          <div className="flex items-center gap-3 border-b-[3px] border-black bg-neutral-100 px-5 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full border border-black/40 bg-red-500" />
              <span className="h-3 w-3 rounded-full border border-black/40 bg-yellow-400" />
              <span className="h-3 w-3 rounded-full border border-black/40 bg-green-500" />
            </div>
            <span className="font-mono text-xs font-semibold text-neutral-600">
              git log --graph --oneline
            </span>
          </div>

          {/* commit graph */}
          <div className="relative bg-neutral-900 px-6 py-10 sm:px-10">
            {/* branch line */}
            <div className="absolute left-[38px] top-10 bottom-10 w-[2px] bg-white/15 sm:left-[58px]" />
            <motion.div
              className="absolute left-[38px] top-10 w-[2px] origin-top bg-white/70 sm:left-[58px]"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 5rem)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <div className="space-y-9">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.hash}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  className="relative flex gap-4 pl-2 sm:gap-6"
                >
                  <div
                    className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[3px] border-black"
                    style={{ background: item.color }}
                  >
                    <GitCommit size={11} className="text-black" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                      <span className="text-emerald-400">{item.hash}</span>
                      <span className="text-white/40">·</span>
                      <span className="text-white/50">{item.year}</span>
                      {item.current && (
                        <span className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                          HEAD -&gt; main
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-relaxed text-white/60 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* uncommitted / future entry */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: timelineItems.length * 0.12 }}
                className="relative flex gap-4 pl-2 sm:gap-6"
              >
                <div className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[3px] border-dashed border-white/40 bg-transparent">
                  <GitBranchPlus size={11} className="text-white/50" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 font-mono text-xs text-white/40">
                    <span>working-tree —</span>
                    <span className="inline-block h-3 w-[6px] animate-pulse bg-white/50 align-middle" />
                  </div>

                  <h3 className="mt-2 font-heading text-xl font-bold text-white/70 sm:text-2xl">
                    {future.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-white/40 sm:text-base">
                    {future.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}