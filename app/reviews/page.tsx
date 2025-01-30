import ReviewsGrid from "./components/ReviewsGrid";
import { TReview } from "@/types/review";
import Section from "@/components/Section";
import styles from "./page.module.css"
import FilterBar from "./components/FilterBar";
import UnderHeader from "@/components/UnderHeader/UnderHeader";
import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import ReviewCard from "@/components/ReviewCard";
import { get } from "@/lib/fetch";

export const revalidate = 120;

export default async function Page({ searchParams }: { searchParams: { key: string } }) {
    const reviews = await get<TReview[]>(`/api/reviews`)

    const filterReviews = () => {
        if (searchParams?.key === "") return reviews
        else if (searchParams?.key === "site") return reviews.filter(item => !item.proDoctorov)
        else if (searchParams?.key === "prodoctorov") return reviews.filter(item => item.proDoctorov)
        return reviews
    }

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Отзывы", path: "/reviews" }
                ]} />
                <PageTitle>Отзывы о нашем центре</PageTitle>
            </UnderHeader>
            <Section><FilterBar /></Section>
            <Section className={styles.section}>
                <ReviewsGrid>
                    {filterReviews().map((item, index) => <ReviewCard key={index} review={item} />)}
                </ReviewsGrid>
            </Section>
        </>
    )
}
