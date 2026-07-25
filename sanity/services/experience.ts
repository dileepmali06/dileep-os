import { client } from "@/sanity/lib/client";

import {
  EXPERIENCES_QUERY,
  EXPERIENCE_QUERY,
  FEATURED_EXPERIENCES_QUERY,
  CURRENT_EXPERIENCE_QUERY,
  EXPERIENCES_BY_EMPLOYMENT_TYPE_QUERY,
  EXPERIENCES_BY_WORK_MODE_QUERY,
  SEARCH_EXPERIENCES_QUERY,
  RELATED_EXPERIENCES_QUERY,
  EXPERIENCE_STATS_QUERY,
} from "../queries/experience";

/* ==========================================================================
   GET ALL EXPERIENCES
========================================================================== */

export async function getAllExperiences() {
  return client.fetch(EXPERIENCES_QUERY);
}

/* ==========================================================================
   GET EXPERIENCE BY SLUG
========================================================================== */

export async function getExperienceBySlug(slug: string) {
  return client.fetch(EXPERIENCE_QUERY, {
    slug,
  });
}

/* ==========================================================================
   GET FEATURED EXPERIENCES
========================================================================== */

export async function getFeaturedExperiences() {
  return client.fetch(FEATURED_EXPERIENCES_QUERY);
}

/* ==========================================================================
   GET CURRENT EXPERIENCE
========================================================================== */

export async function getCurrentExperience() {
  return client.fetch(CURRENT_EXPERIENCE_QUERY);
}

/* ==========================================================================
   GET EXPERIENCES BY EMPLOYMENT TYPE
========================================================================== */

export async function getExperiencesByEmploymentType(employmentType: string) {
  return client.fetch(EXPERIENCES_BY_EMPLOYMENT_TYPE_QUERY, {
    employmentType,
  });
}

/* ==========================================================================
   GET EXPERIENCES BY WORK MODE
========================================================================== */

export async function getExperiencesByWorkMode(workMode: string) {
  return client.fetch(EXPERIENCES_BY_WORK_MODE_QUERY, {
    workMode,
  });
}

/* ==========================================================================
   SEARCH EXPERIENCES
========================================================================== */

export async function searchExperiences(search: string) {
  return client.fetch(SEARCH_EXPERIENCES_QUERY, {
    search,
  });
}

/* ==========================================================================
   GET RELATED EXPERIENCES
========================================================================== */

export async function getRelatedExperiences(
  slug: string,
  employmentType: string,
  companyIndustry: string
) {
  return client.fetch(RELATED_EXPERIENCES_QUERY, {
    slug,
    employmentType,
    companyIndustry,
  });
}

/* ==========================================================================
   GET EXPERIENCE STATS
========================================================================== */

export async function getExperienceStats() {
  return client.fetch(EXPERIENCE_STATS_QUERY);
}