import { defineField, defineType } from "sanity";

export const course = defineType({
  name: "course",
  title: "Courses",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "instructor",
      title: "Instructor",
      type: "string",
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "planned" },
          { title: "In Progress", value: "in-progress" },
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
    }),

    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),

    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    }),

    defineField({
      name: "courseUrl",
      title: "Course URL",
      type: "url",
    }),

    defineField({
      name: "skills",
      title: "Skills Learned",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "notes",
      title: "Notes",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "platform",
      media: "thumbnail",
    },
  },
});