"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

import { Container } from "@/components/ui/container";
import { colorForIndex } from "../project-meta";

interface LearningsProps {
  learnings?: string[];
}

export function Learnings({ learnings }: LearningsProps) {
  if (!learnings?.length) return null;

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-[var(--yellow)]">
              <Lightbulb size={16} />
            </span>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Margin notes
              </p>
              <h3 className="font-heading text-lg font-black">What I Learned</h3>
            </div>
          </div>

          <div className="relative">
            {/* center spine */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-black/10 sm:block" />

            <div className="flex flex-col gap-6">
              {learnings.map((item, i) => {
                const color = colorForIndex(i);
                const alignRight = i % 2 !== 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: alignRight ? 16 : -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className={`relative flex sm:w-[calc(50%+1px)] ${
                      alignRight ? "sm:ml-auto sm:justify-start sm:pl-8" : "sm:justify-end sm:pr-8"
                    }`}
                  >
                    {/* connector dot on the spine */}
                    <span
                      className={`absolute top-4 hidden h-3 w-3 -translate-y-1/2 rounded-full border-[2px] border-black sm:block ${
                        alignRight ? "-left-1.5" : "-right-1.5"
                      }`}
                      style={{ background: color }}
                    />

                    <div
                      className={`w-full rounded-xl border-[2px] border-black bg-white px-5 py-4 shadow-[3px_3px_0px_#000] ${
                        alignRight ? "rounded-tl-none" : "rounded-tr-none"
                      }`}
                    >
                      <div className="mb-1.5 flex items-center gap-2">
                        <span
                          className="h-2 w-2 shrink-0 rounded-full border border-black sm:hidden"
                          style={{ background: color }}
                        />
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                          Note {String(i + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-neutral-700">{item}</p>
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