import { defineField, defineType } from "sanity";

export const achievement = defineType({
  name: "achievement",
  title: "Achievements",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Achievement Title",
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
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Learning", value: "learning" },
          { title: "Project", value: "project" },
          { title: "Career", value: "career" },
          { title: "Certification", value: "certification" },
          { title: "Education", value: "education" },
          { title: "Open Source", value: "opensource" },
          { title: "Personal", value: "personal" },
        ],
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "achievementDate",
      title: "Achievement Date",
      type: "date",
    }),

    defineField({
      name: "metric",
      title: "Metric Value",
      type: "string",
      description: "Example: 100+, 10+, Top 5%, 1st Place",
    }),

    defineField({
      name: "skills",
      title: "Related Skills",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "proofUrl",
      title: "Proof URL",
      type: "url",
    }),

    defineField({
      name: "featured",
      title: "Featured Achievement",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "image",
      title: "Achievement Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "metric",
      media: "image",
    },
  },
});