import styles from "./FieldCard.module.css"
import Link from "next/link";
import Icon from "@/components/Icon";

const FieldCard = ({name, icon}: {name: string, icon: any}) => {
    return (
        <article className={styles.field_card}>
            <Icon name={icon.name} width={icon.size.width} height={icon.size.height} />
            <Link href="" className={styles.field_card__link}>
                {name}
                <Icon name="arrow_up_right" width={25} height={25} />
            </Link>
        </article>
    )
}

export default FieldCard;