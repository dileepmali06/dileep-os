import { defineField, defineType } from "sanity";

export const stats = defineType({
  name: "stats",
  title: "Stats Dashboard",
  type: "document",

  fields: [
    defineField({
      name: "projectsBuilt",
      title: "Projects Built",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "coursesCompleted",
      title: "Courses Completed",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "certificatesEarned",
      title: "Certificates Earned",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "booksRead",
      title: "Books Read",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "blogPostsWritten",
      title: "Blog Posts Written",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "leetcodeProblemsSolved",
      title: "LeetCode Problems Solved",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "githubContributions",
      title: "GitHub Contributions",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "githubRepositories",
      title: "Public Repositories",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "yearsLearning",
      title: "Years Learning Programming",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "coffeeConsumed",
      title: "Cups of Coffee Consumed ☕",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "featuredStat",
      title: "Featured Hero Stat",
      type: "string",
      description: "Example: 500 DSA Goal or Building in Public",
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Stats Dashboard",
        subtitle: "Portfolio Metrics & Numbers",
      };
    },
  },
});