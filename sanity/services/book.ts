import { client } from "../lib/client";

import {
  BOOKS_QUERY,
  BOOK_QUERY,
  FEATURED_BOOKS_QUERY,
  FAVORITE_BOOKS_QUERY,
  CURRENTLY_READING_QUERY,
  RELATED_BOOKS_QUERY,
  BOOK_STATS_QUERY,
} from "../queries/book";

/* ==========================================================================
   GET ALL BOOKS
========================================================================== */

export async function getAllBooks() {
  return client.fetch(BOOKS_QUERY);
}

/* ==========================================================================
   GET SINGLE BOOK
========================================================================== */

export async function getBookBySlug(
  slug: string
) {
  return client.fetch(
    BOOK_QUERY,
    {
      slug,
    }
  );
}

/* ==========================================================================
   GET FEATURED BOOKS
========================================================================== */

export async function getFeaturedBooks() {
  return client.fetch(
    FEATURED_BOOKS_QUERY
  );
}

/* ==========================================================================
   GET FAVORITE BOOKS
========================================================================== */

export async function getFavoriteBooks() {
  return client.fetch(
    FAVORITE_BOOKS_QUERY
  );
}

/* ==========================================================================
   GET CURRENTLY READING
========================================================================== */

export async function getCurrentlyReadingBooks() {
  return client.fetch(
    CURRENTLY_READING_QUERY
  );
}

/* ==========================================================================
   GET RELATED BOOKS
========================================================================== */

export async function getRelatedBooks(
  genre: string,
  id: string
) {
  return client.fetch(
    RELATED_BOOKS_QUERY,
    {
      genre,
      id,
    }
  );
}

/* ==========================================================================
   GET BOOK STATS
========================================================================== */

export async function getBookStats() {
  return client.fetch(
    BOOK_STATS_QUERY
  );
}