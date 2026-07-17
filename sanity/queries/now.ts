import { groq } from "next-sanity";

export const nowQuery = groq`
  *[_type == "now"][0]{
    _id,

    sectionTitle,
    sectionDescription,
    heroDescription,

    tracks[] {
      title,
      color,
      icon,
      items
    },

    currentGoals,
    currentlyBuilding,
    currentlyLearning,

    reading,
    watching,

    currentStack,

    lifeUpdate,

    updatedAt
  }
`;