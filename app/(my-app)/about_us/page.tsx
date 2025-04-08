import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import styles from "./page.module.css"
import Staff from "@/components/Staff";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { loadAboutUs } from "@/lib/loadData";
import RichText from "@/components/RichTextViewer";

export const metadata: Metadata = {
    title: `О нас | Медицинский центр «Нейропрофи»`,
}

export const dynamic = "force-dynamic"
export const revalidate = 120

const UnderHeader = () => {
    return (
        <>
            <BreadCrumb items={[
                { name: "НейроПрофи", path: "/" },
                { name: "О центре", path: "/about_us" }
            ]} />
            <PageTitle>О нашем центре</PageTitle>
        </>
    )
}

export default async function Page() {
    const aboutUs = await loadAboutUs()

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.section}>
                <RichText data={aboutUs.content} />
            </Section>
            <Staff />
        </PageLayout>
    )
}
