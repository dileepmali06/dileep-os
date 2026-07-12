import { defineField, defineType } from "sanity";

export const openSource = defineType({
  name: "openSource",
  title: "Open Source Contributions",
  type: "document",

  fields: [
    defineField({
      name: "projectName",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "repositoryUrl",
      title: "Repository URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "pullRequestUrl",
      title: "Pull Request URL",
      type: "url",
    }),

    defineField({
      name: "contributionType",
      title: "Contribution Type",
      type: "string",
      options: {
        list: [
          { title: "Bug Fix", value: "bug-fix" },
          { title: "Feature", value: "feature" },
          { title: "Documentation", value: "documentation" },
          { title: "Refactor", value: "refactor" },
          { title: "Testing", value: "testing" },
        ],
      },
    }),

    defineField({
      name: "status",
      title: "Contribution Status",
      type: "string",
      options: {
        list: [
          { title: "Open", value: "open" },
          { title: "Merged", value: "merged" },
          { title: "Closed", value: "closed" },
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
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "contributionDate",
      title: "Contribution Date",
      type: "date",
    }),

    defineField({
      name: "featured",
      title: "Featured Contribution",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "projectName",
      subtitle: "status",
    },
  },
});