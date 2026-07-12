import { defineField, defineType } from "sanity";

export const learningLog = defineType({
  name: "learningLog",
  title: "Learning Log",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Learning Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Learning Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "DSA", value: "dsa" },
          { title: "Java", value: "java" },
          { title: "Spring Boot", value: "springboot" },
          { title: "System Design", value: "system-design" },
          { title: "Backend", value: "backend" },
          { title: "Frontend", value: "frontend" },
          { title: "DevOps", value: "devops" },
          { title: "Database", value: "database" },
          { title: "Career", value: "career" },
        ],
      },
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "resources",
      title: "Resources",
      type: "array",
      of: [{ type: "url" }],
    }),

    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: [
          { title: "Easy", value: "easy" },
          { title: "Medium", value: "medium" },
          { title: "Hard", value: "hard" },
        ],
      },
    }),

    defineField({
      name: "favorite",
      title: "Favorite Learning",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
});