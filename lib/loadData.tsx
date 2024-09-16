import fsPromises from "fs/promises"
import path from "path"

export default async function loadData(file: string) {
    const filePath = path.join(process.cwd(), `data/${file}`);
    const jsonData = await fsPromises.readFile(filePath)
    return JSON.parse(jsonData);
}