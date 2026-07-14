import { client } from "../lib/client";
import { FEATURED_BLOGS_QUERY } from "../lib/queries";

export async function getFeaturedBlogs() {
  return client.fetch(
    FEATURED_BLOGS_QUERY
  );
}

export async function getBlogs() {
  return client.fetch(`
    *[
      _type == "blog"
    ] | order(
      publishedAt desc
    ){
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      tags,
      publishedAt,
      featured,
      readingTime
    }
  `);
}

export async function getBlogBySlug(
  slug: string
) {
  return client.fetch(
    `
    *[
      _type == "blog" &&
      slug.current == $slug
    ][0]{
      _id,
      title,
      slug,
      coverImage,
      excerpt,
      content,
      category,
      tags,
      publishedAt,
      readingTime,
      featured
    }
    `,
    {
      slug,
    }
  );
}