import { client } from "../lib/client";

import {
  RESUMES_QUERY,
  RESUME_QUERY,
  PRIMARY_RESUME_QUERY,
  FEATURED_RESUMES_QUERY,
  RESUMES_BY_TYPE_QUERY,
  LATEST_RESUME_QUERY,
  RESUME_STATS_QUERY,
} from "../queries/resume";

/* ==========================================================================
   GET ALL RESUMES
========================================================================== */

export async function getAllResumes() {
  return client.fetch(RESUMES_QUERY);
}

/* ==========================================================================
   GET SINGLE RESUME
========================================================================== */

export async function getResumeBySlug(
  slug: string
) {
  return client.fetch(
    RESUME_QUERY,
    {
      slug,
    }
  );
}

/* ==========================================================================
   GET PRIMARY RESUME
========================================================================== */

export async function getPrimaryResume() {
  return client.fetch(
    PRIMARY_RESUME_QUERY
  );
}

/* ==========================================================================
   GET FEATURED RESUMES
========================================================================== */

export async function getFeaturedResumes() {
  return client.fetch(
    FEATURED_RESUMES_QUERY
  );
}

/* ==========================================================================
   GET RESUMES BY TYPE
========================================================================== */

export async function getResumesByType(
  type: string
) {
  return client.fetch(
    RESUMES_BY_TYPE_QUERY,
    {
      type,
    }
  );
}

/* ==========================================================================
   GET LATEST RESUME
========================================================================== */

export async function getLatestResume() {
  return client.fetch(
    LATEST_RESUME_QUERY
  );
}

/* ==========================================================================
   GET RESUME STATS
========================================================================== */

export async function getResumeStats() {
  return client.fetch(
    RESUME_STATS_QUERY
  );
}