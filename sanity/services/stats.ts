import { client } from "../lib/client";
import { STATS_QUERY } from "../queries/stats";

export async function getStats() {
  return client.fetch(STATS_QUERY);
}