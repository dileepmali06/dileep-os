import { defineField, defineType } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",

  fields: [
    defineField({
      name: "institution",
      title: "Institution Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "fieldOfStudy",
      title: "Field of Study",
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
      name: "currentlyStudying",
      title: "Currently Studying",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "grade",
      title: "CGPA / Percentage",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "skills",
      title: "Skills Learned",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "logo",
      title: "Institution Logo",
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
  ],

  preview: {
    select: {
      title: "degree",
      subtitle: "institution",
      media: "logo",
    },
  },
});