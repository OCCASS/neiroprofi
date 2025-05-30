import Section from "@/components/Section";
import styles from "./Staff.module.css";
import LargeP from "@/components/LargeP";
import StaffCard from "./StaffCard";
import Link from "next/link";
import { Doctor } from "../../payload-types";

const Staff = async ({ doctors }: { doctors: Doctor[] }) => {
    return (
        <Section className={styles.staff}>
            <div className={styles.staff__header}>
                <LargeP className={styles.staff__headerDescription}>С заботой и любовью к вам и вашим близким</LargeP>
                <h2 className={styles.staff__headerTitle}>Наш персонал</h2>
            </div>
            <div className={styles.staff__list}>
                {doctors.map(item => <StaffCard key={item.id} doctor={item} />)}
            </div>
            <div className={styles.staff__bottom}>
                <Link href="/doctors" className={styles.staff__button}>Перейти к странице персонала</Link>
            </div>
        </Section>
    )
}

export default Staff;
