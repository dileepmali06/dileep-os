import { groq } from "next-sanity";

export const GOALS_QUERY = groq`
*[_type == "goal"]
| order(featured desc, targetDate asc){
  _id,
  title,
  slug,
  category,
  status,
  progress,
  targetDate,
  description,
  milestones,
  priority,
  featured
}
`;