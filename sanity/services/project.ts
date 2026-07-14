import { client } from "../lib/client";
import { PROJECTS_QUERY } from "../lib/queries";

export async function getProjects() {
  return client.fetch(PROJECTS_QUERY);
}