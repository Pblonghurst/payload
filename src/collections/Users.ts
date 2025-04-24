import type { CollectionConfig } from 'payload'
import { isOwner } from '../access/isOwner'
import { isOwnerOrSelf } from '../access/isOwnerorSelf'

export const Users: CollectionConfig = {
  access: {
    // Create: Owner only
    create: isOwner,
    // Read: Owner and Staff only if they created it
    read: isOwnerOrSelf,
    // Update: Owner and Staff only if they created it
    update: isOwnerOrSelf,
    // Delete: Owner only
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
