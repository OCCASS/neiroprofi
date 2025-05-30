import Section from "@/components/Section";
import styles from "./Reviews.module.css"
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Review } from "../../../../payload-types";

const Reviews = async ({ reviews }: { reviews: Review[] }) => {
    return (
        <Section className={styles.reviews}>
            <div className={styles.reviews__header}>
                <div className={styles.reviews__headerDescription}></div>
                <h2 className={styles.reviews__headerTitle}>Что о нас говорят пациенты</h2>
            </div>
            <div className={styles.reviews__content}>
                <Section className={styles.reviews__list}>
                    {reviews.map((item) => <ReviewCard key={item.id} review={item} className={styles.list__item} />)}
                </Section>
                <Link href={encodeURI(`https://wa.me/79872966667?text=Здравсвтуйте, хочу написать отзыв.`)} target="_blank" rel="norepeer,noreferer" className={styles.reviews__add_button}>
                    <div className={styles.reviews__add_buttonContent}>
                        <Icon name="plus" width={32} height={31} style={{ color: "white" }} />
                        <span>Добавить<br />отзыв</span>
                    </div>
                </Link>
                <div className={styles.reviews__rating}>
                    <Link className={styles.rating__link} href="https://prodoctorov.ru/kazan/lpu/47372-nyayroprofi/" target="_blank">
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
