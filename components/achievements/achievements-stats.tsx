"use client";

import { Trophy, Star, Target, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

interface Achievement {
  featured?: boolean;
  category?: string;
  achievementDate?: string;
}

interface AchievementsStatsProps {
  achievements: Achievement[];
}

export function AchievementsStats({ achievements }: AchievementsStatsProps) {
  const totalAchievements = achievements.length;

  const featuredAchievements = achievements.filter((item) => item.featured).length;

  const categories = new Set(
    achievements.map((item) => item.category).filter(Boolean)
  ).size;

  const firstAchievement = achievements
    .filter((item) => item.achievementDate)
    .sort(
      (a, b) =>
        new Date(a.achievementDate || "").getTime() -
        new Date(b.achievementDate || "").getTime()
    )[0];

  const startYear = firstAchievement?.achievementDate
    ? new Date(firstAchievement.achievementDate).getFullYear()
    : new Date().getFullYear();

  const stats = [
    { label: "Total Achievements", value: totalAchievements, icon: Trophy, color: "var(--yellow)" },
    { label: "Featured Wins", value: featuredAchievements, icon: Star, color: "var(--pink)" },
    { label: "Categories", value: categories, icon: Target, color: "var(--green)" },
    { label: "Journey Started", value: startYear, icon: CalendarDays, color: "var(--blue)" },
  ];

  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x-2 sm:divide-black/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center px-4 text-center"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-black"
                style={{ background: stat.color }}
              >
                <stat.icon size={17} />
              </div>

              <p className="mt-4 font-heading text-4xl font-black leading-none sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}