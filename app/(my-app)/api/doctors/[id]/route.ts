import loadData, { loadDoctors } from "@/lib/loadData";
import { TDoctor } from "@/types/doctor";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const data: TDoctor[] = await loadDoctors()
    const item = data.filter(i => i.id === id)[0]
    if (item) return NextResponse.json(item)
    else return NextResponse.json({ detail: "Not found." }, { status: 404 })
}
