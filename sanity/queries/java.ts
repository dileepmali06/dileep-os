import { groq } from "next-sanity";

/* ==========================================================================
   ALL JAVA SNIPPETS
========================================================================== */

export const JAVA_SNIPPETS_QUERY = groq`
  *[_type == "javaSnippet"] | order(order asc, createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    complexity,
    tags,
    featured,
    order,
    createdAt,
    updatedAt
  }
`;

/* ==========================================================================
   SINGLE JAVA SNIPPET
========================================================================== */

export const JAVA_SNIPPET_QUERY = groq`
  *[
    _type == "javaSnippet" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    code,
    complexity,
    tags,
    featured,
    order,
    createdAt,
    updatedAt
  }
`;

/* ==========================================================================
   FEATURED JAVA SNIPPETS
========================================================================== */

export const FEATURED_JAVA_SNIPPETS_QUERY = groq`
  *[
    _type == "javaSnippet" &&
    featured == true
  ] | order(order asc, createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    complexity,
    tags,
    featured,
    order,
    createdAt
  }
`;

/* ==========================================================================
   RECENT JAVA SNIPPETS
========================================================================== */

export const RECENT_JAVA_SNIPPETS_QUERY = groq`
  *[
    _type == "javaSnippet"
  ] | order(createdAt desc)[0...6]{
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    complexity,
    tags,
    featured,
    createdAt
  }
`;

/* ==========================================================================
   JAVA SNIPPETS BY CATEGORY
========================================================================== */

export const JAVA_BY_CATEGORY_QUERY = groq`
  *[
    _type == "javaSnippet" &&
    category == $category
  ] | order(order asc, createdAt desc){
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    complexity,
    tags,
    featured,
    order,
    createdAt
  }
`;

/* ==========================================================================
   SEARCH JAVA SNIPPETS
========================================================================== */

export const SEARCH_JAVA_SNIPPETS_QUERY = groq`
  *[
    _type == "javaSnippet" &&
    (
      title match "*" + $search + "*" ||
      description match "*" + $search + "*" ||
      category match "*" + $search + "*" ||
      $search in tags
    )
  ] | order(order asc, createdAt desc){
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    complexity,
    tags,
    featured,
    order,
    createdAt
  }
`;

/* ==========================================================================
   RELATED JAVA SNIPPETS
========================================================================== */

export const RELATED_JAVA_SNIPPETS_QUERY = groq`
  *[
    _type == "javaSnippet" &&
    category == $category &&
    slug.current != $slug
  ] | order(order asc, createdAt desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    complexity,
    tags,
    featured
  }
`;

export const JAVA_NAVIGATION_QUERY = groq`
{
  "previous": *[
    _type == "javaSnippet" &&
    order < $order
  ] | order(order desc)[0]{
    _id,
    title,
    "slug": slug.current
  },

  "next": *[
    _type == "javaSnippet" &&
    order > $order
  ] | order(order asc)[0]{
    _id,
    title,
    "slug": slug.current
  }
}
`;

/* ==========================================================================
   JAVA STATS
========================================================================== */

export const JAVA_STATS_QUERY = groq`
{
  "totalSnippets": count(*[_type == "javaSnippet"]),

  "featuredSnippets": count(
    *[
      _type == "javaSnippet" &&
      featured == true
    ]
  ),

  "totalCategories": count(
    array::unique(
      *[_type == "javaSnippet"].category
    )
  ),

  "arrays": count(
    *[
      _type == "javaSnippet" &&
      category == "arrays"
    ]
  ),

  "strings": count(
    *[
      _type == "javaSnippet" &&
      category == "strings"
    ]
  ),

  "hashmap": count(
    *[
      _type == "javaSnippet" &&
      category == "hashmap"
    ]
  ),

  "trees": count(
    *[
      _type == "javaSnippet" &&
      category == "trees"
    ]
  ),

  "graphs": count(
    *[
      _type == "javaSnippet" &&
      category == "graphs"
    ]
  ),

  "dynamicProgramming": count(
    *[
      _type == "javaSnippet" &&
      category == "dp"
    ]
  ),

  "collections": count(
    *[
      _type == "javaSnippet" &&
      category == "collections"
    ]
  ),

  "oop": count(
    *[
      _type == "javaSnippet" &&
      category == "oop"
    ]
  ),

  "streams": count(
    *[
      _type == "javaSnippet" &&
      category == "streams"
    ]
  ),

  "springBoot": count(
    *[
      _type == "javaSnippet" &&
      category == "springboot"
    ]
  )
}
`;