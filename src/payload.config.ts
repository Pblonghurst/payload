// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import sharp from 'sharp'
import seed from './seed'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Events, Pages],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],

  // pre seed some data
  onInit: async (payload) => {
    if (process.env.PAYLOAD_SEED) {
      // check if any users exist
      const { totalDocs } = await payload.find({
        collection: 'users',
        limit: 1,
      })

      // only seed when there are no users yet
      if (totalDocs === 0) {
        await seed(payload)
        console.log('Seed complete')
      } else {
        console.log('Users already exist, skipping seed')
      }
    }
  },
})
