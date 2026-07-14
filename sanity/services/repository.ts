import { client } from "../lib/client";
import { FEATURED_REPOSITORIES_QUERY } from "../queries/repository";

export async function getFeaturedRepositories() {
  return client.fetch(
    FEATURED_REPOSITORIES_QUERY
  );
}