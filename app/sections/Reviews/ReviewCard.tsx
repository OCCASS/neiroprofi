import styles from "./ReviewCard.module.css"
import SmallP from "@/components/SmallP";
import Icon from "@/components/Icon";

const ReviewCard = ({fullName, rating, content}: { fullName: string, rating: number, content: string }) => {
    return (
        <article className={styles.review_card}>
            <p className={styles.review_card__name}>{fullName}</p>
            <ul className={styles.review_card__rating}>
                {
                    new Array(5).fill(0).map((_, i) => i < rating ?
                        <li key={i}><Icon name="star" width={16} height={15} /></li> :
                        <li key={i}><Icon name="empty_star" width={16} height={15} /></li>
                    )
                }
            </ul>
            <SmallP>{content}</SmallP>
        </article>
    )
}

export default ReviewCard;