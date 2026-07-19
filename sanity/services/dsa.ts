import { client } from "../lib/client";

import {
  DSA_PROBLEMS_QUERY,
  DSA_PROBLEM_QUERY,
  FEATURED_DSA_PROBLEMS_QUERY,
  RECENT_DSA_PROBLEMS_QUERY,
  DSA_BY_DIFFICULTY_QUERY,
  DSA_BY_PLATFORM_QUERY,
  DSA_BY_TOPIC_QUERY,
  SEARCH_DSA_PROBLEMS_QUERY,
  RELATED_DSA_PROBLEMS_QUERY,
  DSA_STATS_QUERY,
  PREVIOUS_NEXT_DSA_PROBLEM_QUERY,
} from "../queries/dsa";

/**
 * ==========================================
 * All Problems
 * ==========================================
 */

export async function getDSAProblems() {
  return client.fetch(
    DSA_PROBLEMS_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Single Problem
 * ==========================================
 */

export async function getDSAProblemBySlug(
  slug: string
) {
  return client.fetch(
    DSA_PROBLEM_QUERY,
    { slug },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Featured Problems
 * ==========================================
 */

export async function getFeaturedDSAProblems() {
  return client.fetch(
    FEATURED_DSA_PROBLEMS_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Recent Problems
 * ==========================================
 */

export async function getRecentDSAProblems() {
  return client.fetch(
    RECENT_DSA_PROBLEMS_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Problems By Difficulty
 * ==========================================
 */

export async function getDSAProblemsByDifficulty(
  difficulty: string
) {
  return client.fetch(
    DSA_BY_DIFFICULTY_QUERY,
    { difficulty },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Problems By Platform
 * ==========================================
 */

export async function getDSAProblemsByPlatform(
  platform: string
) {
  return client.fetch(
    DSA_BY_PLATFORM_QUERY,
    { platform },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Problems By Topic
 * ==========================================
 */

export async function getDSAProblemsByTopic(
  topic: string
) {
  return client.fetch(
    DSA_BY_TOPIC_QUERY,
    { topic },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Search Problems
 * ==========================================
 */

export async function searchDSAProblems(
  search: string
) {
  return client.fetch(
    SEARCH_DSA_PROBLEMS_QUERY,
    { search },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Related Problems
 * ==========================================
 */

export async function getRelatedDSAProblems(problem: {
  slug: { current: string };
  topics: string[];
}) {
  return client.fetch(
    RELATED_DSA_PROBLEMS_QUERY,
    {
      slug: problem.slug.current,
      topics: problem.topics ?? [],
    },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

/**
 * ==========================================
 * Statistics
 * ==========================================
 */

export async function getDSAStats() {
  return client.fetch(
    DSA_STATS_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getPreviousNextDSAProblems(
  solvedAt: string
) {
  return client.fetch(
    PREVIOUS_NEXT_DSA_PROBLEM_QUERY,
    { solvedAt },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}