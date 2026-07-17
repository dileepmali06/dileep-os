import { client } from "../lib/client";
import { GOALS_QUERY } from "../queries/goal";

export async function getGoals() {
  return client.fetch(
    GOALS_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}