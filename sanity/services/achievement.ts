import { client } from "../lib/client";
import { FEATURED_ACHIEVEMENTS_QUERY } from "../queries/achievement";

export async function getFeaturedAchievements() {
  return client.fetch(
    FEATURED_ACHIEVEMENTS_QUERY
  );
}