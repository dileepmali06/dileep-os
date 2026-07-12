import { defineField, defineType } from "sanity";

export const skills = defineType({
  name: "skills",
  title: "Skills",
  type: "document",

  fields: [
    defineField({
      name: "frontend",
      title: "Frontend",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "backend",
      title: "Backend",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "database",
      title: "Database",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "languages",
      title: "Programming Languages",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "devops",
      title: "DevOps & Cloud",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "tools",
      title: "Tools & Platforms",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "currentlyLearning",
      title: "Currently Learning",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "interestedIn",
      title: "Interested In",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "updatedAt",
      title: "Last Updated",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Skills",
        subtitle: "Technical Skills Matrix",
      };
    },
  },
});