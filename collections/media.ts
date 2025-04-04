import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
    labels: {
        plural: "Медиа",
        singular: "Медиа"
    },
    slug: "media",
    upload: {
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 300,
                height: 400,
                position: 'centre',
            },
            {
                name: 'card',
                width: 600,
                height: 800,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: false,
        },
    ],
}
