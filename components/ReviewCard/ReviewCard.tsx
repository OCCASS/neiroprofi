import Icon from "@/components/Icon";
import styles from "./ReviewCard.module.css"
import Rating from "@/components/Rating";
import LargeP from "@/components/LargeP";
import Link from "next/link";
import { Review } from "../../payload-types";

const ReviewCard = ({ review, className = "" }: { review: Review, className?: string }) => {
    return (
        <section className={`${styles.item} ${className}`}>
            <div>
                <div className={styles.header__from}>
                    {
                        review.proDoctorov ?
                            <Icon name="pro_doctorov" width={134} height={20} /> :
                            <span className={styles.from__site}>Отзыв на сайте</span>
                    }
                </div>
                <div className={styles.header__profile}>
                    <div className={styles.profile__avatar}>
                        <Icon name="profile" width={50} height={50} className={styles.avatar__icon} />
                    </div>
                    <div className={styles.profile__right}>
                        <LargeP className={styles.profile__name}>{review.from}</LargeP>
                        <div className={styles.profile__rating}>
                            <Rating value={review.rating} itemClassName={styles.rating__star} />
                            <p className={styles.rating__value}>{review.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <p className={styles.content}>{review.content}</p>
            </div>
            {review.proDoctorov && review.link && <Link href={review.link} className={styles.link} target="_blank" rel="norepeer,noreferer">Читать на «ПроДокторов»</Link>}
        </section>
    )
}

export default ReviewCard;
