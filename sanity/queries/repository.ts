import { groq } from "next-sanity";

export const FEATURED_REPOSITORIES_QUERY = groq`
*[
  _type == "featuredRepo" &&
  featured == true
]
| order(displayOrder asc){
  _id,
  name,
  githubUrl,
  liveUrl,
  description,
  techStack,
  repositoryType,
  featured
}
`;