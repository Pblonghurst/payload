import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { isOwner } from '../access/isOwner'
import { isLogged } from '../access/isLogged'
import { isOwnerOrSelf } from '../access/isOwnerorSelf'

export const Pages: CollectionConfig = {
  access: {
    // Create: Owner & Staff
    create: isLogged,
    // Read: Owner and Staff only if they created it
    read: isLogged,
    // Update: same as read
    update: isOwnerOrSelf,
    // Delete: Owner only
    delete: isOwner,
  },
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
    },
  ],
}
