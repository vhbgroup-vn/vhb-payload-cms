import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'announcement',
      type: 'text',
      label: 'Announcement bar',
    },
    {
      name: 'heroSlides',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Hero slide',
        plural: 'Hero carousel',
      },
      fields: [
        { name: 'headline', type: 'text', required: true },
        { name: 'subheadline', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'ctaLabel', type: 'text' },
        { name: 'ctaUrl', type: 'text' },
        { name: 'active', type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'featuredProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      maxRows: 8,
    },
    {
      name: 'brandStory',
      type: 'richText',
    },
  ],
}
