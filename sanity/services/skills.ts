import { client } from "../lib/client";
import { SKILLS_QUERY } from "../queries/skills";

export async function getSkills() {
  return client.fetch(SKILLS_QUERY);
}