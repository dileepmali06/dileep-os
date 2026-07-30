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
          title="What I'm Learning"
          description="The technologies and skills I'm actively investing in."
          align="center"
        />

        <div className="mt-10 sm:mt-14 lg:mt-16 py-6  -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-x-visible sm:px-0 sm:pb-0">
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
                className="relative w-60 sm:w-auto shrink-0 snap-start overflow-hidden rounded-2xl border-[3px] border-black bg-white p-5 sm:p-6 shadow-[5px_5px_0px_#000] sm:shadow-[6px_6px_0px_#000] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#000]"
              >
                {/* Background Card Numbers */}
                <span className="absolute -right-2 -top-5 sm:-top-6 select-none font-heading text-7xl sm:text-8xl font-black text-black/5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon Container */}
                <div
                  className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border-[2.5px] sm:border-[3px] border-black"
                  style={{ background: color }}
                >
                  <Icon className="size-5 sm:size-5.5" />
                </div>

                {/* Item Text Title */}
                <h3 className="relative mt-5 sm:mt-6 font-heading text-lg sm:text-xl font-black leading-tight text-neutral-900 wrap-break-word">
                  {item}
                </h3>

                {/* Bottom Pulse Indicator */}
                <div className="relative mt-4 sm:mt-5 flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30" />
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-black" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-neutral-500 tracking-wide uppercase">
                    Actively learning
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Swipe Helper Visibility Fix */}
        <p className="mt-1 text-center font-mono text-[11px] text-neutral-400 sm:hidden select-none">
          swipe to see more →
        </p>
      </Container>
    </section>
  );
}
