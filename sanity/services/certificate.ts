import { client } from "../lib/client";

import {
  CERTIFICATES_QUERY,
  FEATURED_CERTIFICATES_QUERY,
} from "../queries/certificate";

export async function getCertificates() {
  return await client.fetch(
    CERTIFICATES_QUERY
  );
}

export async function getFeaturedCertificates() {
  return await client.fetch(
    FEATURED_CERTIFICATES_QUERY
  );
}