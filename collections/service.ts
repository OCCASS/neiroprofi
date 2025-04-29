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
                placeholder: "Название",
            }
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                placeholder: "Slug",
            }
        },
        {
            name: "icon",
            type: "text",
            required: true,
            defaultValue: "med_calendar",
            admin: {
                placeholder: "Иконка",
            }
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
            required: false,
        },
        {
            name: "descriptionLong",
            type: "richText",
            required: false,
        },

        {
            name: "priceFrom",
            type: "number",
            required: false,
            admin: {
                description: "Цена \"от\", если цена не указана будет выводиться минмальная цена среди услуг",
                placeholder: "Цена от"
            }
        },
        {
            name: "advantages",
            type: "array",
            required: false,
            admin: {
                description: "Преимущества"
            },
            fields: [
                {
                    name: "name",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Название перимущества",
                    }
                }
            ],
            defaultValue: []
        },
        {
            name: "indications",
            type: "array",
            required: false,
            admin: {
                description: "Проказания"
            },
            fields: [
                {
                    name: "name",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Название показания",
                    }
                }
            ],
            defaultValue: []
        },
        {
            name: "contraindications",
            type: "array",
            required: false,
            admin: {
                description: "Противопоказания"
            },
            fields: [
                {
                    name: "name",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Название противопоказания",
                    }
                }
            ],
            defaultValue: []
        },
        {
            name: "services",
            type: "array",
            required: false,
            admin: {
                description: "Услуги"
            },
            defaultValue: [],
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: false,
                    defaultValue: "",
                    admin: {
                        placeholder: "Заголовок группы",
                        description: "Спиок услуг можно разбить подгруппы, например, как в массаже. Если подгруппа одна и ее название пустое, тогда все будет отображаться просто списком без разделений"
                    }
                },
                {
                    name: "items",
                    type: "array",
                    required: true,
                    admin: {
                        description: "Услуги"
                    },
                    fields: [
                        {
                            name: "name",
                            type: "text",
                            required: true,
                            admin: {
                                placeholder: "Название услуги"
                            }
                        },
                        {
                            name: "price",
                            type: "number",
                            required: true,
                            admin: {
                                placeholder: "Цена услуги"
                            }
                        },
                        {
                            name: "per",
                            type: "text",
                            required: false,
                            defaultValue: undefined,
                            admin: {
                                placeholder: "Цена \"в\"",
                                description: "Здесь можно написать \"час\", тогда будет отбражаться как {цена}/час. По умолчанию это значение пустое"
                            }
                        }
                    ]
                }
            ]
        },
    ]
}
