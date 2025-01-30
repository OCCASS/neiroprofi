import Icon from "../Icon";
import styles from "./Rating.module.css"

const Rating = ({ value, className = "", itemClassName = "" }: { value: number, className?: string, itemClassName?: string }) => {
    return (
        <div className={`${styles.rating} ${className}`}>
            {Array.from({ length: 5 }, (_, index) => index + 1 <= value ? <Icon key={index} name="star" width={16} height={15} className={itemClassName} /> : <Icon key={index} name="empty_star" width={16} height={15} className={itemClassName} />)}
        </div>
    )
}

export default Rating;
