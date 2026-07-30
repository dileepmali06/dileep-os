"use client";

import {
  Heart,
  Rocket,
  Brain,
  Target,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CoreValue {
  _id: string;
  title: string;
  description: string;
}

interface Props {
  data: CoreValue[];
}

const iconRules: [RegExp, LucideIcon][] = [
  [/care|people|user|empathy/i, Heart],
  [/grow|ship|build|progress/i, Rocket],
  [/curio|learn|think|mind/i, Brain],
  [/trust|integrity|honest|quality/i, ShieldCheck],
  [/speed|fast|action|energy/i, Zap],
];

function getIcon(label: string): LucideIcon {
  const match = iconRules.find(([pattern]) => pattern.test(label));
  return match ? match[1] : Target;
}

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function CoreValuesSection({ data }: Props) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Values"
          title="Principles I Build By"
          description="The ideas and principles that guide my work and learning."
          align="center"
        />

        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-3xl">
          {data.map((value, index) => {
            const Icon = getIcon(`${value.title} ${value.description}`);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={value._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative overflow-hidden py-8 sm:py-10 ${
                  index !== 0 ? "border-t-2 border-black/10" : ""
                }`}
              >
                <span
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-heading text-7xl sm:text-[7rem] md:text-[9rem] font-black leading-none text-black/4 ${
                    isEven ? "right-0" : "left-0"
                  }`}
                >
                  {romanNumerals[index % romanNumerals.length]}
                </span>

                <div
                  className={`relative max-w-xl ${
                    isEven ? "mr-auto text-left" : "ml-auto text-left sm:text-right"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 ${
                      isEven ? "flex-row" : "flex-row sm:flex-row-reverse"
                    }`}
                  >
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border-[2.5px] sm:border-[3px] border-black bg-white ">
                      <Icon className="size-4.5 sm:size-5" />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 wrap-break-word">
                      {value.title}
                    </h3>
                  </div>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 wrap-break-word">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
