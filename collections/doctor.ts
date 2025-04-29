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
            admin: {
                placeholder: "ФИО"
            }
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                placeholder: "Slug"
            }
        },
        {
            name: 'about',
            type: 'textarea',
            required: false,
            admin: {
                placeholder: "Описание"
            }
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
            admin: {
                description: "Позиция",
            },
            options: [
                "admin",
                "doctor",
                "nurse",
                "paramedic-laboratory-assistant",
                "massage-specialist"
            ]
        },
        {
            name: "specialitiesShort",
            type: "array",
            required: true,
            admin: {
                description: "Специальности кратко"
            },
            fields: [
                {
                    name: "name",
                    type: "text",
                    admin: {
                        placeholder: "Название специальности"
                    }
                }
            ],
            defaultValue: [],
        },
        {
            name: "specialitiesLong",
            type: "array",
            admin: {
                description: "Специальности полностью"
            },
            fields: [
                {
                    name: "name",
                    type: "text",
                    admin: {
                        placeholder: "Название специальности"
                    }
                }
            ],
            defaultValue: [],
            required: true
        },
        {
            name: 'education',
            type: 'textarea',
            required: false,
            admin: {
                placeholder: "Образование"
            }
        },
    ],
}
