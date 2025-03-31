import { loadSerivces } from "@/lib/loadData";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json(await loadSerivces())
}
