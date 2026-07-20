import { client } from "@/sanity/lib/client";

import {
  JAVA_SNIPPETS_QUERY,
  JAVA_SNIPPET_QUERY,
  FEATURED_JAVA_SNIPPETS_QUERY,
  RECENT_JAVA_SNIPPETS_QUERY,
  JAVA_BY_CATEGORY_QUERY,
  SEARCH_JAVA_SNIPPETS_QUERY,
  RELATED_JAVA_SNIPPETS_QUERY,
  JAVA_STATS_QUERY,
  JAVA_NAVIGATION_QUERY,
} from "@/sanity/queries/java";

/* ==========================================================================
   GET ALL JAVA SNIPPETS
========================================================================== */

export async function getAllJavaSnippets() {
  return await client.fetch(JAVA_SNIPPETS_QUERY);
}

/* ==========================================================================
   GET SINGLE JAVA SNIPPET
========================================================================== */

export async function getJavaSnippetBySlug(slug: string) {
  return await client.fetch(JAVA_SNIPPET_QUERY, {
    slug,
  });
}

/* ==========================================================================
   GET FEATURED JAVA SNIPPETS
========================================================================== */

export async function getFeaturedJavaSnippets() {
  return await client.fetch(FEATURED_JAVA_SNIPPETS_QUERY);
}

/* ==========================================================================
   GET RECENT JAVA SNIPPETS
========================================================================== */

export async function getRecentJavaSnippets() {
  return await client.fetch(RECENT_JAVA_SNIPPETS_QUERY);
}

/* ==========================================================================
   GET JAVA SNIPPETS BY CATEGORY
========================================================================== */

export async function getJavaByCategory(category: string) {
  return await client.fetch(JAVA_BY_CATEGORY_QUERY, {
    category,
  });
}

/* ==========================================================================
   SEARCH JAVA SNIPPETS
========================================================================== */

export async function searchJavaSnippets(search: string) {
  return await client.fetch(SEARCH_JAVA_SNIPPETS_QUERY, {
    search,
  });
}

/* ==========================================================================
   GET RELATED JAVA SNIPPETS
========================================================================== */

export async function getRelatedJavaSnippets(category: string, slug: string) {
  return await client.fetch(RELATED_JAVA_SNIPPETS_QUERY, {
    category,
    slug,
  });
}

export async function getJavaNavigation(
  order: number
) {
  return client.fetch(
    JAVA_NAVIGATION_QUERY,
    {
      order,
    }
  );
}

/* ==========================================================================
   GET JAVA STATS
========================================================================== */

export async function getJavaStats() {
  return await client.fetch(JAVA_STATS_QUERY);
}