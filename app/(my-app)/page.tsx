import Welcome from "./sections/Welcome";
import AboutDrugs from "./sections/AboutDrugs";
import AboutDoctors from "@/app/sections/AboutDoctors";
import Services from "@/app/sections/Services";
import Staff from "@/components/Staff";
import Reviews from "@/app/sections/Reviews";
import PageLayout from "@/components/PageLayout";

export const revalidate = 60;

export default async function Home() {
    return (
        <PageLayout UnderHeaderComponent={Welcome}>
            <AboutDrugs />
            <AboutDoctors />
            <Services />
            <Staff />
            <Reviews />
        </PageLayout>
    )
}
