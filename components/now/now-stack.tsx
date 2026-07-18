"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface NowStackProps {
  data: {
    currentStack?: string[];
  };
}

const colors = ["var(--green)", "var(--blue)", "var(--pink)", "var(--yellow)"];

const rotations = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3"];

export function NowStack({ data }: NowStackProps) {
  if (!data.currentStack?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="My Current Tech Stack"
          description="The technologies I'm using the most right now."
          align="center"
        />

        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-4 sm:gap-5">
          {data.currentStack.map((tech, index) => {
            const color = colors[index % colors.length];
            const rotation = rotations[index % rotations.length];
            const isFeatured = index === 0;

            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06, type: "spring", bounce: 0.4 }}
                whileHover={{ rotate: 0, scale: 1.06, y: -4 }}
                className={`group relative flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-white px-5 py-3.5 shadow-[6px_6px_0px_#000] transition-shadow duration-200 hover:shadow-[8px_8px_0px_#000] ${rotation} ${
                  isFeatured ? "sm:px-6 sm:py-4" : ""
                }`}
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full border-[2px] border-black"
                  style={{ background: color }}
                />

                <span
                  className={`font-heading font-bold ${
                    isFeatured ? "text-lg sm:text-xl" : "text-base sm:text-lg"
                  }`}
                >
                  {tech}
                </span>

                {isFeatured && (
                  <span
                    className="absolute -right-2 -top-3 rotate-6 rounded-full border-[2px] border-black px-2 py-0.5 text-[9px] font-bold text-black shadow-[2px_2px_0px_#000]"
                    style={{ background: color }}
                  >
                    most used
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}