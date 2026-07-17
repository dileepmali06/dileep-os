"use client";

import {
  Laptop,
  Monitor,
  Keyboard,
  MousePointer2,
  Wifi,
  Mic,
  Headphones,
  Fan,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface HardwareSectionProps {
  data: string[];
}

const iconRules: [RegExp, LucideIcon][] = [
  [/laptop|macbook|notebook/i, Laptop],
  [/monitor|display|screen/i, Monitor],
  [/keyboard/i, Keyboard],
  [/mouse/i, MousePointer2],
  [/wifi|router|network/i, Wifi],
  [/mic/i, Mic],
  [/headphone|headset|earphone/i, Headphones],
  [/cool|fan|stand/i, Fan],
];

function getIcon(label: string): LucideIcon {
  const match = iconRules.find(([pattern]) => pattern.test(label));
  return match ? match[1] : Cpu;
}

export function HardwareSection({ data }: HardwareSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section id="hardware" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Hardware"
          title="The Physical Setup"
          description="The devices and equipment powering my development workflow."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((item, index) => {
            const Icon = getIcon(item);

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative mx-auto w-full max-w-[170px] rounded-lg border-[3px] border-black bg-white p-5 shadow-[5px_5px_0px_#000] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]"
              >
                {/* pins */}
                <div className="absolute -left-2 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-[3px] w-2.5 bg-black" />
                  ))}
                </div>
                <div className="absolute -right-2 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-[3px] w-2.5 bg-black" />
                  ))}
                </div>

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg border-[2px] border-black bg-[var(--yellow)]">
                  <Icon size={20} />
                </div>

                <h3 className="mt-3 text-center font-heading text-sm font-black leading-tight">
                  {item}
                </h3>

                <div className="mt-2 flex items-center justify-center gap-1.5">
                  <span className="font-mono text-[10px] text-neutral-400">
                    HW-{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}