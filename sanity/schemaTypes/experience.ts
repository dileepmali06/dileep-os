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
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),

    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
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
    }),

    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "position",
      subtitle: "company",
      media: "companyLogo",
    },
  },
});