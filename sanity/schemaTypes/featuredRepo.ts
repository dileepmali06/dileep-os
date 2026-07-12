import { defineField, defineType } from "sanity";

export const featuredRepo = defineType({
  name: "featuredRepo",
  title: "Featured Repositories",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Repository Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "repositoryType",
      title: "Repository Type",
      type: "string",
      options: {
        list: [
          { title: "Full Stack", value: "fullstack" },
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Library", value: "library" },
          { title: "Tool", value: "tool" },
          { title: "Open Source", value: "opensource" },
        ],
      },
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
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
      title: "name",
      subtitle: "repositoryType",
      media: "coverImage",
    },
  },
});