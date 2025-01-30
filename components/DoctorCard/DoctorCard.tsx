import styles from "./DoctorCard.module.css"
import Image from "next/image";
import LargeP from "@/components/LargeP";
import SmallP from "@/components/SmallP";
import Icon from "@/components/Icon";
import { TDoctor } from "@/types/doctor";
import Link from "next/link";

const DoctorCard = ({ data }: { data: TDoctor }) => {
    return (
        <article className={styles.doctor_card}>
            <Image src={data.image} alt={data.fullName} width={270} height={300} className={styles.doctor_card__image} />
            <div className={styles.doctor_card__right}>
                <LargeP className={styles.doctor_card__name}>
                    <Link className={styles.doctor_card__link} href={`/doctors/${data.id}`}>{data.fullName}</Link>
                </LargeP>
                <SmallP className={`${styles.doctor_card__position} ${data.position.primary ? styles.doctor_card__positionPrimary : ""}`}>{data.position.name}</SmallP>
                <div className={styles.doctor_card__section} style={{ borderBottom: "1px solid #D3D9E8", paddingBottom: "15px" }}>
                    <SmallP className={styles.section__title}>
                        <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} />
                        Специальность
                    </SmallP>
                    <ul className={styles.section__list}>{data.specialities.short.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
                <div className={styles.doctor_card__section}>
                    <SmallP className={styles.section__title}>
                        <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} />
                        Образование
                    </SmallP>
                    <p className={styles.section__text}>{data.education}</p>
                </div>
                <div className={styles.section__buttonWrapper}>
                    <Link href={`/doctors/${data.id}`} type="button" className={styles.section__button}>Подробнее</Link>
                </div>
            </div>
        </article>
    )
}

export default DoctorCard;
