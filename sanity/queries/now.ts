import { groq } from "next-sanity";

export const NOW_QUERY = groq`
*[_type == "now"][0]{
  sectionTitle,
  sectionDescription,
  updatedAt,

  tracks[]{
    title,
    color,
    icon,
    items
  }
}
`;