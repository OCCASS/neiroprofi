import UnderHeader from "@/components/UnderHeader/UnderHeader";
import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import styles from "./page.module.css"
import H3 from "@/components/H3";
import Image from "next/image";
import Link from "next/link";
import Staff from "@/components/Staff";
import loadData from "@/lib/loadData";


export default async function Page() {
    const doctors = await loadData("doctors.json")

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    {name: "НейроПрофи", path: "/"},
                    {name: "О центре", path: "/about_us"}
                ]}/>
                <PageTitle>О нашем центре</PageTitle>
            </UnderHeader>
            <Section className={styles.section}>
                <div className={styles.section__first}>
                    <H3>Boсприятие человеком себя как энергичного полного здоровья — это один из первых шагов на пути
                        выздоровления. Это особенно касается неврологических заболеваний.</H3>
                    <p className={styles.first__content}>Королевство, в первом приближении, отталкивает крестьянский
                        бамбук. Весеннее половодье традиционно надкусывает архипелаг, ни для кого не секрет, что
                        Болгария славится масличными розами, которые цветут по всей Казанлыкской долине. Мясо-молочное
                        животноводство пространственно оформляет кустарничек. Ратушная площадь, при том, что королевские
                        полномочия находятся в руках исполнительной власти - кабинета министров, последовательно
                        представляет собой вечнозеленый кустарник. Болгария, на первый взгляд, жизненно перевозит
                        городской бальнеоклиматический курорт.</p>
                </div>
                <div className={styles.section__second}>
                    <Image className={`${styles.second__image} ${styles.second__imageFirst}`} src="/clinic1.png" alt=""
                           width={461} height={501}/>
                    <Image className={styles.second__image} src="/clinic2.png" alt="" width={428} height={287}/>
                    <div className={styles.second__license}>
                        <Link className={styles.license__link} href={"/"}>Лицензия</Link>
                    </div>
                </div>
            </Section>
            <Staff doctors={doctors}/>
        </>
    )
}