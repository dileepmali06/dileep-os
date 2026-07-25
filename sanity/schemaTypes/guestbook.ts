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
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "profession",
      title: "Profession",
      type: "string",
      description: "Example: Software Engineer, Student, UI Designer",
    }),

    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),

    defineField({
      name: "github",
      title: "GitHub Profile",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn Profile",
      type: "url",
    }),

    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required().min(10).max(500),
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),

    defineField({
      name: "reply",
      title: "Your Reply",
      type: "text",
      rows: 4,
      description: "Reply that will be shown publicly under the visitor's message.",
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "pinned",
      title: "Pinned",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "spam",
      title: "Spam",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "source",
      title: "Message Source",
      type: "string",
      options: {
        list: [
          { title: "Portfolio", value: "portfolio" },
          { title: "GitHub", value: "github" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Direct", value: "direct" },
        ],
      },
      initialValue: "portfolio",
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      description: "Higher numbers appear first.",
    }),
  ],

  orderings: [
    {
      title: "Newest First",
      name: "newest",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "oldest",
      by: [{ field: "createdAt", direction: "asc" }],
    },
    {
      title: "Pinned First",
      name: "pinned",
      by: [
        { field: "pinned", direction: "desc" },
        { field: "createdAt", direction: "desc" },
      ],
    },
    {
      title: "Featured First",
      name: "featured",
      by: [
        { field: "featured", direction: "desc" },
        { field: "createdAt", direction: "desc" },
      ],
    },
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "order", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "message",
      media: "avatar",
      approved: "approved",
      featured: "featured",
      pinned: "pinned",
    },
    prepare({ title, subtitle, media, approved, featured, pinned }) {
      const badges = [];

      if (pinned) badges.push("📌");
      if (featured) badges.push("⭐");
      if (!approved) badges.push("⏳");

      return {
        title: `${badges.join(" ")} ${title}`,
        subtitle:
          subtitle?.length > 60
            ? `${subtitle.slice(0, 60)}...`
            : subtitle,
        media,
      };
    },
  },
});