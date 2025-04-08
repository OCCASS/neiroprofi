import fsPromises from "fs/promises"
import path from "path"
import { getPayload, PaginatedDocs } from "payload";
import config from "@payload-config"
import { AboutUs, Doctor, Faq, Review, Service } from "../payload-types";

export default async function loadData(file: string) {
    const filePath = path.join(process.cwd(), `data/${file}`);
    const jsonData = await fsPromises.readFile(filePath, "utf-8")
    return JSON.parse(jsonData);
}

export async function loadDoctors(): Promise<PaginatedDocs<Doctor>> {
    const payload = await getPayload({ config })
    return await payload.find({ collection: "doctors", pagination: false })
}

export async function loadDoctor(slug: string): Promise<Doctor | null> {
    try {
        const payload = await getPayload({ config })
        const doctors = await payload.find({ collection: "doctors", where: { slug: { equals: slug } } })
        if (doctors.docs.length > 0) return doctors.docs[0]
        else return null
    } catch {
        return null
    }
}

export async function loadSerivces(): Promise<PaginatedDocs<Service>> {
    const payload = await getPayload({ config })
    return await payload.find({ collection: "services", pagination: false })
}

export async function loadSerivce(slug: string): Promise<Service | null> {
    try {
        const payload = await getPayload({ config })
        const services = await payload.find({ collection: "services", where: { slug: { equals: slug } } })
        if (services.docs.length > 0) return services.docs[0]
        else return null
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

export async function loadAboutUs(): Promise<AboutUs> {
    const payload = await getPayload({ config })
    return await payload.findGlobal({ slug: "about_us" })
}
