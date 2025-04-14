import type { CollectionConfig } from 'payload'

export const Doctors: CollectionConfig = {
    labels: {
        plural: "Доктора",
        singular: "Доктор"
    },
    admin: {
        useAsTitle: "fullName"
    },
    slug: 'doctors',
    fields: [
        {
            name: 'fullName',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: 'about',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: "media",
            required: true,
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
        {
            name: "position",
            type: "select",
            required: true,
            options: [
                "admin",
                "doctor",
                "nurse",
                "paramedic-laboratory-assistant"
            ]
        },
        {
            name: "specialitiesShort",
            type: "array",
            required: true,
            fields: [
                {
                    name: "name",
                    type: "text"
                }
            ],
            defaultValue: [],
        },
        {
            name: "specialitiesLong",
            type: "array",
            fields: [
                {
                    name: "name",
                    type: "text"
                }
            ],
            defaultValue: [],
            required: true
        },
        {
            name: 'education',
            type: 'textarea',
            required: false,
        },
    ],
}
