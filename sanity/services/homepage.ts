import { client } from "../lib/client";
import { HOMEPAGE_QUERY } from "../queries/homepage";

export async function getHomepageSettings() {
  return client.fetch(HOMEPAGE_QUERY);
}