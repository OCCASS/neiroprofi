import Image from "next/image"
import styles from "./StafCard.module.css"
import {TDoctor} from "@/types/doctor";
import Link from "next/link";

const StaffCard = ({doctor}: { doctor: TDoctor }) => {
    return (
        <article className={styles.staff_card}>
            <div className={styles.staff_card__top}>
                <Image className={styles.staff_card__image} src={doctor.image} alt={doctor.fullName} width={137}
                       height={154}/>
                <span className={`${styles.staff_card__position} ${doctor.position.primary ? styles.staff_card__positionPrimary : ""}`}>{doctor.position.name}</span>
                <ul className={styles.staff_card__specialities}>
                    {doctor.specialities.short.map((item) => (<li key={item}>{item}</li>))}
                </ul>
            </div>
            <Link href={`/doctors/${doctor.id}`} className={styles.staff_card__link}>{doctor.fullName}</Link>
        </article>
    )
}

export default StaffCard