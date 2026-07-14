import { groq } from "next-sanity";

export const ABOUT_QUERY = groq`
*[_type == "about"][0]{
  name,
  role,
  location,
  headline,
  shortBio,
  yearsOfExperience,
  openToWork,
  currentFocus,
  lookingFor
}
`;