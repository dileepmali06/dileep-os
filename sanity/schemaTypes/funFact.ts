import { defineField, defineType } from "sanity";

export const funFact = defineType({
  name: "funFact",
  title: "Fun Facts",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});