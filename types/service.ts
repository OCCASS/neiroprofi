export type TServiceItemItems = {
    id?: string | undefined | null,
    name: string
    price: number
    per?: string | null
}

export type TService = {
    id: string
    name: string
    descriptionShort: string
    description: string
    image: string
    iconName: string
    advantages: string[]
    indications: string[]
    contraindications: string[]
    list: {
        title: string | null,
        items: TServiceItemItems[]
    }[]
}
