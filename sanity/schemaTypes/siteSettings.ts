import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),

    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),

    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'url',
    }),

    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
    }),

    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    }),

    defineField({
      name: 'leetcode',
      title: 'LeetCode',
      type: 'url',
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter / X',
      type: 'url',
    }),
  ],
})