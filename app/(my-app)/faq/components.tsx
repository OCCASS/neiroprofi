"use client"

import { useState } from "react"
import styles from "./page.module.css"
import SmallP from "@/components/SmallP"
import Icon from "@/components/Icon"
import LargeP from "@/components/LargeP"

export const ListItem = ({ title, content }: { title: string, content: string }) => {
    const [open, setOpen] = useState(false)

    return (
        <li className={styles.item}>
            <div className={`${styles.item__header} ${open ? styles.item__headerOpen : ""}`}>
                <LargeP className={styles.item__title}>{title}</LargeP>
                <button className={styles.item__button} onClick={() => setOpen(prev => !prev)}>
                    {
                        open ?
                            <Icon name="minus" width={32} height={31} className={styles.item__icon} />
                            :
                            <Icon name="plus" width={32} height={31} className={styles.item__icon} />
                    }
                </button>
            </div>
            <SmallP className={`${styles.item__content} ${open ? styles.item__contentOpen : ""}`}>{content}</SmallP>
        </li>
    )
}
