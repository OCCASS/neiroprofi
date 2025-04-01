import { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
    labels: {
        plural: "Частые вопросы",
        singular: "Частый вопрос"
    },
    admin: {
        useAsTitle: "title"
    },
    slug: "faqs",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "content",
            type: "textarea",
            required: true,
        }
    ]
}
