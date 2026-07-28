import { defineField, defineType } from "sanity";

export const contactStats = defineType({
  name: "contactStats",
  title: "Contact Stats",
  type: "document",

  fields: [
    defineField({
      name: "totalEnquiries",
      title: "Total Enquiries Received",
      type: "number",
      readOnly: true,
      initialValue: 0,
    }),

    defineField({
      name: "hireRequests",
      title: "Hire Requests",
      description: "Auto-incremented when contactType is 'hire-me'.",
      type: "number",
      readOnly: true,
      initialValue: 0,
    }),

    defineField({
      name: "freelanceProjects",
      title: "Freelance Inquiries",
      description: "Auto-incremented when contactType is 'freelance'.",
      type: "number",
      readOnly: true,
      initialValue: 0,
    }),

    defineField({
      name: "generalInquiries",
      title: "General Inquiries",
      description: "Auto-incremented when contactType is 'general'.",
      type: "number",
      readOnly: true,
      initialValue: 0,
    }),

    defineField({
      name: "wonProjects",
      title: "Projects Won",
      description:
        "Not auto-tracked (no per-lead outcome data since submissions aren't stored). Update this manually as deals close.",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "lastEnquiryAt",
      title: "Last Enquiry Received",
      type: "datetime",
      readOnly: true,
    }),
  ],

  preview: {
    select: { total: "totalEnquiries", last: "lastEnquiryAt" },
    prepare({ total, last }) {
      return {
        title: `${total ?? 0} enquiries received`,
        subtitle: last ? `Last: ${new Date(last).toLocaleDateString()}` : "No enquiries yet",
      };
    },
  },
});