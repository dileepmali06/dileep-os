import {
  Trophy,
  Star,
  Target,
  CalendarDays,
} from "lucide-react";

import { Container } from "@/components/ui/container";

interface Achievement {
  featured?: boolean;
  category?: string;
  achievementDate?: string;
}

interface AchievementsStatsProps {
  achievements: Achievement[];
}

export function AchievementsStats({
  achievements,
}: AchievementsStatsProps) {
  const totalAchievements =
    achievements.length;

  const featuredAchievements =
    achievements.filter(
      (item) => item.featured
    ).length;

  const categories =
    new Set(
      achievements
        .map(
          (item) =>
            item.category
        )
        .filter(Boolean)
    ).size;

  const firstAchievement =
    achievements
      .filter(
        (item) =>
          item.achievementDate
      )
      .sort(
        (a, b) =>
          new Date(
            a.achievementDate ||
              ""
          ).getTime() -
          new Date(
            b.achievementDate ||
              ""
          ).getTime()
      )[0];

  const startYear =
    firstAchievement
      ?.achievementDate
      ? new Date(
          firstAchievement.achievementDate
        ).getFullYear()
      : new Date().getFullYear();

  const stats = [
    {
      label:
        "Total Achievements",
      value:
        totalAchievements,
      icon: Trophy,
      color:
        "var(--yellow)",
    },
    {
      label:
        "Featured Wins",
      value:
        featuredAchievements,
      icon: Star,
      color:
        "var(--pink)",
    },
    {
      label:
        "Categories",
      value: categories,
      icon: Target,
      color:
        "var(--green)",
    },
    {
      label:
        "Journey Started",
      value: startYear,
      icon: CalendarDays,
      color:
        "var(--blue)",
    },
  ];

  return (
    <section className="pb-20">
      <Container>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map(
            (
              stat
            ) => {
              const Icon =
                stat.icon;

              return (
                <div
                  key={
                    stat.label
                  }
                  className="rounded-[28px] border-[4px] border-black bg-white p-8 text-center shadow-[10px_10px_0px_#000]"
                >

                  <div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black"
                    style={{
                      background:
                        stat.color,
                    }}
                  >
                    <Icon
                      size={28}
                    />
                  </div>

                  <h3 className="mt-6 font-heading text-5xl font-black">
                    {
                      stat.value
                    }
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    {
                      stat.label
                    }
                  </p>

                </div>
              );
            }
          )}

        </div>

      </Container>
    </section>
  );
}