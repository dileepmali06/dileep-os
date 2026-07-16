import { groq } from "next-sanity";

export const COURSES_QUERY = groq`
  *[_type == "course"]
  | order(startDate desc) {
    _id,

    title,
    platform,
    instructor,

    status,
    progress,

    startDate,
    completionDate,

    courseUrl,

    skills,

    notes,

    thumbnail
  }
`;