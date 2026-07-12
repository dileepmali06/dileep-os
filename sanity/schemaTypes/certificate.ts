import { defineField, defineType } from "sanity";

export const certificate = defineType({
  name: "certificate",
  title: "Certificates",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Certificate Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "issuer",
      title: "Issued By",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "issueDate",
      title: "Issue Date",
      type: "date",
    }),

    defineField({
      name: "expirationDate",
      title: "Expiration Date",
      type: "date",
    }),

    defineField({
      name: "credentialId",
      title: "Credential ID",
      type: "string",
    }),

    defineField({
      name: "credentialUrl",
      title: "Credential URL",
      type: "url",
    }),

    defineField({
      name: "certificateImage",
      title: "Certificate Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "skills",
      title: "Skills Covered",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "featured",
      title: "Featured Certificate",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "issuer",
      media: "certificateImage",
    },
  },
});