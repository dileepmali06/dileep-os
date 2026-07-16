import { client } from "../lib/client";

import {
  EXPERIENCE_QUERY,
} from "../queries/experience";

export async function getExperience() {
  return await client.fetch(
    EXPERIENCE_QUERY
  );
}