import { defineField, defineType } from "sanity";

export const stackEvolution = defineType({
  name: "stackEvolution",
  title: "Stack Evolution",
  type: "document",

  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Phase Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "technologies",
      title: "Technologies Learned",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "milestone",
      title: "Major Milestone",
      type: "string",
    }),

    defineField({
      name: "featured",
      title: "Featured Phase",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "image",
      title: "Phase Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "year",
      media: "image",
    },
  },
});