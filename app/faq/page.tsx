import UnderHeader from "@/components/UnderHeader/UnderHeader";
import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import styles from "./page.module.css"
import Section from "@/components/Section";
import { ListItem } from "./components";
import { get } from "@/lib/fetch";
import { Metadata } from "next";

type TFaq = {
    title: string
    content: string
}

export const revalidate = 120;

export const metadata: Metadata = {
    title: `Часто задаваемые вопросы | Медицинский центр «Нейропрофи»`,
}

export default async function Page() {
    const faqs = await get<TFaq[]>("/api/faq")

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Частые вопросы", path: "/faq" }
                ]} />
                <PageTitle>Вопросы и ответы</PageTitle>
            </UnderHeader>
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
        </>
    )
}
