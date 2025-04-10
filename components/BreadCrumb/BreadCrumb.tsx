import styles from "./BreadCrumb.module.css"
import Link from "next/link";


type BreadCrumbItem = {
    name: string
    path: string
}

type BreadCrumbProps = {
    items: BreadCrumbItem[]
}

const BreadCrumbSkeleton = () => {
    return (
        <ul className={styles.bread_crumb}>
            {
                [1, 2, 3].map(
                    item =>
                        <li key={item} className={styles.bread_crumb__item_skeleton}></li>
                )
            }
        </ul>
    )
}

const BreadCrumb = ({ items }: BreadCrumbProps) => {
    return (
        <ul className={styles.bread_crumb}>
            {
                items.map(
                    item =>
                        <li key={item.path} className={styles.bread_crumb__item}>
                            <Link href={item.path} className={styles.bread_crumb__link}>{item.name}</Link>
                        </li>
                )
            }
        </ul>
    )
}

BreadCrumb.Skeleton = BreadCrumbSkeleton

export default BreadCrumb;
