import { defineField, defineType } from "sanity";

export const about = defineType({
    name: "about",
    title: "About",
    type: "document",

    fields: [
        defineField({
            name: "name",
            title: "Full Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "role",
            title: "Role",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),

        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "headline",
            title: "Hero Headline",
            type: "string",
        }),

        defineField({
            name: "shortBio",
            title: "Short Bio",
            type: "text",
            rows: 3,
        }),

        defineField({
            name: "fullBio",
            title: "Full Bio",
            type: "array",
            of: [{ type: "block" }],
        }),

        defineField({
            name: "yearsOfExperience",
            title: "Years of Experience",
            type: "number",
        }),

        defineField({
            name: "openToWork",
            title: "Open To Work",
            type: "boolean",
            initialValue: true,
        }),

        defineField({
            name: "currentFocus",
            title: "Current Focus",
            type: "array",
            of: [{ type: "string" }],
        }),

        defineField({
            name: "lookingFor",
            title: "Looking For",
            type: "array",
            of: [{ type: "string" }],
        }),
    ]
})