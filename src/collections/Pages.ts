import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { isOwner } from '../access/isOwner'
import { isLogged } from '../access/isLogged'

export const Pages: CollectionConfig = {
  access: {
    // Create: Owner & Staff
    create: isLogged,
    // Read: Owner & Staff
    read: isLogged,
    // Update: Owner & Staff
    update: isLogged,
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
