import UnderHeader from "@/components/UnderHeader/UnderHeader";
import styles from "./page.module.css"
import DoctorCard from "@/components/DoctorCard";
import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
import { TDoctor } from "@/types/doctor";
import Section from "@/components/Section";
import { get } from "@/lib/fetch";

export const revalidate = 120;

export default async function Page() {
    const doctors = await get<TDoctor[]>("/api/doctors")

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Персонал", path: "/doctors" }
                ]} />
                <PageTitle>Наш персонал</PageTitle>
            </UnderHeader>
            <Section className={styles.doctors__list}>
                {
                    doctors.map(item => <DoctorCard key={item.id} data={item} />)
                }
            </Section>
        </>
    )
}
