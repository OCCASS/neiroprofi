import React from "react"
import styles from "./LargeP.module.css"

const LargeP = ({ className = "", children }: { className?: string, children: React.ReactNode }) => {
    return <p className={`${styles.large_p} ${className}`}>{children}</p>
}

export default LargeP
