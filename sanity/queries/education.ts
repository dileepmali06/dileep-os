import { groq } from "next-sanity";

export const EDUCATION_QUERY = groq`
  *[_type == "education"] | order(startDate desc) {
    _id,

    institution,
    degree,
    fieldOfStudy,

    startDate,
    endDate,

    currentlyStudying,

    grade,

    description,

    skills,

    featured,

    logo
  }
`;

export const FEATURED_EDUCATION_QUERY = groq`
  *[
    _type == "education" &&
    featured == true
  ] | order(startDate desc) {
    _id,

    institution,
    degree,
    fieldOfStudy,

    startDate,
    endDate,

    currentlyStudying,

    grade,

    description,

    skills,

    featured,

    logo
  }
`;