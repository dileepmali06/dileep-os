import { defineField, defineType } from "sanity";

export const uses = defineType({
  name: "uses",
  title: "Uses",
  type: "document",

  fields: [
    defineField({
      name: "hardware",
      title: "Hardware",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "software",
      title: "Software",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "editor",
      title: "Code Editor",
      type: "string",
    }),

    defineField({
      name: "extensions",
      title: "VS Code Extensions",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "browser",
      title: "Browser",
      type: "string",
    }),

    defineField({
      name: "terminal",
      title: "Terminal",
      type: "string",
    }),

    defineField({
      name: "aiTools",
      title: "AI Tools",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "productivityTools",
      title: "Productivity Tools",
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
        title: "Uses",
        subtitle: "Hardware, software and tools",
      };
    },
  },
});