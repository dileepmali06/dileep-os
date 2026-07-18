import { getAchievements } from "@/sanity/services/achievement";

import { AchievementsHero } from "@/components/achievements/achievements-hero";
import { AchievementsStats } from "@/components/achievements/achievements-stats";
import { AchievementsGrid } from "@/components/achievements/achievements-grid";

export default async function AchievementsPage() {
  const achievements =
    await getAchievements();

  return (
    <>
      <AchievementsHero />

      <AchievementsStats
        achievements={
          achievements
        }
      />

      <AchievementsGrid
        achievements={
          achievements
        }
      />
    </>
  );
}