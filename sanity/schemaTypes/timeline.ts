import { defineField, defineType } from "sanity";

export const timeline = defineType({
  name: "timeline",
  title: "Timeline",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "type",
      title: "Milestone Type",
      type: "string",
      options: {
        list: [
          { title: "Learning", value: "learning" },
          { title: "Project", value: "project" },
          { title: "Achievement", value: "achievement" },
          { title: "Career", value: "career" },
          { title: "Education", value: "education" },
          { title: "Certification", value: "certification" },
        ],
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "highlight",
      title: "Highlight Milestone",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
});