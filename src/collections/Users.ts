import type { CollectionConfig } from 'payload'
import { isOwner } from '../access/isOwner'

export const Users: CollectionConfig = {
  access: {
    // only Owner can manage users
    create: isOwner,
    read: isOwner,
    update: isOwner,
    delete: isOwner,
  },
  // admin: {
  //   useAsTitle: 'email',
  //   hide: ({ req }) => !isOwner({ req }), // only Owner sees the Users UI
  // },
  slug: 'users',
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      hasMany: true,
      saveToJWT: true,
      defaultValue: 'staff',
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Staff', value: 'staff' },
      ],
    },
  ],
}
