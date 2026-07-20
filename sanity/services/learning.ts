import { client } from "../lib/client";
import { FEATURED_LEARNING_LOGS_QUERY } from "../lib/queries";

export async function getFeaturedLearningLogs() {
  return client.fetch(
    FEATURED_LEARNING_LOGS_QUERY
  );
}