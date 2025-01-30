import React from "react";
import styles from "./List.module.css"
import Icon from "../Icon";

const List = ({ separators = false, className = "", children }: { separators?: boolean, className?: string, children: React.ReactNode }) => {
    return <ul className={`${styles.list} ${separators ? styles.list__separators : ""} ${className}`}>{children}</ul>
}

const ListItem = ({ className = "", children }: { className?: string, children: React.ReactNode }) => {
    return <li className={`${styles.item} ${className}`}><Icon className={styles.item__icon} name="multi_arrow_right_in_circle" width={21} height={21} /> {children}</li>
}

List.Item = ListItem

export default List;
