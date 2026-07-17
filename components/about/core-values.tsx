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

        <div className="mx-auto mt-16 max-w-3xl">
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
                className={`relative overflow-hidden py-10 ${
                  index !== 0 ? "border-t-2 border-black/10" : ""
                }`}
              >
                <span
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-heading text-[7rem] font-black leading-none text-black/[0.05] sm:text-[9rem] ${
                    isEven ? "right-0" : "left-0"
                  }`}
                >
                  {romanNumerals[index % romanNumerals.length]}
                </span>

                <div
                  className={`relative max-w-lg ${
                    isEven ? "" : "ml-auto text-right"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 ${
                      isEven ? "" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-2xl font-black sm:text-3xl">
                      {value.title}
                    </h3>
                  </div>

                  <p className="mt-4 leading-relaxed text-neutral-600">
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