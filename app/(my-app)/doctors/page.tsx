import styles from "./page.module.css"
import DoctorCard from "@/components/DoctorCard";
import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
import Section from "@/components/Section";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { loadDoctors } from "@/lib/loadData";

export const metadata: Metadata = {
    title: `Наш персонал | Медицинский центр «Нейропрофи»`,
}
export const dynamic = "force-static"

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
    const doctors = await loadDoctors()

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.doctors__list}>
                {
                    doctors.docs.map(item => <DoctorCard key={item.id} doctor={item} />)
                }
            </Section>
        </PageLayout>
    )
}
