import { client } from "../lib/client";
import { ACHIEVEMENT_QUERY, FEATURED_ACHIEVEMENTS_QUERY } from "../queries/achievement";


export async function getAchievements() {
  return client.fetch(
    ACHIEVEMENT_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getFeaturedAchievements() {
  return client.fetch(
    FEATURED_ACHIEVEMENTS_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}