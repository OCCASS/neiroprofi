import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { Doctors } from './collections/doctor'
import { Media } from './collections/media'
import { Services } from './collections/service'
import { Reviews } from './collections/reviews'
import { Faqs } from './collections/faqs'

export default buildConfig({
    editor: lexicalEditor(),

    collections: [Doctors, Media, Services, Reviews, Faqs],

    secret: process.env.PAYLOAD_SECRET || '',
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    sharp,
})
