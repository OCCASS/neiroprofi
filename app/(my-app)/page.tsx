import Welcome from "./sections/Welcome";
import AboutDrugs from "./sections/AboutDrugs";
import AboutDoctors from "@/app/sections/AboutDoctors";
import Services from "@/app/sections/Services";
import Staff from "@/components/Staff";
import Reviews from "@/app/sections/Reviews";
import PageLayout from "@/components/PageLayout";
import { loadDoctors, loadReivews, loadSerivces } from "@/lib/loadData";

export default async function Home() {
    const [doctors, services, reviews] = await Promise.all([loadDoctors(), loadSerivces(), loadReivews()])

    return (
        <PageLayout UnderHeaderComponent={Welcome}>
            <AboutDrugs />
            <AboutDoctors doctors={doctors.docs} />
            <Services services={services.docs} />
            <Staff doctors={doctors.docs} />
            <Reviews reviews={reviews.docs} />
        </PageLayout>
    )
}
