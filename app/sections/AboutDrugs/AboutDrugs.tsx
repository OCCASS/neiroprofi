import Section from "@/components/Section";
import styles from "./AboutDrugs.module.css"
import SmallP from "@/components/SmallP";
import Link from "next/link";

const AboutDrugs = () => {
    return (
        <Section className={styles.about_drugs}>
            <SmallP>Ведущее направление Казанской клиники Нейропрофи – это  интегративный подход к терапии неврологических заболеваний.</SmallP>
            <h3 className={styles.about_drugs__title}>Специфика нашего подхода заключается в глубоком погружении в проблему наших пациентов с поиском причин, повлекших за собой развитие заболеваний.</h3>
            <div className={styles.about_drugs__license}>
                <Link className={styles.license__button} href="">Лицензия</Link>
            </div>
        </Section>
    )
}

export default AboutDrugs;
