export async function get<T>(path: string, rest: any = {}) {
    const response = await fetch(process.env.ROOT_URL + path, { method: "GET", headers: { "Content-Type": "application/json", ...rest } })
    const data: T = await response.json().catch(() => { }) as T
    return { data, status: response.status }
}
