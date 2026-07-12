import { defineField, defineType } from "sanity";

export const guestbook = defineType({
  name: "guestbook",
  title: "Guestbook",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),

    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "message",
    },
  },
});