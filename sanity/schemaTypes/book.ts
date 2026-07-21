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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "A short summary about the book.",
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "progress",
      title: "Reading Progress (%)",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(100),
      description: "Used when status is Reading.",
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),

    defineField({
      name: "favorite",
      title: "Favorite Book",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "recommended",
      title: "Recommended",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "genres",
      title: "Genres",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "pages",
      title: "Total Pages",
      type: "number",
    }),

    defineField({
      name: "publisher",
      title: "Publisher",
      type: "string",
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
      name: "purchaseLink",
      title: "Purchase Link",
      type: "url",
    }),

    defineField({
      name: "goodreadsLink",
      title: "Goodreads Link",
      type: "url",
    }),

    defineField({
      name: "officialLink",
      title: "Official Website",
      type: "url",
    }),

    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),

    defineField({
      name: "notes",
      title: "Reading Notes",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "author",
      media: "coverImage",
    },

    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});