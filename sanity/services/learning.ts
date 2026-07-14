import { client } from "../lib/client";
import { LEARNING_LOGS_QUERY } from "../lib/queries";

export async function getLearningLogs() {
  return client.fetch(
    LEARNING_LOGS_QUERY
  );
}