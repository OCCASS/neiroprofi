import styles from "./DoctorCard.module.css"
import Image from "next/image";
import LargeP from "@/components/LargeP";
import SmallP from "@/components/SmallP";
import Icon from "@/components/Icon";
import Link from "next/link";
import { Doctor, Media } from "../../payload-types";

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
    let doctorPositionName = "Врач"
    if (doctor.position === "admin") doctorPositionName = "Администратор"

    return (
        <article className={styles.doctor_card}>
            <Image
                src={(doctor.image as Media).thumbnailURL ?? ""}
                alt={(doctor.image as Media).alt}
                width={270}
                height={300}
                className={styles.doctor_card__image}
            />
            <div className={styles.doctor_card__right}>
                <LargeP className={styles.doctor_card__name}>
                    <Link className={styles.doctor_card__link} href={`/doctors/${doctor.id}`}>{doctor.fullName}</Link>
                </LargeP>
                <SmallP className={`${styles.doctor_card__position} ${doctor.position === "admin" ? styles.doctor_card__positionPrimary : ""}`}>{doctorPositionName}</SmallP>
                <div className={styles.doctor_card__section}>
                    <SmallP className={styles.section__title}>
                        <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} />
                        Специальность
                    </SmallP>
                    <ul className={styles.section__list}>{doctor.specialitiesShort.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
                </div>
                {
                    doctor.education &&
                    <div className={styles.doctor_card__section} style={{ borderTop: "1px solid #D3D9E8", paddingTop: "15px" }}>
                        <SmallP className={styles.section__title}>
                            <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} />
                            Образование
                        </SmallP>
                        <p className={styles.section__text}>{doctor.education}</p>
                    </div>
                }
                <div className={styles.section__buttonWrapper}>
                    <Link href={`/doctors/${doctor.id}`} type="button" className={styles.section__button}>Подробнее</Link>
                </div>
            </div>
        </article>
    )
}

export default DoctorCard;
