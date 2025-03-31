import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import styles from "./page.module.css"
import Section from "@/components/Section";
import { ListItem } from "./components";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { loadFaq } from "@/lib/loadData";
import type { TFaq } from "@/types/faq";

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
    const faqs: TFaq[] = await loadFaq()

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.content}>
                <div>
                    <ul className={styles.list}>
                        {
                            faqs.map(
                                (item, index) => <ListItem key={index} title={item.title} content={item.content} />
                            )
                        }
                    </ul>
                </div>
                <div></div>
            </Section>
        </PageLayout>
    )
}
