import { client } from "../lib/client";
import { FEATURED_BLOGS_QUERY } from "../lib/queries";

export async function getFeaturedBlogs() {
  return client.fetch(
    FEATURED_BLOGS_QUERY
  );
}