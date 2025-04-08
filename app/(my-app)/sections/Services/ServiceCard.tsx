import styles from "./ServiceCard.module.css"
import Link from "next/link";
import Icon from "@/components/Icon";
import { numberWithSpaces } from "@/utils/number_with_spaces";
import { Service } from "../../../../payload-types";

const ServiceCard = ({ service }: { service: Service }) => {
    const minPrice = service?.services?.length ? service.services?.reduce((min, obj) => {
        return obj.items[0].price < min ? obj.items[0].price : min;
    }, Infinity) : null

    return (
        <article className={styles.service_card}>
            <div className={styles.service_card__top}>
                <Icon className={styles.service_card__icon} name={service.icon} width={57} height={57} />
                <p className={styles.service_card__name}><Link className={styles.service_card__link} href={`/services/${service.slug}`}>{service.name}</Link></p>
            </div>
            <div className={styles.service_card__bottom}>
                <p className={styles.service_card__price}>
                    {minPrice ? `от ${numberWithSpaces(minPrice)}₽` : null}
                </p>
                <Link className={styles.service_card__button} href={`/services/${service.slug}`}>К услуге</Link>
            </div>
        </article>
    )
}

export default ServiceCard;
