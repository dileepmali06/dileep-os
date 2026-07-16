import { groq } from "next-sanity";

export const ABOUT_QUERY = groq`
  *[_type == "about"][0]{
    _id,
    name,
    role,
    location,

    profileImage,

    headline,

    shortBio,
    fullBio,

    yearsOfExperience,

    openToWork,

    currentFocus,

    lookingFor
  }
`;