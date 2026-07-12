import { defineField, defineType } from "sanity";

export const now = defineType({
  name: "now",
  title: "Now",
  type: "document",

  fields: [
    defineField({
      name: "currentlyLearning",
      title: "Currently Learning",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "currentlyBuilding",
      title: "Currently Building",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "currentlyReading",
      title: "Currently Reading",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "currentGoals",
      title: "Current Goals",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "focusArea",
      title: "Main Focus Area",
      type: "string",
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
        title: "Now Page",
        subtitle: "Current activities and goals",
      };
    },
  },
});