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
            validation: (Rule) => Rule.required(),
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
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "gallery",
            title: "Project Gallery",
            type: "array",
            of: [{ type: "image" }],
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
            name: "featured",
            title: "Featured Project",
            type: "boolean",
            initialValue: false,
        }),

        defineField({
            name: "status",
            title: "Project Status",
            type: "string",
            options: {
                list: [
                    { title: "Completed", value: "completed" },
                    { title: "In Progress", value: "in-progress" },
                    { title: "Archived", value: "archived" },
                ],
            },
            initialValue: "completed",
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
    ],

    preview: {
        select: {
            title: "title",
            media: "coverImage",
            subtitle: "status",
        },
    },
});