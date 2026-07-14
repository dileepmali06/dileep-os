import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`
*[_type == "homepageSettings"][0]{
  heroName,
  heroEmoji,
  heroTitle,
  heroSubtitle,
  heroBadge,
  isAvailable,

  heroImage,

  heroRoles,
  terminalLines,
  floatingTags,
  focusTechnologies,

  primaryButtonText,
  primaryButtonLink,

  secondaryButtonText,
  secondaryButtonLink,

  projectsCount,
  coursesCount,
  blogsCount,

  footerTitle,
  footerSubtitle,
  footerBadge,

  featuredProjectsCount,
  featuredBlogsCount,
  featuredDsaCount,

  showGithubStats,
  showLeetcodeStats,
  showTimeline,
  showBlogSection
}
`;