import { defineField, defineType } from "sanity";

export const recommendation = defineType({
  name: "recommendation",
  title: "Recommendations",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Person Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),

    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),

    defineField({
      name: "relationship",
      title: "Relationship",
      type: "string",
      options: {
        list: [
          { title: "Manager", value: "manager" },
          { title: "Client", value: "client" },
          { title: "Colleague", value: "colleague" },
          { title: "Mentor", value: "mentor" },
          { title: "Friend", value: "friend" },
        ],
      },
    }),

    defineField({
      name: "message",
      title: "Recommendation Message",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),

    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "date",
      title: "Recommendation Date",
      type: "date",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "avatar",
    },
  },
});