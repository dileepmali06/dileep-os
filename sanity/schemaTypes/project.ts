import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(120),
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
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(250),
    }),

    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "demoVideo",
      title: "Demo Video URL",
      type: "url",
    }),

    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      initialValue: "personal",
      options: {
        list: [
          { title: "Personal", value: "personal" },
          { title: "Client", value: "client" },
          { title: "Company", value: "company" },
          { title: "Freelance", value: "freelance" },
          { title: "Open Source", value: "open-source" },
          { title: "Hackathon", value: "hackathon" },
        ],
      },
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Portfolio", value: "portfolio" },
          { title: "Business Website", value: "business" },
          { title: "Dashboard", value: "dashboard" },
          { title: "E-Commerce", value: "ecommerce" },
          { title: "AI", value: "ai" },
          { title: "CMS", value: "cms" },
          { title: "Healthcare", value: "healthcare" },
          { title: "Education", value: "education" },
          { title: "Finance", value: "finance" },
          { title: "Travel", value: "travel" },
          { title: "Other", value: "other" },
        ],
      },
    }),

    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      hidden: ({ document }) =>
        !["client", "freelance", "company"].includes(
          (document?.projectType as string | undefined) ?? "",
        ),
    }),

    defineField({
      name: "role",
      title: "Your Role",
      type: "string",
      options: {
        list: [
          { title: "Full Stack Developer", value: "full-stack" },
          { title: "Frontend Developer", value: "frontend" },
          { title: "Backend Developer", value: "backend" },
          { title: "UI/UX Designer", value: "designer" },
          { title: "Team Lead", value: "lead" },
        ],
      },
    }),

    defineField({
      name: "duration",
      title: "Project Duration",
      type: "string",
    }),

    defineField({
      name: "teamSize",
      title: "Team Size",
      type: "number",
      initialValue: 1,
    }),

    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),

    defineField({
      name: "liveUrl",
      title: "Live Demo URL",
      type: "url",
    }),

    defineField({
      name: "figmaUrl",
      title: "Figma URL",
      type: "url",
    }),

    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      initialValue: "completed",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in-progress" },
          { title: "Archived", value: "archived" },
        ],
      },
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),

    defineField({
      name: "challenges",
      title: "Challenges Faced",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "learnings",
      title: "Key Learnings",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "metrics",
      title: "Project Metrics",
      type: "object",
      fields: [
        defineField({
          name: "views",
          title: "Views",
          type: "number",
          initialValue: 0,
        }),
        defineField({
          name: "likes",
          title: "Likes",
          type: "number",
          initialValue: 0,
        }),
        defineField({
          name: "downloads",
          title: "Downloads",
          type: "number",
          initialValue: 0,
        }),
      ],
    }),

    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),

    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    }),
  ],

  orderings: [
    {
      title: "Featured First",
      name: "featured",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "desc" },
        { field: "year", direction: "desc" },
      ],
    },
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "createdAt", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "status",
      media: "coverImage",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? "⭐ " : ""}${title}`,
        subtitle,
        media,
      };
    },
  },
});
