import React from "react"
import styles from "./SmallP.module.css"

const SmallP = ({className="", children}: {className?: string, children: React.ReactNode}) => {
    return <p className={`${styles.small_p} ${className}`}>{children}</p>
}

export default SmallP