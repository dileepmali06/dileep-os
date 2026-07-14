import { groq } from "next-sanity";

export const FEATURED_ACHIEVEMENTS_QUERY = groq`
*[
  _type == "achievement" &&
  featured == true
]
| order(achievementDate desc)[0...4]{
  title,
  description,
  category,
  metric
}
`;