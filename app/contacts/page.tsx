import UnderHeader from "@/components/UnderHeader/UnderHeader";
import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
import Section from "@/components/Section";
import SubSection from "@/components/SubSection";
import LargeP from "@/components/LargeP";
import styles from "./page.module.css"
import Icon from "@/components/Icon";
import Link from "next/link";

export const revalidate = 120;

export default function Page() {
    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Контакты", path: "/contacts" }
                ]} />
                <PageTitle>Контакты нашего центра</PageTitle>
            </UnderHeader>
            <Section className={styles.info}>
                <SubSection>
                    <LargeP className={styles.info__title}>Вместе к здоровью: надежные руки и сердечное
                        внимание</LargeP>
                    <ul className={styles.info__list}>
                        <li className={styles.info__item}>
                            <span className={styles.info__name}>
                                <Icon name="multi_arrow_right_in_circle" width={21} height={21} />
                                Адрес
                            </span>
                            <span>Казань, улица Космонавтов 6А</span>
                        </li>
                        <li className={styles.info__item}>
                            <span className={styles.info__name}>
                                <Icon name="multi_arrow_right_in_circle" width={21} height={21} />
                                Телефон
                            </span>
                            <span>
                                <Link className={styles.info__phone} href="tel:88432966667">
                                    8 (843) 296-66-67
                                </Link>
                            </span>
                        </li>
                        <li className={styles.info__item}>
                            <span className={styles.info__name}>
                                <Icon name="multi_arrow_right_in_circle" width={21} height={21} />
                                Email
                            </span>
                            <span><Link className={styles.info__email} href="mailto:neiroprofi@mail.ru">neiroprofi@mail.ru</Link></span>
                        </li>
                    </ul>
                    <ul className={styles.info__social_list}>
                        <li>
                            <Link href="" className={styles.info__social_listLink}>
                                <Icon name="instagram" width={24} height={25} />
                            </Link>
                        </li>
                        <li>
                            <Link href="" className={styles.info__social_listLink}>
                                <Icon name="vk" width={24} height={25} />
                            </Link>
                        </li>
                        <li>
                            <Link href="" className={styles.info__social_listLink}>
                                <Icon name="youtube" width={24} height={25} />
                            </Link>
                        </li>
                    </ul>
                </SubSection>
                <div className={styles.info__map}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd53663c863fe392dea6bdda4cd1eb6ab54b555101378a3078cb0ad8e4976f3d&amp;source=constructor"
                        width="100%" height="100%" frameBorder="0"></iframe>
                </div>
            </Section>
        </>
    )
}
