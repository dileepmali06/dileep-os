import { defineField, defineType } from "sanity";

export const homepageSettings = defineType({
  name: "homepageSettings",
  title: "Homepage Settings",
  type: "document",

  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "heroBadge",
      title: "Hero Badge",
      type: "string",
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "View Projects",
    }),

    defineField({
      name: "primaryButtonLink",
      title: "Primary Button Link",
      type: "string",
      initialValue: "/projects",
    }),

    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Download Resume",
    }),

    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button Link",
      type: "string",
      initialValue: "/resume",
    }),

    defineField({
      name: "featuredProjectsCount",
      title: "Featured Projects Count",
      type: "number",
      initialValue: 3,
    }),

    defineField({
      name: "featuredBlogsCount",
      title: "Featured Blogs Count",
      type: "number",
      initialValue: 3,
    }),

    defineField({
      name: "featuredDsaCount",
      title: "Featured DSA Problems Count",
      type: "number",
      initialValue: 6,
    }),

    defineField({
      name: "showGithubStats",
      title: "Show GitHub Stats",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "showLeetcodeStats",
      title: "Show LeetCode Stats",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "showTimeline",
      title: "Show Timeline",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "showBlogSection",
      title: "Show Blog Section",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Homepage Settings",
        subtitle: "Homepage configuration",
      };
    },
  },
});