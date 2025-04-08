import Image from "next/image"
import styles from "./StafCard.module.css"
import Link from "next/link";
import { Doctor, Media } from "../../payload-types";

const StaffCard = ({ doctor }: { doctor: Doctor }) => {
    const doctorPositionName = (() => {
        switch (doctor.position) {
            case "doctor": return "Врач"
            case "admin": return "Администратор"
            case "nurse": return "Медсестра"
            case "paramedic-laboratory-assistant": return "Фельдшер-лаборант"
            default: return "Врач"
        }
    })()

    return (
        <article className={styles.staff_card}>
            <div className={styles.staff_card__top}>
                <Link href={`/doctors/${doctor.slug}`} className={styles.staff_card__imageLink}>
                    <Image
                        className={styles.staff_card__image}
                        src={(doctor.image as Media).thumbnailURL ?? ""}
                        alt={doctor.fullName}
                        width={137}
                        height={154}
                    />
                </Link>
                <span className={`${styles.staff_card__position} ${doctor.position === "admin" ? styles.staff_card__positionPrimary : ""}`}>{doctorPositionName}</span>
                <div className={styles.staff_card__specialitiesWrapper}>
                    <ul className={styles.staff_card__specialities}>
                        {doctor.specialitiesShort?.map((item) => (<li key={item.id}>{item.name}</li>))}
                    </ul>
                </div>
            </div>
            <Link href={`/doctors/${doctor.slug}`} className={styles.staff_card__link}>{doctor.fullName}</Link>
        </article>
    )
}

export default StaffCard
