import styles from "./page.module.css"
import DoctorCard from "@/components/DoctorCard";
import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
import { TDoctor } from "@/types/doctor";
import Section from "@/components/Section";
import { get } from "@/lib/fetch";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const revalidate = 120;

export const metadata: Metadata = {
    title: `Наш персонал | Медицинский центр «Нейропрофи»`,
}

const UnderHeader = () => {
    return (
        <>
            <BreadCrumb items={[
                { name: "НейроПрофи", path: "/" },
                { name: "Персонал", path: "/doctors" }
            ]} />
            <PageTitle>Наш персонал</PageTitle>
        </>
    )
}

export default async function Page() {
    const { data: doctors } = await get<TDoctor[]>("/api/doctors")

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.doctors__list}>
                {
                    doctors.map(item => <DoctorCard key={item.id} data={item} />)
                }
            </Section>
        </PageLayout>
    )
}
