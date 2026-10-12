import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pageType', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: ({ req }) => Boolean(req.user) || { published: { equals: true } },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'pageType',
      type: 'select',
      required: true,
      options: [
        { label: 'About Us', value: 'about' },
        { label: 'Contact', value: 'contact' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'contactDetails',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData?.pageType === 'contact',
      },
      fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
        { name: 'mapUrl', type: 'text' },
      ],
    },
  ],
}
