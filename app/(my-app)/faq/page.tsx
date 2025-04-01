import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import styles from "./page.module.css"
import Section from "@/components/Section";
import { ListItem } from "./components";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { loadFaq } from "@/lib/loadData";

export const metadata: Metadata = {
    title: `Часто задаваемые вопросы | Медицинский центр «Нейропрофи»`,
}

const UnderHeader = () => {
    return (
        <>
            <BreadCrumb items={[
                { name: "НейроПрофи", path: "/" },
                { name: "Частые вопросы", path: "/faq" }
            ]} />
            <PageTitle>Вопросы и ответы</PageTitle>
        </>
    )
}

export default async function Page() {
    const faqs = await loadFaq()

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.content}>
                <div>
                    <ul className={styles.list}>
                        {
                            faqs.docs.map(
                                (item) => <ListItem key={item.id} title={item.title} content={item.content} />
                            )
                        }
                    </ul>
                </div>
                <div></div>
            </Section>
        </PageLayout>
    )
}
