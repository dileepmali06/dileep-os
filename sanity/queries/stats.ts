import { groq } from "next-sanity";

export const STATS_QUERY = groq`
*[_type == "stats"][0]{
  projectsBuilt,
  coursesCompleted,
  certificatesEarned,
  booksRead,
  blogPostsWritten,
  leetcodeProblemsSolved,
  githubContributions,
  githubRepositories,
  yearsLearning,
  coffeeConsumed,
  featuredStat,
  lastUpdated
}
`;