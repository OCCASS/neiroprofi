import { TDoctor } from "@/types/doctor";
import { TService } from "@/types/service";
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

export async function loadSerivces(): Promise<TService[]> {
    return loadData("services.json")
}
