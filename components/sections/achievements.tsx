"use client";

import {
  Route,
  Trophy,
  Award,
  Rocket,
  GraduationCap,
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
  project: {
    icon: Trophy,
    color: "var(--yellow)",
  },
  certification: {
    icon: Award,
    color: "var(--green)",
  },
  career: {
    icon: Rocket,
    color: "var(--blue)",
  },
  education: {
    icon: GraduationCap,
    color: "var(--pink)",
  },
  learning: {
    icon: Award,
    color: "var(--green)",
  },
  opensource: {
    icon: Rocket,
    color: "var(--blue)",
  },
  personal: {
    icon: Trophy,
    color: "var(--yellow)",
  },
};

const NODE_Y = [80, 227, 373, 520];
const HUB = { x: 140, y: 300 };
const CARD_X = 560;

export function Achievements({ data }: AchievementsProps) {
  const achievements = data.map((item) => {
    const config =
      categoryConfig[
        item.category as keyof typeof categoryConfig
      ];

    return {
      ...item,
      icon: config?.icon ?? Trophy,
      color: config?.color ?? "var(--yellow)",
    };
  });

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
        <div className="relative mt-20 hidden h-[600px] w-full lg:block">
          {/* Connection Lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 900 600"
            preserveAspectRatio="none"
            fill="none"
          >
            {achievements.map((achievement, i) => {
              const y =
                NODE_Y[i] ??
                NODE_Y[NODE_Y.length - 1];

              return (
                <motion.path
                  key={achievement.title}
                  d={`M${HUB.x + 64},${HUB.y}
                    C 380,${HUB.y}
                    420,${y}
                    ${CARD_X},${y}`}
                  stroke="black"
                  strokeWidth={2}
                  strokeDasharray="6 6"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 * i,
                  }}
                />
              );
            })}
          </svg>

          {/* HUB */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(HUB.x / 900) * 100}%`,
              top: `${(HUB.y / 600) * 100}%`,
            }}
          >
            <div className="absolute -inset-6 rounded-full bg-[var(--green)]/15 blur-xl" />

            <div
              className="
                relative
                flex h-28 w-28
                items-center justify-center
                rounded-3xl
                border-[3px] border-black
                bg-[var(--green)]
                shadow-[6px_6px_0_0_#000]
              "
            >
              <Route
                size={38}
                className="text-white"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Achievement Cards */}
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;

            const y =
              NODE_Y[i] ??
              NODE_Y[NODE_Y.length - 1];

            return (
              <motion.div
                key={achievement.title}
                className="
                  group absolute
                  w-[300px]
                  -translate-y-1/2
                "
                style={{
                  left: `${(CARD_X / 900) * 100}%`,
                  top: `${(y / 600) * 100}%`,
                }}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 * i + 0.3,
                }}
              >
                <div
                  className="
                    flex items-start gap-4
                    rounded-2xl
                    border-[3px] border-black
                    bg-white
                    p-5
                    shadow-[5px_5px_0_0_#000]
                    transition-all duration-200
                    hover:-translate-x-[3px]
                    hover:-translate-y-[3px]
                    hover:shadow-[8px_8px_0_0_#000]
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      border-[3px] border-black
                    "
                    style={{
                      background: achievement.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3
                      className="
                        font-heading
                        text-lg
                        font-bold
                        leading-tight
                      "
                    >
                      {achievement.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-relaxed
                        text-neutral-600
                      "
                    >
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
          <div
            className="
              absolute
              bottom-0
              left-6
              top-0
              w-[3px]
              border-l-[3px]
              border-dashed
              border-black
            "
          />

          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
                className="
                  group
                  relative
                  pl-16
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * i,
                }}
              >
                <div
                  className="
                    absolute left-0
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    border-[3px] border-black
                  "
                  style={{
                    background: achievement.color,
                  }}
                >
                  <Icon size={22} />
                </div>

                <div
                  className="
                    rounded-2xl
                    border-[3px] border-black
                    bg-white
                    p-5
                    shadow-[4px_4px_0_0_#000]
                    transition-all duration-200
                    group-hover:-translate-x-[2px]
                    group-hover:-translate-y-[2px]
                    group-hover:shadow-[6px_6px_0_0_#000]
                  "
                >
                  <h3
                    className="
                      font-heading
                      text-lg
                      font-bold
                      leading-tight
                    "
                  >
                    {achievement.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-relaxed
                      text-neutral-600
                    "
                  >
                    {achievement.description}
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