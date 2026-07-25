import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",

  fields: [
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.position}-${doc.company}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full Time", value: "full-time" },
          { title: "Part Time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Freelance", value: "freelance" },
          { title: "Internship", value: "internship" },
          { title: "Founder", value: "founder" },
        ],
      },
    }),

    defineField({
      name: "workMode",
      title: "Work Mode",
      type: "string",
      options: {
        list: [
          { title: "On-site", value: "onsite" },
          { title: "Remote", value: "remote" },
          { title: "Hybrid", value: "hybrid" },
        ],
      },
    }),

    defineField({
      name: "companyIndustry",
      title: "Company Industry",
      type: "string",
      description: "Example: SaaS, Healthcare, FinTech",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "companyWebsite",
      title: "Company Website",
      type: "url",
    }),

    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      hidden: ({ document }) => Boolean(document?.currentlyWorking),
    }),

    defineField({
      name: "currentlyWorking",
      title: "Currently Working Here",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "responsibilities",
      title: "Key Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "skills",
      title: "Skills Gained",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "projects",
      title: "Projects Worked On",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "certificate",
      title: "Experience Certificate",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),

    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
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
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "oldest",
      by: [{ field: "startDate", direction: "asc" }],
    },
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "order", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "position",
      subtitle: "company",
      media: "companyLogo",
      current: "currentlyWorking",
    },
    prepare({ title, subtitle, media, current }) {
      return {
        title,
        subtitle: current
          ? `${subtitle} • Currently Working`
          : subtitle,
        media,
      };
    },
  },
});