import styles from "./ServiceCard.module.css"
import Link from "next/link";
import Icon from "@/components/Icon";
import { TService } from "@/types/service";
import { numberWithSpaces } from "@/utils/number_with_spaces";

const ServiceCard = ({ service }: { service: TService }) => {
    const minPrice = service.list.reduce((min, obj) => {
        return obj.items[0].price < min ? obj.items[0].price : min;
    }, Infinity)

    return (
        <article className={styles.service_card}>
            <div className={styles.service_card__top}>
                <Icon className={styles.service_card__icon} name={service.iconName} width={57} height={57} />
                <p className={styles.service_card__name}><Link className={styles.service_card__link} href={`/services/${service.id}`}>{service.name}</Link></p>
            </div>
            <div className={styles.service_card__bottom}>
                <p className={styles.service_card__price}>от {numberWithSpaces(minPrice)}₽</p>
                <Link className={styles.service_card__button} href={`/services/${service.id}`}>К услуге</Link>
            </div>
        </article>
    )
}

export default ServiceCard;
