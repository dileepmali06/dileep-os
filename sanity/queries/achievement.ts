import { groq } from "next-sanity";

export const ACHIEVEMENT_QUERY = groq`
*[_type == "achievement"]
| order(achievementDate desc){
  _id,
  title,
  slug,
  category,
  description,
  achievementDate,
  metric,
  skills,
  proofUrl,
  featured,
  image{
    asset->{
      _id,
      url
    }
  }
}
`;

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