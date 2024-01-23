import { Access, CollectionConfig } from 'payload/types'

export const Systems: CollectionConfig = {
  slug: 'systems',
  admin: {
    useAsTitle: 'Your Systems',
    description:
      'A summary of Systems.',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: ({ req }) => req.user.role === 'admin',
    create: () => true,
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Before Integration', value: 'beforeIntegration' },
        { label: 'Integrating', value: 'integrating' },
        { label: 'In Use', value: 'inUse' },
        { label: 'To Delete', value: 'toDelete' },
      ],
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: true,
    },
    {
      name: 'name',
      label: 'name',
      type: 'text',
      required: true,
    },
  ],
}
