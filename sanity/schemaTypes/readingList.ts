import { defineField, defineType } from "sanity";

export const readingList = defineType({
  name: "readingList",
  title: "Reading List",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),

    defineField({
      name: "resourceType",
      title: "Resource Type",
      type: "string",
      options: {
        list: [
          { title: "Book", value: "book" },
          { title: "Article", value: "article" },
          { title: "Documentation", value: "documentation" },
          { title: "Research Paper", value: "research-paper" },
          { title: "Video", value: "video" },
          { title: "Playlist", value: "playlist" },
        ],
      },
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "planned" },
          { title: "Reading", value: "reading" },
          { title: "Completed", value: "completed" },
        ],
      },
      initialValue: "planned",
    }),

    defineField({
      name: "progress",
      title: "Progress (%)",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
      initialValue: 0,
    }),

    defineField({
      name: "url",
      title: "Resource URL",
      type: "url",
    }),

    defineField({
      name: "notes",
      title: "Notes",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
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