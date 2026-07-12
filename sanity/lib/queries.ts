import { groq } from "next-sanity";

/* ============================================================
   SINGLETON DOCUMENTS
============================================================ */

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]
`;

export const ABOUT_QUERY = groq`
  *[_type == "about"][0]
`;

export const HOMEPAGE_SETTINGS_QUERY = groq`
  *[_type == "homepageSettings"][0]
`;

export const NOW_QUERY = groq`
  *[_type == "now"][0]
`;

export const USES_QUERY = groq`
  *[_type == "uses"][0]
`;

export const SKILLS_QUERY = groq`
  *[_type == "skills"][0]
`;

export const STATS_QUERY = groq`
  *[_type == "stats"][0]
`;

/* ============================================================
   PROJECTS
============================================================ */

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(_createdAt desc)
`;

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && featured == true]
  | order(order asc)
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0]
`;

/* ============================================================
   BLOGS
============================================================ */

export const BLOGS_QUERY = groq`
  *[_type == "blog"]
  | order(publishedAt desc)
`;

export const FEATURED_BLOGS_QUERY = groq`
  *[_type == "blog" && featured == true]
  | order(publishedAt desc)
`;

export const BLOG_BY_SLUG_QUERY = groq`
  *[_type == "blog" && slug.current == $slug][0]
`;

/* ============================================================
   LEARNING JOURNEY
============================================================ */

export const LEARNING_LOGS_QUERY = groq`
  *[_type == "learningLog"]
  | order(date desc)
`;

export const DSA_PROBLEMS_QUERY = groq`
  *[_type == "dsaProblem"]
  | order(_createdAt desc)
`;

export const DSA_PROBLEM_BY_SLUG_QUERY = groq`
  *[_type == "dsaProblem" && slug.current == $slug][0]
`;

export const JAVA_SNIPPETS_QUERY = groq`
  *[_type == "javaSnippet"]
  | order(_createdAt desc)
`;

export const JAVA_SNIPPET_BY_SLUG_QUERY = groq`
  *[_type == "javaSnippet" && slug.current == $slug][0]
`;

export const STACK_EVOLUTION_QUERY = groq`
  *[_type == "stackEvolution"]
  | order(year asc)
`;

export const TIMELINE_QUERY = groq`
  *[_type == "timeline"]
  | order(date desc)
`;

export const BOOKS_QUERY = groq`
  *[_type == "book"]
  | order(_createdAt desc)
`;

export const READING_LIST_QUERY = groq`
  *[_type == "readingList"]
  | order(_createdAt desc)
`;

/* ============================================================
   CAREER
============================================================ */

export const EDUCATION_QUERY = groq`
  *[_type == "education"]
  | order(startDate desc)
`;

export const EXPERIENCE_QUERY = groq`
  *[_type == "experience"]
  | order(startDate desc)
`;

export const COURSES_QUERY = groq`
  *[_type == "course"]
  | order(_createdAt desc)
`;

export const CERTIFICATES_QUERY = groq`
  *[_type == "certificate"]
  | order(issueDate desc)
`;

export const ACHIEVEMENTS_QUERY = groq`
  *[_type == "achievement"]
  | order(achievementDate desc)
`;

export const GOALS_QUERY = groq`
  *[_type == "goal"]
  | order(priority asc)
`;

export const RESUME_VERSIONS_QUERY = groq`
  *[_type == "resumeVersion"]
  | order(_createdAt desc)
`;

export const RECOMMENDATIONS_QUERY = groq`
  *[_type == "recommendation"]
  | order(date desc)
`;

/* ============================================================
   BUILDING & ENGINEERING
============================================================ */

export const FEATURED_REPOS_QUERY = groq`
  *[_type == "featuredRepo"]
  | order(displayOrder asc)
`;

export const OPEN_SOURCE_QUERY = groq`
  *[_type == "openSource"]
  | order(contributionDate desc)
`;

export const CHANGELOG_QUERY = groq`
  *[_type == "changelog"]
  | order(date desc)
`;

/* ============================================================
   COMMUNITY
============================================================ */

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"]
  | order(_createdAt desc)
`;

export const GUESTBOOK_QUERY = groq`
  *[_type == "guestbook"]
  | order(_createdAt desc)
`;

export const EVENTS_QUERY = groq`
  *[_type == "event"]
  | order(eventDate desc)
`;

/* ============================================================
   HOMEPAGE COMBINED QUERY
============================================================ */

export const HOME_PAGE_QUERY = groq`
{
  "siteSettings": *[_type == "siteSettings"][0],
  "about": *[_type == "about"][0],
  "homepageSettings": *[_type == "homepageSettings"][0],
  "skills": *[_type == "skills"][0],
  "stats": *[_type == "stats"][0],
  "now": *[_type == "now"][0],

  "featuredProjects": *[
    _type == "project" &&
    featured == true
  ][0...6],

  "latestBlogs": *[
    _type == "blog"
  ] | order(publishedAt desc)[0...3],

  "goals": *[
    _type == "goal"
  ][0...5],

  "achievements": *[
    _type == "achievement"
  ][0...6],

  "timeline": *[
    _type == "timeline"
  ] | order(date desc)[0...5]
}
`;