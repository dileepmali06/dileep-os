import { groq } from "next-sanity";

/* ==========================================================================
   ALL BOOKS
========================================================================== */

export const BOOKS_QUERY = groq`
  *[_type == "book"]
  | order(startedAt desc){
    _id,
    title,
    "slug": slug.current,
    author,
    description,
    status,
    progress,
    rating,
    favorite,
    recommended,
    genres,
    pages,
    publisher,
    startedAt,
    completedAt,
    "coverImage": coverImage.asset->url
  }
`;

/* ==========================================================================
   SINGLE BOOK
========================================================================== */

export const BOOK_QUERY = groq`
  *[
    _type == "book" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    author,
    description,
    status,
    progress,
    rating,
    favorite,
    recommended,
    genres,
    pages,
    publisher,
    startedAt,
    completedAt,
    "coverImage": coverImage.asset->url,
    purchaseLink,
    goodreadsLink,
    officialLink,
    keyTakeaways,
    notes
  }
`;

/* ==========================================================================
   FEATURED BOOKS
========================================================================== */

export const FEATURED_BOOKS_QUERY = groq`
  *[
    _type == "book" &&
    recommended == true
  ]
  | order(rating desc){
    _id,
    title,
    "slug": slug.current,
    author,
    description,
    status,
    rating,
    favorite,
    genres,
    "coverImage": coverImage.asset->url
  }
`;

/* ==========================================================================
   FAVORITE BOOKS
========================================================================== */

export const FAVORITE_BOOKS_QUERY = groq`
  *[
    _type == "book" &&
    favorite == true
  ]
  | order(rating desc){
    _id,
    title,
    "slug": slug.current,
    author,
    description,
    status,
    rating,
    genres,
    "coverImage": coverImage.asset->url
  }
`;

/* ==========================================================================
   CURRENTLY READING
========================================================================== */

export const CURRENTLY_READING_QUERY = groq`
  *[
    _type == "book" &&
    status == "reading"
  ]
  | order(startedAt desc){
    _id,
    title,
    "slug": slug.current,
    author,
    progress,
    startedAt,
    genres,
    "coverImage": coverImage.asset->url
  }
`;

/* ==========================================================================
   RELATED BOOKS
========================================================================== */

export const RELATED_BOOKS_QUERY = groq`
  *[
    _type == "book" &&
    $genre in genres &&
    _id != $id
  ][0...3]{
    _id,
    title,
    "slug": slug.current,
    author,
    rating,
    status,
    genres,
    "coverImage": coverImage.asset->url
  }
`;

/* ==========================================================================
   READING STATS
========================================================================== */

export const BOOK_STATS_QUERY = groq`
{
  "totalBooks": count(*[_type=="book"]),

  "completedBooks": count(
    *[
      _type=="book" &&
      status=="completed"
    ]
  ),

  "currentlyReading": count(
    *[
      _type=="book" &&
      status=="reading"
    ]
  ),

  "plannedBooks": count(
    *[
      _type=="book" &&
      status=="planned"
    ]
  ),

  "favoriteBooks": count(
    *[
      _type=="book" &&
      favorite==true
    ]
  ),

  "recommendedBooks": count(
    *[
      _type=="book" &&
      recommended==true
    ]
  ),

  "totalGenres": count(
    array::unique(
      *[_type=="book"].genres[]
    )
  )
}
`;