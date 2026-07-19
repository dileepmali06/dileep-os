import { groq } from "next-sanity";

/**
 * ==========================================
 * All DSA Problems
 * ==========================================
 */

export const DSA_PROBLEMS_QUERY = groq`
*[_type == "dsaProblem"]
| order(solvedAt desc){

  _id,

  title,

  slug,

  platform,

  problemUrl,

  difficulty,

  topics,

  bruteForceApproach,

  optimalApproach,

  javaSolution,

  timeComplexity,

  spaceComplexity,

  keyLearning,

  solvedAt,

  featured,

  status,

  attempts,

  notes
}
`;

/**
 * ==========================================
 * Single Problem
 * ==========================================
 */

export const DSA_PROBLEM_QUERY = groq`
*[
  _type == "dsaProblem" &&
  slug.current == $slug
][0]{

  _id,

  title,

  slug,

  platform,

  problemUrl,

  difficulty,

  topics,

  bruteForceApproach,

  optimalApproach,

  javaSolution,

  timeComplexity,

  spaceComplexity,

  keyLearning,

  solvedAt,

  featured,

  status,

  attempts,

  notes
}
`;

/**
 * ==========================================
 * Featured Problems
 * ==========================================
 */

export const FEATURED_DSA_PROBLEMS_QUERY = groq`
*[
  _type == "dsaProblem" &&
  featured == true
]
| order(solvedAt desc){

  _id,

  title,

  slug,

  platform,

  difficulty,

  topics,

  solvedAt,

  status
}
`;

/**
 * ==========================================
 * Recent Problems
 * ==========================================
 */

export const RECENT_DSA_PROBLEMS_QUERY = groq`
*[_type == "dsaProblem"]
| order(solvedAt desc)[0...6]{

  _id,

  title,

  slug,

  platform,

  difficulty,

  solvedAt,

  status
}
`;

/**
 * ==========================================
 * Problems By Difficulty
 * ==========================================
 */

export const DSA_BY_DIFFICULTY_QUERY = groq`
*[
  _type == "dsaProblem" &&
  difficulty == $difficulty
]
| order(solvedAt desc){

  _id,

  title,

  slug,

  platform,

  difficulty,

  topics,

  solvedAt,

  featured,

  status
}
`;

/**
 * ==========================================
 * Problems By Platform
 * ==========================================
 */

export const DSA_BY_PLATFORM_QUERY = groq`
*[
  _type == "dsaProblem" &&
  platform == $platform
]
| order(solvedAt desc){

  _id,

  title,

  slug,

  difficulty,

  topics,

  solvedAt,

  featured,

  status
}
`;

/**
 * ==========================================
 * Problems By Topic
 * ==========================================
 */

export const DSA_BY_TOPIC_QUERY = groq`
*[
  _type == "dsaProblem" &&
  $topic in topics
]
| order(solvedAt desc){

  _id,

  title,

  slug,

  platform,

  difficulty,

  topics,

  solvedAt,

  featured,

  status
}
`;

/**
 * ==========================================
 * Search Problems
 * ==========================================
 */

export const SEARCH_DSA_PROBLEMS_QUERY = groq`
*[
  _type == "dsaProblem" &&
  (
    title match $search + "*" ||
    platform match $search + "*" ||
    difficulty match $search + "*" ||
    $search in topics
  )
]
| order(solvedAt desc){

  _id,

  title,

  slug,

  platform,

  difficulty,

  topics,

  solvedAt,

  featured,

  status
}
`;

/**
 * ==========================================
 * Related Problems
 * ==========================================
 */

export const RELATED_DSA_PROBLEMS_QUERY = groq`
*[
  _type == "dsaProblem" &&
  slug.current != $slug &&
  count(topics[@ in $topics]) > 0
]
| order(featured desc)[0...3]{

  _id,

  title,

  "slug": slug.current,

  platform,

  difficulty,

  topics,

  solvedAt
}
`;

/**
 * ==========================================
 * DSA Statistics
 * ==========================================
 */

export const DSA_STATS_QUERY = groq`
{

  "totalProblems": count(
    *[_type=="dsaProblem"]
  ),

  "easy": count(
    *[
      _type=="dsaProblem" &&
      difficulty=="easy"
    ]
  ),

  "medium": count(
    *[
      _type=="dsaProblem" &&
      difficulty=="medium"
    ]
  ),

  "hard": count(
    *[
      _type=="dsaProblem" &&
      difficulty=="hard"
    ]
  ),

  "featured": count(
    *[
      _type=="dsaProblem" &&
      featured==true
    ]
  ),

  "solved": count(
    *[
      _type=="dsaProblem" &&
      status=="solved"
    ]
  ),

  "revising": count(
    *[
      _type=="dsaProblem" &&
      status=="revising"
    ]
  ),

  "needPractice": count(
    *[
      _type=="dsaProblem" &&
      status=="need-practice"
    ]
  )

}
`;

export const PREVIOUS_NEXT_DSA_PROBLEM_QUERY = groq`
{
  "previousProblem": *[
    _type == "dsaProblem" &&
    solvedAt < $solvedAt
  ]
  | order(solvedAt desc)[0]{
    title,
    difficulty,
    "slug": slug.current
  },

  "nextProblem": *[
    _type == "dsaProblem" &&
    solvedAt > $solvedAt
  ]
  | order(solvedAt asc)[0]{
    title,
    difficulty,
    "slug": slug.current
  }
}
`;