import { groq } from "next-sanity";

export const SKILLS_QUERY = groq`
*[_type == "skills"][0]{
  frontend,
  backend,
  database,
  languages,
  devops,
  tools,
  currentlyLearning,
  interestedIn,
  updatedAt
}
`;