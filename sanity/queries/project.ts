import { groq } from "next-sanity";

/* ==========================================================================
   ALL PROJECTS
========================================================================== */

export const PROJECTS_QUERY = groq`
  *[_type == "project"]
  | order(featured desc, order asc, year desc){
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    coverImage,
    techStack,
    featured,
    status,
    year,
    projectType,
    category,
    role,
    duration,
    teamSize,
    githubUrl,
    liveUrl
  }
`;

/* ==========================================================================
   SINGLE PROJECT
========================================================================== */

export const PROJECT_QUERY = groq`
  *[
    _type == "project" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    description,

    coverImage,
    gallery,

    demoVideo,

    projectType,
    category,

    clientName,
    role,
    duration,
    teamSize,

    techStack,

    githubUrl,
    liveUrl,
    figmaUrl,

    featured,
    status,
    year,

    challenges,
    learnings,

    metrics,

    ogImage,

    order,
    createdAt,
    updatedAt
  }
`;

/* ==========================================================================
   FEATURED PROJECTS
========================================================================== */

export const FEATURED_PROJECTS_QUERY = groq`
  *[
    _type == "project" &&
    featured == true
  ]
  | order(order asc, year desc){
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    coverImage,
    techStack,
    category,
    githubUrl,
    liveUrl
  }
`;

/* ==========================================================================
   RECENT PROJECTS
========================================================================== */

export const RECENT_PROJECTS_QUERY = groq`
  *[_type=="project"]
  | order(createdAt desc)[0...6]{
    _id,
    title,
    "slug": slug.current,
    coverImage,
    shortDescription,
    year,
    status
  }
`;

/* ==========================================================================
   PROJECTS BY CATEGORY
========================================================================== */

export const PROJECTS_BY_CATEGORY_QUERY = groq`
  *[
    _type=="project" &&
    category==$category
  ]
  | order(featured desc, order asc){
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    coverImage,
    techStack,
    status,
    year
  }
`;

/* ==========================================================================
   PROJECTS BY TYPE
========================================================================== */

export const PROJECTS_BY_TYPE_QUERY = groq`
  *[
    _type=="project" &&
    projectType==$projectType
  ]
  | order(featured desc, order asc){
    _id,
    title,
    "slug": slug.current,
    coverImage,
    shortDescription,
    status,
    year
  }
`;

/* ==========================================================================
   PROJECTS BY STATUS
========================================================================== */

export const PROJECTS_BY_STATUS_QUERY = groq`
  *[
    _type=="project" &&
    status==$status
  ]
  | order(year desc){
    _id,
    title,
    "slug": slug.current,
    coverImage,
    shortDescription
  }
`;

/* ==========================================================================
   SEARCH PROJECTS
========================================================================== */

export const SEARCH_PROJECTS_QUERY = groq`
  *[
    _type=="project" &&
    (
      title match $search + "*" ||
      shortDescription match $search + "*" ||
      category match $search + "*" ||
      projectType match $search + "*"
    )
  ]
  | order(featured desc){
    _id,
    title,
    "slug": slug.current,
    coverImage,
    shortDescription,
    status
  }
`;

/* ==========================================================================
   RELATED PROJECTS
========================================================================== */

export const RELATED_PROJECTS_QUERY = groq`
  *[
    _type=="project" &&
    category==$category &&
    slug.current!=$slug
  ][0...3]{
    _id,
    title,
    "slug": slug.current,
    coverImage,
    shortDescription,
    techStack
  }
`;

/* ==========================================================================
   PROJECT STATISTICS
========================================================================== */

export const PROJECT_STATS_QUERY = groq`
{
  "totalProjects": count(*[_type=="project"]),

  "featuredProjects": count(
    *[
      _type=="project" &&
      featured==true
    ]
  ),

  "completedProjects": count(
    *[
      _type=="project" &&
      status=="completed"
    ]
  ),

  "inProgressProjects": count(
    *[
      _type=="project" &&
      status=="in-progress"
    ]
  ),

  "archivedProjects": count(
    *[
      _type=="project" &&
      status=="archived"
    ]
  ),

  "personalProjects": count(
    *[
      _type=="project" &&
      projectType=="personal"
    ]
  ),

  "clientProjects": count(
    *[
      _type=="project" &&
      projectType=="client"
    ]
  ),

  "openSourceProjects": count(
    *[
      _type=="project" &&
      projectType=="open-source"
    ]
  ),

  "totalTechnologies": count(
    array::unique(
      *[_type=="project"].techStack[]
    )
  )
}
`;