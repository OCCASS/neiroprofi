import styles from "./ServiceCard.module.css"
import Link from "next/link";
import Icon from "@/components/Icon";

const ServiceCard = ({name, price, icon}: {name: string, price: number, icon: any}) => {
    return (
        <article className={styles.service_card}>
            <div className={styles.service_card__top}>
                <Icon className={styles.service_card__icon} name={icon.name} width={icon.size.width} height={icon.size.height} />
                <p className={styles.service_card__name}>{name}</p>
            </div>
            <div className={styles.service_card__bottom}>
                <p className={styles.service_card__price}>от {price}</p>
                <Link className={styles.service_card__button} href="">К услуге</Link>
            </div>
        </article>
    )
}

export default ServiceCard;