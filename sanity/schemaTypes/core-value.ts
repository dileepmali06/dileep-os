import { defineField, defineType } from "sanity";

export const coreValue = defineType({
  name: "coreValue",
  title: "Core Values",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Value Title",
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
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});