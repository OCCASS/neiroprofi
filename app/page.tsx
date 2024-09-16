"use server"

import Welcome from "./sections/Welcome";
import AboutDrugs from "./sections/AboutDrugs";
import AboutDoctors from "@/app/sections/AboutDoctors";
import Services from "@/app/sections/Services";
import Staff from "@/components/Staff";
import Fields from "@/app/sections/Fields";
import Reviews from "@/app/sections/Reviews";
import {TDoctor} from "@/types/doctor";
import loadData from "@/lib/loadData";

export default async function Home() {
    const data: TDoctor[] = await loadData("doctors.json")

    return (
        <>
            <Welcome/>
            <AboutDrugs/>
            <AboutDoctors/>
            <Services/>
            <Staff doctors={data}/>
            <Fields/>
            <Reviews/>
        </>
    )
}
