import { groq } from "next-sanity";

/* ==========================================================================
   ALL LEARNING LOGS
========================================================================== */

export const LEARNING_LOGS_QUERY = groq`
  *[_type == "learningLog"]
  | order(date desc){
    _id,
    "slug": slug.current,
    title,
    date,
    category,
    summary,
    difficulty,
    favorite
  }
`;

/* ==========================================================================
   FEATURED LEARNING LOGS
========================================================================== */
export const FEATURED_LEARNING_LOGS_QUERY = groq`
*[
  _type == "learningLog"
]
| order(date asc){
  _id,
  title,
  "slug": slug.current,
  date,
  category,
  summary,
  keyTakeaways,
  favorite,
  difficulty,
  resources
}
`;

/* ==========================================================================
   SINGLE LEARNING LOG
========================================================================== */

export const LEARNING_LOG_QUERY = groq`
  *[
    _type == "learningLog" &&
    slug.current == $slug
  ][0]{
    _id,
    "slug": slug.current,
    title,
    date,
    category,
    summary,
    keyTakeaways,
    resources,
    difficulty,
    favorite
  }
`;

/* ==========================================================================
   FAVORITE LEARNING LOGS
========================================================================== */

export const FAVORITE_LEARNING_LOGS_QUERY = groq`
  *[
    _type=="learningLog" &&
    favorite==true
  ]
  |order(date desc){
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    summary,
    difficulty,
    favorite
  }
`;

/* ==========================================================================
   RECENT LEARNING LOGS
========================================================================== */

export const RECENT_LEARNING_LOGS_QUERY = groq`
  *[_type=="learningLog"]
  |order(date desc)[0...6]{
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    summary,
    difficulty,
    favorite
  }
`;

/* ==========================================================================
   LEARNING BY CATEGORY
========================================================================== */

export const LEARNING_BY_CATEGORY_QUERY = groq`
  *[
    _type=="learningLog" &&
    category==$category
  ]
  |order(date desc){
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    summary,
    difficulty,
    favorite
  }
`;

/* ==========================================================================
   SEARCH LEARNING LOGS
========================================================================== */

export const SEARCH_LEARNING_LOGS_QUERY = groq`
  *[
    _type=="learningLog" &&
    (
      title match "*" + $search + "*" ||
      summary match "*" + $search + "*" ||
      category match "*" + $search + "*"
    )
  ]
  |order(date desc){
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    summary,
    difficulty,
    favorite
  }
`;

/* ==========================================================================
   RELATED LEARNING LOGS
========================================================================== */

export const RELATED_LEARNING_LOGS_QUERY = groq`
  *[
    _type=="learningLog" &&
    category==$category &&
    _id!=$id
  ][0...3]{
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    summary,
    difficulty,
    favorite
  }
`;

/* ==========================================================================
   PREVIOUS / NEXT LEARNING LOG
========================================================================== */

export const PREVIOUS_NEXT_LEARNING_LOG_QUERY = groq`
{
  "previousLog": *[
    _type == "learningLog" &&
    date < $date
  ]
  | order(date desc)[0]{
    title,
    "slug": slug.current,
    date
  },

  "nextLog": *[
    _type == "learningLog" &&
    date > $date
  ]
  | order(date asc)[0]{
    title,
    "slug": slug.current,
    date
  }
}
`;

/* ==========================================================================
   LEARNING STATS
========================================================================== */

export const LEARNING_STATS_QUERY = groq`
{
  "totalLogs":count(*[_type=="learningLog"]),

  "favoriteLogs":count(
    *[
      _type=="learningLog" &&
      favorite==true
    ]
  ),

  "totalCategories":count(
    array::unique(
      *[_type=="learningLog"].category
    )
  ),

  "easy":count(
    *[
      _type=="learningLog" &&
      difficulty=="easy"
    ]
  ),

  "medium":count(
    *[
      _type=="learningLog" &&
      difficulty=="medium"
    ]
  ),

  "hard":count(
    *[
      _type=="learningLog" &&
      difficulty=="hard"
    ]
  )
}
`;