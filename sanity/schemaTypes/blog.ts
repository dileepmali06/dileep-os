import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blogs",
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
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "DSA", value: "dsa" },
          { title: "Java", value: "java" },
          { title: "MERN", value: "mern" },
          { title: "Career", value: "career" },
          { title: "System Design", value: "system-design" },
          { title: "Learning", value: "learning" },
        ],
      },
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),

    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "readingTime",
      title: "Reading Time (minutes)",
      type: "number",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "category",
    },
  },
});