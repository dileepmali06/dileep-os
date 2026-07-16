import { groq } from "next-sanity";

export const FUN_FACTS_QUERY = groq`
*[
  _type == "funFact"
  && featured == true
]
| order(order asc) {
  _id,
  title,
  description
}
`;