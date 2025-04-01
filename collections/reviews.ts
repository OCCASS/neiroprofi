import { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
    labels: {
        plural: "Отзывы",
        singular: "Отзыв"
    },
    slug: "reviews",
    fields: [
        {
            name: "from",
            type: "text",
            required: true,
        },
        {
            name: "content",
            type: "text",
            required: true,
        },
        {
            name: "rating",
            type: "number",
            required: true,
            admin: {
                description: "Рейтинг от 0 до 5"
            }
        },
        {
            name: "proDoctorov",
            type: "checkbox",
            defaultValue: false,
            required: true,
        },
        {
            name: "link",
            type: "text",
            required: false,
            admin: {
                description: "Если это отзыв из ПроДокторов"
            }
        }
    ]
}
