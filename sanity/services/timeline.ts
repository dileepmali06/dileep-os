import { client } from "../lib/client";
import { TIMELINE_QUERY } from "../lib/queries";

export async function getTimeline() {
  return client.fetch(
    TIMELINE_QUERY
  );
}