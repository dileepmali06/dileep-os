import { groq } from "next-sanity";

/* ==========================================================================
   ALL APPROVED GUESTBOOK MESSAGES
========================================================================== */

export const GUESTBOOK_QUERY = groq`
  *[
    _type == "guestbook" &&
    approved == true &&
    spam != true
  ]
  | order(
      pinned desc,
      featured desc,
      order desc,
      createdAt desc
    ){
    _id,
    name,
    email,
    profession,
    company,
    country,
    website,
    github,
    linkedin,
    avatar,
    message,
    rating,
    reply,
    featured,
    pinned,
    approved,
    source,
    createdAt
  }
`;

/* ==========================================================================
   FEATURED GUESTBOOK MESSAGES
========================================================================== */

export const FEATURED_GUESTBOOK_QUERY = groq`
  *[
    _type == "guestbook" &&
    approved == true &&
    featured == true &&
    spam != true
  ]
  | order(
      pinned desc,
      order desc,
      createdAt desc
    ){
    _id,
    name,
    profession,
    company,
    country,
    avatar,
    message,
    rating,
    reply,
    website,
    github,
    linkedin,
    createdAt
  }
`;

/* ==========================================================================
   PINNED GUESTBOOK MESSAGES
========================================================================== */

export const PINNED_GUESTBOOK_QUERY = groq`
  *[
    _type == "guestbook" &&
    approved == true &&
    pinned == true &&
    spam != true
  ]
  | order(order desc, createdAt desc){
    _id,
    name,
    profession,
    company,
    country,
    avatar,
    message,
    rating,
    reply,
    website,
    github,
    linkedin,
    createdAt
  }
`;

/* ==========================================================================
   RECENT GUESTBOOK MESSAGES
========================================================================== */

export const RECENT_GUESTBOOK_QUERY = groq`
  *[
    _type == "guestbook" &&
    approved == true &&
    spam != true
  ]
  | order(createdAt desc)[0...10]{
    _id,
    name,
    profession,
    company,
    avatar,
    message,
    rating,
    createdAt
  }
`;

/* ==========================================================================
   SEARCH GUESTBOOK
========================================================================== */

export const SEARCH_GUESTBOOK_QUERY = groq`
  *[
    _type == "guestbook" &&
    approved == true &&
    spam != true &&
    (
      name match "*" + $search + "*" ||
      profession match "*" + $search + "*" ||
      company match "*" + $search + "*" ||
      country match "*" + $search + "*" ||
      message match "*" + $search + "*"
    )
  ]
  | order(createdAt desc){
    _id,
    name,
    profession,
    company,
    country,
    avatar,
    message,
    rating,
    createdAt
  }
`;

/* ==========================================================================
   GUESTBOOK BY COUNTRY
========================================================================== */

export const GUESTBOOK_BY_COUNTRY_QUERY = groq`
  *[
    _type == "guestbook" &&
    approved == true &&
    spam != true &&
    country == $country
  ]
  | order(createdAt desc){
    _id,
    name,
    profession,
    company,
    avatar,
    message,
    rating,
    createdAt
  }
`;

/* ==========================================================================
   GUESTBOOK BY PROFESSION
========================================================================== */

export const GUESTBOOK_BY_PROFESSION_QUERY = groq`
  *[
    _type == "guestbook" &&
    approved == true &&
    spam != true &&
    profession == $profession
  ]
  | order(createdAt desc){
    _id,
    name,
    company,
    country,
    avatar,
    message,
    rating,
    createdAt
  }
`;

/* ==========================================================================
   GUESTBOOK STATS
========================================================================== */

export const GUESTBOOK_STATS_QUERY = groq`
{
  "totalMessages": count(*[_type == "guestbook"]),
  "approvedMessages": count(*[_type == "guestbook" && approved == true]),
  "featuredMessages": count(*[_type == "guestbook" && featured == true]),
  "pinnedMessages": count(*[_type == "guestbook" && pinned == true]),
  "spamMessages": count(*[_type == "guestbook" && spam == true]),
  "countries": count(array::unique(*[_type == "guestbook" && approved == true].country)),
  "professions": count(array::unique(*[_type == "guestbook" && approved == true].profession))
}
`;