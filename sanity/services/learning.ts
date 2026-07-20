import { client } from "../lib/client";
import { FAVORITE_LEARNING_LOGS_QUERY, FEATURED_LEARNING_LOGS_QUERY, LEARNING_BY_CATEGORY_QUERY, LEARNING_LOG_QUERY, LEARNING_LOGS_QUERY, LEARNING_STATS_QUERY, PREVIOUS_NEXT_LEARNING_LOG_QUERY, RECENT_LEARNING_LOGS_QUERY, RELATED_LEARNING_LOGS_QUERY, SEARCH_LEARNING_LOGS_QUERY } from "../queries/learning";



/* ==========================================================================
   GET ALL LEARNING LOGS
========================================================================== */

export async function getAllLearningLogs() {
  return client.fetch(
    LEARNING_LOGS_QUERY
  );
}

/* ==========================================================================
   GET FEATURED LEARNING LOGS
========================================================================== */
export async function getFeaturedLearningLogs() {
  return client.fetch(
    FEATURED_LEARNING_LOGS_QUERY
  );
}

/* ==========================================================================
   GET SINGLE LEARNING LOG
========================================================================== */

export async function getLearningLogBySlug(
  slug: string
) {
  return client.fetch(
    LEARNING_LOG_QUERY,
    {
      slug,
    }
  );
}

/* ==========================================================================
   GET FAVORITE LEARNING LOGS
========================================================================== */

export async function getFavoriteLearningLogs() {
  return client.fetch(
    FAVORITE_LEARNING_LOGS_QUERY
  );
}

/* ==========================================================================
   GET RECENT LEARNING LOGS
========================================================================== */

export async function getRecentLearningLogs() {
  return client.fetch(
    RECENT_LEARNING_LOGS_QUERY
  );
}

/* ==========================================================================
   GET LEARNING LOGS BY CATEGORY
========================================================================== */

export async function getLearningLogsByCategory(
  category: string
) {
  return client.fetch(
    LEARNING_BY_CATEGORY_QUERY,
    {
      category,
    }
  );
}

/* ==========================================================================
   SEARCH LEARNING LOGS
========================================================================== */

export async function searchLearningLogs(
  search: string
) {
  return client.fetch(
    SEARCH_LEARNING_LOGS_QUERY,
    {
      search,
    }
  );
}

/* ==========================================================================
   GET RELATED LEARNING LOGS
========================================================================== */

export async function getRelatedLearningLogs(
  category: string,
  id: string
) {
  return client.fetch(
    RELATED_LEARNING_LOGS_QUERY,
    {
      category,
      id,
    }
  );
}

/* ==========================================================================
   GET PREVIOUS / NEXT LEARNING LOG
========================================================================== */

export async function getPreviousNextLearningLogs(date: string) {
  return client.fetch(PREVIOUS_NEXT_LEARNING_LOG_QUERY, { date });
}

/* ==========================================================================
   GET LEARNING STATS
========================================================================== */

export async function getLearningStats() {
  return client.fetch(
    LEARNING_STATS_QUERY
  );
}