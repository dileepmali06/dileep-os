"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { colorForIndex } from "../project-meta";

interface ChallengesProps {
  challenges?: string[];
}

export function Challenges({ challenges }: ChallengesProps) {
  if (!challenges?.length) return null;

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-[var(--pink)]">
              <AlertTriangle size={16} />
            </span>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Case log
              </p>
              <h3 className="font-heading text-lg font-black">Challenges Faced</h3>
            </div>
          </div>

          <div className="relative pl-2">
            {/* connecting spine */}
            <div className="absolute bottom-2 left-[23px] top-2 w-[2px] bg-black/10" />

            <div className="flex flex-col gap-7">
              {challenges.map((item, i) => {
                const color = colorForIndex(i);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="relative flex gap-5"
                  >
                    {/* node marker */}
                    <span
                      className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-black font-mono text-xs font-bold shadow-[3px_3px_0px_#000]"
                      style={{ background: color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* case card */}
                    <div className="min-w-0 flex-1 rounded-xl border-[2px] border-black bg-white px-5 py-4 shadow-[3px_3px_0px_#000]">
                      <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        Obstacle {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="leading-relaxed text-neutral-700">{item}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}