import { groq } from "next-sanity";

/* ==========================================================================
   ALL EXPERIENCES
========================================================================== */

export const EXPERIENCES_QUERY = groq`
  *[_type == "experience"]
  | order(order desc, startDate desc) {
    _id,
    company,
    "slug": slug.current,
    position,
    employmentType,
    workMode,
    companyIndustry,
    location,
    companyWebsite,
    startDate,
    endDate,
    currentlyWorking,
    description,
    responsibilities,
    achievements,
    technologies,
    skills,
    projects,
    featured,
    order,
    companyLogo,
    certificate
  }
`;

/* ==========================================================================
   SINGLE EXPERIENCE
========================================================================== */

export const EXPERIENCE_QUERY = groq`
  *[
    _type == "experience" &&
    slug.current == $slug
  ][0]{
    _id,
    company,
    "slug": slug.current,
    position,
    employmentType,
    workMode,
    companyIndustry,
    location,
    companyWebsite,
    startDate,
    endDate,
    currentlyWorking,
    description,
    responsibilities,
    achievements,
    technologies,
    skills,
    projects,
    featured,
    order,
    companyLogo,
    certificate
  }
`;

/* ==========================================================================
   FEATURED EXPERIENCES
========================================================================== */

export const FEATURED_EXPERIENCES_QUERY = groq`
  *[
    _type == "experience" &&
    featured == true
  ]
  | order(order desc, startDate desc){
    _id,
    company,
    "slug": slug.current,
    position,
    employmentType,
    workMode,
    companyIndustry,
    location,
    startDate,
    endDate,
    currentlyWorking,
    technologies,
    featured,
    companyLogo
  }
`;

/* ==========================================================================
   CURRENT EXPERIENCE
========================================================================== */

export const CURRENT_EXPERIENCE_QUERY = groq`
  *[
    _type == "experience" &&
    currentlyWorking == true
  ][0]{
    _id,
    company,
    "slug": slug.current,
    position,
    employmentType,
    workMode,
    companyIndustry,
    location,
    companyWebsite,
    startDate,
    technologies,
    companyLogo
  }
`;

/* ==========================================================================
   EXPERIENCES BY EMPLOYMENT TYPE
========================================================================== */

export const EXPERIENCES_BY_EMPLOYMENT_TYPE_QUERY = groq`
  *[
    _type == "experience" &&
    employmentType == $employmentType
  ]
  | order(startDate desc){
    _id,
    company,
    "slug": slug.current,
    position,
    workMode,
    location,
    startDate,
    endDate,
    currentlyWorking,
    companyLogo
  }
`;

/* ==========================================================================
   EXPERIENCES BY WORK MODE
========================================================================== */

export const EXPERIENCES_BY_WORK_MODE_QUERY = groq`
  *[
    _type == "experience" &&
    workMode == $workMode
  ]
  | order(startDate desc){
    _id,
    company,
    "slug": slug.current,
    position,
    employmentType,
    location,
    startDate,
    endDate,
    currentlyWorking,
    companyLogo
  }
`;

/* ==========================================================================
   SEARCH EXPERIENCES
========================================================================== */

export const SEARCH_EXPERIENCES_QUERY = groq`
  *[
    _type == "experience" &&
    (
      company match "*" + $search + "*" ||
      position match "*" + $search + "*" ||
      companyIndustry match "*" + $search + "*"
    )
  ]
  | order(startDate desc){
    _id,
    company,
    "slug": slug.current,
    position,
    employmentType,
    workMode,
    location,
    startDate,
    endDate,
    companyLogo
  }
`;

/* ==========================================================================
   RELATED EXPERIENCES
========================================================================== */

export const RELATED_EXPERIENCES_QUERY = groq`
  *[
    _type == "experience" &&
    slug.current != $slug &&
    (
      employmentType == $employmentType ||
      companyIndustry == $companyIndustry
    )
  ][0...3]{
    _id,
    company,
    "slug": slug.current,
    position,
    employmentType,
    workMode,
    location,
    startDate,
    endDate,
    companyLogo
  }
`;

/* ==========================================================================
   EXPERIENCE STATS
========================================================================== */

export const EXPERIENCE_STATS_QUERY = groq`
{
  "totalExperiences": count(*[_type == "experience"]),
  "featuredExperiences": count(*[_type == "experience" && featured == true]),
  "currentExperiences": count(*[_type == "experience" && currentlyWorking == true]),
  "remoteExperiences": count(*[_type == "experience" && workMode == "remote"]),
  "hybridExperiences": count(*[_type == "experience" && workMode == "hybrid"]),
  "onsiteExperiences": count(*[_type == "experience" && workMode == "onsite"])
}
`;