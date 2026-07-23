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
      name: "targetRole",
      title: "Target Role",
      type: "string",
      description:
        "Example: Frontend Engineer, MERN Developer, SDE-1",
    }),

    defineField({
      name: "experienceLevel",
      title: "Experience Level",
      type: "string",
      options: {
        list: [
          { title: "Fresher", value: "fresher" },
          { title: "Junior", value: "junior" },
          { title: "Mid Level", value: "mid-level" },
          { title: "Senior", value: "senior" },
        ],
      },
      initialValue: "fresher",
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
      name: "thumbnail",
      title: "Resume Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "skills",
      title: "Highlighted Skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "isATSFriendly",
      title: "ATS Friendly",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "featured",
      title: "Featured Resume",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "isPrimary",
      title: "Primary Resume",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "downloadLabel",
      title: "Download Button Label",
      type: "string",
      initialValue: "Download Resume",
    }),

    defineField({
      name: "pageCount",
      title: "Page Count",
      type: "number",
      initialValue: 1,
    }),

    defineField({
      name: "fileSize",
      title: "File Size",
      type: "string",
      description: "Example: 245 KB",
    }),

    defineField({
      name: "changeLog",
      title: "What's New",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [
        {
          field: "order",
          direction: "asc",
        },
      ],
    },
    {
      title: "Latest Updated",
      name: "latestUpdated",
      by: [
        {
          field: "lastUpdated",
          direction: "desc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "version",
      media: "thumbnail",
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