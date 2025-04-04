import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
    labels: {
        plural: "Услуги",
        singular: "Услуга"
    },
    admin: {
        useAsTitle: "name"
    },
    slug: "services",
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            admin: {
                description: "Название"
            }
        },
        {
            name: "icon",
            type: "text",
            required: true,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "descriptionShort",
            type: "textarea",
            required: true,
        },
        {
            name: "descriptionLong",
            type: "textarea",
            required: true,
        },
        {
            name: "advantages",
            type: "array",
            required: false,
            fields: [
                {
                    name: "name",
                    type: "text",
                    required: true,
                }
            ],
            defaultValue: []
        },
        {
            name: "indications",
            type: "array",
            required: false,
            fields: [
                {
                    name: "name",
                    type: "text",
                    required: true,
                }
            ],
            defaultValue: []
        },
        {
            name: "contraindications",
            type: "array",
            required: false,
            fields: [
                {
                    name: "name",
                    type: "text",
                    required: true,
                }
            ],
            defaultValue: []
        },
        {
            name: "services",
            type: "array",
            required: false,
            defaultValue: [],
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: false,
                    defaultValue: ""
                },
                {
                    name: "items",
                    type: "array",
                    required: true,
                    fields: [
                        {
                            name: "name",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "price",
                            type: "number",
                            required: true,
                        },
                        {
                            name: "per",
                            type: "text",
                            required: false,
                            defaultValue: undefined
                        }
                    ]
                }
            ]
        },
    ]
}
