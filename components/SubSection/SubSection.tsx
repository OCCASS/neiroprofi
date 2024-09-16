import React from "react";
import styles from "./SubSection.module.css"

const SubSection = ({className="", children}: { className?: string, children: React.ReactNode }) => {
    return <div className={`${styles.sub_section} ${className}`}>{children}</div>
}

export default SubSection;
