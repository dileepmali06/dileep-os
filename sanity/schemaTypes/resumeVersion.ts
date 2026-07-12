import { defineField, defineType } from "sanity";

export const resumeVersion = defineType({
  name: "resumeVersion",
  title: "Resume Versions",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Resume Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "type",
      title: "Resume Type",
      type: "string",
      options: {
        list: [
          { title: "Software Engineer", value: "software-engineer" },
          { title: "Backend Developer", value: "backend-developer" },
          { title: "Full Stack Developer", value: "full-stack-developer" },
          { title: "Freelance", value: "freelance" },
          { title: "Founder", value: "founder" },
        ],
      },
    }),

    defineField({
      name: "version",
      title: "Version",
      type: "string",
      initialValue: "v1.0",
    }),

    defineField({
      name: "resumeFile",
      title: "Resume File",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "isPrimary",
      title: "Primary Resume",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "version",
    },
  },
});