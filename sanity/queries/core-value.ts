import { groq } from "next-sanity";

export const CORE_VALUES_QUERY = groq`
*[
  _type == "coreValue"
]
| order(order asc) {
  _id,
  title,
  description,
  featured
}
`;