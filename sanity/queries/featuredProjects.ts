import { groq } from "next-sanity";

export const FEATURED_PROJECTS_QUERY = groq`
*[
  _type == "project" &&
  featured == true
]
| order(year desc)[0...3]{
  _id,
  title,
  slug,
  shortDescription,
  techStack,
  coverImage,
  githubUrl,
  liveUrl,
  featured,
  status,
  year
}
`;