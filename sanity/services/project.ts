import { client } from "@/sanity/lib/client";

import {
  PROJECTS_QUERY,
  PROJECT_QUERY,
  FEATURED_PROJECTS_QUERY,
  RECENT_PROJECTS_QUERY,
  PROJECTS_BY_CATEGORY_QUERY,
  PROJECTS_BY_TYPE_QUERY,
  PROJECTS_BY_STATUS_QUERY,
  SEARCH_PROJECTS_QUERY,
  RELATED_PROJECTS_QUERY,
  PROJECT_STATS_QUERY,
} from "@/sanity/queries/project";

/* ==========================================================================
   GET ALL PROJECTS
========================================================================== */

export async function getProjects() {
  return client.fetch(PROJECTS_QUERY);
}

/* ==========================================================================
   GET SINGLE PROJECT
========================================================================== */

export async function getProject(slug: string) {
  return client.fetch(PROJECT_QUERY, {
    slug,
  });
}

/* ==========================================================================
   GET FEATURED PROJECTS
========================================================================== */

export async function getFeaturedProjects() {
  return client.fetch(FEATURED_PROJECTS_QUERY);
}

/* ==========================================================================
   GET RECENT PROJECTS
========================================================================== */

export async function getRecentProjects() {
  return client.fetch(RECENT_PROJECTS_QUERY);
}

/* ==========================================================================
   GET PROJECTS BY CATEGORY
========================================================================== */

export async function getProjectsByCategory(category: string) {
  return client.fetch(PROJECTS_BY_CATEGORY_QUERY, {
    category,
  });
}

/* ==========================================================================
   GET PROJECTS BY TYPE
========================================================================== */

export async function getProjectsByType(projectType: string) {
  return client.fetch(PROJECTS_BY_TYPE_QUERY, {
    projectType,
  });
}

/* ==========================================================================
   GET PROJECTS BY STATUS
========================================================================== */

export async function getProjectsByStatus(status: string) {
  return client.fetch(PROJECTS_BY_STATUS_QUERY, {
    status,
  });
}

/* ==========================================================================
   SEARCH PROJECTS
========================================================================== */

export async function searchProjects(search: string) {
  return client.fetch(SEARCH_PROJECTS_QUERY, {
    search,
  });
}

/* ==========================================================================
   GET RELATED PROJECTS
========================================================================== */

export async function getRelatedProjects(
  category: string,
  slug: string
) {
  return client.fetch(RELATED_PROJECTS_QUERY, {
    category,
    slug,
  });
}

/* ==========================================================================
   GET PROJECT STATS
========================================================================== */

export async function getProjectStats() {
  return client.fetch(PROJECT_STATS_QUERY);
}