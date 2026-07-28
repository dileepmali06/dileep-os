import { groq } from "next-sanity";

export const CONTACT_STATS_QUERY = groq`
  *[_type == "contactStats"][0]{
    totalEnquiries,
    hireRequests,
    freelanceProjects,
    generalInquiries,
    wonProjects,
    lastEnquiryAt
  }
`;