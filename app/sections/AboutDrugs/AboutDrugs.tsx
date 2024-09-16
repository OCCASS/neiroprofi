import Section from "@/components/Section";
import styles from "./AboutDrugs.module.css"
import SmallP from "@/components/SmallP";
import Link from "next/link";

const AboutDrugs = () => {
    return (
        <Section className={styles.about_drugs}>
            <SmallP>Для лечения используются современные препараты, которые прошли необходимые исследования и тестирования. Они не только лечат болезнь, но и являются абсолютно безопасными для здоровья.</SmallP>
            <h3 className={styles.about_drugs__title}>Boсприятие человеком себя как энергичного полного здоровья — это один из первых шагов на пути выздоровления. Это особенно касается неврологических заболеваний.</h3>
            <div className={styles.about_drugs__license}>
                <Link className={styles.license__button} href="">Лицензия</Link>
            </div>
        </Section>
    )
}

export default AboutDrugs;
