import { defineField, defineType } from "sanity";

export const goal = defineType({
  name: "goal",
  title: "Goals & Roadmap",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Goal Title",
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
          { title: "Career", value: "career" },
          { title: "Learning", value: "learning" },
          { title: "Project", value: "project" },
          { title: "Business", value: "business" },
          { title: "Fitness", value: "fitness" },
          { title: "Financial", value: "financial" },
          { title: "Personal", value: "personal" },
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
          { title: "In Progress", value: "in-progress" },
          { title: "Completed", value: "completed" },
          { title: "Paused", value: "paused" },
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
      name: "targetDate",
      title: "Target Date",
      type: "date",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "milestones",
      title: "Milestones",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "priority",
      title: "Priority",
      type: "string",
      options: {
        list: [
          { title: "High", value: "high" },
          { title: "Medium", value: "medium" },
          { title: "Low", value: "low" },
        ],
      },
      initialValue: "medium",
    }),

    defineField({
      name: "featured",
      title: "Featured Goal",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "status",
    },
  },
});