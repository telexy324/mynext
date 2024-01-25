import { Access, CollectionConfig } from 'payload/types'

export const NavItems: CollectionConfig = {
  slug: 'navItems',
  admin: {
    useAsTitle: 'Navi Items',
    description:
        'A summary of Navi Items.',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: ({ req }) => req.user.role === 'admin',
    create: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      label: 'href',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      label: 'icon',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      label: 'label',
      type: 'text',
      required: true,
    },
  ],
}