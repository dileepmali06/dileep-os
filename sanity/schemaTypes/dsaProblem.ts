import { defineField, defineType } from "sanity";

export const dsaProblem = defineType({
  name: "dsaProblem",
  title: "DSA Problems",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Problem Name",
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
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "LeetCode", value: "leetcode" },
          { title: "GeeksForGeeks", value: "gfg" },
          { title: "HackerRank", value: "hackerrank" },
          { title: "Codeforces", value: "codeforces" },
        ],
      },
    }),

    defineField({
      name: "problemUrl",
      title: "Problem URL",
      type: "url",
    }),

    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: [
          { title: "Easy", value: "easy" },
          { title: "Medium", value: "medium" },
          { title: "Hard", value: "hard" },
        ],
      },
    }),

    defineField({
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "bruteForceApproach",
      title: "Brute Force Approach",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "optimalApproach",
      title: "Optimal Approach",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "javaSolution",
      title: "Java Solution",
      type: "text",
    }),

    defineField({
      name: "timeComplexity",
      title: "Time Complexity",
      type: "string",
    }),

    defineField({
      name: "spaceComplexity",
      title: "Space Complexity",
      type: "string",
    }),

    defineField({
      name: "keyLearning",
      title: "Key Learning",
      type: "text",
    }),

    defineField({
      name: "solvedAt",
      title: "Solved At",
      type: "datetime",
    }),

    defineField({
      name: "featured",
      title: "Featured Problem",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "difficulty",
    },
  },
});