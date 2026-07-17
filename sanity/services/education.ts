import { client } from "../lib/client";

import {
  EDUCATION_QUERY,
  FEATURED_EDUCATION_QUERY,
} from "../queries/education";

export async function getEducation() {
  return client.fetch(
    EDUCATION_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getFeaturedEducation() {
  return client.fetch(
    FEATURED_EDUCATION_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}