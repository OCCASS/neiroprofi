import Section from "@/components/Section";
import styles from "./Reviews.module.css"
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import Icon from "@/components/Icon";
import { TReview } from "@/types/review";
import { get } from "@/lib/fetch";

const Reviews = async () => {
    const reviews = await get<TReview[]>("/api/reviews")

    return (
        <Section className={styles.reviews}>
            <div className={styles.reviews__header}>
                <div className={styles.reviews__headerDescription}></div>
                <h2 className={styles.reviews__headerTitle}>Что о нас говорят клиенты</h2>
            </div>
            <div className={styles.reviews__content}>
                <Section className={styles.reviews__list}>
                    {reviews.map((item, index) => <ReviewCard key={index} review={item} className={styles.list__item} />)}
                </Section>
                <Link href="https://t.me/OCCASS" target="_blank" rel="norepeer,noreferer" className={styles.reviews__add_button}>
                    <div className={styles.reviews__add_buttonContent}>
                        <Icon name="plus" width={32} height={31} style={{ color: "white" }} />
                        <span>Добавить<br />отзыв</span>
                    </div>
                </Link>
                <div className={styles.reviews__rating}>
                    <Link className={styles.rating__link} href="https://prodoctorov.ru/" target="_blank">
                        <Icon className={styles.rating__link__icon} name="arrow_up_right" width={25} height={25} />
                    </Link>
                    <Icon className={styles.rating__icon} name="pro_doctorov" width={134} height={20} />
                    <ul className={styles.rating__list}>
                        <li><Icon name="star" width={16} height={15} /></li>
                        <li><Icon name="star" width={16} height={15} /></li>
                        <li><Icon name="star" width={16} height={15} /></li>
                        <li><Icon name="star" width={16} height={15} /></li>
                        <li><Icon name="empty_star" width={16} height={15} /></li>
                    </ul>
                    <p className={styles.rating__reviews}>71 отзыв</p>
                </div>
            </div>
        </Section>
    )
}

export default Reviews
