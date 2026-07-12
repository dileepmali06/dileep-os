import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Events",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Hackathon", value: "hackathon" },
          { title: "Conference", value: "conference" },
          { title: "Meetup", value: "meetup" },
          { title: "Workshop", value: "workshop" },
          { title: "Webinar", value: "webinar" },
          { title: "Coding Contest", value: "coding-contest" },
          { title: "Speaking Session", value: "speaking-session" },
          { title: "Community Event", value: "community-event" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "organizer",
      title: "Organizer",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "participationType",
      title: "Participation Type",
      type: "string",
      options: {
        list: [
          { title: "Participant", value: "participant" },
          { title: "Speaker", value: "speaker" },
          { title: "Mentor", value: "mentor" },
          { title: "Organizer", value: "organizer" },
          { title: "Volunteer", value: "volunteer" },
        ],
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "technologies",
      title: "Technologies",
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
      name: "eventUrl",
      title: "Event URL",
      type: "url",
    }),

    defineField({
      name: "certificateUrl",
      title: "Certificate URL",
      type: "url",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "eventType",
      media: "coverImage",
    },
  },
});