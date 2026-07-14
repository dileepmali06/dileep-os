import { client } from "../lib/client";
import { PROJECTS_QUERY } from "../lib/queries";

export async function getProjects() {
  return client.fetch(PROJECTS_QUERY);
}

export async function getProjectBySlug(
  slug: string
) {
  return client.fetch(
    `
      *[
        _type == "project" &&
        slug.current == $slug
      ][0]{
        _id,
        title,
        slug,
        shortDescription,
        description,
        coverImage,
        gallery,
        techStack,
        githubUrl,
        liveUrl,
        featured,
        status,
        year,
        challenges,
        learnings
      }
    `,
    {
      slug,
    }
  );
}