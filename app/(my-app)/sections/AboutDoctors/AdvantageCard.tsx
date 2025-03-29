import React from "react"
import SmallP from "@/components/SmallP";
import styles from "./AdvantageCard.module.css"
import LargeP from "@/components/LargeP";

const AdvantageCard = ({title, content, icon}: {title: string, content: string, icon: React.ReactNode}) => {
    return (
        <article className={styles.advantage_card}>
            {icon}
            <LargeP className={styles.advantage_card__title}>{title}</LargeP>
            <SmallP className={styles.advantage_card__content}>{content}</SmallP>
        </article>
    )
}

export default AdvantageCard;