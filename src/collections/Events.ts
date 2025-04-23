import type { CollectionConfig } from 'payload'
import { isOwner } from '../access/isOwner'
import { isLogged } from '../access/isLogged'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    // Create: Owner & Staff
    create: isLogged,
    // Read: Owner any; Staff only if they created it
    read: isLogged,
    // Update: same as read
    update: isLogged,
    // Delete: Owner only
    delete: isOwner,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      access: {
        // Payload will set this via hook—users cannot supply or change it.
        create: () => false,
        update: () => false,
      },
      admin: {
        readOnly: true,
      },
    },
  ],
}
