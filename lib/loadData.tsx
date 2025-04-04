import fsPromises from "fs/promises"
import path from "path"
import { getPayload, PaginatedDocs } from "payload";
import config from "@payload-config"
import { Doctor, Faq, Review, Service } from "../payload-types";

export default async function loadData(file: string) {
    const filePath = path.join(process.cwd(), `data/${file}`);
    const jsonData = await fsPromises.readFile(filePath, "utf-8")
    return JSON.parse(jsonData);
}

export async function loadDoctors(): Promise<PaginatedDocs<Doctor>> {
    const payload = await getPayload({ config })
    return await payload.find({ collection: "doctors", pagination: false })
}

export async function loadDoctor(id: string): Promise<Doctor | null> {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ id, collection: "doctors" })
    } catch {
        return null
    }
}

export async function loadSerivces(): Promise<PaginatedDocs<Service>> {
    const payload = await getPayload({ config })
    return await payload.find({ collection: "services", pagination: false })
}

export async function loadSerivce(id: string): Promise<Service | null> {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ id, collection: "services", })
    } catch {
        return null
    }
}

export async function loadReivews(): Promise<PaginatedDocs<Review>> {
    const payload = await getPayload({ config })
    return await payload.find({ collection: "reviews", pagination: false })
}

export async function loadFaq(): Promise<PaginatedDocs<Faq>> {
    const payload = await getPayload({ config })
    return await payload.find({ collection: "faqs", pagination: false })
}
