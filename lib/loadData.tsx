import type { TDoctor } from "@/types/doctor";
import type { TReview } from "@/types/review";
import type { TService } from "@/types/service";
import type { TFaq } from "@/types/faq";
import fsPromises from "fs/promises"
import path from "path"

export default async function loadData(file: string) {
    const filePath = path.join(process.cwd(), `data/${file}`);
    const jsonData = await fsPromises.readFile(filePath, "utf-8")
    return JSON.parse(jsonData);
}

export async function loadDoctors(): Promise<TDoctor[]> {
    return loadData("doctors.json")
}

export async function loadDoctor(id: string): Promise<TDoctor | null> {
    const doctors = await loadDoctors()
    const doctor = doctors.find(item => item.id === id)
    if (!doctor) return null
    return doctor
}

export async function loadSerivces(): Promise<TService[]> {
    return loadData("services.json")
}

export async function loadSerivce(id: string): Promise<TService | null> {
    const services = await loadSerivces()
    const service = services.find(item => item.id === id)
    if (!service) return null
    return service
}

export async function loadReivews(): Promise<TReview[]> {
    return loadData("reviews.json")
}

export async function loadFaq(): Promise<TFaq[]> {
    return loadData("faq.json")
}
