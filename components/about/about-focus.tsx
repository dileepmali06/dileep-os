"use client";

import {
  Coffee,
  Binary,
  Network,
  Leaf,
  Boxes,
  Cloud,
  Target,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutFocusProps {
  data: {
    currentFocus?: string[];
  };
}

const colors = ["var(--blue)", "var(--pink)", "var(--green)", "var(--yellow)"];

const iconRules: [RegExp, LucideIcon][] = [
  [/java/i, Coffee],
  [/dsa|data structure|algorithm/i, Binary],
  [/system design|architecture|distributed/i, Network],
  [/spring/i, Leaf],
  [/microservice|docker|container/i, Boxes],
  [/cloud|aws|azure|deploy/i, Cloud],
];

function getIcon(label: string): LucideIcon {
  const match = iconRules.find(([pattern]) => pattern.test(label));
  return match ? match[1] : Target;
}

export function AboutFocus({ data }: AboutFocusProps) {
  const items = data.currentFocus ?? [];

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="section-padding pt-0">
      <Container>
        <SectionHeading
          eyebrow="Current Focus"
          title="What I'm Working On Right Now"
          description="The technologies and skills I'm actively investing in."
          align="center"
        />

        <div className="mt-16 py-10 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:justify-center sm:px-0">
          {items.map((item, index) => {
            const Icon = getIcon(item);
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[9px_9px_0px_#000] sm:w-[240px]"
              >
                <span className="absolute -right-2 -top-6 select-none font-heading text-8xl font-black text-black/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black"
                  style={{ background: color }}
                >
                  <Icon size={22} />
                </div>

                <h3 className="relative mt-6 font-heading text-xl font-black leading-tight">
                  {item}
                </h3>

                <div className="relative mt-5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    Actively learning
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-2 text-center font-mono text-xs text-neutral-400 sm:hidden">
          swipe to see more →
        </p>
      </Container>
    </section>
  );
}