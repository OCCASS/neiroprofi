"use client"

import { useQueryState } from "nuqs"
import Link from "next/link";
import styles from "./FilterBar.module.css"

const Button = ({ children, key_, setKey, keyValue }: { children: React.ReactNode, key_: string, setKey: (key: string) => void, keyValue: string }) => {
    return <button onClick={() => setKey(keyValue)} className={`${styles.filter__button} ${key_ === keyValue ? styles.filter__buttonSelected : ""}`}>{children}</button>
}

const FilterBar = () => {
    const [key, setKey] = useQueryState("key", { defaultValue: "", history: "push", shallow: false })

    return (
        <div className={styles.filter_bar}>
            <span>Показать отзывы:</span>
            <ul className={styles.filter__list}>
                <li><Button key_={key} setKey={setKey} keyValue={""}>Все сразу</Button></li>
                <li><Button key_={key} setKey={setKey} keyValue={"site"}>С сайта</Button></li>
                <li><Button key_={key} setKey={setKey} keyValue={"prodoctorov"}>С ПроДокторов</Button></li>
            </ul>
            <div className={styles.filter__footer}>
                <Link className={styles.link} href={encodeURI(`https://wa.me/79872966667?text=Здравсвтуйте, хочу оставить отзыв.`)} target="_blank" rel="norepeer,noreferer">Добавить отзыв</Link>
            </div>
        </div>
    )
}

export default FilterBar;
