"use client";

import Link from "next/link";
import {
  Route,
  Trophy,
  Award,
  Rocket,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";

interface Achievement {
  title: string;
  description: string;
  category: string;
  metric?: string;
}

interface AchievementsProps {
  data: Achievement[];
}

const categoryConfig = {
  project: { icon: Trophy, color: "var(--yellow)" },
  certification: { icon: Award, color: "var(--green)" },
  career: { icon: Rocket, color: "var(--blue)" },
  education: { icon: GraduationCap, color: "var(--pink)" },
  learning: { icon: Award, color: "var(--green)" },
  opensource: { icon: Rocket, color: "var(--blue)" },
  personal: { icon: Trophy, color: "var(--yellow)" },
};

const CARD_HEIGHT = 116;
const CARD_GAP = 20;
const HUB_X = 130;
const CARD_X = 520;
const CARD_WIDTH = 340;
const VIEWBOX_WIDTH = 900;

export function Achievements({ data }: AchievementsProps) {
  const achievements = data.map((item) => {
    const config = categoryConfig[item.category as keyof typeof categoryConfig];
    return {
      ...item,
      icon: config?.icon ?? Trophy,
      color: config?.color ?? "var(--yellow)",
    };
  });

  const count = achievements.length;
  const slot = CARD_HEIGHT + CARD_GAP;
  const contentHeight = count > 0 ? count * slot - CARD_GAP : 0;
  const hubY = contentHeight / 2;

  const cardTop = achievements.map((_, i) => i * slot);

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones Along The Journey"
          description="A few highlights from my learning and building journey."
          align="center"
        />

        {/* ================= DESKTOP ================= */}
        <div
          className="relative mt-20 hidden w-full lg:block"
          style={{ height: contentHeight }}
        >
          {/* Connection Lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${contentHeight}`}
            preserveAspectRatio="none"
            fill="none"
          >
            {achievements.map((achievement, i) => {
              const yCenter = cardTop[i] + CARD_HEIGHT / 2;

              return (
                <motion.path
                  key={achievement.title}
                  d={`M${HUB_X + 64},${hubY}
                    C 340,${hubY}
                    380,${yCenter}
                    ${CARD_X},${yCenter}`}
                  stroke="black"
                  strokeWidth={2}
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 * i }}
                />
              );
            })}
          </svg>

          {/* HUB */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(HUB_X / VIEWBOX_WIDTH) * 100}%`, top: hubY }}
          >
            <span className="absolute -inset-6 rounded-full bg-[var(--green)]/15 blur-xl" />
            <span className="absolute -inset-2 animate-ping rounded-3xl bg-[var(--green)]/20" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border-[3px] border-black bg-[var(--green)] shadow-[6px_6px_0_0_#000]">
              <Route size={38} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;
            const top = cardTop[i];

            return (
              <motion.div
                key={achievement.title}
                className="group absolute"
                style={{
                  left: `${(CARD_X / VIEWBOX_WIDTH) * 100}%`,
                  top,
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
              >
                <div className="flex h-full items-start gap-4 rounded-2xl border-[3px] border-black bg-white p-5 shadow-[5px_5px_0_0_#000] transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_0_#000]">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black transition-transform duration-200 group-hover:scale-105"
                    style={{ background: achievement.color }}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-base font-bold leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative mt-14 space-y-8 lg:hidden">
          <div className="absolute bottom-0 left-6 top-0 w-[3px] border-l-[3px] border-dashed border-black" />

          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
                className="group relative pl-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div
                  className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black"
                  style={{ background: achievement.color }}
                >
                  <Icon size={22} />
                </div>

                <div className="rounded-2xl border-[3px] border-black bg-white p-5 shadow-[4px_4px_0_0_#000] transition-all duration-200 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] group-hover:shadow-[6px_6px_0_0_#000]">
                  <h3 className="font-heading text-lg font-bold leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA — view full achievements page */}
        <div className="mt-14 flex justify-center lg:mt-20">
          <Link
            href="/achievements"
            className="group inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-white px-6 py-3.5 font-black shadow-[5px_5px_0px_#000] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]"
          >
            View all achievements
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}