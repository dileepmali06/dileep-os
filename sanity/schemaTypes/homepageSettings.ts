import { defineField, defineType } from "sanity";

export const homepageSettings = defineType({
  name: "homepageSettings",
  title: "Homepage Settings",
  type: "document",

  fields: [
    // =====================================================
    // HERO SECTION
    // =====================================================

    defineField({
      name: "heroName",
      title: "Hero Name",
      type: "string",
      initialValue: "Dileep",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroEmoji",
      title: "Hero Emoji",
      type: "string",
      initialValue: "👋",
    }),

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
      rows: 4,
    }),

    defineField({
      name: "heroBadge",
      title: "Hero Badge",
      type: "string",
      initialValue: "Available for opportunities",
    }),

    defineField({
      name: "isAvailable",
      title: "Available for Opportunities",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // =====================================================
    // ROTATING ROLES
    // =====================================================

    defineField({
      name: "heroRoles",
      title: "Hero Roles",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Full Stack Developer",
        "Backend Engineer in the making",
        "DSA Practitioner",
        "Problem Solver",
      ],
    }),

    // =====================================================
    // TERMINAL
    // =====================================================

    defineField({
      name: "terminalLines",
      title: "Terminal Lines",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "$ whoami",
        "Dileep — Full Stack Developer",
        "",
        "$ cat focus.json",
        '{ "learning": ["Java", "DSA", "System Design"] }',
        "",
        "$ status --check",
        "✓ Available for new opportunities",
      ],
    }),

    // =====================================================
    // FLOATING TECH TAGS
    // =====================================================

    defineField({
      name: "floatingTags",
      title: "Floating Tags",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "React",
        "Node.js",
        "Next.js",
        "Java",
      ],
    }),

    // =====================================================
    // CURRENT FOCUS
    // =====================================================

    defineField({
      name: "focusTechnologies",
      title: "Focus Technologies",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Java",
        "DSA",
        "Spring Boot",
        "System Design",
      ],
    }),

    // =====================================================
    // BUTTONS
    // =====================================================

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

    // =====================================================
    // HERO STATS
    // =====================================================

    defineField({
      name: "projectsCount",
      title: "Projects Count",
      type: "number",
      initialValue: 20,
    }),

    defineField({
      name: "coursesCount",
      title: "Courses Count",
      type: "number",
      initialValue: 10,
    }),

    defineField({
      name: "blogsCount",
      title: "Blogs Count",
      type: "number",
      initialValue: 5,
    }),

    // =====================================================
    // TERMINAL FOOTER
    // =====================================================

    defineField({
      name: "footerTitle",
      title: "Footer Title",
      type: "string",
      initialValue: "Dileep OS",
    }),

    defineField({
      name: "footerSubtitle",
      title: "Footer Subtitle",
      type: "string",
      initialValue: "MERN Developer • MCA Student • Builder",
    }),

    defineField({
      name: "footerBadge",
      title: "Footer Badge",
      type: "string",
      initialValue: "Open To Work",
    }),

    // =====================================================
    // HOMEPAGE CONFIGURATION
    // =====================================================

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