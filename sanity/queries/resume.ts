import { groq } from "next-sanity";

/* ==========================================================================
   ALL RESUMES
========================================================================== */

export const RESUMES_QUERY = groq`
  *[_type == "resumeVersion"]
  | order(order asc, lastUpdated desc){
    _id,
    title,
    "slug": slug.current,
    type,
    targetRole,
    experienceLevel,
    version,
    description,
    highlights,
    skills,
    isATSFriendly,
    featured,
    isPrimary,
    downloadLabel,
    pageCount,
    fileSize,
    changeLog,
    order,
    lastUpdated,
    "thumbnail": thumbnail.asset->url,
    "resumeFile": resumeFile.asset->url
  }
`;

/* ==========================================================================
   SINGLE RESUME
========================================================================== */

export const RESUME_QUERY = groq`
  *[
    _type == "resumeVersion" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    type,
    targetRole,
    experienceLevel,
    version,
    description,
    highlights,
    skills,
    isATSFriendly,
    featured,
    isPrimary,
    downloadLabel,
    pageCount,
    fileSize,
    changeLog,
    order,
    lastUpdated,
    "thumbnail": thumbnail.asset->url,
    "resumeFile": resumeFile.asset->url
  }
`;

/* ==========================================================================
   PRIMARY RESUME
========================================================================== */

export const PRIMARY_RESUME_QUERY = groq`
  *[
    _type == "resumeVersion" &&
    isPrimary == true
  ][0]{
    _id,
    title,
    "slug": slug.current,
    type,
    targetRole,
    experienceLevel,
    version,
    description,
    highlights,
    skills,
    isATSFriendly,
    featured,
    downloadLabel,
    pageCount,
    fileSize,
    changeLog,
    lastUpdated,
    "thumbnail": thumbnail.asset->url,
    "resumeFile": resumeFile.asset->url
  }
`;

/* ==========================================================================
   FEATURED RESUMES
========================================================================== */

export const FEATURED_RESUMES_QUERY = groq`
  *[
    _type == "resumeVersion" &&
    featured == true
  ]
  | order(order asc){
    _id,
    title,
    "slug": slug.current,
    type,
    version,
    targetRole,
    description,
    isATSFriendly,
    pageCount,
    fileSize,
    lastUpdated,
    "thumbnail": thumbnail.asset->url,
    "resumeFile": resumeFile.asset->url
  }
`;

/* ==========================================================================
   RESUMES BY TYPE
========================================================================== */

export const RESUMES_BY_TYPE_QUERY = groq`
  *[
    _type == "resumeVersion" &&
    type == $type
  ]
  | order(lastUpdated desc){
    _id,
    title,
    "slug": slug.current,
    type,
    version,
    targetRole,
    experienceLevel,
    description,
    highlights,
    skills,
    isATSFriendly,
    featured,
    isPrimary,
    pageCount,
    fileSize,
    lastUpdated,
    "thumbnail": thumbnail.asset->url,
    "resumeFile": resumeFile.asset->url
  }
`;

/* ==========================================================================
   LATEST RESUME
========================================================================== */

export const LATEST_RESUME_QUERY = groq`
  *[_type == "resumeVersion"]
  | order(lastUpdated desc)[0]{
    _id,
    title,
    "slug": slug.current,
    version,
    type,
    lastUpdated,
    "resumeFile": resumeFile.asset->url
  }
`;

/* ==========================================================================
   RESUME STATS
========================================================================== */

export const RESUME_STATS_QUERY = groq`
{
  "totalResumes": count(*[_type == "resumeVersion"]),

  "featuredResumes": count(
    *[
      _type == "resumeVersion" &&
      featured == true
    ]
  ),

  "atsFriendlyResumes": count(
    *[
      _type == "resumeVersion" &&
      isATSFriendly == true
    ]
  ),

  "primaryResumes": count(
    *[
      _type == "resumeVersion" &&
      isPrimary == true
    ]
  )
}
`;