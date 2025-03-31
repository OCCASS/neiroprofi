import BreadCrumb from "@/components/BreadCrumb";
import LargeP from "@/components/LargeP";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import styles from "./not-found.module.css"
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: `Страница не найдена`,
}

const UnderHeader = () => {
    return (
        <>
            <BreadCrumb items={[
                { name: "НейроПрофи", path: "/" },
                { name: "Страница не найдена", path: "" }
            ]} />
            <PageTitle>Страница не найдена</PageTitle>
        </>
    )
}

export default function Custom404() {
    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <LargeP className={styles.text}>Страница не найдена. Проверьте путь в строке браузера</LargeP>
            <div className={styles.back_button_inner}>
                <Link href="/" className={styles.back_button}>Вернуться на главную</Link>
            </div>
        </PageLayout>
    )
}
