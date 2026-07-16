import { groq } from "next-sanity";

export const CERTIFICATES_QUERY = groq`
  *[_type == "certificate"] | order(issueDate desc) {
    _id,

    title,
    issuer,

    issueDate,
    expirationDate,

    credentialId,
    credentialUrl,

    certificateImage,

    skills,

    featured
  }
`;

export const FEATURED_CERTIFICATES_QUERY = groq`
  *[
    _type == "certificate" &&
    featured == true
  ] | order(issueDate desc) {
    _id,

    title,
    issuer,

    issueDate,
    expirationDate,

    credentialId,
    credentialUrl,

    certificateImage,

    skills,

    featured
  }
`;