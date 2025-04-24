import type { CollectionConfig } from 'payload'
import { isOwner } from '../access/isOwner'
import { isLogged } from '../access/isLogged'
import { isOwnerOrSelf } from '../access/isOwnerorSelf'

export const Events: CollectionConfig = {
  hooks: {
    // using before change hook to set created by to user id
    beforeChange: [
      async ({ req, data }) => {
        if (req.user) {
          data.createdBy = req.user.id
        }
        return data
      },
    ],
  },
  slug: 'events',
  access: {
    // Create: Owner & Staff
    create: isLogged,
    // Read: Owner and Staff only if they created it
    read: isOwnerOrSelf,
    // Update: same as read
    update: isOwnerOrSelf,
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
        // disable create and update for this
        create: () => false,
        update: () => false,
      },
      admin: {
        readOnly: true,
      },
    },
  ],
}
