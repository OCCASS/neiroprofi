import ReviewsGrid from "./components/ReviewsGrid";
import Section from "@/components/Section";
import styles from "./page.module.css"
import FilterBar from "./components/FilterBar";
import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import ReviewCard from "@/components/ReviewCard";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { loadReivews } from "@/lib/loadData";

export const metadata: Metadata = {
    title: `Отзывы о нашем центре | Медицинский центр «Нейропрофи»`,
}

const UnderHeader = () => {
    return (
        <>
            <BreadCrumb items={[
                { name: "НейроПрофи", path: "/" },
                { name: "Отзывы", path: "/reviews" }
            ]} />
            <PageTitle>Отзывы о нашем центре</PageTitle>
        </>
    )
}

export default async function Page({ searchParams: sParams }: { searchParams: Promise<{ key: string }> }) {
    const searchParams = await sParams
    const reviews = await loadReivews()

    const filterReviews = () => {
        if (searchParams?.key === "") return reviews.docs
        else if (searchParams?.key === "site") return reviews.docs.filter(item => !item.proDoctorov)
        else if (searchParams?.key === "prodoctorov") return reviews.docs.filter(item => item.proDoctorov)
        return reviews.docs
    }

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section><FilterBar /></Section>
            <Section className={styles.section}>
                <ReviewsGrid>
                    {filterReviews().map((item) => <ReviewCard key={item.id} review={item} />)}
                </ReviewsGrid>
            </Section>
        </PageLayout>
    )
}
