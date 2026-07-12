import { defineField, defineType } from "sanity";

export const changelog = defineType({
  name: "changelog",
  title: "Changelog",
  type: "document",

  fields: [
    defineField({
      name: "version",
      title: "Version",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Release Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "changes",
      title: "Changes",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "featured",
      title: "Featured Release",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "version",
      subtitle: "title",
    },
  },
});