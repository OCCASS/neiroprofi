import Welcome from "./sections/Welcome";
import AboutDrugs from "./sections/AboutDrugs";
import AboutDoctors from "@/app/sections/AboutDoctors";
import Services from "@/app/sections/Services";
import Staff from "@/components/Staff";
/*import Fields from "@/app/sections/Fields";*/
import Reviews from "@/app/sections/Reviews";
import { TDoctor } from "@/types/doctor";
import { get } from "@/lib/fetch";
import { TService } from "@/types/service";

export const revalidate = 0;

export default async function Home() {
    const doctors = await get<TDoctor[]>("/api/doctors")
    const services = await get<TService[]>("/api/services")

    return (
        <>
            <Welcome />
            <AboutDrugs />
            <AboutDoctors doctors={doctors} />
            <Services services={services} />
            <Staff doctors={doctors} />
            {/*<Fields />*/}
            <Reviews />
        </>
    )
}
