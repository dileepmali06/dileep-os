import { client } from "../lib/client";
import { FEATURED_PROJECTS_QUERY } from "../queries/featuredProjects";

export async function getFeaturedProjects() {
  return client.fetch(FEATURED_PROJECTS_QUERY);
}