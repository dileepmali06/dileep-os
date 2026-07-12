import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Books",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Book Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Reading Status",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "planned" },
          { title: "Reading", value: "reading" },
          { title: "Completed", value: "completed" },
          { title: "Dropped", value: "dropped" },
        ],
      },
      initialValue: "planned",
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),

    defineField({
      name: "startedAt",
      title: "Started Reading",
      type: "date",
    }),

    defineField({
      name: "completedAt",
      title: "Completed Reading",
      type: "date",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "notes",
      title: "Notes",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "author",
      media: "coverImage",
    },
  },
});