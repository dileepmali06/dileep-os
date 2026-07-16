import { groq } from "next-sanity";

export const EXPERIENCE_QUERY = groq`
  *[_type == "experience"] | order(startDate desc) {
    _id,

    company,
    position,
    employmentType,

    location,

    startDate,
    endDate,

    currentlyWorking,

    description,

    achievements,

    technologies,

    companyLogo
  }
`;