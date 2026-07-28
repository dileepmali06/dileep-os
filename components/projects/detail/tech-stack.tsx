"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { colorForIndex } from "../project-meta";

interface TechStackProps {
  techStack?: string[];
}

const rotations = [-4, 3, -2, 5, -3, 2, -5, 4, -2, 3];

export function TechStack({ techStack }: TechStackProps) {
  if (!techStack?.length) return null;

  return (
    <section className=" pt-0">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Fig. stack
            </span>
            <span className="h-px flex-1 bg-black/10" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Built with {techStack.length}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-5 py-2">
            {techStack.map((tech, i) => {
              const color = colorForIndex(i);
              const rotation = rotations[i % rotations.length];

              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.7, rotate: rotation * 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05, type: "spring", bounce: 0.45 }}
                  whileHover={{ rotate: 0, scale: 1.08, zIndex: 10 }}
                  className="relative"
                  style={{ zIndex: i }}
                >
                  <div
                    className="relative flex items-center gap-2 rounded-lg border-[2px] border-dashed px-4 py-2.5 text-sm font-bold uppercase tracking-wide"
                    style={{
                      borderColor: "rgba(0,0,0,0.75)",
                      background: `color-mix(in srgb, ${color} 20%, white)`,
                    }}
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full border border-black"
                      style={{ background: color }}
                    />
                    <span className="font-heading">{tech}</span>

                    {/* corner notch, like a stamp perforation */}
                    <span
                      className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-black/40 bg-[var(--page-bg,#faf7f2)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}