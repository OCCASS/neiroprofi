import { GlobalConfig } from 'payload'

export const AboutUs: GlobalConfig = {
    label: {
        plural: "О нас",
        singular: "О нас"
    },
    slug: 'about_us',
    fields: [
        {
            name: "content",
            type: "richText",
            required: true
        }
    ],
}
