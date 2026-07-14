import { defineField, defineType } from "sanity";

export const now = defineType({
  name: "now",
  title: "Now",
  type: "document",

  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "What I'm Focused On Right Now",
    }),

    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "tracks",
      title: "Tracks",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "title",
              title: "Track Title",
              type: "string",
            }),

            defineField({
              name: "color",
              title: "Track Color",
              type: "string",
              options: {
                list: [
                  { title: "Blue", value: "var(--blue)" },
                  { title: "Green", value: "var(--green)" },
                  { title: "Pink", value: "var(--pink)" },
                  { title: "Yellow", value: "var(--yellow)" },
                ],
              },
            }),

            defineField({
              name: "icon",
              title: "Icon Name",
              type: "string",
              options: {
                list: [
                  "Code2",
                  "BookOpen",
                  "Rocket",
                  "Target",
                ],
              },
            }),

            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Now Section",
        subtitle: "Current focus and priorities",
      };
    },
  },
});