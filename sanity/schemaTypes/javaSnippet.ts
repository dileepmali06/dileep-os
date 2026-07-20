import { defineField, defineType } from "sanity";

export const javaSnippet = defineType({
  name: "javaSnippet",
  title: "Java Snippets",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Snippet Title",
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Arrays", value: "arrays" },
          { title: "Strings", value: "strings" },
          { title: "HashMap", value: "hashmap" },
          { title: "Trees", value: "trees" },
          { title: "Graphs", value: "graphs" },
          { title: "Dynamic Programming", value: "dp" },
          { title: "Collections", value: "collections" },
          { title: "OOP", value: "oop" },
          { title: "Streams API", value: "streams" },
          { title: "Spring Boot", value: "springboot" },
        ],
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "code",
      title: "Code",
      type: "text",
    }),

    defineField({
      name: "complexity",
      title: "Complexity",
      type: "string",
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
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
});