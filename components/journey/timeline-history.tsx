"use client";

import { GitCommit, GitBranchPlus, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TimelineItem {
  _id: string;
  title: string;
  date: string;
  type: string;
  highlight?: boolean;
}

interface TimelineHistoryProps {
  timeline: TimelineItem[];
}

const typeColors = {
  learning: "var(--yellow)",
  project: "var(--blue)",
  achievement: "var(--green)",
  career: "var(--pink)",
  education: "var(--cream)",
  certification: "var(--yellow)",
};

export function TimelineHistory({
  timeline,
}: TimelineHistoryProps) {
  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Git History"
          title="The Commit History Of My Career"
          description="Every milestone is like a commit — some small, some transformative, all important."
          align="center"
        />

        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[32px] border-[4px] border-black shadow-[12px_12px_0px_#000]">

          {/* Terminal Header */}
          <div className="flex items-center gap-3 border-b-[4px] border-black bg-neutral-100 px-6 py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500 border border-black/20" />
              <span className="h-3 w-3 rounded-full bg-yellow-400 border border-black/20" />
              <span className="h-3 w-3 rounded-full bg-green-500 border border-black/20" />
            </div>

            <span className="font-mono text-sm font-semibold text-neutral-600">
              git log --graph --decorate --oneline
            </span>
          </div>

          {/* Timeline Body */}
          <div className="relative bg-neutral-950 px-8 py-12">

            {/* Main Line */}
            <div className="absolute left-[47px] top-0 bottom-0 w-[3px] bg-white/10" />

            <motion.div
              className="absolute left-[47px] top-0 w-[3px] bg-white"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
            />

            <div className="space-y-12">

              {timeline.map(
                (item, index) => {
                  const color =
                    typeColors[
                      item.type as keyof typeof typeColors
                    ] || "white";

                  const hash =
                    item._id.slice(
                      -7
                    );

                  return (
                    <motion.div
                      key={item._id}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          index *
                          0.1,
                      }}
                      className="relative flex gap-6"
                    >

                      {/* Commit Node */}
                      <div
                        className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[3px] border-black"
                        style={{
                          background:
                            color,
                        }}
                      >
                        {item.highlight ? (
                          <Star
                            size={
                              14
                            }
                          />
                        ) : (
                          <GitCommit
                            size={
                              14
                            }
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">

                        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">

                          <span className="text-emerald-400">
                            {hash}
                          </span>

                          <span className="text-white/20">
                            •
                          </span>

                          <span className="text-white/40">
                            {new Date(
                              item.date
                            ).getFullYear()}
                          </span>

                          <span
                            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase text-black"
                            style={{
                              background:
                                color,
                            }}
                          >
                            {item.type}
                          </span>

                          {item.highlight && (
                            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[10px] text-yellow-300">
                              Major Milestone
                            </span>
                          )}
                        </div>

                        <h3 className="mt-4 font-heading text-2xl font-black text-white">
                          {item.title}
                        </h3>

                      </div>
                    </motion.div>
                  );
                }
              )}

              {/* Future */}
              <div className="relative flex gap-6">

                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-dashed border-white/40">
                  <GitBranchPlus
                    size={14}
                    className="text-white/50"
                  />
                </div>

                <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6">

                  <div className="font-mono text-xs text-white/40">
                    working-tree
                  </div>

                  <h3 className="mt-3 font-heading text-2xl font-black text-white/70">
                    Future Commits Loading...
                  </h3>

                  <p className="mt-2 text-white/40">
                    Backend engineering, distributed systems,
                    open source and products yet to be built.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}