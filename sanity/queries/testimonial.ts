import { groq } from "next-sanity";

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && featured == true]
  | order(_createdAt desc)[0...3]{
    _id,
    _createdAt,
    _updatedAt,

    name,
    position,
    company,
    message,

    avatar{
      asset->{
        _id,
        url
      },
      hotspot,
      crop,
      alt
    },

    linkedinUrl,
    featured
  }
`;