import { client } from "../lib/client";

import {
  EDUCATION_QUERY,
  FEATURED_EDUCATION_QUERY,
} from "../queries/education";

export async function getEducation() {
  return await client.fetch(
    EDUCATION_QUERY
  );
}

export async function getFeaturedEducation() {
  return await client.fetch(
    FEATURED_EDUCATION_QUERY
  );
}