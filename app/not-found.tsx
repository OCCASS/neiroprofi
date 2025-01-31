import BreadCrumb from "@/components/BreadCrumb";
import LargeP from "@/components/LargeP";
import PageTitle from "@/components/PageTitle";
import UnderHeader from "@/components/UnderHeader/UnderHeader";
import Link from "next/link";
import styles from "./not-found.module.css"

export default function Custom404() {

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Страница не найдена", path: "" }
                ]} />
                <PageTitle>Страница не найдена</PageTitle>
            </UnderHeader>
            <LargeP className={styles.text}>Страница не найдена. Проверьте путь в строке браузера</LargeP>
            <div className={styles.back_button_inner}>
                <Link href="/" className={styles.back_button}>Вернуться на главную</Link>
            </div>
        </>
    )
}
